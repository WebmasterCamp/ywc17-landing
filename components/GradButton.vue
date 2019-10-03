<template>
  <StyledBorderLink v-if="link" :color="`${theme}`">
    <StyledBtn :color="`${theme}`">
      <StyledText :color="`${theme}`">
        <slot />
      </StyledText>
    </StyledBtn>
  </StyledBorderLink>
  <StyledBorder v-else :color="`${theme}`" @click="$emit('click')">
    <StyledBtn :color="`${theme}`">
      <StyledText :color="`${theme}`">
        <slot />
      </StyledText>
    </StyledBtn>
  </StyledBorder>
</template>

<script>
import styled from 'vue-styled-components'
import color from '~/utils/color'
const BtnProps = { color: String }
const BtnStyle = `
  display: inline-block;
  max-width: 320px;
  padding: 2px;
  position: relative;
  border-radius: 1000px;
  border: none;
  outline: none;

  cursor: pointer;
`
const StyledBorder = styled('button', BtnProps)`
  ${BtnStyle}
  background: ${props => color[props.color].darker};
  background: ${props => color[props.color].gradient};
`
const StyledBorderLink = styled('a', BtnProps)`
  ${BtnStyle}
  background: ${props => color[props.color].darker};
  background: ${props => color[props.color].gradient};
`
const StyledBtn = styled('div', BtnProps)`
  background: black;
  padding: 7px 28px;
  border-radius: 1000px;

  user-select: none;

  &:hover {
    background: ${props => color[props.color].gradient};
  }
  &:hover > span {
    color: black;
    background: transparent;
    -webkit-background-clip: initial;
    -webkit-text-fill-color: initial;
  }
`
const StyledText = styled('span', BtnProps)`
  font-family: 'Maledpan', 'Sarabun';
  font-size: 18px;
  font-weight: bold;
  color: ${props => color[props.color].darker};
  background: ${props => color[props.color].gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export default {
  components: {
    StyledBorder,
    StyledBorderLink,
    StyledBtn,
    StyledText
  },
  props: {
    theme: { type: String, default: 'main' },
    link: { type: Boolean, default: false }
  }
}
</script>
