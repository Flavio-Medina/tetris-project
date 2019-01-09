<template>
  <div>
    <p v-b-modal.siu class="gm">Sign in/up</p>
    <signinupmodal/>
  </div>
</template>

<script>
import signinupmodal from "./signinupmodal";
export default {
  name: "signinupgame",
  components: {
    signinupmodal
  }
};
</script>