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
body {
  background-image: url("/static/background.png");
  background-repeat: no-repeat;
  background-size: 100vmax 100vmax;
  cursor: default;
}

h1.text-center {
    font-size: 10vmax;
    margin-bottom: 10vh;
    color: hotpink;
}

a {
    text-decoration: none;
}

.btnFont {
    font-size: 10vh;
    line-height: 10vh;
    color: rgb(255, 192, 227);
}

.btn-primary {
    margin-bottom: 8vh;
    background-color: hotpink;
    border-color: rgb(255, 192, 227);
}

.btn-primary:hover {
    background-color: rgb(255, 192, 227);
    border-color: hotpink;
}

.btn-primary:hover .btnFont {
    color: hotpink;
}

.btn-primary:not(:disabled):not(.disabled):active {
    background-color: rgb(255, 192, 227);
    border-color: hotpink;
}

.modal {
    background-color: rgba(255, 105, 180, 0.5);
    color: hotpink;
}

.modal-header {
    background-color: rgba(255, 105, 180, 0.4);
}

.modal-body {
    background-color: rgba(255, 105, 180, 0.3);
}

.table {
    background-color: rgba(255, 105, 180, 0.05);
}
</style>