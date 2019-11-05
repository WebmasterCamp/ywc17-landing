import Vue from 'vue'
import { Spin, Icon, message } from 'ant-design-vue'

import 'ant-design-vue/lib/spin/style/index.css'
import 'ant-design-vue/lib/icon/style/index.css'
import 'ant-design-vue/lib/message/style/index.css'

Vue.use(Icon)
Vue.use(Spin)
Vue.prototype.$message = message
