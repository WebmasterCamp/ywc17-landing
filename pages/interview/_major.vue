<template>
  <div>
    <section class="questions">
      <h3>การบ้านประจำสาขา <span class="themeText">Web {{ majorName }}</span></h3>
      <div v-html="majorQuestion">
      </div>
    </section>
    <h3>รายชื่อผู้ผ่านการคัดเลือกเข้ารอบสัมภาษณ์ สาขา <span class="themeText">Web {{ majorName }}</span></h3>
    <SearchTable
      ref="table"
      :columns="columns"
      :data="data"
      searchable
      :searchColumns="searchColumns"
      :loading="isLoading"
    />
  </div>
</template>
<script>
import { INTERVIEW_QUESTIONS, INTERVIEW_COLUMNS } from '~/utils/const.js'
import SearchTable from '~/components/SearchTable'
const capitalize = (str) => {
  if (!str) {
    return str
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}
export default {
  components: {
    SearchTable
  },
  props: {
    majors: { type: Object, default: () => { return {} } },
    results: { 
      type: Object,
      default: () => { return { content: [], design: [], marketing: [], programming: [] } } 
    },
    isLoading: { type: Boolean, default: false }
  },
  data () {
    return {
      columns: INTERVIEW_COLUMNS,
      searchColumns: ['name', 'ref']
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
    data () {
      if (!this.major) {
        return []
      }
      let i = 1
      return this.results[this.major].map((row) => {
        row.name = `${capitalize(row.firstName)} ${capitalize(row.lastName)}`
        row.ref = `${this.majors[this.major][2]}${i < 10 ? '0' : ''}${i++}`
        row.round = row.interviewTime === 'morning' ? `เช้า` : `บ่าย`
        return row
      })
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.$refs.table.clearSearch()
    next()
  }
}
</script>
<style scoped lang="scss">
section {
  margin-top: 0 !important;
  margin-bottom: 44px;
  padding: 0;
}
</style>
