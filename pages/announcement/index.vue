<template>
  <ThemeProvider :name="currTheme">
    <CenterContainer class="announcement-box">
      <div style="width:90%">
        <img src="~/assets/images/ywc-logo-pink.png" class="ywc-logo" alt="17th Young Webmaster Camp" />
        <template v-if="!candidateInfo">
          <h3>ประกาศผลสัมภาษณ์ <br class="mobile" />Young Webmaster Camp ครั้งที่ 17</h3>
          กรอกรหัสสัมภาษณ์ของคุณ
          <div class="ref-input">
            <div v-for="idx in [0, 1, 2, 3]" :key="`ref${idx}`">
              <a-input
                :ref="`ref${idx}`"
                v-model="ref[idx]"
                size="large"
                :placeholder="'CT01'.charAt(idx)"
                
                type="text"
                maxlength="1"
                :disabled="isCandidateLoading"
                @paste="refHandler($event, idx)"
                @input="refHandler($event, idx)"
                @keyup="refNavigator($event, idx)"
              />
            </div>
          </div>
          <Button :disabled="isCandidateLoading" @click="checkRefCode">ตรวจสอบผล</Button>
        </template>
        <template v-else>
          <h3>ผลสัมภาษณ์ <br class="mobile" />Young Webmaster Camp ครั้งที่ 17</h3>
          ของ {{ candidateInfo.firstName }} {{ candidateInfo.lastName }} รหัส {{ refCode }}
          <template v-if="isFinalistLoading">
            <h1 class="themeText">คุณ<span id="notPassText">ไม่</span>ผ่านการคัดเลือก</h1>
            <p>{{ statusText }}</p>
          </template>
          <template v-else-if="isPass">
            <h2>ขอแสดงความยินดี</h2>
            <h1 class="themeText" style="margin-top:50px">คุณผ่านการคัดเลือก<span v-if="isReserve"><br class="mobile" /> (ตัวสำรอง)</span></h1>
            
            <p v-if="isReserve">กรุณารอการติดต่อกลับจากทีมงานภายหลัง</p>
            <template v-else>
              <div class="alignLeft">
                <h3>รายละเอียดการยืนยันสิทธิ์</h3>
                <p>เพื่อยืนยันสิทธิ์การเข้าค่าย กรุณา<b>โอนเงินมัดจำ</b> จำนวน <b class="themeText">{{ finalistInfo.verificationAmount }} บาท</b> เข้าบัญชี</p>
                <p style="text-align:center">
                  เลขที่บัญชี <b>xxx</b><br />
                  ชื่อบัญชี <b>xxx</b><br />
                  ธนาคาร <b>xxx</b> สาขา xxx
                </p>
                <p>ภายในวันศุกร์ที่ 8 พฤศจิกายน เวลา 23:59 น.</p>
              </div>
              <Button link :href="FINALIST_FORM_LINK(finalistInfo)" target="_blank">ยืนยันสิทธิ์</Button>
            </template>
          </template>
          <template v-else>
            <h2>ขอแสดงความเสียใจ</h2>
            <h1 class="themeText" style="margin-top:50px">คุณไม่ผ่านการคัดเลือก</h1>
            <p>พลาดโอกาสครั้งนี้อย่าเพิ่งเสียใจ<br />เราเชื่อว่าคุณมีศักยภาพและความสามารถในการพัฒนาตนเอง<br />ปีหน้าฟ้าใหม่ (ถ้ายังเข้าหลักเกณฑ์) กลับมาสมัครใหม่อีกครั้งนะ</p>
          </template>
        </template>
      </div>
    </CenterContainer>
    <div class="more-details">
      <NuxtLink v-if="!candidateInfo" to="/announcement/majors/">แสดงรายชื่อทั้งหมด</NuxtLink>
      <Footer />
    </div>
  </ThemeProvider>
