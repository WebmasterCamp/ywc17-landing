<template>
  <SponsorBadge :size="size">
    <a href="https://www.dek-d.com" target="_blank">
      <img :src="image" alt="">
    </a>
  </SponsorBadge>
</template>

<script>
import styled from 'vue-styled-components'
import color from '~/utils/color'

const size = {
  lg: {
    smallMobile: 120,
    mobile: 160
  },
  md: {
    smallMobile: 105,
    mobile: 128
  },
  sm: {
    smallMobile: 90,
    mobile: 102 
  }
}

const circleProps = {
  size: String
}

const SponsorBadge = styled('div', circleProps)`
  background: white;
  border-radius: 50%;
  border: 4px solid ${color.primary};
  width: ${props => size[props.size].smallMobile}px;
  height: ${props => size[props.size].smallMobile}px;
  max-width: 100%;
  overflow: hidden;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 375px) {
    width: ${props => size[props.size].mobile}px;
    height: ${props => size[props.size].mobile}px;
  }  
`

export default {
  components: {
    SponsorBadge
  },
  props: {
    size: {
      type: String,
      default: 'md'
    },
    fileName: {
      type: String,
      default: 'webmaster-association'
    },
    link: {
      type: String,
      default: '#'
    }
  },
  computed: {
    image () {
      return require('~/assets/images/' + this.fileName + '.png')
    }
  }
}
</script>
