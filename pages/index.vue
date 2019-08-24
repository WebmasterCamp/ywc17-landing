<template>
  <div class="container">
    <Hero />
    <WhatIsYWC />
    <Majors />
    <Timeline />
    <Gallery />
    <Sponsor />
    <QA />
    <FollowUs />
  </div>
</template>

<script>
import WhatIsYWC from '~/components/sections/WhatIsYWC'
import Hero from '~/components/sections/Hero'
import Timeline from '~/components/sections/Timeline.vue'
export default {
  components: {
    Hero,
    WhatIsYWC,
    Timeline,
    Majors: () => import('~/components/sections/Majors'),
    QA: () => import('~/components/sections/QA'),
    FollowUs: () => import('~/components/sections/FollowUs'),
    Sponsor: () => import('~/components/sections/Sponsor'),
    Gallery: () => import('~/components/sections/Gallery')
  }
}
</script>

<style>
.container {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
}
</style>
