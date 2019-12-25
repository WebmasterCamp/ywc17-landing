<template>
  <a-locale-provider :locale="ANTD_THAI">
    <a-table
      class="agendaTable"
      :columns="columns"
      :dataSource="items"
      :rowKey="'idx'"
      size="middle"
      :pagination="false"
    />
  </a-locale-provider>
</template>
<script>
import ANTD_THAI from 'ant-design-vue/lib/locale-provider/th_TH'
import antDesignVueTable from '~/plugins/ant-design-vue-table'
ANTD_THAI.Table.sortTitle = 'เรียง'
export default {
  props: {
    items: { type: Array, default: () => { return [] } },
    name: { type: String, default: 'วันที่' }
  },
  data () {
    return {
      ANTD_THAI,
      columns: [
        {
          title: this.name,
          children: [
            {
              title: 'เวลา',
              dataIndex: 'time',
              width: '20%',
              align: 'center'
            },
            {
              title: 'กิจกรรม',
              dataIndex: 'events',
              customRender: (value, row, index) => {
                return <tbody class={ row.events.length > 1 ? 'ant-table-tbody' : ''} style="display: table; width: 100%;">
                  {row.events.map((event, idx) => 
                    <tr>
                      <td
                        domPropsInnerHTML={event}
                        style={ row.events.length - 1 === idx 
                          ? { borderBottom: 'none', padding: '10px', paddingLeft: 0 }
                          : { padding: '10px', paddingLeft: 0 }}
                      />
                    </tr>
                  )}
                </tbody>
              }
            }
          ]
        }
      ]
    }
  },
  created () {
    antDesignVueTable()
  }
}
</script>
