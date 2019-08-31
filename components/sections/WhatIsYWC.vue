<template>
  <section>
    <TitleBox>
      <h3 class="outline">What is</h3>
      <h3>YWC</h3>
      <p>Creating new<br>young webmasters<br>since 2002</p>
    </TitleBox>
    <img src="~assets/images/test.png" />
    <BriefBox>
      เมื่อเทคโนโลยีที่เปลี่ยนไปได้เข้ามาสร้างการเปลี่ยนแปลง จนทำให้หลายๆ สิ่งที่เคยมีอยู่ในอดีต ถูกแย่งชิงบทบาทจนแทบจะหายไป ใน
    </BriefBox>
    <Row>
      <Column>
        <h3>พันธกิจของเรา</h3>
        เมื่อเทคโนโลยีที่เปลี่ยนไปได้เข้ามาสร้างการเปลี่ยนแปลง จนทำให้หลายๆ สิ่งที่เคยมีอยู่ในอดีต ถูกแย่งชิงบทบาทจนแทบจะหายไป ในฐานะของค่ายสร้างเว็บหนึ่งเดียวของไทย เรากำลังตามหาคนทำเว็บสายเลือดใหม่ ที่พร้อมตะลุยไปในโลกดิจิตัลและ Disrupt ทุกความเคลื่อนไหวด้วยเทคโนโลยีไปพร้อมกับพวกเรา และเพื่อนๆ จากหลากหลายสาขา ไม่ว่าจะเป็น Content, Design, Marketing และ Programming และยังได้ใกล้ชิดกูรูจากวงการเว็บไทย ที่จะมาแนะแนวทาง พร้อมให้คำวิจารณ์ที่ไม่เคยมีใครได้สัมผัสมาก่อน หากคุณคือคนรุ่นใหม่ ที่อยากจะลุกขึ้นมาสร้างนวัตกรรมใหม่ที่จะเปลี่ยนแปลงโลก นี่คือโอกาสของคุณ! กับ Young Webmaster Camp ครั้งที่ 17 “Social Change, Arrange The World” ค่ายสร้างเว็บไซต์ระดับอุดมศึกษาที่ใหญ่ที่สุด ที่ปีนี้จะมาชวนนักศึกษามหาวิทยาลัยจากทั่วประเทศมาฝึกสกิลของตัวเอง พร้อม ๆ กับสร้างเว็บไซต์ที่จะช่วยแก้ไขปัญหาต่าง ๆ ในสังคมและทำให้สังคมของเราน่าอยู่ขึ้น
      </Column>
      <Column>
        <h3>พันธกิจของเรา</h3>
        เมื่อเทคโนโลยีที่เปลี่ยนไปได้เข้ามาสร้างการเปลี่ยนแปลง จนทำให้หลายๆ สิ่งที่เคยมีอยู่ในอดีต ถูกแย่งชิงบทบาทจนแทบจะหายไป ในฐานะของค่ายสร้างเว็บหนึ่งเดียวของไทย เรากำลังตามหาคนทำเว็บสายเลือดใหม่ ที่พร้อมตะลุยไปในโลกดิจิตัลและ Disrupt ทุกความเคลื่อนไหวด้วยเทคโนโลยีไปพร้อมกับพวกเรา และเพื่อนๆ จากหลากหลายสาขา ไม่ว่าจะเป็น Content, Design, Marketing และ Programming และยังได้ใกล้ชิดกูรูจากวงการเว็บไทย ที่จะมาแนะแนวทาง พร้อมให้คำวิจารณ์ที่ไม่เคยมีใครได้สัมผัสมาก่อน หากคุณคือคนรุ่นใหม่ ที่อยากจะลุกขึ้นมาสร้างนวัตกรรมใหม่ที่จะเปลี่ยนแปลงโลก นี่คือโอกาสของคุณ! กับ Young Webmaster Camp ครั้งที่ 17 “Social Change, Arrange The World” ค่ายสร้างเว็บไซต์ระดับอุดมศึกษาที่ใหญ่ที่สุด ที่ปีนี้จะมาชวนนักศึกษามหาวิทยาลัยจากทั่วประเทศมาฝึกสกิลของตัวเอง พร้อม ๆ กับสร้างเว็บไซต์ที่จะช่วยแก้ไขปัญหาต่าง ๆ ในสังคมและทำให้สังคมของเราน่าอยู่ขึ้น
      </Column>
    </Row>
  </section>
</template>
<style lang="sass" scoped>
  section
    margin-top: 86px
    img
      width: 100%
      max-width: 380px
</style>
<script>
import styled from 'vue-styled-components'
const TitleBox = styled.div`
  position: absolute;
  z-index: 1;

  font-family: Montserrat;
  color: white;
  text-transform: uppercase;
  text-align: left;

  padding-top: 40px;

  @media screen and (max-width:768px) {
    margin-left: 2%;  
  }

  p {
    margin: 0;
    margin-top: 10px;
    width: 310px;
    color: #383838;
    color: rgba(255,255,255,0.19);
    font-size: 22px;
    @media screen and (max-width:768px) {
      color: rgba(255, 255, 255, 0.6);
      font-size: 18px;
    }
  }

  h3 {
    font-size: 120px;
    height: 120px;
    line-height: 120px;
    margin: 0;
    @media screen and (max-width:768px) {
      font-size: 86px;
      height: 86px;
      line-height: 86px;
    }
  }
  h3.outline {
    color: transparent;
    text-stroke: 1.2px white;
    font-weight: normal;
    font-size: 70px;
    height: 70px;
    line-height: 70px;
    @media screen and (max-width:768px) {
      font-size: 50px;
      height: 50px;
      line-height: 50px;
    }
  }
`
const BriefBox = styled.div`
  position: absolute;
  z-index: 1;

  display: inline-flex;
  margin-top: 330px;
  margin-left: -3%;

  width: 28%;
  max-width: 330px;

  font-family: 'Maledpan', 'Sarabun';
  font-size: 20px;
  text-align: left;
  line-height: 38px;

  @media screen and (max-width:768px) {
    position: relative;
    display: block;
    width: 300px;
    margin: 0 auto;
    text-align: center;
  }
`

const Row = styled.div`
  margin-top: 66px;

  display: grid;
  grid-column-gap: 145px;
  grid-row-gap: 20px;
  grid-template-columns: 40% 40%;
  @media screen and (max-width:768px) {
    margin-top: 33px;
    grid-template-columns: 100%;
  }
`
const Column = styled.div`
  display: inline-grid;
  text-align: left;
  @media screen and (max-width:768px) {
    font-size: 90%;
    h3 {
      text-align: center;
    }
  }
`
export default {
  components: {
    TitleBox,
    BriefBox,
    Row,
    Column
  }
}
</script>
