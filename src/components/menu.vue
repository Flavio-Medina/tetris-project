<template>
  <div>
    <h1 class="text-center">Tetris</h1>
    <sounds></sounds>
    <div class="container">
        <b-button class="col align-self-center btn btn-primary" to="gamemenu"> <!-- TODO: replace with settingsmodal -->
          <p class="btnFont">Start Game</p>
        </b-button>
        <highscore></highscore>
        <instructions></instructions>
    </div>
  </div>
</template>

<script>
import instructions from './instructions'
import highscore from './highscore'
import sounds from './sounds'
import gamemenu from './gamemenu'
export default {
  components: {
    instructions,
    highscore,
    sounds,
    gamemenu
  }
}
</script>

<style>
h1.text-center {
    font-size: 10vmax;
    margin-bottom: 10vh;
}

a {
    text-decoration: none;
}

.btnFont {
    font-size: 10vh;
    line-height: 10vh;
    color: white;
}

.btn-primary {
    margin-bottom: 10vh;
    background-color: #007bff;
    border: 0;
}
</style>