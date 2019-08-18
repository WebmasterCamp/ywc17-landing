<template>
  <picture>
    <source :srcset="webp" type="image/webp">
    <img :src="defaultImage" :alt="alt" />
  </picture>
</template>

<script lang="ts">
import Vue from 'vue'

interface GetImageParams {
  type: string
}

export default Vue.extend({
  props: {
    fileName: {
      default: '',
      type: String
    },
    alt: {
      default: '',
      type: String
    },
    defaultType: {
      default: 'png',
      type: String
    }
  },
  computed: {
    defaultImage (): Function {
      return this.getImage({ type: this.defaultType })
    },
    webp (): Function {
      return this.getImage({ type: 'webp' })
    }
  },
  methods: {
    getImage ({ type }: GetImageParams): Function {
      return require('~/assets/images/' + this.fileName + '.' + type)
    }
  }
})
</script>

<style lang="scss">

</style>