</template>
<script>
import antDesignVueInput from '~/plugins/ant-design-vue-input'
import ThemeProvider from '~/components/ThemeProvider.vue'
import CenterContainer from '~/components/CenterContainer.vue'
import Button from '~/components/result/Button.vue'
import Footer from '~/components/sections/Footer.vue'
import { colorScheme } from '~/utils/color'
import { majors, FINALIST_FORM_LINK, FINALIST_LOAD_TIME } from '~/utils/const'
const isalpha = /^[a-zA-Z]$/
const isnumber = /^[0-9]$/
export default {
  layout: 'secondary',
  head () {
    return {
      title: `ประกาศผลสัมภาษณ์ - 17th Young Webmaster Camp`,
      meta: [
        { hid: 'og:title', name: 'og:title', content: `ประกาศผลสัมภาษณ์ - 17th Young Webmaster Camp` },
        { hid: 'og:description', name: 'og:description', content: '' }, // TODO: Add description
        { hid: 'description', name: 'description', content: '' } // TODO: Add description
      ]
    }
  },
  components: {
    ThemeProvider,
    CenterContainer,
    Button,
    Footer
  },
  data () {
    return {
      majors,

      currTheme: '',
      major: '',

      ref: [],

      isCandidateLoading: true,
      candidates: { content: [], design: [], marketing: [], programming: [] },
      candidateInfo: null,

      isFinalistLoading: true,
      statusText: 'ใจเย็น ๆ นะ ระบบยังโหลดไม่เสร็จ',
      finalistFetchTime: 0,
      finalistInfo: null
    }
  },
  computed: {
    refCode () {
      return (this.ref[0] + this.ref[1] + this.ref[2] + this.ref[3]).toString().toUpperCase()
    },
    isPass () {
      return this.finalistInfo && this.finalistInfo.isFinalist === true
    },
    isReserve () {
      return this.isPass && this.finalistInfo.isReserve === true
    }
  },
  created () {
    antDesignVueInput()
    if (process.client) {
      this.changeTheme()
    }
  },
  mounted () {
    this.loadCandidate()
  },
  methods: {
    FINALIST_FORM_LINK,
    changeTheme (major) {
      if (major) {
        const majorColor = (!this.isPass) ? 'gray' : majors[major][1]
        this.currTheme = (!this.isPass) ? '' : majorColor
        document
          .getElementsByTagName('body')[0]
          .setAttribute('style', `background: ${colorScheme[majorColor].normal};
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${colorScheme[majorColor].background};
      background-size: cover;
      background-attachment: fixed;`)
        if (this.isPass) {
          this.$confetti.start()
          setTimeout(() => this.$confetti.stop(), 3000)
        }
      } else {
        this.currTheme = ''
        document
          .getElementsByTagName('body')[0]
          .setAttribute('style', `background: #401b19;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(69.01deg, #C73884 7.27%, #E13C6F 51.46%, #9B308E 95.22%);
      background-size: cover;
      background-attachment: fixed;`)
      }
    },
    animateText () {
      this.$nextTick(() => {
        const elm = document.getElementById('notPassText')
        elm.classList.add('animateText')
        elm.classList.add('one')
        setTimeout(() => {
          elm.classList.remove('one')
          void elm.offsetWidth
          elm.classList.add('two')
        }, parseInt(5 / 8 * FINALIST_LOAD_TIME))
        setTimeout(() => {
          elm.classList.remove('two')
          void elm.offsetWidth 
          elm.classList.add('three')
        }, parseInt(68 / 80 * FINALIST_LOAD_TIME))
      })
    },
    refNavigator ($event, idx) {
      const value = $event.key
      if (value === 'Enter') {
        this.checkRefCode()
        return false
      } else if (value === 'Backspace' || value === 'ArrowLeft') {
        if (idx > 0) {
          this.$refs[`ref${idx - 1}`][0].focus()
        }
        return false
      } else if (value === 'Delete' || value === 'ArrowRight') {
        if (idx < 3) {
          this.$refs[`ref${idx + 1}`][0].focus()
        }
        return false
      }

      if (idx < 3 && $event.target.value.length === 1) {
        this.$refs[`ref${idx + 1}`][0].focus()
      }
    },
    refHandler ($event, idx) {
      let value
      switch ($event.type) {
        case 'paste':
          value = (event.clipboardData || window.clipboardData).getData('text')
          if (value.length === 4) {
            const ref = value.split('')
            if (isalpha.test(ref[0]) && isalpha.test(ref[1]) && isnumber.test(ref[2]) && isnumber.test(ref[3])) {
              $event.preventDefault()
              this.ref = ref
              return false
            }
          }
          break
        case 'input':
          value = $event.target.value
          break
        default:
          value = $event.key
          if (!value) {
            const currentCode = event.which || event.code
            value = String.fromCharCode(currentCode)
          }
      }
      if (['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Enter', 'Tab'].includes(value)) {
        if (value === 'Enter') {
          this.checkRefCode()
        }
        return false
      }
      if (idx < 3 && $event.type !== 'input' && $event.target.value.length === 1) {
        this.$refs[`ref${idx + 1}`][0].focus()
        return false
      }

      if (idx === 0 || idx === 1) {
        if (!isalpha.test(value)) {
          $event.preventDefault()
          this.ref[idx] = ''
          return false
        }
      } else if (!isnumber.test(value)) {
        $event.preventDefault()
        this.ref[idx] = ''
        return false
      }
      return true
    },
    loadCandidate () {
      const vm = this
      vm.isCandidateLoading = true
      vm.$axios.get(`https://api.ywc.in.th/users/interview/pass`)
        .then(({ status, data }) => {
          vm.isCandidateLoading = false
          if (status === 200) {
            vm.candidates = data.payload
          }
        })
        .catch(() => {
          vm.$message.error('เกิดข้อผิดพลาดในการโหลดรายชื่อผู้สมัคร')
        })
    },
    checkRefCode () {
      if (this.isCandidateLoading || this.refCode.length !== 4) {
        if (this.refCode.length !== 4) {
          this.$message.error('กรุณากรอกรหัสสัมภาษณ์ให้ครบถ้วนทั้ง 4 ตัว')
        }
        return false
      }
      const refMajor = (this.ref[0] + this.ref[1]).toUpperCase()
      const refIdx = parseInt(this.ref[2]) * 10 + parseInt(this.ref[3])
      
      let major = ''
      Object.keys(majors).map((codename) => {
        if (refMajor === majors[codename][2]) {
          major = codename
        }
        return codename
      })

      if (!major) {
        this.$message.error('รหัสสัมภาษณ์ไม่ถูกต้อง')
        return false
      }
      if (refIdx <= 0 || typeof this.candidates[major][refIdx - 1] === 'undefined') {
        this.$message.error('รหัสสัมภาษณ์ไม่ถูกต้อง')
        return false
      }
      this.candidateInfo = this.candidates[major][refIdx - 1]
      this.animateText()
      this.major = major
      this.loadFinalist()
    },
    loadFinalist () {
      const vm = this
      vm.isFinalistLoading = true
      vm.finalistFetchTime = Date.now()
      vm.$axios.get(`https://api.ywc.in.th/users/announcement/${vm.refCode}`)
        .then(({ status, data }) => {
          if (status === 200) {
            vm.finalistInfo = data.payload
          }
          const remainTime = Date.now() - vm.finalistFetchTime
          if (remainTime >= FINALIST_LOAD_TIME) {
            vm.isFinalistLoading = false
            vm.changeTheme(vm.major)
          } else {
            setTimeout(() => { vm.isFinalistLoading = false; vm.changeTheme(vm.major) }, FINALIST_LOAD_TIME - remainTime)
          }
        })
        .catch(() => {
          vm.$message.error('เกิดข้อผิดพลาดในการโหลดข้อมูลประกาศผล')
          vm.statusText = 'เกิดข้อผิดพลาดในการโหลดข้อมูลประกาศผล โปรดลองใหม่อีกครั้ง'
        })
    }
  }
}
</script>
<style lang="scss">
.secondary.announcement {
  .mobile {
    display: none;
    @media screen and (max-width: 576px) {
      display: inline-block;
    }
  }
  .container {
    max-width: 1056px;
  }
  .ywc-logo {
    display: none;
  }
  input {
    font-family: 'Sarabun', serif, Tahoma;
  }
  .announcement-box {
    padding: 40px 0;

    color: black;
    font-family: 'Maledpan';
    font-size: 18px;
    @media screen and (max-width:576px) {
      font-size: 16px;
    }

    .ywc-logo {
      display: block;
      width: 280px;
      height: 97px;
      margin: 0 auto;
      @media screen and (max-width: 576px) {
        width:187px;
        height:65px;
      }
    }
    p {
      font-family: 'Sarabun';
    }
    h1 {
      font-size: 48px;
      margin-top: 60px;
      margin-bottom: 60px;
      @media screen and (max-width: 576px) {
        font-size: 36px;
        line-height: 1.0;
      }
    }
    h2 {
      font-weight: normal;
      margin: 0;
      margin-top: 10px;
      font-size: 24px;
    }
    .alignLeft {
      text-align: left;
    }
    .ref-input {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      margin: 0 auto;
      margin-top: 20px;
      margin-bottom: 20px;
      max-width: 400px;
      input {
        font-size: 64px;
        width: 88px;
        height: 137px;
        text-transform: uppercase;

        @media screen and (max-width: 576px) {
          font-size: 48px;
          width: 66px;
          height: 104px;
        }
      }
    }
  }
  .more-details {
    position: absolute;
    text-align: center;
    top: 90%;
    left: 0;
    width: 100%;
    z-index: -1;
    @media screen and (max-height: 750px) {
      position: static;
      left: unset;
      top: unset;
    }
    a, a:hover, a:visited, a:active {
      color: white;
    }
    & > div {
      margin-top: 100px;
    }
  }
  .animateText {
    opacity: 0;
  }
  .animateText.one {
    animation: animateText 0.5s infinite;
  }
  .animateText.two {
    animation: animateText 0.3s infinite
  }
  .animateText.three {
    animation: animateText 0.1s infinite;
  }
}
@keyframes animateText {
  0%   { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}
</style>
