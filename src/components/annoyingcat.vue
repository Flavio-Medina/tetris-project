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
      try {
      this.$refs.catimg.style.top = Math.floor(Math.random() * 100) + "vh";
      this.$refs.catimg.style.left = Math.floor(Math.random() * 100) + "vw";
      }
      catch(error) {
        clearInterval(this.$mount.ac);
      }
    }
  },
  mounted: function() {
    let ac = setInterval(this.randPos, 300);
  }
};
</script>

<style>

.cat {
  margin-left: -10vw;
  height: 30%;
  opacity: 0.666;
  position: fixed;
  pointer-events: none;
}
</style>
