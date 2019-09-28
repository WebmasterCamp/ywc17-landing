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
        class="sp-ExxonMobil"
        size="lg"
        fileName="sponsors/1-1-ExxonMobil.svg"
        link="https://corporate.exxonmobil.com/"
        alt="ExxonMobil"
      />
    </div>
    <div class="sponsor-special-wrapper position-relative">
      <SponsorCircle
        class="sp-SCB"
        size="md"
        fileName="sponsors/2-1-SCB.svg"
        link="https://www.scb.co.th/"
        alt="SCB"
        :transparent="true"
      />
      <SponsorCircle
        class="sp-TMF"
        size="md"
        fileName="sponsors/2-2-Thai Media Fund.svg"
        link="http://www.thaimediafund.or.th/"
        alt="Thai Media Fund"
        :transparent="true"
      />
    </div>
    <div class="sponsor-gold-wrapper position-relative">
      <SponsorCircle
        class="sp-TOA"
        size="md"
        fileName="sponsors/2-3-TOA.svg"
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
        class="sp-Pantip"
        size="sm"
        fileName="sponsors/3-2-Pantip.svg"
        link="https://www.pantip.com/"
        alt="Pantip"
        :transparent="true"
      />
      <SponsorCircle
        class="sp-DekD"
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
        class="sp-THNIC"
        size="sm"
        fileName="sponsors/3-5-THNIC.svg"
        link="https://www.thnic.co.th/"
        alt="THNIC"
        :transparent="true"
      />
      <SponsorCircle
        class="sp-ANANDA"
        size="sm"
        fileName="sponsors/3-6-ANANDA.svg"
        link="https://www.ananda.co.th/"
        alt="Ananda"
        :transparent="true"
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
.sp-ExxonMobil {
  width: 210px !important;
  a picture {
    width: 210px !important;
    // @media screen and (min-width: 375px) {
    //   width: 180px !important;
    // }
  }
}
.sp-SCB {
  width: 170px !important;
  height: 125px !important;
  a picture {
    width: 170px !important;
  }
}
.sp-TMF {
  a picture {
    height: 96px !important;
  }
}
.sp-TOA {
  height: 90px !important;
  a picture {
    width: 80px !important;
    height: 80px !important;
    // @media screen and (min-width: 375px) {
    //   width: 80px !important;
    //   height: 80px !important;
    // }
  }
}
.sp-Pantip {
  a picture {
    width: 80px !important;
    height: 80px !important;
  }
}
.sp-DekD {
  a picture {
    width: 90px !important;
    height: 90px !important;
  }
}
.sp-THNIC {
  a picture {
    width: 80px !important;
    height: 80px !important;
  }
}
.sp-ANANDA {
  width: 100% !important;
  max-width: 120px !important;
  a picture {
    width: 100% !important;
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
  margin-bottom: 0;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-items: center;
  grid-column-gap: 1.5rem;
  grid-row-gap: 20px;
  align-items: center;
  // HANDLE 3 LOGO, CAN BE REMOVED IF ADD MORE LOGO
  @media screen and (max-width: 736px) {
    & > div:last-child {
      grid-column: 1 / span2;
    }
  }
  //////////////////////////////////////////////////
  @media screen and (min-width: 736px) {
    margin-bottom: 20px;
    grid-template-columns: repeat(3, auto);
  }

}
.sponsor-special-wrapper {
  width: 100%;
  max-width: 365px;
  min-width: 260px;

  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, auto);
  grid-gap: 10px;
  margin: auto;
  margin-top: 0;
  margin-bottom: 10px;

  @media screen and (min-width: 375px) {
    width: 80%;
    grid-gap: 15px;
    min-width: 300px;
  }
  @media screen and (min-width: 768px) {
    // width: 485px;
    grid-gap: 20px;
    grid-template-columns: repeat(2, auto);
  }
}
.sponsor-gold-wrapper {
  width: 100%;
  max-width: 365px;
  min-width: 260px;

  display: grid;
  justify-items: center;
  grid-template-columns: repeat(1, auto);
  grid-gap: 10px;
  margin: 10px auto;
  margin-bottom: 20px;

  @media screen and (min-width: 375px) {
    width: 80%;
    grid-gap: 15px;
    min-width: 300px;
  }
  @media screen and (min-width: 768px) {
    // width: 485px;
    grid-gap: 20px;
    grid-template-columns: repeat(1, auto);
  }
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

  // HANDLE 6 LOGO, CAN BE REMOVED IF ADD MORE LOGO
  @media screen and (min-width: 737px) {
    grid-row-gap: 0px;
    & > div:last-child {
      grid-column: 1 / span2;
    }
  }
  //////////////////////////////////////////////////
  @media screen and (max-width: 736px) {
    // width: 485px;
    width: 70%;
    max-width: 300px;
    grid-template-columns: repeat(2, auto);
    grid-gap: 20px;
  }
}
</style>
