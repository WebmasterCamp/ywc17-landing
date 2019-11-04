<template>
  <ThemeProvider :name="currTheme">
    <a id="select-major" />
    <Majors :selected="major" route="/announcement/majors" :clickHandler="changeMajor" />
      
    <a id="announce-box"></a>
    <InfoContainer v-show="major" class="announce-box">
      <section>
        <h3>ข้อมูลสำหรับผู้ผ่านการคัดเลือก</h3>
        <p>
          ผู้ที่ผ่านการคัดเลือก ให้ยืนยันสิทธิ์โดย<b>การโอนเงิน</b> และแจ้งการยืนยันสิทธิ์ได้ถึง<b>วันศุกร์ที่ 8 พฤศจิกายน เวลา 23:59 น.</b><br />
          หากเลยกำหนดจะทำการเรียกตัวสำรองลำดับถัดไป และทางค่ายจะทำการคืนเงินเมื่อคุณเข้าค่ายครบตามระยะเวลาการจัดค่าย
        </p>
        <Button link :href="FINALIST_FORM_LINK()" target="_blank">ยืนยันสิทธิ์</Button>
      </section>
      <nuxt-child v-if="major" :majors="majors" :results="results" :isLoading="isLoading" />
    </InfoContainer>
    <Footer />
  </ThemeProvider>
</template>
<script>
import ThemeProvider from '~/components/ThemeProvider.vue'
import Majors from '~/components/result/Majors.vue'
import { colorScheme } from '~/utils/color'
import { majors, FINALIST_FORM_LINK } from '~/utils/const'

export default {
  validate ({ params }) {
    return !params.major || Object.keys(majors).includes(params.major)
  },
  layout: 'secondary',
  head () {
    return {
      title: `ประกาศผลสัมภาษณ์${this.$route.params.major ? `สาขา Web ${majors[this.$route.params.major][0]}` : ''} - 17th Young Webmaster Camp`,
      meta: [
        { hid: 'og:title', name: 'og:title', content: `ประกาศผลสัมภาษณ์${this.$route.params.major ? `สาขา Web ${majors[this.$route.params.major][0]}` : ''} - 17th Young Webmaster Camp` },
        { hid: 'og:description', name: 'og:description', content: '' }, // TODO: Add description
        { hid: 'description', name: 'description', content: '' }, // TODO: Add description
        { name: 'robots', content: 'noindex' }
      ]
    }
  },
  components: {
    ThemeProvider,
    Majors,
    InfoContainer: () => import('~/components/InfoContainer.vue'),
    Button: () => import('~/components/result/Button.vue'),
    Footer: () => import('~/components/sections/Footer.vue'),
  },
  data () {
    return {
      majors,
    
      results: { content: [], design: [], marketing: [], programming: [] },
      isLoading: true
    }
  },
  computed: {
    major () {
      return this.$route.params.major || ''
    },
    currTheme () {
      if (!this.major) {
        return ''
      }
      return majors[this.major][1]
    }
  },
  created () {
    if (process.client) {
      window.scrollTo(0, 0)
      this.changeBackground(this.major)
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    FINALIST_FORM_LINK,
    changeMajor (major) {
      if (major === this.major) {
        major = ''
      }
      this.changeBackground(major)
      this.$router.replace(`/announcement/majors/${major ? `${major}/` : ''}`, () => {
        setTimeout(() => { this.$scrollTo(major ? `#announce-box` : `#select-major`) }, 150)
      })
    },
    changeBackground (major) {
      if (major) {
        document
          .getElementsByTagName('body')[0]
          .setAttribute('style', `background: ${colorScheme[majors[major][1]].normal};
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${colorScheme[majors[major][1]].background};
      background-size: cover;
      background-attachment: fixed;`)
      } else {
        document
          .getElementsByTagName('body')[0]
          .setAttribute('style', `background: #401b19;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(69.01deg, #C73884 7.27%, #E13C6F 51.46%, #9B308E 95.22%);
      background-size: cover;
      background-attachment: fixed;`)
      }
    },
    loadData () {
      const vm = this
      vm.isLoading = true
      vm.$axios.get(`https://api.ywc.in.th/users/announcement`)
        .then(({ status, data }) => {
          vm.isLoading = false
          if (status === 200) {
            const results = data.payload
            Object.keys(results).map((major) => {
              results[major] = results[major].finalist.concat(results[major].reserve.sort((a, b) => { return a.reserveNo < b.reserveNo }))
            })
            vm.results = results
          } else {
            vm.$message.error('เกิดข้อผิดพลาดในระบบ')
          }
        })
        .catch(() => {
          vm.isLoading = false
          vm.$message.error('เกิดข้อผิดพลาดในการโหลดรายชื่อผู้ผ่านการคัดเลือก')
        })
    }
  },
  beforeRouteUpdate (to, from, next) {
    if (from.path.includes('/announcement/majors') && Object.keys(from.query).length > 0) {
      this.loadData()
    }
    next()
  }
}
</script>
<style lang="scss">
.secondary.announcement-majors-major {
  .container {
    max-width: 1056px;
  }
  .ywc-logo {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    text-align: left;
    margin: 0;
    margin-top: 40px;
  }
  .section-heading {
    text-align: center;
    user-select: none;
  }
  input {
    font-family: 'Sarabun', serif, Tahoma;
  }
  .announce-box {
    font-size: 18px;
    @media screen and (max-width:768px) {
      font-size: 16px;
    }
    h3 {
      margin: 0;
      margin-top: 25px;
      margin-bottom: 25px;
    }
    section {
      margin-top: 0 !important;
      margin-bottom: 44px;
      padding: 0;
    }
  }
  #announce-box {
    padding-bottom: 43px;
  }
  .announce-box {
    padding-top: 25px;
    padding-bottom: 25px;
    h3:first-of-type {
      margin-top: 0px;
    }
    ol, ul {
      padding-left: 20px;
      margin: 0;
    }
    ul.nolist {
      list-style-type: none;
      padding-left: 0;
    }
    h4 {
      margin-bottom: 0;
    }
    button {
      font-family: 'Maledpan';
    }
    .subheading {
      font-family: 'Maledpan';
    }
    img {
      max-width: 100%;
      vertical-align: middle;
    }
  }
}
</style>
