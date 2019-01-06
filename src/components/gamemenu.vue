<template>
  <div>
    <sounds/>
    <b-navbar class="pink" type="dark" toggleable="md" sticky>
      <b-navbar-brand to="/"><img src="/static/logo.png" alt="Tetris" id="gmlogo"></b-navbar-brand>
      <highscoregame/>
      <howtoplaygame/>
      <!-- TODO
      <settingsgame></settingsgame>
      <b-navbar-nav class="ml-auto">
        <signinupgame></signinupgame>
      </b-navbar-nav>
      -->
    </b-navbar>
    <howtoplayshort/>
    <div class="sc">Score: <span id="score"></span> </div>
    <canvas id="tetris" width="240" height="400" />
  </div>
</template>

<script>
import tetris from './tetris.js'
import sounds from './sounds'
import tmenu from './tmenu'
// import settingsgame from './settingsgame'
import highscoregame from './highscoregame'
import howtoplaygame from './howtoplaygame'
import howtoplayshort from './howtoplayshort'
// import signinupgame from './signinupgame'
export default {
  name: 'gamemenu',
  components: {
    sounds,
    tmenu,
    // settingsgame,
    highscoregame,
    howtoplaygame,
    howtoplayshort
    // signinupgame
  },
  mixins: [tetris]
}
</script>

<style>
body {
  background-image: url("/static/background.jpg");
  background-repeat: no-repeat;
  background-size: 100vmax 100vmax;
}

canvas {
  border: solid 7px hotpink;
  padding-left: 0;
  padding-right: 0;
  margin-left: auto;
  margin-right: auto;
  display: block;
  height: 80vh;
}

.sc {
  font-size: 40px;
  width: 30vw;
  position: relative;
  text-align: center;
  padding-left: 0;
  padding-right: 0;
  margin-left: auto;
  margin-right: auto;
  border-style: solid;
  border-color: hotpink;
  background-color: rgb(255, 214, 237);
  color: hotpink;
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



