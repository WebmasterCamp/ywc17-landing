export const majors = {
  content: ['Content', 'green', 'CT'],
  design: ['Design', 'yellow', 'DS'],
  marketing: ['Marketing', 'pink', 'MK'], 
  programming: ['Programming', 'blue', 'PG']
}

export const INTERVIEW_QUESTIONS = {
  content: `<p>
  ให้สร้างสรรค์คอนเทนต์ที่ทำให้กลุ่มเป้าหมายเกิดความรู้สึกอยากเปลี่ยนพฤติกรรมตัวเองให้ลดการสร้างขยะพลาสติกทันทีเมื่อเห็นคอนเทนต์ โดยตัวคอนเทนต์จะเป็นรูปแบบข้อความ รูปภาพ คลิปวิดีโอ เสียง หรือสื่อรูปแบบใดก็ได้ ให้ระบุด้วยว่าเป็นคอนเทนต์ที่สร้างขึ้นมาเพื่อนำเสนอบน Platform ใดบ้าง เช่น Facebook, YouTube, Twitter, Pantip, Blog หรืออื่น ๆ และให้ระบุด้วยว่าคอนเทนต์เจาะจงกลุ่มเป้าหมายใดเป็นหลัก เช่น นักศึกษา มนุษย์เงินเดือน แม่บ้าน พ่อค้าแม่ค้าในตลาด ฯลฯ
  </p>
  <i>หมายเหตุ</i> ให้สร้าง Content ไม่ใช่เขียนแผนการตลาด หรือวางแผนการลง Media`,
  design: `<h3 class="themeText">ไม่มีการบ้าน</h3>
  โดยในวันสัมภาษณ์ กรรมการจะให้เวลา 30 นาทีในการทำโจทย์<i>ก่อนการเข้าห้องสัมภาษณ์</i> พร้อมทำการนำเสนองานออกแบบจากโจทย์ที่ได้รับภายใน 3 นาที
  <h4 class="subheading">สิ่งที่ท่านต้องเตรียมมา</h4>
  <ol>
    <li>Portfolio</li>
    <li>คอมพิวเตอร์พกพา (Laptop) พร้อมโปรแกรมออกแบบที่ถนัด หรือเตรียม Resource มาเพื่อรับโจทย์ในวันสัมภาษณ์</li>
  </ol>
  <h4 class="subheading">หมายเหตุ</h4>
  <ul class="nolist">
    <li>ผู้ที่มาสัมภาษณ์<b class="themeText">รอบเช้า</b> ให้มาลงทะเบียน<b class="themeText">ภายในเวลา 9:00 น. ทุกคน</b></li>
    <li>ผู้ที่มาสัมภาษณ์<b class="themeText">รอบบ่าย</b> ให้มาลงทะเบียน<b class="themeText">ภายในเวลา 12:45 น. ทุกคน</b></li>
  </ol>
  `,
  marketing: `ให้เขียนแผนการตลาดในจุดประสงค์ใดก็ได้ให้กับเว็บไซต์ใดก็ได้ที่คุณชื่นชอบ พร้อม Action Plan โดยจะต้องมีรายละเอียดต่อไปนี้
  <ol>
    <li>เว็บไซต์ที่นำมาทำแผนนั้นคือเว็บไซต์อะไร เกี่ยวข้องกับอะไร ทำอะไร</li>
    <li>เป้าหมายทางการตลาดที่เลือกจะนำเสนอ เช่น จะทำให้เป็นที่รู้จัก, จะหารายได้, จะเพิ่มจำนวนผู้ใช้, จะเพิ่ม Engagement กับผู้ใช้ เป็นต้น กำหนดเป้าหมายในเชิงปริมาณด้วย</li>
    <li>อินไซต์ที่สำคัญ ที่นำไปสู่การกำหนดแผนที่นำเสนอคืออะไร (การศึกษา, วิเคราะห์ข้อมูล)</li>
    <li>แผนการที่นำเสนอ เพื่อให้ไปถึงเป้าหมายที่เลือก</li>
  </ol>
  <h4 class="subheading">วิธีการนำเสนอผลงาน</h4>
  <ol>
    <li>มีเวลาให้นำเสนอ 5 นาทีเท่านั้น</li>
    <li>
      สามารถนำเสนอโดยใช้คอมพิวเตอร์/แท็บเล็ต หรือนำเสนอปากเปล่า (ไม่ให้นำเสนอผ่านโทรศัพท์มือถือ)<br />
      ทั้งนี้ เน้นความชัดเจน และ ความเข้าใจจากการนำเสนอเป็นหลัก
    </li>
    <li>การเตรียมตัวและการซ้อมจะช่วยให้สามารถนำเสนอได้คล่อง ครบถ้วน และอยู่ภายในเวลาที่กำหนด</li>
    <li>สามารถใช้ความคิดสร้างสรรค์ในการนำเสนอได้ ที่เหมาะสม ไม่สิ้นเปลืองเกินสมควร มีความสุภาพ</li>
  </ol>`,
  programming: `
  <div style="text-align:center">
    <a href="/images/interview/programming_desktop_full.png" target="_blank" title="คลิกเพื่อแสดงภาพ Desktop ฉบับเต็ม"><img src="${require('~/assets/images/interview/programming_desktop.png')}" alt="ภาพตัวอย่างเว็บไซต์ Desktop" /></a>
    <a href="/images/interview/programming_mobile_full.png" target="_blank" title="คลิกเพื่อแสดงภาพ Mobile ฉบับเต็ม"><img src="${require('~/assets/images/interview/programming_mobile.png')}" alt="ภาพตัวอย่างเว็บไซต์ Mobile" /></a>
  </div>
  <center><i>คลิกที่ภาพเพื่อแสดงฉบับเต็ม</i></center><br />
  ให้พัฒนาเว็บไซต์ให้เหมือนกับภาพข้างบน โดยมีคุณสมบัติดังต่อไปนี้
  <ol>
    <li>รองรับหน้าจอทั้งแบบ Desktop และ Mobile</li>
    <li>สำหรับเนื้อหาต่าง ๆ ให้ใช้จาก JSON API ตาม URL นี้: <a href="https://panjs.com/ywc.json" target="_blank"><b>https://panjs.com/ywc.json</b></a></li>
    <li>เนื้อหาส่วนใดที่ API ไม่ได้ส่งมา อนุญาตให้ระบุแบบ Hard coded ลงไปใน HTML ได้</li>
    <li>นำ Source Code ขึ้นไปบน GitHub และ Deploy โดยใช้ GitHub Pages</li>
  </ol>`
}

