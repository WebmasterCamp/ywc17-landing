<template>
  <Container :align="align" :size="size">
    {{ title }}
    <slot />
  </Container>
</template>

<script>
import styled from 'vue-styled-components'
const sizes = {
  sm: {
    fontSize: 30,
    fontSmallSize: 20,
    height: 100
  },
  md: {
    fontSize: 60,
    fontSmallSize: 40,
    height: 144
  }
}
const Container = styled('div', { align: String, size: String })`
  height: ${props => sizes[props.size].height}px;
  color: black;
  -webkit-text-stroke: 1.8px #6C6C6C;
  text-stroke: 1.8px #6C6C6C;
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: ${props => sizes[props.size].fontSize}px;
  line-height: 100px;

  text-align: ${props => props.align};
  letter-spacing: 0.4em;
  text-transform: uppercase;

  user-select: none;

  @media screen and (max-width:768px) {
    font-size: ${props => sizes[props.size].fontSmallSize}px;
  }
`
export default {
  components: {
    Container
  },
  props: {
    title: { type: String, default: '' },
    size: { type: String, default: 'md' },
    align: { type: String, default: 'center' }
  }
}
</script>
