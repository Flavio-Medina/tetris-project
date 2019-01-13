<template>
  <div>
    <img src="/static/logo.png" alt="Tetris" id="mlogo">
    <signinup/>
    <sounds/>
    <div class="container">
      <gamemode/>
      <highscore/>
      <howtoplay/>
    </div>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
  </div>
</template>

<script>
import howtoplay from "./howtoplay";
import highscore from "./highscore";
import sounds from "./sounds";
import signinup from "./signinup";
import gamemode from "./gamemode";
import annoyingcat from "./annoyingcat";

export default {
  components: {
    howtoplay,
    highscore,
    sounds,
    gamemode,
    signinup,
    annoyingcat
  }
};
</script>

<style>
body {
  background-image: url("/static/background.jpg");
  background-repeat: no-repeat;
  background-size: 100vmax 100vmax;
  cursor: default;
}

#mlogo {
  max-width: 60vw;
  max-height: 20vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2vh;
  margin-bottom: 8vh;
}

a {
  text-decoration: none;
}
</style>

<style scoped>
.sounds {
  top: 10px;
  left: 10px;
}
</style>
