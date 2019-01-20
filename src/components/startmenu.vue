<template>
  <div>
    <img src="/static/logo.png" alt="Tetris" id="mlogo">
    <div v-if="this.loggedIn">
      <b-btn class="btn btn-primary btnlog" id="btnlogout" v-on:click="logout">
        <p class="btnreglogfont">Log out</p>
      </b-btn>
    </div>
    <div v-else>
      <b-btn class="btn btn-primary btnreg" to="user/register">
        <p class="btnreglogfont">Register</p>
      </b-btn>
      <b-btn class="btn btn-primary btnlog" to="user/login">
        <p class="btnreglogfont">Login</p>
      </b-btn>
    </div>
    <sounds/>
    <div class="container">
      <b-btn v-b-modal.gamemodem class="col align-self-center btn btn-primary btnFont">
        <p class="btnFont">Start Game</p>
      </b-btn>
      <gamemodemodal/>
      <b-btn v-b-modal.hs class="col align-self-center btn btn-primary">
        <p class="btnFont">High Score</p>
      </b-btn>
      <highscoremodal/>
      <b-btn v-b-modal.h2p class="col align-self-center btn btn-primary btnFont">
        <p class="btnFont">How to Play</p>
      </b-btn>
      <howtoplaymodal/>
    </div>
    <annoyingcat/>
  </div>
</template>

<script>
import howtoplaymodal from "./howtoplaymodal";
import highscoremodal from "./highscoremodal";
import sounds from "./sounds";
import gamemodemodal from "./gamemodemodal";
import annoyingcat from "./annoyingcat";

export default {
  components: {
    howtoplaymodal,
    highscoremodal,
    sounds,
    gamemodemodal,
    annoyingcat
  },

  data() {
    return {
      loggedIn: this.isLoggedIn
    };
  },

  methods: {
    logout() {
      localStorage.removeItem("usertoken");
      this.loggedIn = false;
    }
  },

  computed: {
    isLoggedIn() {
      if (localStorage.getItem("usertoken") === null || localStorage.getItem("usertoken") === undefined) {
        return false;
      } else {
        return true;
      }
    }
  },

  mounted() {
    this.loggedIn = this.isLoggedIn;
  },
};
</script>

<style>
@import "../assets/css/modal.css";
@import "../assets/css/btnreglog.css";

body {
  background-image: url("/static/background.jpg");
  background-repeat: no-repeat;
  background-size: 100vmax 100vmax;
  cursor: default;
}

#mlogo {
  max-width: 60vw;
  max-height: 18vh;
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
  top: 1vh;
  left: 1vw;
}
</style>
