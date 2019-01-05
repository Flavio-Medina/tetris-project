<template>
  <div>
    <b-btn v-b-modal.h2p class="col align-self-center btn btn-primary btnFont">
      <p class="btnFont">How to Play</p>
    </b-btn>
    <howtoplaymodal/>
  </div>
</template>

<script>
import howtoplaymodal from './howtoplaymodal'
export default {
  name: 'howtoplay',
  components: {
    howtoplaymodal
  }
}
</script>