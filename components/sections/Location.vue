<template>
  <section>
    <div class="location" :style="{height: '600px',position: 'relative'}">
      <div class="icon-container">
        <div class="icon">LO<br />CA<br />TI<br />ON</div>
      </div>
      <div class="location-content">
        <div class="video">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.793301226501!2d100.77898871535137!3d13.730960501474286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d66308ce98ffd%3A0xcb43a76f038c38ca!2sFaculty%20of%20Information%20Technology!5e0!3m2!1sen!2sth!4v1567244733954!5m2!1sen!2sth" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>      
      </div>
    </div>
    <div class="detail">
      <span class="highlight">สถาบันเทคโนโลยี</span>
      <br />
      พระจอมเกล้าเจ้าคุณทหารลาดกระบัง
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
section {
  margin:5rem 0;
  background-image: url(/images/bg/location.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding-bottom: 5px;
  @media screen and (max-width:768px) {
    margin: 100px 0;
  }
}
.location {
  
    display: grid;
  grid-template-columns: 1fr 2.5fr;
  
  @media(max-width:768px) {
    grid-template-columns: unset;
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
  font-family: 'Maledpan';
  font-weight: bold;
  line-height: 0.5;
  text-align: right;
  font-size: 48px;
  margin: 3rem 0;
  padding-right: 4rem;
  @media(max-width:768px) {
    font-size: 22px;
    line-height: 1em;
    margin: 1rem 0;
    padding-right: 5%;
  }
}
br {
  @media(max-width:768px) {
    display: none;
  }
}
.icon {
  position: absolute;
  top: -55px;
  font-size: 40px;
  letter-spacing: .4rem;
  line-height: 7rem;
  font-family: Montserrat;
  font-weight: 600;
  -webkit-text-stroke-color: rgba(255, 255, 255, 0.6);
  -webkit-text-stroke-width: 1.5px;
  color: transparent;
  user-select: none;
  @media screen and (min-width: 768px) {
    letter-spacing: 1.5rem;
    font-size: 6rem;
    top: -50px;
  }
}
.location-content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 3rem 4rem 0 5rem;
  @media(max-width:768px) {
    padding: 5% 5% 0 5%;
    margin-top: -50px;
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
