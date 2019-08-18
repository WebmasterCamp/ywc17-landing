<template>
  <section>
    <div class="branding">
      <Picture fileName="ywc-logo" alt="YWC logo" />
      <Picture fileName="ywc17-logo" alt="YWC17 branding" />
      <div class="slogan">
        มิติใหม่
        <span class="slogan-secondary-text">เว็บสร้างสังคม</span>
      </div>
    </div>
    <div class="sponsors">
      <SponsorBadge />
      <SponsorBadge />
      <SponsorBadge />
      <SponsorBadge />
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
  .slogan {
    font-family: 'Maledpan', Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 36px;
    color: #585858;

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
  }

  .sponsors {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    justify-items: center;
    grid-row-gap: 20px;
    @media screen and (min-width: 376px) {   
      grid-template-columns: repeat(4, 25%);
      max-width: 750px;
      margin: auto;
    }
  }
</style>