export const INTERVIEW_COLUMNS = [
  {
    title: 'รหัส',
    dataIndex: 'ref',
    sorter: (a, b) => a.ref.localeCompare(b.ref),
    defaultSortOrder: 'ascend',
    width: '12.5%',
    scopedSlots: { customRender: 'searchRender' }
  },
  {
    title: 'ชื่อ - นามสกุล',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    width: '72.5%',
    scopedSlots: { customRender: 'searchRender' }
  },
  {
    title: 'รอบ',
    dataIndex: 'round',
    sorter: (a, b) => a.round.localeCompare(b.round),
    width: '15%'
  }
]

export const FINALIST_LOAD_TIME = 4000
export const FINALIST_BANKACCOUNT = {
  no: '0-202-9269-7198',
  name: 'น.ส. วรัญญา วิมลเกียรติ',
  bank: 'ออมสิน'
}
export const FINALIST_FORM_LINK = (info) => {
  return `https://bit.ly/ywc17-cf`
}
export const FINALIST_COLUMNS = [
  {
    title: 'รหัส',
    dataIndex: 'interviewRef',
    sorter: (a, b) => a.interviewRef.localeCompare(b.interviewRef),
    width: '12.5%'
  },
  {
    title: 'ชื่อ - นามสกุล',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    width: '62.5%'
  },
  {
    title: 'จำนวนเงิน',
    dataIndex: 'verificationAmount',
    sorter: (a, b) => a.verificationAmount.localeCompare(b.verificationAmount),
    width: '20%'
  }
]
export const RESERVE_COLUMNS = [
  {
    title: 'รหัส',
    dataIndex: 'interviewRef',
    sorter: (a, b) => a.interviewRef.localeCompare(b.interviewRef),
    width: '12.5%'
  },
  {
    title: 'ชื่อ - นามสกุล',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    width: '82.5%'
  }
]

