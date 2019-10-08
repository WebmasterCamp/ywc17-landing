<template>
  <section class="hero">
    <div class="container">
      <Picture fileName="ywc-logo" alt="17th Young Webmaster Camp" class="ywc-logo" />
      <div class="branding">
        <Picture fileName="ywc17-logo" alt="Social Change, Arrange The World" />
        <div class="slogan">
          มิติใหม่
          <span class="slogan-secondary-text">เว็บสร้างสังคม</span>
        </div>
      </div>
    </div>
    <SponsorBox />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Picture from '~/components/Picture.vue'
import SponsorBox from '~/components/SponsorBox.vue'

export default Vue.extend({
  components: {
    Picture,
    SponsorBox
  }
})
</script>
<style lang="scss">
  .hero {
    background: url(/images/bg/hero.jpg) no-repeat top center;
    background-size: cover;
    // background-attachment: fixed;
    padding: 0;
    padding-top: 27.5px;

    .container {
      text-align: left;
      padding-left: 15px;
      padding-right: 15px;
    }

    // @media screen and (max-width:768px) {
    //   background-attachment: scroll;
    // }
  }

  .ywc-logo {
    img {
      width: 168px;
      height: 58px;
      @media screen and (max-width: 768px) {
          width: 126px;
          height: 43.5px;
      }
    }
  }
  .slogan {
    font-family: 'Maledpan', Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 36px;
    color: white;
    @media screen and (max-width: 768px) {
      font-size: 24px;
    }

    .slogan-secondary-text {
      color: #e2426f;
      font-style: italic;

    }
  }
  .branding {
    display: grid;
    grid-template-columns: auto;
    grid-row-gap: 30px;
    padding: 90px 0 30px;
    text-align: center;

    img {
      max-width: 462px;
      @media screen and (max-width: 768px) {
        max-width: 288.75px !important;
        width: 80%;
      }
    }
  }

  .logos-box {
    padding-bottom: 30px;
  }

  .logos {
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-items: center;
    max-width: 300px;
    grid-row-gap: 20px;
    grid-column-gap: 1.5rem;
    margin: 0 auto;
    @media screen and (min-width: 576px) {
      grid-template-columns: repeat(3, auto);
      max-width: 500px;
    }
  }
</style>
