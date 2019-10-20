<template>
  <ThemeProvider :theme="currTheme">
    <CenterContainer class="interview-intro">
      <h2>ประกาศผู้มีสิทธิ์เข้าสัมภาษณ์</h2>
      การสัมภาษณ์จะจัดขึ้นในวันที่ <span class="themeText">2 พฤศจิกายน 2562</span> ณ <a class="themeLink" href="https://goo.gl/maps/rwbLzbCNvYH2" target="_blank"><b>อาคาร ซี.พี.ทาวเวอร์ 1 (สีลม)</b></a><br>
      ซึ่งจะแบ่งออกเป็น 2 รอบ คือ <span class="themeText">รอบเช้า (ตั้งแต่เวลา 09:00 ถึง 12:00 น.)</span> และ <span class="themeText">รอบบ่าย (ตั้งแต่เวลา 13:00 ถึง 18:00 น.)</span>
      <h3>สิ่งที่ต้องเตรียมมาในวันสัมภาษณ์</h3>
      <ol>
        <li><span class="themeText">บัตรประจำตัวประชาชน</span> (เพื่อใช้แลกบัตรเข้าอาคาร ซี.พี.ทาวเวอร์ 1 (สีลม)) และ<span class="themeText">บัตรประจำตัวนักศึกษา</span>หรือบัตรประจำตัวที่หน่วยงานราชการหรือสถานศึกษาปัจจุบันออกให้และมีรูปถ่ายของผู้สัมภาษณ์ (เพื่อประกอบการลงทะเบียนเข้าสัมภาษณ์)</li>
        <li><span class="themeText">แต่งกายด้วยชุดนักเรียน นักศึกษา หรือชุดสุภาพ</span></li>
        <li><span class="themeText">การบ้านและสิ่งที่กรรมการกำหนดไว้</span> โปรดอ่านรายละเอียดการบ้านและสิ่งที่กรรมการกำหนดไว้ให้ครบถ้วน หากต้องการใช้คอมพิวเตอร์พกพาประกอบการนำเสนอต่อคณะกรรมการ โปรดเตรียมแบตเตอรี่มาให้เพียงพอและเตรียมอินเทอร์เน็ตมาให้พร้อม เนื่องจากสถานที่สัมภาษณ์ไม่มีจัดเตรียมให้</li>
        <li><span class="themeText">Portfolio</span> สามารถเตรียมมาเพื่อประกอบการพิจารณาได้ (โดยสาขา Web Design จะต้องนำมาทุกคน)</li>
      </ol>
      <h3>การเดินทางมาสัมภาษณ์</h3>
      <ol>
        <li><span class="themeText">เดินทางด้วยตนเอง</span> อาคารตั้งอยู่บนถนนสีลมฝั่งโรงแรมดุสิตธานี (ไม่มีที่จอดรถให้บริการ)</li>
        <li><span class="themeText">รถไฟฟ้า BTS</span> ลงที่สถานีศาลาแดง ทางออกที่ 2</li>
        <li><span class="themeText">รถไฟฟ้า MRT</span> ลงที่สถานีสีลม ทางออกที่ 2 เดินเลียบทางเท้าถนนสีลมฝั่งโรงแรมดุสิตธานี</li>
        <li><span class="themeText">รถประจำทาง</span> สาย 15, 76, 77, 115, 172, 177, 504, 514 หรือ 547 ลงป้ายโรงพยาบาลกรุงเทพคริสเตียน หรือป้ายใต้สถานีรถไฟฟ้า BTS ศาลาแดง</li>
      </ol>
      <h3>สำหรับน้อง ๆ ที่ไม่สะดวกเดินทางมาสัมภาษณ์</h3>
      ให้แจ้งใน Inbox ของเพจ <a class="themeLink" href="https://m.me/ywcth" target="_blank"><b>Facebook : Young Webmaster Camp</b></a> ภายในวันที่ 30 ตุลาคม 2562
      <h3>มีข้อสงสัยเพิ่มเติม โปรดติดต่อ</h3>
      <table>
        <tr><td width="70"><span class="themeText">พี่บอส</span></td><td>โทร. <a class="themeLink" href="tel:0823651885">082 - 365 - 1885</a></td></tr>
        <tr><td><span class="themeText">พี่ปู</span></td><td>โทร. <a class="themeLink" href="tel:0988256861">098 - 825 - 6861</a></td></tr>
        <tr><td><span class="themeText">พี่จุ้ย</span></td><td>โทร. <a class="themeLink" href="tel:0929595167">092 - 959 - 5167</a></td></tr>
      </table>
    </CenterContainer>
    <section class="container">
      <h2 class="section-heading">โปรดเลือกสาขา</h2>
      <MajorRow>
        <Major
          v-for="(info, codename) in majors"
          :key="info[0]"
          :color="info[1]"
          :href="`/interview/${codename}`"
          :class="{'unactive': major && major !== codename}"
          v-scroll-to="'#interview-box'"
          @click.prevent="changeMajor(codename)"
        >
          <img v-lazy="require(`~/assets/images/web-${codename}.png`)" />
          Web {{ info[0] }}
        </Major>
      </MajorRow>
    </section>
    <CenterContainer v-show="major" id="interview-box" class="interview-box">
      <nuxt-child v-if="major" :majors="majors" />
    </CenterContainer>
    <Footer />
  </ThemeProvider>
