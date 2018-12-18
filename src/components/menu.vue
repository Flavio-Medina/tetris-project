<template>
  <div>
    <h1 class="text-center">Tetris</h1>
    <sounds></sounds>
    <div class="container">
        <div class="col align-self-center btn btn-primary">
            <p class="btnFont">Start Game</p>
        </div>
        <highscore></highscore>
        <instructions></instructions>
    </div>
  </div>
</template>

<script>
import instructions from './instructions'
import highscore from './highscore'
import sounds from './sounds'
export default {
  components: {
    instructions,
    highscore,
    sounds
  }
}
</script>

<style>
h1.text-center {
    font-size: 10vmax;
    margin-bottom: 10vh;
}

.btnFont {
    font-size: 10vh;
    line-height: 10vh;
}

.btn-primary {
    margin-bottom: 10vh;
    background-color: #007bff;
}
</style>