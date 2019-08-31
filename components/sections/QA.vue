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
  grid-template-columns: auto auto auto;
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
        'ถ้าไม่มี Facebook จะสามารถสมัครค่ายได้ไหม ?1': `นี่คือคำตอบของคำถามนี้ อยากจะบอกว่าสมัครได้ค่ะ อิอิ`,
        'ถ้าไม่มี Facebook จะสามารถสมัครค่ายได้ไหม ?2': `นี่คือคำตอบของคำถามนี้ อยากจะบอกว่าสมัครได้ค่ะ อิอิ`,
        'ถ้าไม่มี Facebook จะสามารถสมัครค่ายได้ไหม ?3': `นี่คือคำตอบของคำถามนี้ อยากจะบอกว่าสมัครได้ค่ะ อิอิ`,
        'ถ้าไม่มี Facebook จะสามารถสมัครค่ายได้ไหม ?4': `นี่คือคำตอบของคำถามนี้ อยากจะบอกว่าสมัครได้ค่ะ อิอิ`,
        'ถ้าไม่มี Facebook จะสามารถสมัครค่ายได้ไหม ?5': `นี่คือคำตอบของคำถามนี้ อยากจะบอกว่าสมัครได้ค่ะ อิอิ`,
        'ถ้าไม่มี Facebook จะสามารถสมัครค่ายได้ไหม ?6': `นี่คือคำตอบของคำถามนี้ อยากจะบอกว่าสมัครได้ค่ะ อิอิ`
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
