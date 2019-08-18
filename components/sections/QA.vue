<template>
  <section>
    <SectionHead title="Q & A" />
    <QuestionZone>
      <div v-for="(a, q) in questions" :key="q" style="display:inline-grid;">
        <QuestionItem :qa="{q: q, a: a}" />
      </div>
    </QuestionZone>
  </section>
</template>
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
      questions: {
        'ถ้าไม่มี Facebook จะสามารถสมัครค่ายได้ไหม ?1': `นี่คือคำตอบของคำถามนี้ อยากจะบอกว่าสมัครได้ค่ะ อิอิ`,
        'ถ้าไม่มี Facebook จะสามารถสมัครค่ายได้ไหม ?2': `นี่คือคำตอบของคำถามนี้ อยากจะบอกว่าสมัครได้ค่ะ อิอิ`,
        'ถ้าไม่มี Facebook จะสามารถสมัครค่ายได้ไหม ?3': `นี่คือคำตอบของคำถามนี้ อยากจะบอกว่าสมัครได้ค่ะ อิอิ`,
        'ถ้าไม่มี Facebook จะสามารถสมัครค่ายได้ไหม ?4': `นี่คือคำตอบของคำถามนี้ อยากจะบอกว่าสมัครได้ค่ะ อิอิ`,
        'ถ้าไม่มี Facebook จะสามารถสมัครค่ายได้ไหม ?5': `นี่คือคำตอบของคำถามนี้ อยากจะบอกว่าสมัครได้ค่ะ อิอิ`,
        'ถ้าไม่มี Facebook จะสามารถสมัครค่ายได้ไหม ?6': `นี่คือคำตอบของคำถามนี้ อยากจะบอกว่าสมัครได้ค่ะ อิอิ`
      }
    }
  }
}
</script>
