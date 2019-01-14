<template>
  <div>
    <b-btn class="btn btn-primary" to="register">
      <p class="btnFont">Register</p>
    </b-btn>
  </div>
</template>

<script>
export default {
  name: "signinup"
};
</script>

<style scoped>
.btnFont {
  font-size: 16px;
  line-height: 20px;
  width: 60px;
  margin-bottom: 0.5vh;
}

.btn {
  position: fixed;
  top: 10px;
  right: 100px;
}
</style>

