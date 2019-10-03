<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
export default {
  head () {
    return {
      meta: [
        { name: 'og:url', content: `https://ywc17.ywc.in.th${this.$route.path}` }
      ]
    }
  },
  beforeCreate () {
    if (process.client) {
      document.getElementsByTagName('body')[0].removeAttribute('style')
    }
  }
}
</script>
