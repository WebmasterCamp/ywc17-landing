<template>
  <section class="container">
    <GradButton :theme="color" class="large" @click="openDetail">{{ title }}</GradButton>
    <FullscreenOverlay
      :show="show"
      :normal="true"
      @dismiss="dismissOverlay"
    >
      <template v-slot:content>
        <BannerItem v-for="(src, size) in bannerList" :key="size">
          <BannerCol>
            <img v-lazy="getSrc(size)" />
          </BannerCol>
          <BannerCol>
            ขนาด {{ size }}px
            <BannerButton color="pink" :href="getSrc(size)" target="_blank">ดาวน์โหลด</BannerButton>
            <BannerButton color="pink" @click="viewCode(getSrc(size, true))">{{ currentSrc === getSrc(size, true) ? 'ซ่อน' : 'แสดง' }} Code</BannerButton>
          </BannerCol>
        </BannerItem>
      </template>
      <template v-slot:footer>
        <textarea v-if="currentSrc" v-html="getBannerCode(currentSrc)"></textarea>
        <span v-else style="color: gray;margin:0 auto;">Code รูปภาพที่ท่านต้องการจะมาปรากฏที่นี่</span>
      </template>
    </FullscreenOverlay>
  </section>
</template>
<script>
import styled from 'vue-styled-components'
import GradButton from '~/components/GradButton'
import color from '~/utils/color'
const BannerItem = styled('div')`
  display: grid;
  grid-template-columns: 75% 25%;
  margin-bottom: 15px;
  @media screen and (max-width:768px) {
    grid-template-columns: auto;
  }
`
const BannerCol = styled('div')`
  display: inline-grid;
  align-content: start;
  a {
    box-sizing: border-box;
  }
  img {
    max-width: 95%;
    max-height: 50vh;
    object-fit: contain;
  }
  
  @media screen and (max-width:768px) {
    justify-content: center;
  }
`
const BannerButton = styled('a', { color: String })`
  width: 100%;
  height: 100%;
  font-family: 'Maledpan', 'Sarabun';
  font-weight: bold;
  font-size: 18px;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 1000px;
  height: 48px;
  background: ${props => color[props.color].darker};
  background: ${props => color[props.color].gradient};
  color: ${props => props.color === 'yellow' ? 'black' : 'white'};
  margin-top: 5px;

  &:hover {
    background: linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.25)), ${props => color[props.color].gradient};
  }
  &:active {
    background: ${props => color[props.color].darker};
    filter: brightness(75%);
  }
`
export default {
  components: {
    GradButton,
    BannerItem,
    BannerCol,
    BannerButton,
    FullscreenOverlay: () => import('~/components/FullscreenOverlay')
  },
  data () {
    return {
      show: false,
      title: 'ร่วมประชาสัมพันธ์โครงการ',
      color: 'pink',
      currentSrc: '',
      bannerList: {
        '160x600': '',
        '300x50': '',
        '300x250': '',
        '300x600': '',
        '320x50': '',
        '320x100': '',
        '728x90': '',
        '970x250': '',
        '1200x628': ''
      }
    }
  },
  methods: {
    openDetail () {
      document.querySelector('body').style.overflow = 'hidden'
      this.show = !this.show
    },
    dismissOverlay () {
      document.querySelector('body').style.overflow = 'auto'
      this.show = false
    },
    viewCode (src) {
      if (src === this.currentSrc) {
        this.currentSrc = ''
      } else {
        this.currentSrc = src
      }
    },
    getSrc (size, notLocal) {
      let ext = 'gif'
      if (size === '1200x628') {
        ext = 'png'
      }
      return `${notLocal ? 'https://ywc17.ywc.in.th' : ''}/images/banner/${size}.${ext}`
    },
    getBannerCode (src, withoutATag) {
      const imgTag = `<img src="${src}" alt="17th Young Webmaster Camp">`
      if (withoutATag) {
        return imgTag
      }
      return `<a href="https://bit.ly/YWC17-banner">${imgTag}</a>`
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
</style>
