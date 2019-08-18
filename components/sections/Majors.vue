<template>
  <section>
    <SectionHead title="Register" />
    <MajorsContainer>
      <Major
        title="Web Content"
        image="web-content"
        color="green"
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
      <Major
        title="Web Design"
        image="web-design"
        color="yellow"
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
        title="Web Marketing"
        image="web-marketing"
        color="pink"
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
        title="Web Developer"
        image="web-developer"
        color="blue"
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
    </MajorsContainer>
  </section>
</template>

<script>
import Vue from 'vue'
import styled from 'vue-styled-components'
import SectionHead from '~/components/SectionHead.vue'

const MajorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-row-gap: 50px;

  @media screen and (min-width: 376px) {
    grid-template-columns: repeat(4, auto);
  }
`

class CountMajorRegistant {
  developer = { count: 0 }
  design = { count: 0 }
  marketing = { count: 0 }
  content = { count: 0 }
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
      major: new CountMajorRegistant()
    }
  },
  mounted () {
    this.fetchCountRegistant()
      .then((response) => {
        this.major = response.data
      })
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
