<template>
  <section class="container">
    <SectionHead title="Sponsors" />
    <div class="sponsor-vip-wrapper">
      <SponsorCircle
        size="lg"
        fileName="sponsors/vip/exxon-mobil"
        link="https://www.facebook.com/exxonmobilthailand/"
        alt="exxon mobil"
      />
      <SponsorCircle
        size="lg"
        fileName="sponsors/vip/webmaster-association"
        link="https://www.webmaster.or.th/"
        alt="webmaster association"
      />
      <SponsorCircle
        size="lg"
        fileName="sponsors/vip/it-kmitl"
        link="https://www.it.kmitl.ac.th/"
        alt="it kmitl"
      />
      <SponsorCircle
        size="lg"
        fileName=""
        link="#"
        alt=""
      />
    </div>
    <div class="sponsor-gold-wrapper">
      <SponsorCircle
        size="md"
        fileName="sponsors/vip/webmaster-association"
        link="#"
        alt="temp"
      />
      
      <SponsorCircle
        size="md"
        fileName=""
        link="#"
        alt=""
      />
      <SponsorCircle
        size="md"
        fileName=""
        link="#"
        alt=""
      />
      <SponsorCircle
        size="md"
        fileName=""
        link="#"
        alt=""
      />
      <SponsorCircle
        size="md"
        fileName=""
        link="#"
        alt=""
      />
      <SponsorCircle
        size="md"
        fileName=""
        link="#"
        alt=""
      />
    </div>
    <div class="sponsor-silver-wrapper">
      <SponsorCircle
        size="sm"
        fileName="sponsors/vip/webmaster-association"
        link="#"
        alt="temp"
      />
      <SponsorCircle
        size="sm"
        fileName=""
        link="#"
        alt="temp"
      />
      <SponsorCircle
        size="sm"
        fileName=""
        link="#"
        alt="temp"
      />
      <SponsorCircle
        size="sm"
        fileName=""
        link="#"
        alt="temp"
      />
      <SponsorCircle
        size="sm"
        fileName=""
        link="#"
        alt="temp"
      />
      <SponsorCircle
        size="sm"
        fileName=""
        link="#"
        alt="temp"
      />
      <SponsorCircle
        size="sm"
        fileName=""
        link="#"
        alt="temp"
      />
      <SponsorCircle
        size="sm"
        fileName=""
        link="#"
        alt="temp"
      />
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

<style lang="scss" scoped>
section {
  padding-bottom: 60px;
}
.sponsor-vip-wrapper {
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-items: center;
  grid-row-gap: 20px;
  align-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 25%);    
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
