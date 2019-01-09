<template>
  <div>
    <b-btn v-b-modal.siu class="btn btn-primary">
      <p class="btnFont">Sign in/up</p>
    </b-btn>
    <signinupmodal/>
  </div>
</template>

<script>
import signinupmodal from "./signinupmodal";
export default {
  name: "signinup",
  components: {
    signinupmodal
  }
};
</script>

<style scoped>
.btnFont {
  font-size: 2vh;
  line-height: 2vh;
  margin-bottom: 0.5vh;
}

.btn {
  position: fixed;
  top: 10px;
  right: 10px;
}
</style>