</template>
<script>
import styled from 'vue-styled-components'
import CenterContainer from '~/components/CenterContainer.vue'
import Footer from '~/components/sections/Footer.vue'
import color from '~/utils/color'
const majors = {
  content: ['Content', 'green'],
  design: ['Design', 'yellow'],
  marketing: ['Marketing', 'pink'], 
  programming: ['Programming', 'blue']
}
const colorScheme = {
  green: {
    light: '#99F2C3',
    normal: '#00BE7A',
    background: 'linear-gradient(45deg, #00A030 0.08%, #00AC4F 11.17%, #00B96E 24.54%, #00BE7A 32%, #01BD93 54.11%, #01BC9D 67.51%, #01AF97 74.35%, #018D87 86.96%, #016473 100.01%)'
  },
  yellow: {
    light: '#FFF6CF',
    normal: '#FCBE4F',
    background: 'linear-gradient(45deg, #FEE041 1.85%, #FCB46F 59.99%, #FA7398 99.64%)'
  },
  pink: {
    light: '#FFCCE8',
    normal: '#FA5C87',
    background: 'linear-gradient(45deg, #C73884 -0.26%, #FA5C87 50.77%, #FF7745 99.73%)'
  },
  blue: {
    light: '#85E5FF',
    normal: '#4D9ED5',
    background: 'linear-gradient(45deg, #07CACE -0.25%, #4D9ED5 50.1%, #9470DC 99.85%)'
  }
}
const ThemeProvider = styled('div', { theme: String })`
  .themeText {
    color: ${props => props.theme ? colorScheme[props.theme].normal : color.main};
    font-weight: bold;
  }
  .themeLink {
    color: ${props => props.theme ? colorScheme[props.theme].normal : color.main};
    &:visited, &:active, &:hover {
       color: ${props => props.theme ? colorScheme[props.theme].normal : color.main};
    }
  }

  // ======== START Ant Design Override ========
  // Table Row Hover Color
  .ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td, .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td, .ant-table-thead > tr:hover:not(.ant-table-expanded-row) > td, .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {
    background: ${props => props.theme ? colorScheme[props.theme].light : colorScheme.pink.light};
  }
  // Table Sorter Active Color
  .ant-table-thead > tr > th .ant-table-column-sorter-up.on, .ant-table-thead > tr > th .ant-table-column-sorter-down.on {
    color: ${props => props.theme ? colorScheme[props.theme].normal : colorScheme.pink.normal};
  }
  // Table Filter Active Color 
  .ant-table-thead > tr > th .ant-table-filter-selected.anticon-filter {
    color: ${props => props.theme ? colorScheme[props.theme].normal : colorScheme.pink.normal};
  }
  .ant-table-filter-dropdown-link {
    color: ${props => props.theme ? colorScheme[props.theme].normal : colorScheme.pink.normal};
  }
  // Input
  .ant-input:hover, .ant-input:focus {
    border-color: ${props => props.theme ? colorScheme[props.theme].normal : colorScheme.pink.normal};
  }
  .ant-input:focus {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
  }
  .ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled) {
    border-color: ${props => props.theme ? colorScheme[props.theme].normal : colorScheme.pink.normal};
  }
  // Spinner
  .ant-spin-dot i {
    background-color: ${props => props.theme ? colorScheme[props.theme].normal : colorScheme.pink.normal};
  }
`
const MajorRow = styled('div')`
  display: grid;
  margin-top: 36px;
  margin-bottom: 43px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  align-items: center;
  @media screen and (max-width:768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  // @media screen and (max-width:576px) {
  //   grid-template-columns: repeat(1, 1fr);
  // }
`
const Major = styled('a', { color: String })`
  display: inline-grid;
  grid-template-rows: auto 20%;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;

  font-family: 'Maledpan';
  color: ${props => color[props.color].darker};
  font-weight: bold;
  font-size: 24px;

  height: 225px;
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  @media screen and (max-width:768px) {
    font-size: 22px;
    height: 96px;
    padding: 15px;
    grid-template-rows: none;
    grid-template-columns: auto 76%;
  }
  @media screen and (max-width:576px) {
    // height: 32px;
    font-size: 16px;
    // grid-template-columns: 15% 75%;
    grid-template-columns: none;
    grid-template-rows: auto 22%;
  }
  @media screen and (max-width:360px) {
    font-size: 14px;
  }
  @media screen and (max-width:320px) {
    font-size: 12px;
  }

  &.unactive {
    opacity: 0.5;
    &:hover {
      opacity: 0.8;
    }
  }

  img {
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
    margin-bottom: 16px;
    
    @media screen and (max-width:768px) {
      margin-bottom: 0;
    }
  }

`

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
        { hid: 'description', name: 'description', content: '' } // TODO: Add description
      ]
    }
  },
  components: {
    ThemeProvider,
    MajorRow,
    Major,
    CenterContainer,
    Footer
  },
  data () {
    return {
      majors
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
  mounted () {
    this.changeBackground(this.major)
  },
  methods: {
    changeMajor (major) {
      if (major === this.major) {
        major = ''
      }
      this.changeBackground(major)
      this.$router.replace(`/interview/${major}`)
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
    }
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
  .interview-box {
    padding-top: 25px;
    padding-bottom: 25px;
    h3:first-of-type {
      margin-top: 0px;
    }
  }
}
</style>
