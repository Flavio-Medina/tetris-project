<template>
  <div>
    <img src="/static/cat.png" alt="annoyingcat" ref="catimg" class="cat">
  </div>
</template>

<script>
export default {
  name: "annoyingcat",
  methods: {
    randPos: function() {
      this.$refs.catimg.style.top = Math.floor(Math.random() * 100) + "vh";
      this.$refs.catimg.style.left = Math.floor(Math.random() * 100) + "vw";
    }
  },
  mounted: function() {
    setInterval(this.randPos, 300);
  }
};
</script>

<style>

.cat {
  /* height: 8vmax; */
  margin-left: -10vw;
  height: 30%;
  opacity: 0.666;
  position: fixed;
  pointer-events: none;
}
</style>
