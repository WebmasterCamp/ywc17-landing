<template>
  <transition name="fade">
    <FullscreenContainer v-show="loading">
      <CenterContainer>
        <div>
          <p><img src="~/assets/images/ywc-logo.png" /></p>
          <a-spin>
            <a-icon slot="indicator" type="loading" style="font-size: 24px; color: white;" spin />
          </a-spin>
          &nbsp;
          โปรดรอสักครู่
        </div>
      </CenterContainer>
    </FullscreenContainer>
  </transition>
</template>
<script>
import styled from 'vue-styled-components'
const FullscreenContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(49.41deg, #C73884 7.27%, #E13C6F 51.46%, #9B308E 95.22%);
`
const CenterContainer = styled.div`
  max-width: 960px;
  width: 100%;
  height: 60%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  font-family: 'Maledpan', 'Sarabun';
  font-size: 24px;
  font-weight: bold;
  align-items: center;
  user-select: none;
  & > div {
    text-align: center;
  }
  p {
    margin-bottom: 90px;
  }
  img {
    width: 280px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media screen and (max-width: 576px) {
    font-size: 20px;
    p {
      margin-bottom: 60px;
    }
    img {
      width: 210px;
    }
  }
`
export default {
  components: {
    FullscreenContainer,
    CenterContainer
  },
  data: () => ({
    loading: false
  }),
  watch: {
    loading: (value) => {
      document.querySelector('body').style.overflow = (value === true) ? 'hidden' : 'auto'
    }
  },
  // mounted () {
  //   this.start()
  //   // setTimeout(this.finish, 3000)
  // },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>
<style lang="scss">
.anticon-spin::before {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
          animation: loadingCircle 1s infinite linear;
}
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
          animation: loadingCircle 1s infinite linear;
}
@-webkit-keyframes loadingCircle {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes loadingCircle {
  100% {
    transform: rotate(360deg);
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
