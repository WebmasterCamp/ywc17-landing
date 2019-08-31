<template>
  <section class="continaer">
    <div class="location" :style="{height: '600px',backgroundColor: 'white',position: 'relative'}">
      <div class="icon-container">
      <div class="icon">LO<br/>CA<br/>TI<br/>ON</div>
      </div>
<div class="location-content">
  <div class="video">

  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/bwmSjveL3Lc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
  </div>
  <div class="detail">
    <span class="highlight">สถาบันเทคโนโลยี</span>
    <br/>
    พระจอมเกล้าเจ้าคุณทหารลาดกระบัง
  </div>
</div>
    </div>
  </section>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
  components: {
  }
})
</script>

<style lang="scss" scoped>
.location {
  margin:5rem 0;
  background-image: url(~assets/images/location.png);
  background-repeat: no-repeat;
  background-size :100% 100%;
  
    display: grid;
  @media screen and (min-width: 768px) {
  grid-template-columns: 1fr 2.5fr;
    }
  @media(max-width:768px) {
    grid-template-rows: 1fr 6fr;
  }
}
.icon-container {
  display: flex;
  justify-content: flex-end;
  @media(max-width:768px) {
    justify-content: center;
  }
}
.detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Montserrat;
  text-align: right;
  font-size: 2.5rem;
  margin: 3rem 0;
  @media(max-width:768px) {
    font-size: 22px;
    line-height: 1em;
  }
}
br {
  @media(max-width:768px) {
    display: none;
  }
}
section {
  padding: 0;
}
.icon {
  position: absolute;
    top: -50px;
    font-size: 4rem;
    line-height: 7rem;
    font-weight: 600;
    -webkit-text-stroke-color: white;
    -webkit-text-stroke-width: 2px;
    color: transparent;
  @media screen and (min-width: 768px) {
  letter-spacing: 1.5rem;
    font-size: 6rem;

    }
}
.location-content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
padding: 2rem 4rem 0 5rem;
  @media(max-width:768px) {
  padding:5% 5% 0 5%;

  }
}
.video {
  width: 100%;
  height: 100%;
}
.highlight {
  color: transparent;
  -webkit-text-stroke-color: white;
  -webkit-text-stroke-width: 0.5px; 
  text-align: right;
}

</style>
