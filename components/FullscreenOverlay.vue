<template>
  <Container v-if="show" :color="color" :exiting="exiting">
    <Header>
      <Title>{{ title }}</Title>
      <Count :color="color">
        <span>ยอดผู้สมัคร</span>
        <p>{{ count }} คน</p>
      </Count>
    </Header>
    <div class="content">
      <slot name="content" />
    </div>
    <BottomMenu>
      <BackButton
        :color="color"
        @click="dismiss"
      >
        <span class="arrow-icon"></span>
        ย้อนกลับ
      </BackButton>
      <RegisterButton :color="color" href="https://register.ywc.in.th">
        สมัครสาขานี้
      </RegisterButton>
    </BottomMenu>
  </Container>
</template>

<script>
import Vue from 'vue'
import styled, { css, keyframes } from 'vue-styled-components'
import color from '~/utils/color'

const withColorProps = {
  color: String
}

const containerProps = {
  color: String,
  exiting: Boolean
}

const fadein = keyframes`
  from { top: 100%; }
  to { top: 0; }
`

const fadeout = keyframes`
  from { top: 0; }
  to { top: 100%; }
`

const Container = styled('div', containerProps)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: ${props => color[props.color].gradientDarker};
  padding: 32px 24px 0;
  text-align: left;
  transition: all 0.3s;
  animation: ${fadein} 0.5s;

  ${props => props.exiting && `
    animation: ${fadeout} 0.5s;
  `};

  .content {
    height: calc(90% - 130px);
    overflow: hidden;
    overflow-y: auto;
  }
  .content p, .content li{
    font-weight: 300;
  }
  .content ol {
    padding-left: 24px;
  }
  .content h3 {
    font-family: 'Maledpan';
  }

`

const Header = styled.div`
  display: grid;
  grid-template-columns: auto 100px;

  font-family: 'Maledpan';
`

const Title = styled.h1`
  font-size: 32px;
  margin: 0;
`

const Count = styled('div', withColorProps)`
  text-align: right;
  font-size: 20px;

  span {
    }

  p {
    font-size: 32px;
    margin: 0.5em 0;
    font-weight: bold;
    color: ${props => color[props.color].normal};
  }
`

const BottomMenu = styled.div`
  background-color: #222;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 72px;
  padding: 16px 24px;
  
  font-family: 'Maledpan';

  display: grid;
  grid-template-columns: 108px auto;
  grid-column-gap: 12px;
  align-items: center;
`

const defaultButton = css`
  width: 100%;
  height: 100%;
  font-family: 'Maledpan';
  font-weight: bold;
  font-size: 18px;
  border: none;
  outline: none;
  cursor: pointer;
`

const BackButton = styled('button', withColorProps)`
  ${defaultButton};
  color: ${props => color[props.color].darker};
  background-color: transparent;


  .arrow-icon {
    width: 8px;
    height: 8px;
    position: relative;
    top: -2px;
    display: inline-block;
    border-left: 2px solid white;
    border-top: 2px solid white;
    transform: rotate(-45deg);
    border-color: ${props => color[props.color].darker};
  }
`

const RegisterButton = styled('a', withColorProps)`
  ${defaultButton};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 1000px;
  height: 48px;
  background: ${props => color[props.color].gradient};
  color: ${props => props.color === 'yellow' ? 'black' : 'white'};
`

export default Vue.extend({
  components: {
    Container,
    Header,
    Title,
    Count,
    BottomMenu,
    BackButton,
    RegisterButton
  },
  props: {
    count: {
      default: 0,
      type: Number
    },
    show: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      title: '',
      color: '',
      exiting: false
    }
  },
  mounted () {
    this.title = this.$parent.title
    this.color = this.$parent.color
  },
  methods: {
    dismiss () {
      this.showExitingAnimation()
    },
    showExitingAnimation () {
      this.exiting = true
      setTimeout(() => {
        this.$parent.dismissOverlay()
        this.exiting = false
      }, 500)
    }
  }
})
</script>
