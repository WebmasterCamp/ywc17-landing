<template>
  <section ref="major-section" class="container">
    
    <SectionHead style="position: sticky; top: 0;">
      Register
      <h3 class="subhead">เลือกสาขาที่ท่านต้องการสมัคร</h3>
    </SectionHead>
    <MajorsContainer>
      <Major
        title="Content"
        image="web-content"
        color="green"
        :class="{blackout: selectMajor !== '' && selectMajor !== 'content'}"
        :image-style="`transform: translate3d(0, ${y1}px, 0);`"
        @mouseover.native="hoverMajor('content')"
        @mouseleave.native="hoverMajor('')"
      >
        <template slot-scope="scope">
          <FullscreenOverlay
            :show="scope.show"
            :count="major.content"
          >
            <template v-slot:content>        
              <p>
                ทำหน้าที่คิดและเขียนเนื้อหาต่าง ๆ บนเว็บไซต์ เหมาะกับผู้ที่รักในการเขียนและเล่าเรื่องทุกรูปแบบ เช่น บ่นในทวิตและเขียนแคปชั่นในไอจี เป็นต้น
              </p>
              <h3>ตัวอย่างคำถาม</h3>
              <ol>
                <li>จงยกตัวอย่างคำถามข้อที่หนึ่งมา 1 ประโยค</li>
                <li>จงยกตัวอย่างคำถามข้อที่หนึ่งมา 1 ประโยค</li>
                <li>จงยกตัวอย่างคำถามข้อที่หนึ่งมา 1 ประโยค</li>
                <li>จงยกตัวอย่างคำถามข้อที่หนึ่งมา 1 ประโยค</li>
                <li>จงยกตัวอย่างคำถามข้อที่หนึ่งมา 1 ประโยค</li>
                <li>จงยกตัวอย่างคำถามข้อที่หนึ่งมา 1 ประโยค</li>
                <li>จงยกตัวอย่างคำถามข้อที่หนึ่งมา 1 ประโยค</li>
                <li>จงยกตัวอย่างคำถามข้อที่หนึ่งมา 1 ประโยค</li>
                <li>จงยกตัวอย่างคำถามข้อที่หนึ่งมา 1 ประโยค</li>
              </ol>
            </template>
          </FullscreenOverlay>
        </template>
      </Major>
      
      <Major
        title="Designer"
        image="web-designer"
        color="yellow"
        :class="{blackout: selectMajor !== '' && selectMajor !== 'designer'}"
        :image-style="`transform: translate3d(0, ${y2}px, 0);`"
        @mouseover.native="hoverMajor('designer')"
        @mouseleave.native="hoverMajor('')"
      >
        <template slot-scope="scope">
          <FullscreenOverlay
            :show="scope.show"
            :count="major.design"
          >
            <template v-slot:content>        
              <p>
                ทำหน้าที่ออกแบบเว็บไซต์ให้สวยงาม เหมาะกับผู้ที่ชอบวาดรูป รักในสีสันและการ วางองค์ประกอบต่าง ๆ รับพิจารณาพิเศษ สำหรับผู้ที่มีงานอดิเรกแอบวาดรูปในห้องเรียน
              </p>
              <h3>ตัวอย่างคำถาม</h3>
              <ol>
                <li>จงยกตัวอย่างคำถามข้อที่หนึ่งมา 1 ประโยค</li>
                <li>จงยกตัวอย่างคำถามข้อที่หนึ่งมา 1 ประโยค</li>
                <li>จงยกตัวอย่างคำถามข้อที่หนึ่งมา 1 ประโยค</li>
              </ol>
            </template>
          </FullscreenOverlay>
        </template>
      </Major>
      <Major
        title="Marketing"
        image="web-marketing"
        color="pink"
        :class="{blackout: selectMajor !== '' && selectMajor !== 'marketing'}"
        :image-style="`transform: translate3d(0, ${y3}px, 0);`"
        @mouseover.native="hoverMajor('marketing')"
        @mouseleave.native="hoverMajor('')"
      >
        <template slot-scope="scope">
          <FullscreenOverlay
            :show="scope.show"
            :count="major.marketing"
          >
            <template v-slot:content>        
              <p>
                ทำหน้าที่วางกลยุทธ์เพื่อสร้างรายได้ให้กับเว็บไซต์ เหมาะกับผู้ที่สนใจในการหาเงินจากช่องทางต่าง ๆ
              </p>
              <h3>ตัวอย่างคำถาม</h3>
              <ol>
                <li>จงยกตัวอย่างคำถามข้อที่หนึ่งมา 1 ประโยค</li>
                <li>จงยกตัวอย่างคำถามข้อที่หนึ่งมา 1 ประโยค</li>
                <li>จงยกตัวอย่างคำถามข้อที่หนึ่งมา 1 ประโยค</li>
              </ol>
            </template>
          </FullscreenOverlay>
        </template>
      </Major>
      <Major
        title="Developer"
        image="web-developer"
        color="blue"
        :class="{blackout: selectMajor !== '' && selectMajor !== 'developer'}"
        :image-style="`transform: translate3d(0, ${y4}px, 0);`"
        @mouseover.native="hoverMajor('developer')"
        @mouseleave.native="hoverMajor('')"
      >
        <template slot-scope="scope">
          <FullscreenOverlay
            :show="scope.show"
            :count="major.programming"
          >
            <template v-slot:content>        
              <p>
                ทำหน้าที่สร้างเว็บไซต์จากการเขียนโค้ด เหมาะกับผู้ที่เขียนโปรแกรมได้ ไม่ว่าภาษาไหน ๆ จะ html, css, js หรือนอกเหนือจากนี้
              </p>
              <h3>ตัวอย่างคำถาม</h3>
              <ol>
                <li>จงยกตัวอย่างคำถามข้อที่หนึ่งมา 1 ประโยค</li>
                <li>จงยกตัวอย่างคำถามข้อที่หนึ่งมา 1 ประโยค</li>
                <li>จงยกตัวอย่างคำถามข้อที่หนึ่งมา 1 ประโยค</li>
              </ol>
            </template>
          </FullscreenOverlay>
        </template>
      </Major>
    </MajorsContainer>
  </section>
</template>
<style scoped>
section {
  margin-top: 100px;
}
h3.subhead {
  letter-spacing: 0.2em;
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
  }
}
</style>
<script>
import Vue from 'vue'
import styled from 'vue-styled-components'
import SectionHead from '~/components/SectionHead.vue'

const MajorsContainer = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 47%);
  grid-gap: 55px 20px;
  justify-items: center;
  justify-content: center;

  @media screen and (min-width: 960px) {
    margin: 100px 0 140px;
    grid-template-columns: repeat(4, auto);
  }
`

class CountMajorRegistant {
  programming = 0
  design = 0
  marketing = 0
  content = 0
}

const isInViewport = function (elem) {
  const position = elem.getBoundingClientRect()
  return position.top < window.innerHeight && position.bottom >= 0
}

const getDistance = function (elem) {
  const position = elem.getBoundingClientRect()
  return position.top - window.innerHeight
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
      selectMajor: '',
      major: new CountMajorRegistant(),
      y1: -170,
      y2: -340,
      y3: -122,
      y4: -293,
      lastScrollTop: 0
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
      }
    }
    this.fetchCountRegistant()
      .then((major) => {
        this.major = major
      })
  },
  methods: {
    hoverMajor (major) {
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