export const AGENDA = [
  {
    name: 'วันพฤหัสบดีที่ 26 ธันวาคม พ.ศ.2562',
    items: [
      { time: '8:30 - 9:00', events: [`ลงทะเบียน ณ ห้องประชุมใหญ่คณะเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง`] },
      { time: '9:00 - 9:30', events: [`พิธีเปิด โครงการอบรมเชิงปฏิบัติการ Young Webmaster Camp ครั้งที่ 17`] },
      { time: '9:30 - 10:30', events: [`เสวนาหัวข้อ “การทำงานในวงการดิจิทัล” <br>ดำเนินรายการโดย คุณเมธปริยา คำนวนวุฒิ`] },
      { time: '10:30 - 10:45', events: [`พักรับประทานอาหารว่าง`] },
      { time: '10:45 - 11:45', events: [`การบรรยายในหัวข้อ “จริยธรรมและกฎหมายควรรู้ในยุคดิจิทัล”<br>โดย กรรมการควบคุมจริยธรรม สมาคมผู้ดูแลเว็บไทย<br><ul><li>คุณชวรงค์ ลิมป์ปัทมปาณี</li><li>คุณอัครวุฒิ ตำราเรียง</li></ul>`] },
      { time: '11:45 - 12:00', events: [`ประกาศโจทย์ค่าย Young Webmaster Camp ครั้งที่ 17 “Social Change, Arrange The World”`] },
      { time: '12:00 - 12:45', events: [`รับประทานอาหารกลางวัน`] },
      { time: '12:45 - 14:45', events: [`การบรรยายแยกสาขา 1`, `สาขา Web Marketing หัวข้อ <br>“ภาพรวม Digital Marketing ในปัจจุบัน”<br>โดย คุณศิวัตร เชาวรียวงษ์, <i>นายกสมาคม DAAT</i>`, `สาขา Web Design หัวข้อ <br>1. “Basic Web Design (UI)”<br>โดย คุณอินทนนท์ ปัญญาโสภา, <i>Founder at Grappik</i><br>2. “ทฤษฎีที่เกี่ยวข้องกับการออกแบบและเทรนด์ในปัจจุบัน”<br>โดย คุณคนที่หนึ่ง แสงหิรัญ, <i>อาจารย์ประจำภาควิชาสาขาการออกแบบนิเทศศิลป์ คณะนิเทศศาสตร์ มหาวิทยาลัยอัสสัมชัญ</i>`, `สาขา Web Content หัวข้อ<br>“ภาพรวมการทำ Content ในปัจจุบัน”<br>โดย คุณขจร เจียรนัยพานิชย์, <i>Founder at The Zero Publishing</i><br> คุณจักรพงษ์ คงมาลัย, <i>Managing Director at Moonshot Digital</i>`, `สาขา Web Programming หัวข้อ<br>1. “Web Development Trends and Technologies in 2019”<br>โดย คุณธนนันท์ ตั้งธนาชัยกุล, <i>Head of Technology of TakeMeTour</i><br>2. “Web Optimization”<br>โดย คุณวรัทธน์ วงศ์มณีกิจ, <i>Product Owner at WISESIGHT</i>`] },
      { time: '14:45 - 15:30', events: [`กิจกรรม Ice Breaking`] },
      { time: '15:30 - 15:45', events: [`พักรับประทานอาหารว่าง`] },
      { time: '15:45 - 16:00', events: [`ชี้แจงกำหนดการ`] },
      { time: '16:00 - 18:00', events: [`การคิดเชิงออกแบบ (Design Thinking)<br>โดย คุณวรัทธน์ วงศ์มณีกิจ, <i>Product Owner at WISESIGHT</i>`] },
      { time: '18:00 - 19:00', events: [`รับประทานอาหารเย็น`] },
      { time: '19:00 - 21:00', events: [`ระดมความคิด (Brainstorm) 1`] },
      { time: '21:00 - 21:15', events: [`ชี้แจงกำหนดการ`] },
      { time: '21:15', events: [`กลับเข้าที่พัก`] }
    ]
  },
  {
    name: 'วันศุกร์ที่ 27 ธันวาคม พ.ศ.2562',
    items: [
      { time: '7:30 - 8:00', events: ['รับประทานอาหารเช้า'] },
      { time: '8:00 - 8:30', events: ['เดินทางสู่สถานที่จัดกิจกรรม'] },
      { time: '8:30 - 10:00', events: ['กิจกรรมสันทนาการ'] },
      { time: '10:00 - 10:15', events: ['พักรับประทานอาหารว่าง'] },
      { time: '10:15 - 11:15', events: ['การบรรยายแยกสาขา', 'สาขา Web Marketing หัวข้อ <br>“เครื่องมือโฆษณาสำหรับนักการตลาดดิจิทัล”<br>โดย คุณเมธปรียา คํานวนวุฒิ, <i>ผู้จัดการฝ่ายการตลาด LnwShop Co., Ltd.</i>', 'สาขา Web Design หัวข้อ <br>“User Experience for Web Design”<br>โดย คุณสุธัม ธรรมวงศ์, <i>Senior UX Designer at SCB10X</i>', 'สาขา Web Content (อยู่ระหว่างประสานงาน)', 'สาขา Web Programming หัวข้อ<br>“How to be Great Software Developer”<br>โดย คุณปัญจมพงศ์ เสริมสวัสดิ์ศรี, <i>C-3PO at Cleverse</i>'] },
      { time: '11:15 - 12:30', events: ['ระดมความคิด (Brainstorm) 3', 'รับประทานอาหารกลางวัน'] },
      { time: '12:30 - 16:30', events: ['ลงพื้นที่เก็บข้อมูลจริงจากผู้ใช้'] },
      { time: '16:30 - 18:00', events: ['การบรรยาย “วิธีการนำเสนอผลงานอย่างมืออาชีพ”<br>โดย คุณผรินทร์ สงฆ์ประชา, <i>Chief Executive and Founder of Nasket</i>'] },
      { time: '18:00 - 18:45', events: ['รับประทานอาหารเย็น'] },
      { time: '18:45 - 21:00', events: ['ระดมความคิด (Brainstorm) 4'] },
      { time: '21:00 - 21:15', events: ['ชี้แจงกฎการ Workshop'] },
      { time: '21:15', events: ['กลับเข้าที่พัก'] }
    ]
  },
  {
    name: 'วันเสาร์ที่ 28 ธันวาคม พ.ศ.2562',
    items: [
      { time: '7:30 - 8:00', events: ['รับประทานอาหารเช้า'] },
      { time: '8:00 - 8:30', events: ['เดินทางสู่สถานที่จัดกิจกรรม'] },
      { time: '8:30 - 18:00', events: ['Workshop'] },
      { time: '18:00 - 18:30', events: ['พักรับประทานอาหารเย็น'] },
      { time: '18:30 - 21:30', events: ['กิจกรรมสันทนาการ'] },
      { time: '21:30 - 21:45', events: ['เตรียมออกเดินทาง'] },
      { time: '21:45', events: ['กลับเข้าที่พัก'] }
    ]
  },
  {
    name: 'วันอาทิตย์ที่ 29 ธันวาคม พ.ศ.2562',
    items: [
      { time: '7:30 - 8:00', events: ['รับประทานอาหารเช้า'] },
      { time: '8:00 - 8:30', events: ['เดินทางสู่สถานที่จัดกิจกรรม'] },
      { time: '8:30 - 9:00', events: ['เตรียมตัวสำหรับการนำเสนอผลงาน'] },
      { time: '9:00 - 12:00', events: ['การนำเสนอผลงาน'] },
      { time: '12:00 - 13:00', events: ['พักรับประทานอาหารกลางวัน'] },
      { time: '13:00 - 14:30', events: ['การนำเสนอผลงาน (ต่อ)'] },
      { time: '14:30 - 15:15', events: ['พิธีมอบเกียรติบัตร'] },
      { time: '15:15 - 16:00', events: ['พิธีประกาศผลและมอบรางวัล'] },
      { time: '16:00 - 16:30', events: ['พิธีปิด โครงการอบรมเชิงปฏิบัติการ Young Webmaster Camp ครั้งที่ 17'] }
    ]
  }
]
