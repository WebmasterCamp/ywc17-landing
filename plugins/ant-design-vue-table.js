import Vue from 'vue'
import { Table, Input, LocaleProvider } from 'ant-design-vue'

import 'ant-design-vue/lib/table/style/index.css'
import 'ant-design-vue/lib/empty/style/index.css'
import 'ant-design-vue/lib/input/style/index.css'
export default () => {
  Vue.use(Table)
  Vue.use(Input)
  Vue.use(LocaleProvider)
}
