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
  $small-size: 70px;
  $normal-size: 90px;

  .circle {
    width: $small-size;
    height: $small-size;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      picture {
        img {
          width: 100%;
        }
      }
    }

    @media screen and (min-width: 768px) {  
      width: $normal-size;
      height: $normal-size;
    }
  }
</style>
