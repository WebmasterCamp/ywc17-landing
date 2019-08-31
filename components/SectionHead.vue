<template>
  <Container>
    {{ title }}
  </Container>
</template>

<script>
import styled from 'vue-styled-components'
const Container = styled.div`
  height: 143px;
  color: black;
  -webkit-text-stroke: 1.8px #6C6C6C;
  text-stroke: 1.8px #6C6C6C;
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 143px;

  text-align: center;
  letter-spacing: 0.4em;
  text-transform: uppercase;

  user-select: none;

  @media screen and (max-width:768px) {
    font-size: 50px;
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
