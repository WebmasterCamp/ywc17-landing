<template>
  <ThemeProvider :name="currTheme">
    <InfoContainer class="interview-intro">
      <h2>ประกาศผู้มีสิทธิ์เข้าสัมภาษณ์</h2>
      การสัมภาษณ์จะจัดขึ้นใน <span class="themeText">วันเสาร์ที่ 2 พฤศจิกายน 2562</span> ณ <a class="themeLink" href="https://goo.gl/maps/rwbLzbCNvYH2" title="คลิกเพื่อดูแผนที่บน Google Maps" target="_blank"><b>อาคาร ซี.พี.ทาวเวอร์ 1 (สีลม) ชั้น 11</b></a><br>
      ซึ่งจะแบ่งออกเป็น 2 รอบ คือ <span class="themeText">รอบเช้า (ตั้งแต่เวลา 09:00 ถึง 12:00 น.)</span> และ <span class="themeText">รอบบ่าย (ตั้งแต่เวลา 13:00 ถึง 18:00 น.)</span>
      <h3>สิ่งที่ต้องเตรียมมาในวันสัมภาษณ์</h3>
      <ol>
        <li><span class="themeText">บัตรประจำตัวประชาชน</span> (เพื่อใช้แลกบัตรเข้าอาคาร ซี.พี.ทาวเวอร์ 1 (สีลม)) และ<span class="themeText">บัตรประจำตัวนักศึกษา</span>หรือบัตรประจำตัวที่หน่วยงานราชการหรือสถานศึกษาปัจจุบันออกให้และมีรูปถ่ายของผู้สัมภาษณ์ (เพื่อประกอบการลงทะเบียนเข้าสัมภาษณ์)</li>
        <li><span class="themeText">แต่งกายด้วยชุดนักเรียน นักศึกษา หรือชุดสุภาพ</span></li>
        <li><span class="themeText">การบ้านและสิ่งที่กรรมการกำหนดไว้</span> โปรดอ่านรายละเอียดการบ้านและสิ่งที่กรรมการกำหนดไว้ให้ครบถ้วน หากต้องการใช้คอมพิวเตอร์พกพาประกอบการนำเสนอต่อคณะกรรมการ โปรดเตรียมแบตเตอรี่มาให้เพียงพอและเตรียมอินเทอร์เน็ตมาให้พร้อม เนื่องจากสถานที่สัมภาษณ์ไม่มีจัดเตรียมให้</li>
        <li><span class="themeText">Portfolio</span> สามารถเตรียมมาเพื่อประกอบการพิจารณาได้ (โดยสาขา <span class="themeText webDesign">Web Design</span> จะต้องนำมาทุกคน)</li>
      </ol>
      <h3>การเดินทางมาสัมภาษณ์</h3>
      <ol>
        <li><span class="themeText">เดินทางด้วยตนเอง</span> อาคารตั้งอยู่บนถนนสีลมฝั่งโรงแรมดุสิตธานี (ไม่มีที่จอดรถให้บริการ) <strong style="color:red">ไม่แนะนำให้เดินทางด้วยวิธีนี้ เนื่องจากเป็นเส้นทางที่ได้รับผลกระทบจากการจัดการประชุมสุดยอดอาเซียน ครั้งที่ 35</strong></li>
        <li><span class="themeText">รถไฟฟ้า BTS</span> ลงที่สถานีศาลาแดง ทางออกที่ 2</li>
        <li><span class="themeText">รถไฟฟ้า MRT</span> ลงที่สถานีสีลม ทางออกที่ 2 เดินเลียบทางเท้าถนนสีลมฝั่งโรงแรมดุสิตธานี</li>
        <li><span class="themeText">รถประจำทาง</span> สาย 15, 76, 77, 115, 172, 177, 504, 514 หรือ 547 ลงป้ายโรงพยาบาลกรุงเทพคริสเตียน หรือป้ายใต้สถานีรถไฟฟ้า BTS ศาลาแดง</li>
      </ol>
      <h3>สำหรับท่านที่ไม่สะดวกเดินทางมาสัมภาษณ์</h3>
      ให้แจ้งใน Inbox ของเพจ <a class="themeLink" href="https://m.me/ywcth" target="_blank"><b>Facebook : Young Webmaster Camp</b></a> ภายในวันที่ 30 ตุลาคม 2562
      <h3>มีข้อสงสัยเพิ่มเติม โปรดติดต่อ</h3>
      <table>
        <tbody>
          <tr><td width="70"><span class="themeText">พี่บอส</span></td><td>โทร. <a class="themeLink" href="tel:0823651885">082-365-1885</a></td></tr>
          <tr><td><span class="themeText">พี่ปู</span></td><td>โทร. <a class="themeLink" href="tel:0929595167">092-959-5167</a></td></tr>
          <tr><td><span class="themeText">พี่จุ้ย</span></td><td>โทร. <a class="themeLink" href="tel:0988256861">098-825-6861</a></td></tr>
        </tbody>
      </table>
    </InfoContainer>
    <a id="select-major" />
    <Majors :selected="major" route="/interview" :clickHandler="changeMajor" />

    <a id="interview-box"></a>
    <InfoContainer v-show="major" class="interview-box">
      <nuxt-child v-if="major" :majors="majors" :results="results" :isLoading="isLoading" />
    </InfoContainer>
    <Footer />
  </ThemeProvider>
