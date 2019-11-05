<template>
  <div>
    <h3>รายชื่อผู้ผ่านการคัดเลือก</h3>
    <SearchTable
      ref="table"
      :columns="FINALIST_COLUMNS"
      :data="finalist"
      :searchable="false"
      :loading="isLoading"
    />
    <h3>ข้อมูลสำหรับผู้ผ่านการคัดเลือก (ตัวสำรอง)</h3>
    <p>กรุณารอการติดต่อกลับจากทีมงานภายหลัง</p>
    <h3>รายชื่อผู้ผ่านการคัดเลือก (ตัวสำรอง)</h3>
    <SearchTable
      ref="table"
      :columns="RESERVE_COLUMNS"
      :data="reserve"
      :searchable="false"
      :loading="isLoading"
    />
  </div>
</template>
<script>
import { FINALIST_COLUMNS, RESERVE_COLUMNS } from '~/utils/const.js'
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
      FINALIST_COLUMNS,
      RESERVE_COLUMNS
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
    finalist () {
      if (!this.major) {
        return []
      }
      return this.prepareResult(this.results[this.major].finalist)
    },
    reserve () {
      if (!this.major) {
        return []
      }
      return this.prepareResult(this.results[this.major].reserve)
    }
  },
  methods: {
    prepareResult (result) {
      return result.map((row) => {
        row.name = `${capitalize(row.firstName)} ${capitalize(row.lastName)}`
        row.verificationAmount = (row.verificationAmount) ? row.verificationAmount.toFixed(2) : ''
        return row
      })
    }
  }
}
</script>
