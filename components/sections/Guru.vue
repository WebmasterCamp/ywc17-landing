<template>
  <section class="container">
    <SectionHead title="Guru" align="left" style="height: 64px;" />
    <Guru :standalone="true">
      <GuruPic :standalone="true">
        <Picture :fileName="`guru/${currentGuru+1}`" />
      </GuruPic>
      <h3>{{ gurus[currentGuru].name }}</h3>
      <p v-html="gurus[currentGuru].role" />
    </Guru>
    <Gurus>
      <Guru v-for="(g, idx) in gurus" :key="`guru-${idx}`">
        <GuruPic :class="{'active': idx === currentGuru}" @click="selectGuru(idx)">
          <Picture :fileName="`guru/${idx+1}`" :alt="g.name" />
        </GuruPic>
        <h3>{{ g.name }}</h3>
        <p v-html="g.role" />
      </Guru>
    </Gurus>
  </section>
</template>
<script>
import styled from 'vue-styled-components'
import color from '~/utils/color'

import SectionHead from '~/components/SectionHead.vue'
import Picture from '~/components/Picture.vue'

const dispProp = { standalone: Boolean }
const Gurus = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 22%);
  grid-column-gap: 27px;
  grid-row-gap: 27px;

  @media screen and (max-width:960px) {
    display: block;
    overflow: hidden;
    overflow-x: auto;
    text-align: left;
    h3, p {
      display: none;
    }
  }
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
  ${props => !props.standalone ? `@media screen and (max-width:960px) {
    display: inline-block;
    margin: 5px;
  }` : `display: none;
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
  ${props => !props.standalone ? `cursor: default;
  @media screen and (max-width:960px) {
    width: 105px;
    height: 105px;
  }
  img {
    filter: grayscale(100%);
  }` : `background: ${color.main};`}

  @media screen and (max-width:960px) {
    &.active {
      background: ${color.main};
      transition: all .3s;
      img {
        filter: none;
      }
    }
  }
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
        { name: 'วโรรส โรจนะ (โน้ต1)', role: `CEO Dek-D Interactive Co., LTD.<br>นายกสมาคมผู้ดูแลเว็บไทย` },
        { name: 'วโรรส โรจนะ (โน้ต2)', role: `CEO Dek-D Interactive Co., LTD.<br>นายกสมาคมผู้ดูแลเว็บไทย` },
        { name: 'วโรรส โรจนะ (โน้ต3)', role: `CEO Dek-D Interactive Co., LTD.<br>นายกสมาคมผู้ดูแลเว็บไทย` }
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
    }, 3000)
  },
  methods: {
    selectGuru (id) {
      this.currentGuru = id
    }
  }
}
</script>
