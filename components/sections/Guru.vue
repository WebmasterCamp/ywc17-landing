<template>
  <section class="container">
    <SectionHead title="Guru" align="left" style="height: 64px;" />
    <Gurus>
      <Guru v-for="(g, idx) in gurus" :key="`guru-${idx}`">
        <GuruPic>
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

const Gurus = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 20%);
  grid-column-gap: 54px;
  grid-row-gap: 27px;
`
const Guru = styled.div`
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
`
const GuruPic = styled.div`
  width: 210px;
  height: 210px;
  border-radius: 50%;
  background: gray;
  img {
    filter: grayscale(100%);
    margin-top: 0px;
    width: 100%;
    height: auto;
    border-radius: 50%;
    transition: all .3s ease-in-out;
  }

  &:hover {
    background: pink;
    img {
      filter: none;
      transform: scale(1.15);
    }
  }

  text-align: right;
  overflow: hidden;
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
      gurus: [
        { name: 'วโรรส โรจนะ (โน้ต)', role: `CEO Dek-D Interactive Co., LTD.<br>นายกสมาคมผู้ดูแลเว็บไทย` }
      ]
    }
  }
}
</script>
