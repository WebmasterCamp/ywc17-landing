<template>
  <section class="container">
    <SectionHead title="Timeline" />
    <TimelineList>
      <TimelineItem v-for="(item, code) in items" :key="code">
        <TimelineIcon :active="isActive(code)">
          <Icon :fileName="`timeline-${code}`" :alt="item.name" />
        </TimelineIcon>
        <TimelineName>{{ item.name }}</TimelineName>
        {{ item.endDate ? rangeDate(item.startDate, item.endDate) : humanDate(item.startDate) }}
      </TimelineItem>
    </TimelineList>
  </section>
</template>

<script>
import styled from 'vue-styled-components'
import dayjs from 'dayjs'
import 'dayjs/locale/th'
import color from '~/utils/color'

import SectionHead from '~/components/SectionHead.vue'
import Picture from '~/components/Picture.vue'

dayjs.locale('th')

const TimelineList = styled.div`
  display: grid;
  grid-column-gap: 25px; 
  grid-template-columns: auto auto auto auto auto;
  @media(max-width:768px) {
    grid-template-columns: auto;
    grid-row-gap: 45px;
  }
`
const TimelineItem = styled.div`
  display: inline-grid;
  font-size: 14px;
`
const TimelineIcon = styled('div', { code: String, active: Boolean })`
  width: 128px;
  height: 128px;
  line-height: 128px;
  margin: 0 auto;
  background: url(${(props) => { return require('~/assets/images/timeline-item' + (props.active ? '-active' : '') + '.png') }}) no-repeat center;
`
const TimelineName = styled.h3`
  font-family: 'Maledpan', 'Sarabun';
  font-size: 20px;
  color: ${color.primary};
  margin-bottom: 0;
`
const Icon = styled(Picture)`
  & img {
    vertical-align: middle;
    user-select: none;
    user-drag: none;
  }
`
export default {
  components: {
    SectionHead,
    TimelineList,
    TimelineItem,
    TimelineIcon,
    TimelineName,
    Icon
  },
  data () {
    return {
      items: {
        register: { name: 'รับสมัคร', startDate: '2019-09-01', endDate: '2019-10-15' },
        announce: { name: 'ประกาศผล', startDate: '2019-10-26' },
        interview: { name: 'สัมภาษณ์', startDate: '2019-11-02' },
        finalist: { name: 'ประกาศผลสัมภาษณ์', startDate: '2019-11-05' },
        camp: { name: 'วันค่าย', startDate: '2019-12-26', endDate: '2019-12-29' }
      }
    }
  },
  methods: {
    isActive (code) {
      const today = dayjs(new Date())
      const startDate = dayjs(this.items[code].startDate)
      if (typeof this.items[code].endDate === 'undefined') {
        return startDate.isSame(today)
      } else {
        const endDate = dayjs(this.items[code].endDate)

        if (endDate.isBefore(today)) {
          return false
        } else if (!startDate.isBefore(today) && !startDate.isSame(today)) {
          return false
        }
        return true
      }
    },
    humanDate (dateStr) {
      return dayjs(dateStr).format('D MMMM')
    },
    rangeDate (startDate, endDate) {
      let str = this.humanDate(startDate)
      if (endDate) {
        str += ` - ${this.humanDate(endDate)}` 
      }
      return str
    }
  }
}
</script>
