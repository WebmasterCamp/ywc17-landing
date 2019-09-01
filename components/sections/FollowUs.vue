<template>
  <section class="container">
    <SectionHead title="Follow Us" size="sm" />
    <Grid>
      <GridCol>
        <SocialBtn href="https://www.facebook.com/ywcth" target="_blank" title="Facebook">
          <SocialIcon fileName="facebook" alt="Facebook" />
        </SocialBtn>
      </GridCol>
      <GridCol>
        <SocialBtn href="https://twitter.com/ywcth" target="_blank" title="Twitter">
          <SocialIcon fileName="twitter" alt="Twitter" />
        </SocialBtn>
      </GridCol>
      <GridCol>
        <SocialBtn href="https://m.me/ywcth" target="_blank" title="Messenger">
          <SocialIcon fileName="messenger" alt="Messenger" />
        </SocialBtn>
      </GridCol>
      <GridCol>
        <SocialBtn href="https://instagram.com/ywcth" target="_blank" title="Instagram">
          <SocialIcon fileName="instagram" alt="Instagram" />
        </SocialBtn>
      </GridCol>
    </Grid>
  </section>
</template>
<script>
import styled from 'vue-styled-components'
import color from '~/utils/color'
import SectionHead from '~/components/SectionHead.vue'
import Picture from '~/components/Picture.vue'

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  max-width: 416px;
  margin: 0 auto;

  @media(max-width:768px) {
    grid-gap: 32px 32px;
    grid-template-columns: auto auto;
    max-width: 192px;
  }
`
const GridCol = styled.div`
  display: inline-grid;
`
const SocialBtn = styled.a`
  display: inline-block;
  color: ${color.main};
  background: black;
  border: 2px solid ${color.main};
  width: 80px;
  height: 80px;
  border-radius: 50%;
  line-height: 80px;
  user-select: none;
  transition: all .15s;

  &:hover {
    color: black;
    background: ${color.main};
  }
  &:hover img {
    filter: saturate(0%) brightness(0%) contrast(100%);
  }
`
const SocialIcon = styled(Picture)`
  & img {
    user-drag: none;
    vertical-align: middle;
  }
`

export default {
  components: {
    Grid,
    GridCol,
    SectionHead,
    SocialBtn,
    SocialIcon
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
section {
  margin-top: 70px;
}
</style>
