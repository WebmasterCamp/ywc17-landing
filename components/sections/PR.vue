<template>
  <section class="container">
    <GradientButton :theme="color" class="large" link href="/press" target="_blank">{{ title }}</GradientButton>
  </section>
</template>
<script>
import GradientButton from '~/components/GradientButton'
export default {
  components: {
    GradientButton
  },
  data () {
    return {
      title: 'ร่วมประชาสัมพันธ์โครงการ',
      color: 'pink'
    }
  }
}
</script>
<style scoped>
section {
  margin-top: 70px;
  margin-bottom: 70px;
}
</style>
<style>
.large {
  display: block;
  margin: 0 auto;
  transform: scale(1.3);
  min-width: 220px;
  width: 50%;
}
a {
  text-decoration: none;
}
</style>