</template>
<script>
import ThemeProvider from '~/components/ThemeProvider.vue'
import InfoContainer from '~/components/InfoContainer.vue'
import Majors from '~/components/result/Majors.vue'
import Footer from '~/components/sections/Footer.vue'
import { colorScheme } from '~/utils/color'
import { majors } from '~/utils/const'

export default {
  validate ({ params }) {
    return !params.major || Object.keys(majors).includes(params.major)
  },
  layout: 'secondary',
  head () {
    return {
      title: `ประกาศผู้มีสิทธิ์เข้าสัมภาษณ์${this.$route.params.major ? `สาขา Web ${majors[this.$route.params.major][0]}` : ''} - 17th Young Webmaster Camp`,
      meta: [
        { hid: 'og:title', name: 'og:title', content: `ประกาศผู้มีสิทธิ์เข้าสัมภาษณ์${this.$route.params.major ? `สาขา Web ${majors[this.$route.params.major][0]}` : ''} - 17th Young Webmaster Camp` },
        { hid: 'og:description', name: 'og:description', content: '' }, // TODO: Add description
        { hid: 'description', name: 'description', content: '' }, // TODO: Add description
        { name: 'robots', content: (this.$route.params.major) ? 'noindex' : '' }
      ]
    }
  },
  components: {
    ThemeProvider,
    Majors,
    InfoContainer,
    Footer
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
    changeMajor (major) {
      if (major === this.major) {
        major = ''
      }
      this.changeBackground(major)
      this.$router.replace(`/interview/${major ? `${major}/` : ''}`, () => {
        setTimeout(() => { this.$scrollTo(major ? `#interview-box` : `#select-major`) }, 150)
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
      vm.$axios.get(`https://api.ywc17.ywc.in.th/users/interview/pass`)
        .then(({ status, data }) => {
          vm.isLoading = false
          if (status === 200) {
            vm.results = data.payload
          }
        })
        .catch(() => {
          vm.isLoading = false
          vm.$message.error('เกิดข้อผิดพลาดในการโหลดรายชื่อผู้มีสิทธิ์เข้าสัมภาษณ์')
        })
    }
  },
  beforeRouteUpdate (to, from, next) {
    if (from.path.includes('/interview') && Object.keys(from.query).length > 0) {
      this.loadData()
    }
    next()
  }
}
</script>
<style lang="scss">
.secondary.interview, .secondary.interview-major {
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
  .interview-intro, .interview-box {
    font-size: 18px;
    @media screen and (max-width:768px) {
      font-size: 16px;
    }
    h3 {
      margin: 0;
      margin-top: 25px;
      margin-bottom: 25px;
    }
  }
  .interview-intro {
    h2:first-of-type {
      margin-top: 0px;
    }
    ol {
      padding-left: 20px;
    }
    ul {
      list-style-type: none;
      padding-left: 0;
    }
  }
  #interview-box {
    padding-bottom: 43px;
  }
  .interview-box {
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
