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
  },
  timeline: {
    fontSize: 60,
    fontSmallSize: 40,
    height: 84
  }
}
const strokeColor = '#6C6C6C'
const Container = styled('div', { align: String, size: String })`
  height: ${props => sizes[props.size].height}px;
  color: black;
  -webkit-text-stroke: 1.8px ${strokeColor};
  text-stroke: 1.8px ${strokeColor};
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: ${props => sizes[props.size].fontSize}px;
  line-height: 60px;

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
