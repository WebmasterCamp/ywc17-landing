<template>
  <div class="secondary" :class="$route.name">
    <section class="container" v-show="!hideLogo">
      <nuxt-link to="/" class="ywc-logo" title="ไปยังหน้าแรกของ 17th Young Webmaster Camp"><Picture fileName="ywc-logo" alt="17th Young Webmaster Camp" /></nuxt-link>
    </section>
    <nuxt />
  </div>
</template>
<script>
import Picture from '~/components/Picture.vue'
export default {
  components: {
    Picture
  },
  head () {
    return {
      meta: [
        { name: 'og:url', content: `https://ywc17.ywc.in.th${this.$route.path}` }
      ]
    }
  },
  beforeCreate () {
    if (process.client) {
      document
        .getElementsByTagName('body')[0]
        .setAttribute('style', `background: #401b19;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(69.01deg, #C73884 7.27%, #E13C6F 51.46%, #9B308E 95.22%);
    background-size: cover;
    background-attachment: fixed;`)
    }
  },
  computed: {
    hideLogo () {
      return ['/announcement'].includes(this.$route.path)
    }
  }
}
</script>
<style lang="scss">
html {
  min-height: 100%;
}
div.secondary {
  margin-top: 40px;
  section {
    margin-top: 40px;
  }
  h1, h2, h3 {
    font-family: 'Maledpan';
  }
  .container {
    max-width: 960px;
    margin: 0 auto;
    text-align: left;
  }
  .ywc-logo {
    display: block;
    width: 168px;
    height: 58px;
    margin: 0 auto;
    margin-top: 40px;
    text-align: center;
    img {
      @media screen and (max-width: 768px) {
          width: 126px;
          height: 43.5px;
      }
    }
  }
  span.headline {
    line-height: 0;
  }
  h5.subhead {
    letter-spacing: 0.2em;
    line-height: 1.1;
    text-indent: -0.3em;
    font-family: 'Maledpan';
    font-weight: normal;
    font-size: 24px;
    color: #6C6C6C;
    user-select: none;
    margin: 0;
    margin-top: 10px;

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
  }
}
</style>
