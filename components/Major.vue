<template>
  <div style="max-width: 100%;">
    <div :class="`major ${color}`" :style="imageStyle" @click="openDetail">
      <div
        class="major-image" 
        :style="{backgroundImage: `url(/images/register/${image}.jpg)`}"
        :alt="`Web ${title}`"
      />
      <div :class="`title ${color}`">
        <span class="outline-text">Web</span>
        {{ title }}
      </div>
    </div>
    <!--<slot
      :show="show"
      :title="title"
      @dismiss="dismissOverlay"
    />-->
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

    }
    /* document.querySelector('body').style.overflow = 'hidden'
      this.show = !this.show
    },
    dismissOverlay () {
      document.querySelector('body').style.overflow = 'auto'
      this.show = false
    } */
  }
})
</script>

<style lang="scss">
.blackout .major-image {
  @media screen and (min-width:768px) {
    filter: grayscale(100%);
  }
}
.major {
  cursor: pointer;
  position: relative;
  width: 195px;
  max-width: 100%;

  &:nth-child(1) {
    top: 50px;
  }
  &:nth-child(2) {
    top: 300px;
  }
  &:nth-child(4) {
    top: 280px;
  }

  @media screen and (min-width:768px) {
    &:hover .major-image {
      background-size: 120% 120%;
    }
  }

  @media screen and (max-width:768px) {
    top: 0 !important;
    transform: none !important;
  }
}
.major-image {
  width: 100%;
  height: 262px;
  background-size: 100% 100%;
  transition: all 0.15s ease-in;
}
.title {
  width: 100%;
  position: absolute;
  padding: 0 8px;
  box-sizing: border-box;

  font-family: Montserrat, Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  font-size: 46px;
  text-align: left;
  word-wrap: break-word;
  hyphens: auto;
  line-height: 50px;

  &.blue {
    bottom: -20px;
    font-size: 38px;
    line-height: 40px;
    span {
      font-size: 46px;
      line-height: 50px;
    }
  }
  &.yellow {
    bottom: -25px;
    font-size: 50px;
    width: 85%;
    span {
      font-size: 46px;
    }
    @media screen and (max-width: 768px) {
      width: 90%;
    }
  }
  &.pink {
    top: -50px;
    text-align: right;
  }
  &.green {
    top: -50px;
    text-align: right;
  }

  @media screen and (max-width:768px) {
    &.yellow {
      bottom: 0px;
    }
    &.blue {
      bottom: 0px;
    }
    &.pink {
      top: 0px;
    }
    &.green {
      top: 0px;
    }
  }
}
</style>
