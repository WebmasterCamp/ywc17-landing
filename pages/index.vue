<template>
  <div class="container">
    <Hero />
    <WhatIsYWC />
    <Majors />
  </div>
</template>

<script>
import WhatIsYWC from '~/components/sections/WhatIsYWC.vue'
import Majors from '~/components/sections/Majors.vue'

export default {
  components: {
    Hero: () => import('~/components/sections/Hero'),
    WhatIsYWC,
    Majors
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
