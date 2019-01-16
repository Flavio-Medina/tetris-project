<template>
  <b-modal id="gamemodem" size="lg" hide-footer no-enforce-focus title="Select Gamemode">
    <div class="container">
      <b-button class="col align-self-center btn btn-primary" to="tetris">
        <p class="btnFont">1 Player</p>
      </b-button>
      <b-button class="col align-self-center btn btn-primary" to="tetrisMP">
        <p class="btnFont">2 Players</p>
      </b-button>
      <b-button class="col align-self-center btn btn-primary" to="tetrisHighestLevel">
        <p class="btnFont">Highest level</p>
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
  margin-bottom: 0;
}
</style>
