<template>
  <div id="major-section">
    <section ref="major-section" class="container">
      <SectionHead style="position: sticky; top: 0;">
        <template v-if="isRegOpen">
          Register
          <h3 class="subhead">เลือกสาขาที่ต้องการสมัคร</h3>
        </template>
        <template v-else>
          Majors
          <h3 class="subhead">สาขาที่รับสมัคร</h3>
        </template>
      </SectionHead>
      <MajorsContainer>
        <Major
          title="Content"
          image="web-content"
          color="green"
          :count="major.content"
          :class="{blackout: selectMajor !== '' && selectMajor !== 'content'}"
          :image-style="`transform: translate3d(0, ${y1}px, 0);`"
          @mouseover.native="hoverMajor('content')"
          @mouseleave.native="hoverMajor('')"
        >
          <template slot-scope="scope">
            <FullscreenOverlay
              :show="scope.show"
              :count="major.content"
              :isRegOpen="isRegOpen"
            >
              <template v-slot:content>        
                <p>
                  ทำหน้าที่คิดและเขียนเนื้อหาต่าง ๆ บนเว็บไซต์ เหมาะกับผู้ที่รักในการเขียนและเล่าเรื่องทุกรูปแบบ เช่น บ่นในทวิตและเขียนแคปชั่นในไอจี เป็นต้น
                </p>
                <h3>คำถามประจำสาขา</h3>
                <ol>
                  <li>ให้น้องเขียน Fake News หรือ Fake Content เรื่องอะไรก็ได้ที่ทำให้กรรมการอ่านแล้วรู้สึกเชื่อจนเผลอแชร์ก่อนเช็ก (ส่งคอนเทนต์นี้ในเว็บค่ายเท่านั้น ห้ามเผยแพร่คอนเทนต์ออกไปในโซเชียล)</li>
                  <li>ให้น้องเขียนคอนเทนต์แก้ Fake News/Content ในข้อ 1 ที่ทำให้กรรมการอ่านแล้วอยากแชร์เพื่อแก้ข่าว</li>
                </ol>
              </template>
            </FullscreenOverlay>
          </template>
        </Major>
        
        <Major
          title="Design"
          image="web-designer"
          color="yellow"
          :count="major.design"
          :class="{blackout: selectMajor !== '' && selectMajor !== 'designer'}"
          :image-style="`transform: translate3d(0, ${y2}px, 0);`"
          @mouseover.native="hoverMajor('designer')"
          @mouseleave.native="hoverMajor('')"
        >
          <template slot-scope="scope">
            <FullscreenOverlay
              :show="scope.show"
              :count="major.design"
              :isRegOpen="isRegOpen"
            >
              <template v-slot:content>        
                <p>
                  ทำหน้าที่ออกแบบเว็บไซต์ให้สวยงาม เหมาะกับผู้ที่ชอบวาดรูป รักในสีสันและการวางองค์ประกอบต่าง ๆ รับพิจารณาพิเศษสำหรับผู้ที่มีงานอดิเรกแอบวาดรูปในห้องเรียน
                </p>
                <h3>คำถามประจำสาขา</h3>
                <ol>
                  <li>ทำไมเราถึงต้องเลือกน้องให้เข้ามาเป็นหนึ่งใน Young Webmaster Camp สาขา Web Design</li>
                  <li>ยกตัวอย่างเว็บไซต์หรือแอปพลิเคชันที่มีส่วนช่วยสังคมมา 1 ตัวอย่าง พร้อมทั้งอธิบายถึงเหตุผลที่เลือก</li>
                  <li>จงยกตัวอย่างเว็บไซต์หน่วยงานภาครัฐที่น้องอยากทำการ Re-design UI และ UX มา 1 เว็บไซต์ พร้อมบอกเหตุผลที่เลือก และบอกจุดที่ควรจะแก้ไข และแนวทางในการแก้ปัญหา 3 จุดเป็นอย่างน้อย</li>
                  <li>Portfolio; ผลงานของคุณที่เกี่ยวข้องด้าน UX/UI</li>
                </ol>
              </template>
            </FullscreenOverlay>
          </template>
        </Major>
        <Major
          title="Marketing"
          image="web-marketing"
          color="pink"
          :count="major.marketing"
          :class="{blackout: selectMajor !== '' && selectMajor !== 'marketing'}"
          :image-style="`transform: translate3d(0, ${y3}px, 0);`"
          @mouseover.native="hoverMajor('marketing')"
          @mouseleave.native="hoverMajor('')"
        >
          <template slot-scope="scope">
            <FullscreenOverlay
              :show="scope.show"
              :count="major.marketing"
              :isRegOpen="isRegOpen"
            >
              <template v-slot:content>        
                <p>
                  ทำหน้าที่วางกลยุทธ์เพื่อสร้างรายได้ให้กับเว็บไซต์ เหมาะกับผู้ที่สนใจในการหาเงินจากช่องทางต่าง ๆ
                </p>
                <h3>คำถามประจำสาขา</h3>
                <ol>
                  <li>จงบอกจุดแข็ง (อย่างน้อย 2 ข้อ) และจุดอ่อน (อย่างน้อย 2 ข้อ) ของสื่อประเภทเว็บไซต์ สำหรับตัวเรา แบรนด์ และธุรกิจ เมื่อเทียบกับสื่อดิจิทัลประเภทอื่น ๆ เช่น โมบายแอปพลิเคชันและโซเชียลมีเดีย เป็นต้น</li>
                  <li>คุณคิดว่าการทำ Marketing กับ Content เหมือนหรือต่างกันอย่างไร และอะไรคือเรื่องที่สำคัญที่สุดของการทำการตลาด</li>
                </ol>
              </template>
            </FullscreenOverlay>
          </template>
        </Major>
        <Major
          title="Programming"
          image="web-developer"
          color="blue"
          :count="major.programming"
          :class="{blackout: selectMajor !== '' && selectMajor !== 'developer'}"
          :image-style="`transform: translate3d(0, ${y4}px, 0);`"
          @mouseover.native="hoverMajor('developer')"
          @mouseleave.native="hoverMajor('')"
        >
          <template slot-scope="scope">
            <FullscreenOverlay
              :show="scope.show"
              :count="major.programming"
              :isRegOpen="isRegOpen"
            >
              <template v-slot:content>        
                <p>
                  ทำหน้าที่สร้างเว็บไซต์จากการเขียนโค้ด เหมาะกับผู้ที่เขียนโปรแกรมได้ไม่ว่าภาษาไหน ๆ จะ HTML, CSS, JavaScript หรือนอกเหนือจากนี้
                </p>
                <h3>คำถามประจำสาขา</h3>
                <ol>
                  <li>ให้น้องเล่าประสบการณ์การทำงานเกี่ยวกับการทำหรือพัฒนาเว็บไซต์ (สามารถแปะลิงก์ผลงานที่เคยทำไว้ได้)</li>
                  <li>ให้น้องเลือก Technology, Library หรือแนวคิดใหม่ ๆ ในการทำเว็บมาหนึ่งอย่างพร้อมกับอธิบายว่าคืออะไร และทำไมถึงตัดสินใจเลือกอันนี้</li>
                  <li>ให้ออกแบบระบบจองห้องประชุมของห้องสมุดมหาวิทยาลัย โดยให้ระบุ Feature ที่อยากให้มี, เทคโนโลยีที่จะเลือกใช้, โครงสร้างของฐานข้อมูล และ Wireframe ของหน้าจอแบบคร่าว ๆ</li>
                  <li>จงเขียน function cardAt ที่รับค่า n และคืนค่าเป็นเลขของไพ่ในสำรับลำดับที่ n โดยเรียงตามดอกไพ่ (C, D, H, S) และเลขไพ่ (2, 3, 4, 5, 6, 7, 8, 9, 0, J, Q, K, A) ตามลำดับ ตัวอย่างเช่น cardAt(0) = 2C, cardAt(1) = 3C, cardAt(34) = 0H และ cardAt(35) = JH เป็นต้น โดยเขียนคำตอบมาโดยใช้ภาษาใดก็ได้ หรือเป็น Pseudocode ก็ได้เช่นกัน</li>
                </ol>
              </template>
            </FullscreenOverlay>
          </template>
        </Major>
      </MajorsContainer>
    </section>
  </div>
