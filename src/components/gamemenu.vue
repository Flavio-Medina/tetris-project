<template>
  <div>
    <sounds></sounds>
    <b-navbar class="pink" type="dark" toggleable="md" sticky>
      <b-navbar-brand to="/"><h1>Tetris</h1></b-navbar-brand>
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

.pink {
  background-color: hotpink;
}

h1 {
  font-size: 4vh;
  padding-right: 6vh;
  color: rgb(255, 192, 227);
}

.gm {
  cursor: pointer;
  font-size: 3vh;
  padding-right: 4vh;
  margin-bottom: 0;
  color: rgb(255, 192, 227);
}

.test {
  font-size: 50vh;
}
</style>



