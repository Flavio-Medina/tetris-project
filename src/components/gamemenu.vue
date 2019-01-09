<template>
  <div>
    <sounds/>
    <b-navbar class="pink" type="dark" toggleable="md" sticky>
      <b-navbar-brand to="/">
        <img src="/static/logo.png" alt="Tetris" id="gmlogo">
      </b-navbar-brand>
      <highscoregame/>
      <howtoplaygame/>
      <gamemodegame/>
      <b-navbar-nav class="ml-auto">
        <signinupgame/>
      </b-navbar-nav>
    </b-navbar>
    <howtoplayshort/>
  </div>
</template>

<script>
import sounds from "./sounds";
import startmenu from "./startmenu";
import gamemodegame from "./gamemodegame";
import highscoregame from "./highscoregame";
import howtoplaygame from "./howtoplaygame";
import howtoplayshort from "./howtoplayshort";
import signinupgame from "./signinupgame";
export default {
  name: "gamemenu",
  components: {
    sounds,
    startmenu,
    gamemodegame,
    highscoregame,
    howtoplaygame,
    howtoplayshort,
    signinupgame
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
  width: 128px;
}

.pink {
  background-color: rgb(255, 105, 180);
}

.gm {
  cursor: pointer;
  font-size: 32px;
  margin-left: 4vmax;
  margin-bottom: 0;
  color: rgb(255, 192, 227);
}

.sounds {
  top: 9vh;
  left: 10px;
}
</style>



