<template>
  <section class="container" ref="major-section">
    <SectionHead title="Register" style="position: sticky; top: 0;"  />
    <MajorsContainer>
      <Major
        title="Developer"
        image="web-developer"
        color="blue"
        :image-style="`transform: translate3d(0, ${y1}px, 0);`"
      >
        <template slot-scope="scope">
          <FullscreenOverlay
            :show="scope.show"
            :count="major.developer.count"
          >
            <template v-slot:content>        
              <p>
                ทำหน้าที่สร้างเว็บไซต์จากการเขียนโค้ด เหมาะกับผู้ที่เขียนโปรแกรมได้ ไม่ว่าภาษาไหน ๆ จะ html,css,js หรือนอกเหนือจากนี้
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
        title="Designer"
        image="web-designer"
        color="yellow"
        :image-style="`transform: translate3d(0, ${y2}px, 0);`"
      >
        <template slot-scope="scope">
          <FullscreenOverlay
            :show="scope.show"
            :count="major.design.count"
          >
            <template v-slot:content>        
              <p>
                เขียน design
                ทำหน้าที่สร้างเว็บไซต์จากการเขียนโค้ด เหมาะกับผู้ที่เขียนโปรแกรมได้ ไม่ว่าภาษาไหน ๆ จะ html,css,js หรือนอกเหนือจากนี้
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
        :image-style="`transform: translate3d(0, ${y3}px, 0);`"
      >
        <template slot-scope="scope">
          <FullscreenOverlay
            :show="scope.show"
            :count="major.marketing.count"
          >
            <template v-slot:content>        
              <p>
                เขียน marketing
                ทำหน้าที่สร้างเว็บไซต์จากการเขียนโค้ด เหมาะกับผู้ที่เขียนโปรแกรมได้ ไม่ว่าภาษาไหน ๆ จะ html,css,js หรือนอกเหนือจากนี้
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
        title="Content"
        image="web-content"
        color="green"
        :image-style="`transform: translate3d(0, ${y4}px, 0);`"
      >
        <template slot-scope="scope">
          <FullscreenOverlay
            :show="scope.show"
            :count="major.content.count"
          >
            <template v-slot:content>        
              <p>
                เขียน conent
                ทำหน้าที่สร้างเว็บไซต์จากการเขียนโค้ด เหมาะกับผู้ที่เขียนโปรแกรมได้ ไม่ว่าภาษาไหน ๆ จะ html,css,js หรือนอกเหนือจากนี้
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
    </MajorsContainer>
  </section>
</template>

<script>
import Vue from 'vue'
import styled from 'vue-styled-components'
import SectionHead from '~/components/SectionHead.vue'

const MajorsContainer = styled.div`
  margin-top: 200px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-row-gap: 50px;
  justify-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, auto);
  }
`

class CountMajorRegistant {
  developer = { count: 0 }
  design = { count: 0 }
  marketing = { count: 0 }
  content = { count: 0 }
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
      major: new CountMajorRegistant(),
      y1: -170,
      y2: -340,
      y3: -122,
      y4: -293,
      lastScrollTop: 0
    }
  },
  mounted () {
    this.fetchCountRegistant()
      .then((response) => {
        this.major = response.data
      })
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
  },
  methods: {
    fetchCountRegistant () {
      const dumbMajor = {
        content: { count: 11 },
        design: { count: 22 },
        marketing: { count: 33 },
        developer: { count: 45 }
      }
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ data: dumbMajor })
        }, 0)
      })
    }
  }
})
</script>
