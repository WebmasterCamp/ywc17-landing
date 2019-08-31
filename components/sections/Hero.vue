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
    <div class="sponsors-box">
      <div class="sponsors">
        <SponsorBadge fileName="sponsors/vip/exxon-mobil" alt="exxon mobil" link="https://www.facebook.com/exxonmobilthailand/" />
        <SponsorBadge fileName="sponsors/vip/webmaster-association" alt="webmaster association" link="https://www.webmaster.or.th/" />
        <SponsorBadge fileName="sponsors/vip/it-kmitl" alt="it kmitl" link="https://www.it.kmitl.ac.th/" />
        <SponsorBadge fileName="sponsors/vip/webmaster-association" alt="" link="https://facebook.com" />
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
    background: url(~assets/images/hero.jpg) no-repeat top center;
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
  
  .sponsors-box {
    background: black;
    background: linear-gradient(to top, black 30%, rgba(0,0,0,0) 100%);
    padding: 21px 0;
  }
  
  .sponsors {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    justify-items: center;
    grid-row-gap: 20px;
    @media screen and (min-width: 576px) {
      grid-template-columns: repeat(4, 25%);
      max-width: 750px;
      margin: auto;
    }
  }
</style>
