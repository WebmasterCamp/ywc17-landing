<template>
  <section class="container">
    <SectionHead title="Sponsors" class="height" style="position: sticky; top: 0;" />
    <div class="sponsor-vip-wrapper position-relative">
      <SponsorCircle
        :transparent="true"
        size="lg"
        fileName="sponsors/1-2-TWA.svg"
        link="https://www.webmaster.or.th/"
        alt="Thai Webmaster Association"
      />
      <SponsorCircle
        :transparent="true"
        size="lg"
        fileName="sponsors/1-3-ITKMITL.svg"
        link="https://www.it.kmitl.ac.th/"
        alt="IT KMITL"
      />
      <SponsorCircle
        :transparent="true"
        class="exxonMobil"
        size="lg"
        fileName="sponsors/1-1-ExxonMobil.svg"
        link="https://corporate.exxonmobil.com/"
        alt="ExxonMobil"
      />
    </div>
    <div class="sponsor-gold-wrapper position-relative">
      <SponsorCircle
        size="md"
        fileName="sponsors/2-1-TOA.svg"
        link="https://www.toagroup.com/"
        alt="TOA"
        :transparent="true"
      />
    </div>
    <div class="sponsor-silver-wrapper position-relative">
      <SponsorCircle
        size="sm"
        fileName="sponsors/3-1-MangoZero.svg"
        link="https://www.mangozero.com/"
        alt="MangoZero"
        :transparent="true"
      />
      <SponsorCircle
        size="sm"
        fileName="sponsors/3-2-Pantip.svg"
        link="https://www.pantip.com/"
        alt="Pantip"
        :transparent="true"
      />
      <SponsorCircle
        size="sm"
        fileName="sponsors/3-3-Dek-D.svg"
        link="https://www.dek-d.com/"
        alt="Dek-D"
        :transparent="true"
      />
      <SponsorCircle
        size="sm"
        fileName="sponsors/3-4-CampHUB.svg"
        link="https://www.camphub.in.th/"
        alt="CampHUB"
        :transparent="true"
      />
      <SponsorCircle
        size="sm"
        fileName="sponsors/3-5-THNIC.svg"
        link="https://www.thnic.co.th/"
        alt="THNIC"
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
  margin-top: 100px;
}
@media screen and (max-width:768px) {
  .height {
    font-size: 36px;
  }
}
</style>
<style lang="scss">
.exxonMobil {
  width: 175px;
  a picture {
    width: 175px;
  }
}
</style>"
<style lang="scss" scoped>
section {
  padding-bottom: 60px;
}
.sponsor-vip-wrapper {
  width: fit-content;
  margin: auto;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-items: center;
  grid-column-gap: 1.5rem;
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
    grid-template-columns: repeat(3, auto);
  }

}
.sponsor-gold-wrapper {
  width: 80%;
  min-width: 260px;

  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, auto);
  grid-gap: 15px;
  margin: 30px auto;
  margin-bottom: 30px;

  @media screen and (min-width: 375px) {
    min-width: 300px;
  }
  @media screen and (min-width: 768px) {
    width: 485px;
    grid-gap: 20px;
    grid-template-columns: repeat(3, auto);
  }

  // HANDLE 1 LOGO, CAN BE REMOVED IF ADD MORE LOGO
  grid-template-columns: repeat(1, auto);
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(1, auto);
  }
  //////////////////////////////////////////////////
}
.sponsor-silver-wrapper {
  width: 100%;
  max-width: 700px;
  min-width: 220px;
  display: grid;
  justify-items: center;
  margin: 15px auto;
  grid-gap: 20px;
  grid-template-columns: repeat(5, auto);

  // HANDLE 3 LOGO, CAN BE REMOVED IF ADD MORE LOGO
  @media screen and (max-width: 768px) {
    & > div:last-child {
      grid-column: 1 / span2;
    }
  }
  //////////////////////////////////////////////////
  @media screen and (max-width: 768px) {
    // width: 485px;
    width: 70%;
    grid-template-columns: repeat(1, auto);
    grid-gap: 20px;
  }
}
</style>
