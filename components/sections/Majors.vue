<template>
  <section>
    <SectionHead title="Register" />
    <GradButton theme="green">ดูรายละเอียด</GradButton>
    <GradButton theme="yellow">ดูรายละเอียด</GradButton>
    <GradButton theme="pink">ดูรายละเอียด</GradButton>
    <GradButton theme="blue">ดูรายละเอียด</GradButton>
  </section>
</template>
<script>
import SectionHead from '~/components/SectionHead.vue'
import GradButton from '~/components/GradButton.vue'
export default {
  components: {
    SectionHead,
    GradButton
  }
}
</script>
