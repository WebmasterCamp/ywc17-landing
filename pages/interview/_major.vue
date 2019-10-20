<template>
  <div>
    <section class="questions">
      <h3>คำถามประจำสาขา <span class="themeText">Web {{ majorName }}</span></h3>
      <div v-html="majorQuestion">
      </div>
    </section>
    <h3>รายชื่อผู้ผ่านการคัดเลือกเข้ารอบสัมภาษณ์ สาขา <span class="themeText">Web {{ majorName }}</span></h3>
    <a-input-search v-model="searchText" size="large" placeholder="ค้นหารายชื่อได้ที่นี่" style="margin-bottom: 22px;" :disabled="isLoading" @search="onSearch" />
    <a-locale-provider :locale="ANTD_THAI">
      <a-table
        :columns="columns"
        :dataSource="filteredData"
        rowKey="code"
        :pagination="false"
        :loading="isLoading"
      >
        <template slot="searchRender" slot-scope="text">
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
import { INTERVIEW_QUESTIONS } from '~/utils/const.js'
const columns = [
  {
    title: 'รหัส',
    dataIndex: 'ref',
    sorter: (a, b) => a.ref.localeCompare(b.ref),
    width: '15%',
    scopedSlots: { customRender: 'searchRender' }
  },
  {
    title: 'ชื่อ - นามสกุล',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    width: '70%',
    scopedSlots: { customRender: 'searchRender' }
  },
  {
    title: 'รอบ',
    dataIndex: 'round',
    sorter: (a, b) => a.round.localeCompare(b.round),
    width: '15%'
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
      data: [],

      isLoading: true,
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
    majorQuestion () {
      return INTERVIEW_QUESTIONS[this.major]
    },

    filteredData () {
      if (!this.searchText) {
        return this.data
      }

      return this.data.filter((value) => {
        if (value.name.includes(this.searchText) || value.ref.toLowerCase().includes(this.searchText.toLowerCase())) {
          return true
        }
        return false
      })
    }
  },
  mounted () {
    this.loadData(this.$route.params.major)
  },
  methods: {
    onSearch (value) {
      this.searchText = value
    },
    loadData (major) {
      const vm = this
      vm.isLoading = true
      const URL = `/interview-list/interview-${major}.json`
      vm.$axios.get(URL)
        .then(({ status, data }) => {
          if (status === 200) {
            const ret = data.map((row) => {
              row.name = `${row.firstName} ${row.lastName}`
              delete row.firstName
              delete row.lastName
              delete row.nickname
              return row
            })
            vm.isLoading = false
            vm.data = ret
          } else {
            vm.isLoading = false
            vm.data = []
          }
        })
        .catch(() => {
          vm.isLoading = false
          vm.data = []
        })
    }
  },
  beforeRouteUpdate (to, from, next) {
    if (to.params.major) {
      this.loadData(to.params.major)
    }
    this.searchText = ''
    next()
  }
}
</script>
<style scoped lang="scss">
section {
  margin-top: 0;
  margin-bottom: 44px;
  padding: 0;
}
</style>
