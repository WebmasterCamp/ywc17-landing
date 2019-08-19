<template>
  <div class="container">
    <Hero />
    <WhatIsYWC />
    <Majors />
    <Timeline />
    <QA />
    <FollowUs />
  </div>
</template>

<script>
import WhatIsYWC from '~/components/sections/WhatIsYWC.vue'
import Majors from '~/components/sections/Majors.vue'
import Timeline from '~/components/sections/Timeline.vue'

export default {
  components: {
    Hero: () => import('~/components/sections/Hero'),
    WhatIsYWC,
    Majors,
    Timeline,
    QA: () => import('~/components/sections/QA'),
    FollowUs: () => import('~/components/sections/FollowUs')
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
