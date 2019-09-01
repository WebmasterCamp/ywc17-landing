<template>
  <section class="hero">
    <div class="container">
      <Picture fileName="ywc-logo" alt="YWC logo" class="ywc-logo" />
      <div class="branding">
        <Picture fileName="ywc17-logo" alt="YWC17 branding" />
        <div class="slogan">
          มิติใหม่
          <span class="slogan-secondary-text">เว็บสร้างสังคม</span>
        </div>
      </div>
    </div>
    <div class="logos-box">
      <div class="logos">
        <SponsorBadge fileName="sponsors/1-1-ExxonMobil.svg" alt="ExxonMobil" link="https://www.facebook.com/exxonmobilthailand/" />
        <SponsorBadge fileName="sponsors/1-2-TWA.svg" alt="Thai Webmaster Association" link="https://www.webmaster.or.th/" />
        <SponsorBadge fileName="sponsors/1-3-ITKMITL.svg" alt="IT KMITL" link="https://www.it.kmitl.ac.th/" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Picture from '~/components/Picture.vue'
import SponsorBadge from '~/components/SponsorBadge.vue'

export default Vue.extend({
  components: {
    Picture,
    SponsorBadge
  }  
})
</script>
<style lang="scss">
  .hero {
    background: url(/images/bg/hero.jpg) no-repeat top center;
    background-size: cover;
    background-attachment: fixed;
    padding: 0;
    padding-top: 27.5px;

    .container {
      text-align: left;
      padding-left: 15px;
      padding-right: 15px;
    }
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
    padding: 100px 0;
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
    padding: 21px 0;
  }
  
  .logos {
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-items: center;
    grid-row-gap: 20px;
    @media screen and (min-width: 576px) {
      grid-template-columns: repeat(3, auto);
      max-width: 750px;
      margin: auto;
    }
  }
</style>
