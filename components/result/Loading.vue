<template>
  <LoadingContainer>
    <div>
      <a-spin>
        <a-icon slot="indicator" type="loading" style="font-size: 128px; color: #E1426F; width: unset; height: unset;" spin />
      </a-spin>
      <br />
      <h1>โปรดรอซักครู่</h1>
    </div>
  </LoadingContainer>
</template>
<script>
import styled from 'vue-styled-components'
import CenterContainer from '~/components/CenterContainer'
const LoadingContainer = styled(CenterContainer)`
  h1 {
    font-weight: bold;
    margin-top: 2em;
  }
`
export default {
  components: {
    LoadingContainer
  }
}
</script>
