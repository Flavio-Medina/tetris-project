<template>
  <div>
    <b-btn v-b-modal.hs class="col align-self-center btn btn-primary">
      <p class="btnFont">High Score</p>
    </b-btn>
    <highscoremodal/>
  </div>
</template>

<script>
import highscoremodal from './highscoremodal'
export default {
  name: 'highscore',
  components: {
    highscoremodal
  }
}
</script>