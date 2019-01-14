<template>
  <div id="gmb">
    <sounds/>
    <b-navbar class="pink" type="dark" toggleable="md" sticky>
      <b-navbar-brand to="/">
        <img src="/static/logo.png" alt="Tetris" id="gmlogo">
      </b-navbar-brand>
      <gamemodegame/>
      <highscoregame/>
      <howtoplaygame/>
      <b-navbar-nav class="ml-auto">
        <registergame/>
        <logingame/>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import sounds from "./sounds";
import startmenu from "./startmenu";
import gamemodegame from "./gamemodegame";
import highscoregame from "./highscoregame";
import howtoplaygame from "./howtoplaygame";
import registergame from "./registergame";
import logingame from "./logingame";
export default {
  name: "gamemenu",
  components: {
    sounds,
    startmenu,
    gamemodegame,
    highscoregame,
    howtoplaygame,
    registergame,
    logingame
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
  max-height: 68px;
}

.gm {
  cursor: pointer;
  font-size: 32px;
  margin-left: 2vw;
  margin-bottom: 0;
  color: rgb(255, 192, 227);
  white-space: nowrap;
}

.sounds {
  top: 9vh;
  left: 10px;
}

@media (max-width: 900px) {
  #gmb {
    display: none;
  }
}
</style>




