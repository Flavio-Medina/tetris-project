<template>
  <div>
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
</style>