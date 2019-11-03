<script>
import styled from 'vue-styled-components'

const CenterContainer = styled.div`
  max-width: 960px;
  width: 100%;
  min-height: 60%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    text-align: center;
  }
  @media screen and (max-height: 750px) {
    position: static;
    left: unset;
    top: unset;
    transform: unset;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 44px;
  }
`
export default CenterContainer
</script>
