<template>
  <div>
    <sounds></sounds>
    <b-navbar class="pink" type="dark" toggleable="md" sticky>
      <b-navbar-brand to="/"><img src="/static/logo.png" alt="Tetris" id="gmlogo"></b-navbar-brand>
      <highscoregame></highscoregame>
      <instructionsgame></instructionsgame>
      <settingsgame></settingsgame>
    </b-navbar>
  </div>
</template>

<script>
import sounds from './sounds'
import menu from './menu'
import settingsgame from './settingsgame'
import highscoregame from './highscoregame'
import instructionsgame from './instructionsgame'
export default {
  name: 'gamemenu',
  components: {
    sounds,
    menu,
    settingsgame,
    highscoregame,
    instructionsgame
  }
}
</script>

<style>
body {
  background-image: url("/static/background.png");
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
</style>



