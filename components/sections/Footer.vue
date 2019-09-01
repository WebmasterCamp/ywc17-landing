<template>
  <Footer>
    <SponsorBox />
    <p>
      Copyright 2003 - 2019.<br>
      Young Webmaster Camp, in associate with Thai Webmaster Association. All right reserved.
    </p>
  </Footer>  
</template>
<script>
import styled from 'vue-styled-components'
import SponsorBox from '~/components/SponsorBox.vue'
const Footer = styled.div`
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-size: 14px;
  text-align: center;
  margin-top: 128px;
  margin-bottom: 64px;
`
export default {
  components: {
    Footer,
    SponsorBox
  }
}
</script>
