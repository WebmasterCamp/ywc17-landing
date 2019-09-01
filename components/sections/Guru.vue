<template>
  <section class="container">
    <SectionHead title="Guru" align="left" class="height" style="position: sticky; top: 0;" />
    <Guru :standalone="true" class="position-relative">
      <GuruPic :standalone="true">
        <Picture :fileName="`guru/${gurus[currentGuru].img}`" />
      </GuruPic>
      <h3>{{ gurus[currentGuru].name }}</h3>
      <p v-html="gurus[currentGuru].role" />
    </Guru>
    <Gurus class="position-relative">
      <Guru
        v-for="(g, idx) in gurus"
        :id="`gurupic-${idx}`"
        :key="`guru-${idx}`"
      >
        <GuruPic :class="{'active': idx === currentGuru}" @click="selectGuru(idx)">
          <Picture :fileName="`guru/${g.img}`" :alt="g.name" />
        </GuruPic>
        <h3>{{ g.name }}</h3>
        <p v-html="g.role" />
      </Guru>
    </Gurus>
  </section>
</template>
<style scoped>
section {
  margin-top: 100px;
}
.height {
  height: 100px;
  text-align: center;
}
/* @media screen and (max-width:960px)  {
  .height {
    height: 80px;
    text-align: center; 
  }
} */
</style>
<script>
import styled from 'vue-styled-components'
import color from '~/utils/color'

import SectionHead from '~/components/SectionHead.vue'
import Picture from '~/components/Picture.vue'

const dispProp = { standalone: Boolean }
const Gurus = styled.div`
  /*display: grid;
  grid-template-columns: repeat(4, 22%);
  grid-column-gap: 27px;
  grid-row-gap: 27px;
  align-items: start;

  @media screen and (max-width:960px) {*/
    display: block;
  @media screen and (max-width:960px) {
    white-space: nowrap;
    text-align: left;
  }
    overflow: hidden;
    overflow-x: auto;
    h3, p {
      display: none;
    }
  /*}*/
`
const Guru = styled('div', dispProp)`
  display: inline-grid;
  font-family: 'Sarabun';

  h3 {
    font-family: 'Maledpan', 'Sarabun';
    margin-bottom: 0;
    color: ${color.main};
  }
  p {
    font-size: 14px;
    font-weight: bold;
  }
  ${props => !props.standalone ? `/*@media screen and (max-width:960px) {*/
    display: inline-block;
    margin: 5px;
  /*}*/` : `/*display: none;*/
  min-height: 350px;
  @media screen and (max-width:960px) {
    display: block;
    transition: all .3s;
  }`}
`
const GuruPic = styled('div', dispProp)`
  width: 210px;
  height: 210px;
  border-radius: 50%;
  background: gray;
  user-select: none;
  margin: 0 auto;
  cursor: pointer;
  img {
    margin-top: 0px;
    width: 100%;
    height: auto;
    border-radius: 50%;
    user-drag: none;
  }

  &:hover {
    background: ${color.main};
    transition: all .3s;
    img {
      filter: none;
    }
  }

  text-align: right;
  overflow: hidden;
  ${props => !props.standalone ? `/*cursor: default;
  @media screen and (max-width:960px) {*/
    width: 105px;
    height: 105px;
  /*}*/
  img {
    filter: grayscale(100%);
  }` : `cursor: default;
  background: ${color.main};`}

  /*@media screen and (max-width:960px) {*/
    &.active {
      background: ${color.main};
      transition: all .3s;
      img {
        filter: none;
      }
    }
  /*}*/
`

export default {
  components: {
    SectionHead,
    Picture,
    Gurus,
    Guru,
    GuruPic
  },
  data () {
    return {
      currentGuru: 0,
      gurus: [
        { img: 1, name: 'วโรรส โรจนะ (โน้ต)', role: `CEO Dek-D Interactive Co., Ltd.<br>นายกสมาคมผู้ดูแลเว็บไทย` },
        { img: 2, name: 'อภิศิลป์ ตรุงกานนท์ (บอย)', role: `Co-founder & Chief Technology Officer, Pantip.com` },
        { img: 3, name: 'ขจร เจียรนัยพานิชย์ (เอ็ม)', role: `Executive Editor - MangoZero.com The Zero Publishing` },
        { img: 4, name: 'ณปสก สันติสุนทรกูล (ปอล)', role: `COO, Dek-D Intertactive Co., Ltd.` },
        { img: 5, name: 'คนที่หนึ่ง แสงหิรัญ (หนึ่ง)', role: `อาจารย์ประจำภาควิชาสาขาการออกแบบนิเทศศิลป์ คณะนิเทศศาสตร์ มหาวิทยาลัยอัสสัมชัญ` },
        { img: 6, name: 'อินทนนท์ ปัญญาโสภา (เบนซ์)', role: `ผู้ก่อตั้งเว็บไซต์ Grappik` },
        { img: 7, name: 'เจริญ ลักษณ์เลิศกุล (เจ)', role: `Associate Director - Strategic planning หน่วยงาน Online Station (True Visions Group Co., Ltd.)` },
        { img: 8, name: 'เมธปริยา คำนวนวุฒิ (ว่าน)', role: `Head of Marketing Lnw Co., Ltd.` }
      ]
    }
  },
  mounted () {
    setInterval(() => {
      let nextGuru = this.currentGuru + 1
      if (nextGuru >= this.gurus.length) {
        nextGuru = 0
      }
      this.currentGuru = nextGuru
      if (process.client) {
        const target = document.getElementById(`gurupic-${nextGuru}`)
        target.parentNode.scrollLeft = target.offsetLeft - 5
      }
    }, 3000)
  },
  methods: {
    selectGuru (id) {
      this.currentGuru = id
    }
  }
}
</script>
