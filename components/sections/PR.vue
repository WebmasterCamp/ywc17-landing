<template>
  <section class="container">
    <a href="/press" target="_blank"><GradientButton :theme="color" class="large">{{ title }}</GradientButton></a>
  </section>
</template>
<script>
import GradButton from '~/components/GradButton'
export default {
  components: {
    GradientButton: GradButton
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
}
a {
  text-decoration: none;
}
</style>
