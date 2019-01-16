<template>
  <b-modal id="hs" size="lg" hide-footer no-enforce-focus title="High Score">
    <highscoredata/>
  </b-modal>
</template>

<script>
import highscoredata from "./highscoredata";
export default {
  components: {
    highscoredata
  }
};
</script>

<style>
@import "../assets/css/modal.css";
</style>
