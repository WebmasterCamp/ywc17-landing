export const majors = {
  content: ['Content', 'green'],
  design: ['Design', 'yellow'],
  marketing: ['Marketing', 'pink'], 
  programming: ['Programming', 'blue']
}

export const INTERVIEW_QUESTIONS = {
  content: ` ให้เลือกทำ 1 ข้อ ระหว่าง<br />
      <h4>1. ช่วยสรุปรายการ "เดินหน้าประเทศไทย" ให้ดูน่าสนใจ</h4>
      <p>สมมติว่าคุณเป็นทีมงานโซเชียลมีเดียของรัฐบาล มีหน้าที่ต้องสื่อสารผลงานต่างๆ ให้ประชาชนรับรู้ผ่านช่องทางสื่อออนไลน์ หนึ่งในงานที่คุณรับผิดชอบคือการนำเสนอเนื้อหาจากรายการ "เดินหน้าประเทศไทย" ซึ่งถ้าเอาคลิปทั้งรายการมาแชร์ก็คงไม่น่าสนใจ คุณจึงต้องสรุปเนื้อหารายการให้ดูน่าสนใจสำหรับชาวโซเชียลให้ได้<br>
  ให้คุณเลือกรายการ "เดินหน้าประเทศไทย" หรือ "เดินหน้าประเทศไทย วัยทีน" ตอนใดก็ได้มาหนึ่งตอน ทำสรุปเนื้อหาของรายการเป็นสื่อรูปแบบใดก็ได้ เช่น ข้อความ รูปภาพ อินโฟกราฟิก คลิปสั้น ฯลฯ แล้วเลือกช่องทางโซเชียลมีเดียที่จะใช้นำเสนอ เช่น Facebook, Twitter, YouTube, Instagram, Pantip ที่เหมาะกับเนื้อหาที่คุณทำมา</p>
      <h4>2. หลังจากไม่ได้เลือกตั้งมา 7 ปี และมีคนรุ่นใหม่จำนวนมากที่ยังไม่เคยเลือกตั้งมาก่อน จงทำ Content ที่อธิบายระบบการเลือกตั้งแบบใหม่ ที่แตกต่างจากเดิม ทั้งการเลือกส.ส.,Party List, และที่มาของการได้นายกรัฐมนตรี</h4>
      `,
  design: `<h3 class="themeText">ไม่มี</h3>
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
  marketing: `นี่คือคำถามสาขามาร์เก็ตติ้ง`,
  programming: `นี่คือคำถามสาขาโปรแกรมมิ่ง<br/>
  <ul>
    <li>รายการ: <a href="https://ywc17.ywc.in.th/" target="_blank">https://ywc17.ywc.in.th/</a></li>
    <li>รายการ: <a href="https://ywc17.ywc.in.th/" target="_blank">https://ywc17.ywc.in.th/</a></li>
    <li>รายการ: <a href="https://ywc17.ywc.in.th/" target="_blank">https://ywc17.ywc.in.th/</a></li>
  </ul>`
}

export const INTERVIEW_COLUMNS = [
  {
    title: 'รหัส',
    dataIndex: 'ref',
    sorter: (a, b) => a.ref.localeCompare(b.ref),
    defaultSortOrder: 'ascend',
    width: '15%',
    scopedSlots: { customRender: 'searchRender' }
  },
  {
    title: 'ชื่อ - นามสกุล',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    width: '70%',
    scopedSlots: { customRender: 'searchRender' }
  },
  {
    title: 'รอบ',
    dataIndex: 'round',
    sorter: (a, b) => a.round.localeCompare(b.round),
    width: '15%'
  }
]
