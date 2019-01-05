<template>
  <div>
    <p v-b-modal.hs class="gm">High Score</p>
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