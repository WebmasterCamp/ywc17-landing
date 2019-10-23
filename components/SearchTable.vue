<template>
  <div>
    <a-input-search v-if="searchable" v-model="searchText" size="large" placeholder="ค้นหารายชื่อได้ที่นี่" style="margin-bottom: 22px;" :disabled="isLoading" @search="onSearch" />
    <a-locale-provider :locale="ANTD_THAI">
      <a-table
        :columns="columns"
        :dataSource="filteredData"
        rowKey="ref"
        size="middle"
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
import antDesignVueTable from '~/plugins/ant-design-vue-table'
export default {
  props: {
    columns: { type: Array, default: () => { return [] } },
    data: { type: Array, default: () => { return [] } },
    isLoading: { type: Boolean, default: false },
    searchable: { type: Boolean, default: true },
    searchColumns: { type: Array, default: () => { return [] } }
  },
  data () {
    return {
      ANTD_THAI,
      searchText: ''
    }
  },
  computed: {
    filteredData () {
      if (!this.searchable || !this.searchText) {
        return this.data
      }

      return this.data.filter((value) => {
        for (let i = 0; i < this.searchColumns.length; i++) {
          if (value[this.searchColumns[i]].toLowerCase().includes(this.searchText.toLowerCase())) {
            return true
          }
        }
        return false
      })
    }
  },
  created () {
    antDesignVueTable()
  },
  methods: {
    onSearch (value) {
      this.searchText = value
    },
    clearSearch () {
      this.searchText = ''
    }
  }
}
</script>
