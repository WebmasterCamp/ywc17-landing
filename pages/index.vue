<template>
  <div>
    <Hero />
    <GradientButton link href="https://www.facebook.com/ywcth/live" target="_blank" theme="yellow" class="cta-button">ถ่ายทอดสด</GradientButton>
    <WhatIsYWC />
    <Majors />
    <Location />
    <Timeline />
    <Guru />
    <Gallery />
    <Sponsor />
    <QA />
    <FollowUs />
    <Footer />
    <PR />
  </div>
</template>

<script>
import GradientButton from '~/components/GradientButton'
import WhatIsYWC from '~/components/sections/WhatIsYWC'
import Hero from '~/components/sections/Hero'
import Timeline from '~/components/sections/Timeline.vue'
export default {
  components: {
    Hero,
    GradientButton,
    WhatIsYWC,
    Location: () => import('~/components/sections/Location'),
    Timeline,
    Guru: () => import('~/components/sections/Guru'),
    Majors: () => import('~/components/sections/Majors'),
    QA: () => import('~/components/sections/QA'),
    FollowUs: () => import('~/components/sections/FollowUs'),
    Sponsor: () => import('~/components/sections/Sponsor'),
    Gallery: () => import('~/components/sections/Gallery'),
    PR: () => import('~/components/sections/PR'),
    Footer: () => import('~/components/sections/Footer')
  }
}
</script>

<style>
.container {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
}
.cta-button {
  transform: scale(1.3);
  display: block !important;
  margin: 0 auto;
  animation: cta 0.9s alternate infinite ease-in;
}
@media screen and (max-width:768px) {
  .cta-button {
    transform: scale(1.1);
    animation: cta-mobile 0.9s alternate infinite ease-in;
  }
}
@keyframes cta {
  0%   {transform: scale(1.3);}
  100% {transform: scale(1.5);}
}
@keyframes cta-mobile {
  0%   {transform: scale(1.1);}
  100% {transform: scale(1.3);}
}
</style>
