<template>
  <div class="circle">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>

<style lang="scss">
  @import '~/assets/css/global.scss';

  .circle {
    border-radius: 50%;
    width: 144px;
    height: 144px;
    background-color: white;
    border: 4px solid $primary-color;
  }
</style>
