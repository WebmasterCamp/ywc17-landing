<template>
  <section class="container">
    <SectionHead size="timeline" style="position: sticky; top: 0;">Timeline</SectionHead>
    <TimelineList class="position-relative">
      <TimelineItem v-for="(item, code) in items" :key="code">
        <TimelineIcon :active="isActive[code]">
          <Icon :fileName="`timeline-${code}`" :alt="item.name" />
        </TimelineIcon>
        <TimelineName>{{ item.name }}</TimelineName>
        {{ item.endDate ? rangeDate(item.startDate, item.endDate) : humanDate(item.startDate) }}
      </TimelineItem>
    </TimelineList>
    <GradientButton link href="/agenda/" theme="pink" class="agenda-button" @click.native.prevent="$router.push('/agenda/')">กำหนดการโครงการ</GradientButton>
  </section>
</template>
<style scoped>
.agenda-button {
  width: 100%;
  margin-top: 25px;
  max-width: 320px;
}
@media screen and (max-width:768px) {
  .to-center {
    text-align: center;
  }
  .to-center br {
    display: none;
  }
}
</style>
<script>
import styled from 'vue-styled-components'
import dayjs from 'dayjs'
import 'dayjs/locale/th'
import color from '~/utils/color'

import SectionHead from '~/components/SectionHead.vue'
import Picture from '~/components/Picture.vue'
import GradientButton from '~/components/GradientButton.vue'

dayjs.locale('th')

const TimelineList = styled.div`
  display: grid;
  grid-column-gap: 25px; 
  grid-template-columns: repeat(5, auto);
  @media(max-width:768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 45px;
  }
`
const TimelineItem = styled.div`
  display: inline-grid;
  justify-content: center;
  font-size: 14px;
  
  @media(max-width:768px) {
    grid-column: span 2;
    &:nth-last-child(1):nth-child(odd) {
      grid-column: 2 / span 2;
    }
  }
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
    Icon,
    GradientButton
  },
  data () {
    return {
      items: {
        register: { name: 'รับสมัคร', startDate: '2019-09-02', endDate: '2019-10-15' },
        announce: { name: 'ประกาศผล', startDate: '2019-10-26' },
        interview: { name: 'สัมภาษณ์', startDate: '2019-11-02', oneDay: true },
        finalist: { name: 'ประกาศผลสัมภาษณ์', startDate: '2019-11-05' },
        camp: { name: 'วันค่าย', startDate: '2019-12-26', endDate: '2019-12-29' }
      },
      isActive: {
        register: false,
        announce: false,
        interview: false,
        finalist: false,
        camp: false
      }
    }
  },
  mounted () {
    this.timelineProcess()
  },
  methods: {
    timelineProcess () {
      const order = Object.keys(this.items)
      for (let i = order.length - 1; i >= 0; i--) {
        const thisCode = order[i]
        const thisActive = this.checkActive(thisCode)
        this.isActive[thisCode] = thisActive
        if (thisActive) {
          break
        }
      }
    },
    checkActive (code) {
      const today = dayjs(new Date())
      const thisItem = this.items[code]
      const startDate = dayjs(thisItem.startDate)
      if (typeof thisItem.endDate === 'undefined') {
        const isSame = startDate.isSame(today, 'day')
        return (thisItem.oneDay) ? isSame : (isSame || startDate.isBefore(today, 'day'))
      } else {
        if (!startDate.isBefore(today, 'day') && !startDate.isSame(today, 'day')) {
          return false
        }
        return true
      }
    },
    humanDate (dateStr) {
      return dayjs(dateStr).format('D MMMM')
    },
    rangeDate (startDate, endDate) {
      let str = ''
      const start = dayjs(startDate)
      const end = dayjs(endDate)
      if (start.year() === end.year() && start.month() === end.month()) {
        str += `${start.date()}`
      } else {
        str += `${start.format('D MMMM')}`
      }
      
      str += ` - ${end.format('D MMMM')}` 
      return str
    }
  }
}
</script>
