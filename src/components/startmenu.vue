<template>
  <div>
    <img src="/static/logo.png" alt="Tetris" id="mlogo">
    <btnregister/>
    <btnlogin/>
    <sounds/>
    <div class="container">
      <gamemode/>
      <highscore/>
      <howtoplay/>
    </div>
    <annoyingcat/>
  </div>
</template>

<script>
import howtoplay from "./howtoplay";
import highscore from "./highscore";
import sounds from "./sounds";
import gamemode from "./gamemode";
import annoyingcat from "./annoyingcat";
import btnregister from "./btnregister";
import btnlogin from "./btnlogin";

export default {
  components: {
    howtoplay,
    highscore,
    sounds,
    gamemode,
    btnregister,
    btnlogin,
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
