<template>
  <div>
    <section class="questions">
      <h3>คำถามประจำสาขา <span class="themeText">Web {{ majorName }}</span></h3>
      ให้เลือกทำ 1 ข้อ ระหว่าง<br />
      <h4>1. ช่วยสรุปรายการ "เดินหน้าประเทศไทย" ให้ดูน่าสนใจ</h4>
      <p>สมมติว่าคุณเป็นทีมงานโซเชียลมีเดียของรัฐบาล มีหน้าที่ต้องสื่อสารผลงานต่างๆ ให้ประชาชนรับรู้ผ่านช่องทางสื่อออนไลน์ หนึ่งในงานที่คุณรับผิดชอบคือการนำเสนอเนื้อหาจากรายการ "เดินหน้าประเทศไทย" ซึ่งถ้าเอาคลิปทั้งรายการมาแชร์ก็คงไม่น่าสนใจ คุณจึงต้องสรุปเนื้อหารายการให้ดูน่าสนใจสำหรับชาวโซเชียลให้ได้<br>
  ให้คุณเลือกรายการ "เดินหน้าประเทศไทย" หรือ "เดินหน้าประเทศไทย วัยทีน" ตอนใดก็ได้มาหนึ่งตอน ทำสรุปเนื้อหาของรายการเป็นสื่อรูปแบบใดก็ได้ เช่น ข้อความ รูปภาพ อินโฟกราฟิก คลิปสั้น ฯลฯ แล้วเลือกช่องทางโซเชียลมีเดียที่จะใช้นำเสนอ เช่น Facebook, Twitter, YouTube, Instagram, Pantip ที่เหมาะกับเนื้อหาที่คุณทำมา</p>
      <h4>2. หลังจากไม่ได้เลือกตั้งมา 7 ปี และมีคนรุ่นใหม่จำนวนมากที่ยังไม่เคยเลือกตั้งมาก่อน จงทำ Content ที่อธิบายระบบการเลือกตั้งแบบใหม่ ที่แตกต่างจากเดิม ทั้งการเลือกส.ส.,Party List, และที่มาของการได้นายกรัฐมนตรี</h4>
    </section>
    <h3>รายชื่อผู้ผ่านการคัดเลือกเข้ารอบสัมภาษณ์ สาขา <span class="themeText">Web {{ majorName }}</span></h3>
    <a-input-search size="large" placeholder="ค้นหารายชื่อได้ที่นี่" style="margin-bottom: 22px;" @search="onSearch" />
    <a-locale-provider :locale="ANTD_THAI">
      <a-table
        :columns="columns"
        :dataSource="filteredData"
        rowKey="code"
        :pagination="false"
      >
        <template slot="customRender" slot-scope="text">
          <span v-if="searchText">
            <template v-for="(fragment, i) in text.toString().split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))">
              <mark
                v-if="fragment.toLowerCase() === searchText.toLowerCase()"
                :key="i"
                class="highlight"
              >
                {{ fragment }}
              </mark>
              <template v-else>{{ fragment }}</template>
            </template>
          </span>
          <template v-else>{{ text }}</template>
        </template>
      </a-table>
    </a-locale-provider>
  </div>
</template>
<script>
import ANTD_THAI from 'ant-design-vue/lib/locale-provider/th_TH'
const columns = [
  {
    title: 'รหัส',
    dataIndex: 'code',
    sorter: (a, b) => a.code.localeCompare(b.code),
    width: '15%',
    scopedSlots: { customRender: 'customRender' }
  },
  {
    title: 'ชื่อ - นามสกุล',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    width: '70%',
    scopedSlots: { customRender: 'customRender' }
  },
  {
    title: 'รอบ',
    dataIndex: 'round',
    sorter: (a, b) => a.round.localeCompare(b.round),
    width: '15%'
  }
]
const data = [
  {
    code: 'CT01',
    name: 'ธัญชนก คชพัชรินทร์',
    round: 'เช้า'
  },
  {
    code: 'CT02',
    name: 'ทดสอบ',
    round: 'เช้า'
  },
  {
    code: 'CT03',
    name: 'เทส',
    round: 'บ่าย'
  }
]
export default {
  props: {
    majors: { type: Object, default: () => { return {} } }
  },
  data () {
    return {
      ANTD_THAI,
      columns,
      data,
      searchText: ''
    }
  },
  computed: {
    major () {
      return this.$route.params.major
    },
    majorName () {
      if (!this.major) {
        return ''
      }
      return this.majors[this.major][0]
    },
    majorTheme () {
      if (!this.major) {
        return ''
      }
      return this.majors[this.major][1]
    },
    filteredData () {
      if (!this.searchText) {
        return this.data
      }

      return this.data.filter((value) => {
        if (value.name.includes(this.searchText) || value.code.toLowerCase().includes(this.searchText.toLowerCase())) {
          return true
        }
        return false
      })
    }
  },
  methods: {
    onSearch (value) {
      this.searchText = value
    }
  }
}
</script>
<style scoped lang="scss">
section {
  margin-top: 0;
  margin-bottom: 44px;
}
</style>
