<template>
  <div>
    <h2 class="section-heading">โปรดเลือกสาขา</h2>
    <MajorRow>
      <Major
        v-for="(info, codename) in majors"
        :key="info[0]"
        :color="info[1]"
        :href="`${route}/${codename}/`"
        :class="{'unactive': selected && selected !== codename, 'selected': selected === codename}"
        @click.prevent="clickHandler(codename)"
      >
        <img :src="require(`~/assets/images/web-${codename}.png`)" />
        Web {{ info[0] }}
      </Major>
    </MajorRow>
  </div>
</template>
<script>
import styled from 'vue-styled-components'
import color from '~/utils/color'
import { majors } from '~/utils/const'
const MajorRow = styled('div')`
  display: grid;
  max-width: 1056px;
  margin: 0 auto;
  margin-top: 36px; 
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media screen and (max-width:768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const Major = styled('a', { color: String })`
  position: relative;
  display: inline-grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 17.5%;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;

  font-family: 'Maledpan';
  color: ${props => color[props.color].darker};
  font-weight: bold;
  font-size: 24px;

  height: 225px;
  padding: 12px 21.5px;
  background: #ffffff;
  box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  user-select: none;

  @media screen and (max-width:768px) {
    font-size: 22px;
    height: 96px;
    padding: 7px 15px;
    grid-template-rows: none;
    grid-template-columns: auto 76%;
  }
  @media screen and (max-width:576px) {
    font-size: 16px;
    grid-template-columns: none;
    grid-template-rows: 60px auto;
  }
  @media screen and (max-width:360px) {
    font-size: 14px;
  }
  @media screen and (max-width:332px) {
    font-size: 12px;
  }

  &.unactive {
    opacity: 0.5;
    &:hover {
      opacity: 0.8;
    }
  }

  @media screen and (min-width:768.1px) {
    &.selected::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -22px;
      margin-top: 10px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 22px 44px 22px;
      border-color: transparent transparent #ffffff transparent;
    }
  }

  img {
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
    margin-bottom: 16px;

    user-select: none;
    -webkit-user-drag: none;
    
    @media screen and (max-width:768px) {
      margin-bottom: 0;
    }
  }
`
export default {
  components: {
    MajorRow,
    Major
  },
  props: {
    selected: { type: String, default: '' },
    route: { type: String, default: '/interview' },
    clickHandler: { type: Function, default: () => {} }
  },
  data () {
    return {
      majors
    }
  }
}
</script>
