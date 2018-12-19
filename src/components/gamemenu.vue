<template>
  <div>
    <sounds></sounds>
    <b-navbar variant="dark" type="dark" toggleable="md" sticky>
      <h1>Tetris</h1>
      <highscoregame></highscoregame>
      <instructionsgame></instructionsgame>
      <settingsgame></settingsgame>
    </b-navbar>
    <p class="test">Test</p><br>
    <p class="test">Test</p><br>
    <p class="test">Test</p><br>
  </div>
</template>

<script>
import sounds from './sounds'
import settingsgame from './settingsgame'
import highscoregame from './highscoregame'
import instructionsgame from './instructionsgame'
export default {
  name: 'gamemenu',
  components: {
    sounds,
    settingsgame,
    highscoregame,
    instructionsgame
  }
}
</script>

<style>
h1 {
    font-size: 4vh;
    padding-right: 6vh;
    color: hotpink;
}

.gm {
    font-size: 3vh;
    padding-right: 4vh;
    margin-bottom: 0;
    color: hotpink;
}

.test {
    font-size: 50vh;
}
</style>



