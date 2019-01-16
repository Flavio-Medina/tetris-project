<template>
  <div>
    <img src="/static/logo.png" alt="Tetris" id="mlogo">
    <btnregister/>
    <btnlogin/>
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
import btnregister from "./btnregister";
import btnlogin from "./btnlogin";
import EventBus from "./EventBus";

EventBus.$on("logged-in", test => {
  console.log(test);
});

export default {
  components: {
    howtoplaymodal,
    highscoremodal,
    sounds,
    gamemodemodal,
    btnregister,
    btnlogin,
    annoyingcat
  },
  data() {
    return {
      auth: "",
      user: ""
    };
  },

  methods: {
    logout() {
      localStorage.removeItem("usertoken");
    }
  },

  mounted() {
    EventBus.$on("logged-in", status => {
      this.auth = status;
    });
  }
};
</script>

<style>
@import "../assets/css/modal.css";

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