</template>
<style scoped>
#major-section {
  margin-top: 0px;
  padding-top: 100px; 
}
h3.subhead {
  letter-spacing: 0.2em;
  text-indent: -0.3em;
  font-family: 'Maledpan';
  font-weight: normal;
  font-size: 36px;
  color: #6C6C6C;
  user-select: none;
  margin: 0;
}
@media screen and (max-width: 768px)  {
  h3.subhead {
    font-size: 24px;
    margin-top: -15px;
    letter-spacing: 0.1em;
    text-indent: -0.2em;
  }
  #major-section { 
    margin-top: 100px;
    padding-top: 0px; 
  }
}
</style>
<script>
import Vue from 'vue'
import styled from 'vue-styled-components'
import dayjs from 'dayjs'
import SectionHead from '~/components/SectionHead.vue'
import { isInViewport, getDistance } from '~/utils/dom'

const MajorsContainer = styled.div`
  margin: 0;
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(2, 47%);
  grid-gap: 55px 20px;
  justify-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-top: 50px;
  }

  @media screen and (min-width: 960px) {
    margin: 110px 0 140px;
    grid-template-columns: repeat(4, auto);
  }
`

class CountMajorRegistant {
  programming = 0
  design = 0
  marketing = 0
  content = 0
}

export default Vue.extend({
  components: {
    SectionHead,
    MajorsContainer,
    Major: () => import('~/components/Major'),
    FullscreenOverlay: () => import('~/components/FullscreenOverlay')
  },
  data () {
    return {
      isFirstCome: true,
      isStopAnimate: false,
      selectMajor: '',
      major: new CountMajorRegistant(),
      y1: -170,
      y2: -340,
      y3: -122,
      y4: -293,
      lastScrollTop: 0
    }
  },
  computed: {
    isRegOpen () {
      const today = dayjs(new Date())
      const deadline = dayjs('2019-10-15')
      return !deadline.isBefore(today, 'day')
    }
  },
  mounted () {
    window.onscroll = () => {
      const sectionElement = this.$refs['major-section']
      if (!sectionElement) { return }

      if (isInViewport(sectionElement)) {
        const distance = getDistance(sectionElement)
        this.y1 = distance / 4 * 0.7
        this.y2 = distance / 4 * 1.3
        this.y3 = distance / 4 * 0.5
        this.y4 = distance / 4 * 1.2
        if (this.isFirstCome && distance < -200) {
          this.isFirstCome = false
          setTimeout(() => {
            if (!this.isStopAnimate) {
              this.selectMajor = 'content'
            }
          }, 700)
          setTimeout(() => {
            if (!this.isStopAnimate) {
              this.selectMajor = 'designer'
            }
          }, 1400)
          setTimeout(() => {
            if (!this.isStopAnimate) {
              this.selectMajor = 'marketing'
            }
          }, 2100)
          setTimeout(() => {
            if (!this.isStopAnimate) {
              this.selectMajor = 'developer'
            }
          }, 2800)
          setTimeout(() => {
            if (!this.isStopAnimate) {
              this.selectMajor = ''
            }
          }, 3500)
        }
      }
    }
    this.fetchCountRegistant()
      .then((major) => {
        this.major = major
      })
  },
  methods: {
    hoverMajor (major) {
      if (!this.isFirstCome) {
        this.isStopAnimate = true
      }
      this.selectMajor = major
    },
    fetchCountRegistant () {
      return this.$axios
        .get('https://api.ywc.in.th/users/stat')
        .then(({ status, data }) => {
          if (status === 200) {
            return data.payload
          }
          return new CountMajorRegistant()
        })
        .catch(() => {
          return new CountMajorRegistant()
        })
    }
  }
})
</script>
