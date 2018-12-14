<template>
  <div>
    <h1 class="text-center">Tetris</h1>
    <sounds></sounds>
    <div class="container">
        <div class="col align-self-center btn btn-primary">
            <p class="btnFont">Start Game</p>
        </div>
        <div class="col align-self-center btn btn-primary">
            <p class="btnFont">Highscore</p>
        </div>
        <instructions></instructions>
    </div>
  </div>
</template>

<script>
import instructions from './instructions'
import sounds from './sounds'
export default {
  components: {
    instructions,
    sounds
  }
}
</script>

<style scoped>
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
}
</style>