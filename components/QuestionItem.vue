<template>
  <Container>
    <QBox class="not-close-zone" @click="toggleAns">
      <h4 class="not-close-zone">{{ qa.q }}</h4>
    </QBox>
    <FloatBox>
      <ABox class="not-close-zone" v-show="showAns">
        {{ qa.a }}
      </ABox>
      <ToggleBtn class="not-close-zone" @click="toggleAns">
        <img :src="require(`~/assets/images/${showAns ? 'top':'down'}.png`)" alt="เปิด/ปิด" />
      </ToggleBtn>
    </FloatBox>
  </Container>
</template>

<script>
import styled from 'vue-styled-components'
const Container = styled.div`
  position: relative;
  margin-bottom: 40px;
  @media(max-width:768px) {
    & {
      margin-bottom: 0px;
    }
  }
`
const QBox = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), #E1426F;
  border-radius: 2px;
  border-bottom: 1px solid #622738;
  padding: 24px 16px;

  font-family: 'Maledpan', 'Sarabun';
  font-size: 20px;
  line-height: 36px;
  text-align: left;

  & h4 {
    margin: 0;
  }

  @media(max-width:768px) {
    & {
      font-size: 18px;
      padding: 12px 16px;
    }
  }
`
const FloatBox = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  @media(max-width:768px) {
    & {
      position: initial;
      z-index: initial;
    }
  }
`
const ABox = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), #E1426F;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 24px 16px;

  font-size: 16px;
  text-align: left;
  
  @media(max-width:768px) {
    & {
      padding: 12px 16px;
    }
  }
`
const ToggleBtn = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), #E1426F;
  color: #622738;
  border-top: 1px solid #622738;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 2px 2px;
  padding: 8px;
  cursor: pointer;
  user-select: none;

  @media(max-width:768px) {
    & {
      padding: 4px;
    }
  }
`
export default {
  components: {
    Container,
    QBox,
    FloatBox,
    ABox,
    ToggleBtn
  },
  props: {
    qa: { type: Object, default: () => { return { q: 'Question', a: 'Answer' } } },
    showAns: { type: Boolean, default: false },
    selectQ: { type: Function, default: () => { return function () {} } }
  },
  methods: {
    dismissAns () {
      this.selectQ('')
    },
    toggleAns () {
      this.selectQ(this.qa.q)
    }
  }
}
</script>
