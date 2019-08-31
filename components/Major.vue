<template>
  <div>
    <div :class="`major ${color}`" :style="imageStyle">
      <img
        class="major-image"
        src="~assets/images/register/web-developer.png"
        alt=""
        @click="openDetail"
      >
      <div :class="`title ${color}`">
        <span class="outline-text">Web</span>
        {{ title }}
      </div>
    </div>
    <slot
      :show="show"
      :title="title"
      @dismiss="dismissOverlay"
    />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  components: {
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
    },
    imageStyle: {
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

<style lang="scss">
.major {
  position: relative;
  width: 195px;
  transition: all 0.3s;

  &.blue {
    top: 50px;
  }
  &.yellow {
    top: 300px;
  }
  &.green {
    top: 280px;
  }
}
.major-image {
  width: 100%;
}
.title {
  width: 100%;
  position: absolute;
  padding: 0 8px;
  box-sizing: border-box;

  font-family: Montserrat, Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  font-size: 46px;
  width: 195px;
  text-align: left;
  word-wrap: break-word;
  hyphens: auto;
  line-height: 50px;

  &.blue {
    bottom: -68px;
  }
  &.yellow {
    top: -70px;
    text-align: right;
  }
  &.pink {
    bottom: -66px;
  }
  &.green {
    top: -50px;
    text-align: right;
  }
}
</style>
