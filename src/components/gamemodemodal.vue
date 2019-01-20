<template>
  <b-modal id="gamemodem" size="lg" hide-footer no-enforce-focus hide-header-close title="Select Gamemode">
    <div class="container">
      <b-button class="col align-self-center btn btn-primary" to="tetris">
        <p class="btnFont">1 Player</p>
      </b-button>
      <b-button class="col align-self-center btn btn-primary" to="tetrisMP">
        <p class="btnFont">2 Players</p>
      </b-button>
      <b-button class="col align-self-center btn btn-primary" to="tetrisDifficultyMedium">
        <p class="btnFont">Difficulty: Medium</p>
      </b-button>
      <b-button class="col align-self-center btn btn-primary" to="tetrisHighestLevel">
        <p class="btnFont">Difficulty: Hard</p>
      </b-button>
      <b-button class="col align-self-center btn btn-primary" to="tetrisTimer">
        <p class="btnFont">Timer</p>
      </b-button>
      <b-button class="col align-self-center btn btn-primary" to="tetrisinv">
        <p class="btnFont">Invisible</p>
      </b-button>
      <b-button class="col align-self-center btn btn-primary" to="tetristroll">
        <p class="btnFont">Troll Mode</p>
      </b-button>
    </div>
  </b-modal>
</template>

<style scoped>
@import "../assets/css/modal.css";

.btn-primary {
  margin-bottom: 1vh;
}

.btnFont {
  font-size: 6vh;
  line-height: 6vh;
}
</style>
