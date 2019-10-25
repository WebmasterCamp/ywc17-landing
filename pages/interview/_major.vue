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
    />
  </div>
</template>
<script>
import { INTERVIEW_QUESTIONS, INTERVIEW_COLUMNS } from '~/utils/const.js'
import SearchTable from '~/components/SearchTable'

export default {
  components: {
    SearchTable
  },
  props: {
    majors: { type: Object, default: () => { return {} } }
  },
  data () {
    return {
      columns: INTERVIEW_COLUMNS,
      data: [],
      searchColumns: ['name', 'ref'],

      isLoading: true
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
    }
  },
  mounted () {
    this.loadData(this.$route.params.major)
  },
  methods: {
    loadData (major) {
      const vm = this
      vm.isLoading = true
      vm.$axios.get(`/interview-list/interview-${major}.json`)
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
    this.$refs.table.clearSearch()
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
