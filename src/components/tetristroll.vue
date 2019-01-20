<template>
  <div>
    <b-navbar class="pink" type="dark" toggleable="md" sticky>
      <b-navbar-brand to="/">
        <img src="/static/logo.png" alt="Tetris" id="gmlogo">
      </b-navbar-brand>
      <p v-b-modal.gamemodem class="gm">Game Mode</p>
      <gamemodemodal/>
      <p v-b-modal.hs class="gm">High Score</p>
      <highscoremodal/>
      <p v-b-modal.h2p class="gm">How to Play</p>
      <howtoplaymodal/>
      <b-navbar-nav class="ml-auto">
        <p class="gm" to="user/register">Register</p>
        <p class="gm" to="user/login">Login</p>
      </b-navbar-nav>
    </b-navbar>
    <howtoplayshorttroll/>
    <tetrisgametroll/>
    <!-- ZU WENIG KATZEN? DANN FÜGE MEHR <annoyingcat/> HINZU! -->
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
    <annoyingcat/>
  </div>
</template>

<script>
import tetrisgametroll from "./tetrisgametroll";
import howtoplayshorttroll from "./howtoplayshorttroll";
import gamemodemodal from "./gamemodemodal";
import highscoremodal from "./highscoremodal";
import howtoplaymodal from "./howtoplaymodal";
import annoyingcat from "./annoyingcat";
export default {
  components: {
    tetrisgametroll,
    howtoplayshorttroll,
    gamemodemodal,
    highscoremodal,
    howtoplaymodal,
    annoyingcat
  }
};
</script>

<style>
@import "../assets/css/modal.css";

body {
  background-image: url("/static/background.jpg");
  background-repeat: no-repeat;
  background-size: 100vmax 100vmax;
}

#gmlogo {
  width: 6em;
}

.pink {
  background-color: rgb(255, 105, 180);
  max-height: 8em;
}

.gm {
  cursor: pointer;
  font-size: 32px;
  font-weight: 600;
  margin-left: 3vw;
  margin-bottom: 0;
  color: rgb(255, 192, 227);
  white-space: nowrap;
}

.sounds {
  top: 9vh;
  left: 1vw;
}

@media (max-width: 900px) {
  #gmb {
    display: none;
  }
}
</style>