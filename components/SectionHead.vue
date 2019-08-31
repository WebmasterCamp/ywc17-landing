<template>
  <Container>
    {{ title }}
  </Container>
</template>

<script>
import styled from 'vue-styled-components'
const strokeColor = '#6C6C6C'
const Container = styled.div`
  width: 335px;
  height: 112px;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;

  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 74px;

  text-align: center;
  text-transform: uppercase;

  color: #000;
  text-shadow: -1px 0 ${strokeColor}, 0 1px ${strokeColor}, 1px 0 ${strokeColor}, 0 -1px ${strokeColor};
  letter-spacing: 30px;

  @media(max-width:768px) {
    & {
      width: 287px;
      height: 96px;
      font-size: 24px;
    }
  }
`
export default {
  components: {
    Container
  },
  props: {
    title: { type: String, default: 'Heading' }
  }
}
</script>
