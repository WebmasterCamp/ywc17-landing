<template>
  <div class="circle">
    <a :href="link" target="_blank">
      <Picture v-if="fileName != ''" :fileName="fileName" :alt="alt" />
    </a>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  components: {
    Picture: () => import('~/components/Picture')
  },
  props: {
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
    }
  },
  computed: {
    image () {
      return require('~/assets/images/' + this.fileName + '.png')
    }
  }
})
</script>

<style lang="scss">
  @import '~/assets/css/global.scss';
  $small-size: 130px;
  $normal-size: 144px;

  .circle {
    border-radius: 50%;
    width: $small-size;
    height: $small-size;
    background-color: white;
    border: 4px solid $primary-color;
    overflow: hidden;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    @media screen and (min-width: 375px) {  
      width: $normal-size;
      height: $normal-size;
    }
  }
</style>
