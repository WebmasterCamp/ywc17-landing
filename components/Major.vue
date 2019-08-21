<template>
  <div>
    <Picture :fileName="image" :alt="image" />
    <Title :color="color">{{ title }}</Title>
    <GradientButton
      :theme="color"
      @click="openDetail"
    >
      ดูรายละเอียด
    </GradientButton>
    <slot
      :show="show"
      :title="title"
      @dismiss="dismissOverlay"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import styled from 'vue-styled-components'
import color from '~/utils/color'

const TitleProps = { color: String }

const Title = styled('div', TitleProps)`
  color: ${props => color[props.color].normal};
  font-weight: bold;
  margin: 20px 0 40px;
`

export default Vue.extend({
  components: {
    Picture: () => import('~/components/Picture.vue'),
    GradientButton: () => import('~/components/GradButton'),
    Title
  },
  props: {
    title: {
      default: '',
      type: String
    },
    color: {
      default: '',
      type: String
    },
    image: {
      default: '',
      type: String
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    openDetail () {
      document.querySelector('body').style.overflow = 'hidden'
      this.show = !this.show
    },
    dismissOverlay () {
      document.querySelector('body').style.overflow = 'auto'
      this.show = false
    }
  }
})
</script>
