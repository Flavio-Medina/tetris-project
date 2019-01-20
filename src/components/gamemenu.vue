<template>
  <div id="gmb">
    <sounds/>
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
  </div>
</template>

<script>
import sounds from "./sounds"
import gamemodemodal from "./gamemodemodal";
import highscoremodal from "./highscoremodal";
import howtoplaymodal from "./howtoplaymodal";
export default {
  name: "gamemenu",
  components: {
    sounds,
    gamemodemodal,
    highscoremodal,
    howtoplaymodal
  }
};
</script>

<style>
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