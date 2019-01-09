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

.btnFont {
  font-size: 10vh;
  line-height: 10vh;
  color: rgb(255, 192, 227);
}

.btn-primary {
  margin-bottom: 8vh;
  background-color: hotpink;
  border-color: rgb(255, 192, 227);
}

.btn-primary:hover {
  background-color: rgb(255, 192, 227);
  border-color: hotpink;
}

.btn-primary:hover .btnFont {
  color: hotpink;
}

.btn-primary:not(:disabled):not(.disabled):active {
  background-color: rgb(255, 192, 227);
  border-color: hotpink;
}

.modal {
  background-color: rgba(255, 105, 180, 0.5);
  color: hotpink;
}

.modal-header {
  background-color: rgba(255, 105, 180, 0.4);
}

.modal-body {
  background-color: rgba(255, 105, 180, 0.3);
}

.table {
  background-color: rgba(255, 105, 180, 0.05);
}
</style>

<style scoped>
.sounds {
  top: 10px;
  left: 10px;
}
</style>
