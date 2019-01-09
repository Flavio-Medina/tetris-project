<template>
  <div>
    <p v-b-modal.h2p class="gm">How to Play</p>
    <howtoplaymodal/>
  </div>
</template>

<script>
import howtoplaymodal from "./howtoplaymodal";
export default {
  name: "howtoplaygame",
  components: {
    howtoplaymodal
  }
};
</script>