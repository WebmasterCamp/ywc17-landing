<template>
  <div>
    <h3>รายชื่อผู้ผ่านการคัดเลือก</h3>
    <SearchTable
      ref="table"
      :columns="columns"
      :data="data"
      :searchable="false"
      :loading="isLoading"
    />
  </div>
</template>
<script>
import { FINALIST_COLUMNS } from '~/utils/const.js'
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
      columns: FINALIST_COLUMNS
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
    data () {
      if (!this.major) {
        return []
      }
      return this.results[this.major].map((row) => {
        row.name = `${capitalize(row.firstName)} ${capitalize(row.lastName)}`
        row.type = (!row.isReserve) ? 'ตัวจริง' : 'ตัวสำรอง'
        return row
      })
    }
  }
}
</script>
