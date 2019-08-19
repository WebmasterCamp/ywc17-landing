<template>
  <section>
    <SectionHead title="Follow Us" />
    <Grid>
      <GridCol>
        <a href="https://www.facebook.com/ywcth" target="_blank" title="Facebook">
          <SocialBtn>
            <SocialIcon fileName="facebook" alt="Facebook" />
          </SocialBtn>
        </a>
      </GridCol>
      <GridCol>
        <a href="https://twitter.com/ywcth" target="_blank" title="Twitter">
          <SocialBtn><SocialIcon fileName="twitter" alt="Twitter" /></SocialBtn>
        </a>
      </GridCol>
      <GridCol>
        <a href="https://m.me/ywcth" target="_blank" title="Messenger">
          <SocialBtn><SocialIcon fileName="messenger" alt="Messenger" /></SocialBtn>
        </a>
      </GridCol>
      <GridCol>
        <a href="https://instagram.com/ywcth" target="_blank" title="Instagram">
          <SocialBtn><SocialIcon fileName="instagram" alt="Instagram" /></SocialBtn>
        </a>
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
const SocialBtn = styled.div`
  display: inline-block;
  color: ${color.main};
  background: black;
  border: 2px solid ${color.main};
  width: 80px;
  height: 80px;
  border-radius: 50%;
  line-height: 80px;
  user-select: none;

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
</style>
