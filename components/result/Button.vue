<template>
  <ButtonLink v-if="link">
    <slot />
  </ButtonLink>
  <Button v-else @click="$emit('click')">
    <slot />
  </Button>
</template>
<script>
import styled from 'vue-styled-components'
const ButtonStyle = `
display: inline-block;
width: fit-content;
background: #E1426F;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
border-radius: 100px;
border: none;
outline: none;

cursor: pointer;

font-family: Maledpan;
font-weight: bold;
font-size: 20px;
text-align: center;
padding: 7px 20px;
color: white;

&:hover {
  background: #f74f7e;
}
&:active {
  background: #bf345b;
}
`
const Button = styled(`button`)`
${ButtonStyle}
`
const ButtonLink = styled(`a`)`
${ButtonStyle}
text-decoration: none;
`
export default {
  components: {
    Button,
    ButtonLink
  },
  props: {
    link: { type: Boolean, default: false }
  }
}
</script>
