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
      this.$refs.catimg.style.top = Math.floor(Math.random() * 80) + "vh";
      this.$refs.catimg.style.left = Math.floor(Math.random() * 80) + "vw";
      this.$refs.catimg.style.animation = "flicker 0.5s infinite";
    }
  },
  mounted: function() {
    setInterval(this.randPos, 500);
  }
};
</script>

<style>
@keyframes flicker {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}

.cat {
  /* height: 8vmax; */
  top: 0;
  height: 30%;
  position: fixed;
  pointer-events: none;
}
</style>
