<template>
  <div>
    {{ title }}
  </div>
</template>

<style scoped>
div {
  width: 335px;
  height: 112px;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: #E1426F;
  background: url(~assets/img/sectionHead.png) no-repeat center;
  background-size: 100% 100%;

  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 74px;

  text-align: center;
  text-transform: uppercase;

  color: #FFFFFF;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>

<script>
export default {
  props: {
    title: { type: String, default: 'Heading' }
  }
}
</script>
