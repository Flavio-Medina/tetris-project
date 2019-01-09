<template>
  <div class="sounds">
    <audio src="./static/music.mp3" ref="music" type="audio/mpeg" autoplay loop></audio>
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
      <pre>Music:  </pre>
      <label class="switch">
        <input type="checkbox" v-on:click="bgmOnOff()" checked>
        <span class="slider"></span>
      </label>
    </div>
    <br>
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
      <pre>SFX:    </pre>
      <label class="switch">
        <input type="checkbox" checked>
        <span class="slider"></span>
      </label>
    </div>
  </div>
</template>

<script>
let bgmb = true;
export default {
  name: "sounds",
  methods: {
    bgmOnOff: function() {
      if (bgmb === true) {
        this.$refs.music.pause();
        bgmb = false;
      } else {
        this.$refs.music.play();
        bgmb = true;
      }
    }
  }
};
</script>

<style scoped>
pre {
  color: hotpink;
  margin: 2px;
}

.sounds {
  position: fixed;
  border-style: solid;
  border-color: hotpink;
  background-color: rgb(255, 214, 237);
  padding: 4px;
}

.switch {
  position: relative;
  display: inline-block;
  top: 2px;
  width: 30px;
  height: 17px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(255, 192, 227);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 13px;
  width: 13px;
  left: 2px;
  bottom: 2px;
  background-color: rgb(255, 214, 237);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: hotpink;
}

input:focus + .slider {
  box-shadow: 0 0 1px hotpink;
}

input:checked + .slider:before {
  -webkit-transform: translateX(13px);
  -ms-transform: translateX(13px);
  transform: translateX(13px);
}
</style>