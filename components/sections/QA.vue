<template>
  <section class="container">
    <SectionHead title="Q & A" />
    <QuestionZone>
      <div v-for="(a, q) in questions" :key="q" class="qa" :class="{'darken': showingQ !== '' && q !== showingQ}">
        <QuestionItem :qa="{q: q, a: a}" :showAns="q == showingQ" :selectQ="selectQ" />
      </div>
    </QuestionZone>
  </section>
</template>
<style>
.qa {
  display: inline-grid;
}
.qa.darken {
  opacity: 0.6;
}
</style>
<script>
import styled from 'vue-styled-components'
import SectionHead from '~/components/SectionHead.vue'
import QuestionItem from '~/components/QuestionItem.vue'

const QuestionZone = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-gap: 24px 24px;

  @media(max-width:768px) {
    & {
      grid-template-columns: auto;
    }
  }
`
export default {
  components: {
    SectionHead,
    QuestionZone,
    QuestionItem
  },
  data () {
    return {
      showingQ: '',
      questions: {
        'ค่าย Young Webmaster Camp คือค่ายอะไร?': `ค่ายสร้างเว็บระดับอุดมศึกษาที่จัดโดยสมาคมผู้ดูแลเว็บไทย จัดขึ้นเป็นประจำทุกปี เพื่อผลิตบุคลากรหน้าใหม่ด้านดิจิทัล ให้พร้อมเข้าสู่การทำงานด้านดิจิทัลในอนาคต`,
        'ค่ายนี้เขียนเว็บอย่างเดียวหรือเปล่า? ต้องเรียนคอมมาเท่านั้นมั้ย?': `ค่ายนี้มีมากกว่าเขียนเว็บ เนื่องจากเว็บไซต์หนึ่งเว็บต้องใช้คนที่มีทักษะหลากหลายในการสร้าง ทั้งในส่วนของผู้ที่ทำหน้าที่สร้างเว็บไซต์หรือโปรแกรมมิ่ง (Web Programming) ผู้ที่ออกแบบประสบการณ์ภายในเว็บไซต์หรือตกแต่งเว็บไซต์ให้สวยงามอย่างเว็บดีไซน์ (Web Design) ผู้ที่ถ่ายทอดเรื่องราวในเว็บไซต์ (Web Content) และผู้ที่วางกลยุทธ์ทางการตลาดเพื่อสร้างรายได้ให้กับเว็บไซต์อย่างมาร์เก็ตติ้ง (Web Marketing) เพราะฉะนั้น สามารถเลือกเข้าร่วมค่ายในสาขาใดสาขาหนึ่งได้`,
        'สมัครได้กี่สาขา?': `สมัครได้เพียง 1 สาขาเท่านั้น โดยแต่ละสาขาจะมีโจทย์ที่แตกต่างกันออกไป`,
        'ค่ายจัดเมื่อไหร่? ที่ไหน?': `วันที่ 26-29 ธันวาคม 2562 ณ คณะเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง`,
        'มีค่าใช้จ่ายไหม?': `ค่ายฟรี ไม่มีค่าใช้จ่าย`,
        'สมัครแล้วได้ไปค่ายทุกคนมั้ย?': `ทางทีมงานจะคัดเลือกแต่ละสาขา สาขาละ 20 คน รวมแล้วจะมีผู้ที่ถูกคัดเลือกให้เข้าร่วมค่าย 80 คน`,
        'ใครสมัครได้บ้าง?': `บุคคลที่มีอายุ 18-24 ปี หรือผู้ที่เกิดในช่วง 1 มกราคม 1997 - 31 ธันวาคม 2001`,
        'ทำงานแล้วสมัครได้มั้ย?': `สมัครได้ หากมีวันเกิดอยู่ในระยะเวลาที่กำหนด`
      }
    }
  },
  methods: {
    selectQ (q) {
      if (this.showingQ === q) {
        this.showingQ = ''
      } else {
        this.showingQ = q
      }
    }
  }
}
</script>
