<template>
  <ThemeProvider>
    <InfoContainer class="agenda-info">
      <h2>กำหนดการโครงการอบรมเชิงปฏิบัติการ<br class="mdBreak"> Young Webmaster Camp ครั้งที่ 17</h2>
      <h3>
        วันที่ 26 - 29 ธันวาคม 2562<br>
        ณ คณะเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
      </h3>
      <AgendaTable v-for="{ name, items } in AGENDA" :key="name" :name="name" :items="items" />
    </InfoContainer>
    <Footer />
  </ThemeProvider>
</template>
<script>
import ThemeProvider from '~/components/ThemeProvider.vue'
import InfoContainer from '~/components/InfoContainer.vue'
import AgendaTable from '~/components/AgendaTable.vue'
import Footer from '~/components/sections/Footer.vue'
import { AGENDA } from '~/utils/const'

export default {
  layout: 'secondary',
  head () {
    return {
      title: `กำหนดการโครงการ - 17th Young Webmaster Camp`,
      meta: [
        { hid: 'og:title', name: 'og:title', content: `กำหนดการโครงการ - 17th Young Webmaster Camp` },
        { hid: 'og:description', name: 'og:description', content: 'กำหนดการโครงการอบรมเชิงปฏิบัติการ Young Webmaster Camp ครั้งที่ 17 วันที่ 26 - 29 ธันวาคม 2562 ณ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง' },
        { hid: 'description', name: 'description', content: 'กำหนดการโครงการอบรมเชิงปฏิบัติการ Young Webmaster Camp ครั้งที่ 17 วันที่ 26 - 29 ธันวาคม 2562 ณ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง' }
      ]
    }
  },
  components: {
    ThemeProvider,
    InfoContainer,
    AgendaTable,
    Footer
  },
  data () {
    return {
      AGENDA
    }
  }
}
</script>
<style lang="scss">
.secondary.agenda {
  .container {
    max-width: 1056px;
  }
  .ywc-logo {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-top: 40px;
  }
  .section-heading {
    text-align: center;
    user-select: none;
  }
  .agenda-info {
    font-size: 18px;
    @media screen and (max-width:768px) {
      font-size: 16px;
    }
    h3 {
      margin: 0;
      margin-top: 25px;
      margin-bottom: 25px;
    }
    h2 {
      line-height: 1.3;
    }
    h2:first-of-type, h3:first-of-type {
      margin-top: 0px;
      text-align: center;
    }
    ol {
      padding-left: 20px;
    }
  }

  .mdBreak {
    display: none;
    @media (max-width: 874px) {
      display: block;
    }
  }

  @media print {
    .ywc-logo {
      filter: saturate(0%) brightness(0%) contrast(100%);
      margin-bottom: 16px;
    }
    .agenda-info {
      box-shadow: none;
      margin: 0;
      padding: 0;
    }
    .ant-table { 
      font-size: 16px;
    }
  }
}
</style>
