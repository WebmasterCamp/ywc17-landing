<template>
  <div class="container">
    <WhatIsYWC />
    <Majors />
  </div>
</template>

<script>
import WhatIsYWC from '~/components/sections/WhatIsYWC.vue'
import Majors from '~/components/sections/Majors.vue'

export default {
  components: {
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
