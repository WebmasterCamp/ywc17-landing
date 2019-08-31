<template>
  <section class="container">
    <SectionHead title="Sponsors" />
    <div class="sponsor-vip-wrapper">
      <SponsorCircle
        :transparent="true"
        size="lg"
        fileName="sponsors/1-1-ExxonMobil.svg"
        link="https://www.facebook.com/exxonmobilthailand/"
        alt="exxon mobil"
      />
      <SponsorCircle
        :transparent="true"
        size="lg"
        fileName="sponsors/1-2-TWA.svg"
        link="https://www.webmaster.or.th/"
        alt="webmaster association"
      />
      <SponsorCircle
        :transparent="true"
        size="lg"
        fileName="sponsors/1-3-ITKMITL.svg"
        link="https://www.it.kmitl.ac.th/"
        alt="it kmitl"
      />
    </div>
    <!-- <div class="sponsor-gold-wrapper">
      <SponsorCircle size="md" fileName="sponsors/vip/webmaster-association" link="#" alt="temp" />

      <SponsorCircle size="md" fileName link="#" alt />
      <SponsorCircle size="md" fileName link="#" alt />
      <SponsorCircle size="md" fileName link="#" alt />
      <SponsorCircle size="md" fileName link="#" alt />
      <SponsorCircle size="md" fileName link="#" alt />
    </div> -->
    <div class="sponsor-silver-wrapper">
      <SponsorCircle 
        size="sm" 
        fileName="sponsors/3-1-MangoZero.svg" 
        link="#" 
        alt="mango"
        :transparent="true"
       />
      <SponsorCircle 
        size="sm" 
        fileName="sponsors/3-2-Pantip.svg" 
        link="#" 
        alt="pantip" 
        :transparent="true"
      />
      <SponsorCircle 
        size="sm" 
        fileName="sponsors/3-3-Dek-D.svg" 
        link="#" 
        alt="dekd" 
        :transparent="true"
      />
      <SponsorCircle 
        size="sm" 
        fileName="sponsors/3-5-THNIC.svg" 
        link="#" 
        alt="thnic" 
        :transparent="true"
      />
      <!-- <SponsorCircle size="sm" fileName link="#" alt="temp" />
      <SponsorCircle size="sm" fileName link="#" alt="temp" />
      <SponsorCircle size="sm" fileName link="#" alt="temp" />
      <SponsorCircle size="sm" fileName link="#" alt="temp" /> -->
    </div>
  </section>
</template>
  
<script>
import SectionHead from '~/components/SectionHead'

export default {
  components: {
    SectionHead,
    SponsorCircle: () => import('~/components/SponsorCircle')
  }
}
</script>
<style scoped>
section {
  margin-top: 70px;
}
</style>
<style lang="scss" scoped>
section {
  padding-bottom: 60px;
}
.sponsor-vip-wrapper {
  width: fit-content;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-items: center;
  grid-row-gap: 20px;
  align-items: center;
  // HANDLE 3 LOGO, CAN BE REMOVED IF ADD MORE LOGO
  @media screen and (max-width: 768px) {
    & > div:last-child {
      grid-column: 1 / span2;
    }
  }
  //////////////////////////////////////////////////
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 33%);
  }
  
}
.sponsor-gold-wrapper {
  width: 80%;
  min-width: 260px;

  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, auto);
  grid-gap: 15px;
  margin: 15px auto;

  @media screen and (min-width: 375px) {
    min-width: 300px;
  }
  @media screen and (min-width: 768px) {
    width: 485px;
    grid-gap: 20px;
    grid-template-columns: repeat(3, auto);
  }
}
.sponsor-silver-wrapper {
  // width: 500px;
  width: 70%;
  min-width: 220px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, auto);
  grid-gap: 20px;
  margin: 15px auto;

  @media screen and (min-width: 768px) {
    // width: 485px;
    grid-gap: 20px;
    grid-template-columns: repeat(4, auto);
  }
}
</style>
