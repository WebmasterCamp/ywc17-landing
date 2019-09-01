<template>
  <SponsorBadge :size="size" :transparent="transparent">
    <a :href="link" target="_blank">
      <Picture v-if="fileName != ''" :fileName="fileName" :alt="alt" :defaultType="type" />
    </a>
  </SponsorBadge>
</template>

<script>
import styled from 'vue-styled-components'
import color from '~/utils/color'

const size = {
  lg: {
    picSize: 140, // 100
    smallMobile: 120,
    mobile: 140
  },
  md: {
    picSize: 128, // 80
    smallMobile: 105,
    mobile: 128
  },
  sm: {
    picSize: 102, // 64
    smallMobile: 90,
    mobile: 102
  }
}

const circleProps = {
  size: String,
  transparent: Boolean
}

const SponsorBadge = styled('div', circleProps)`
  background: ${props => (props.transparent ? 'transparent' : 'white')};
  /* border-radius: 50%; */
  border: 4px solid
    ${props => (props.transparent ? 'transparent' : color.primary)};
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

    picture {
      width: ${props => size[props.size].picSize}px;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media screen and (min-width: 375px) {
    width: ${props => size[props.size].mobile}px;
    height: ${props => size[props.size].mobile}px;
  }
`

export default {
  components: {
    SponsorBadge,
    Picture: () => import('~/components/Picture')
  },
  props: {
    size: {
      type: String,
      default: 'md'
    },
    fileName: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '#'
    },
    alt: {
      type: String,
      default: ''
    },
    transparent: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'png'
    }
  },
  computed: {
    image () {
      return require('~/assets/images/' + this.fileName)
    }
  }
}
</script>
