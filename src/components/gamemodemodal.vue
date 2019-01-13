<template>
  <b-modal id="gamemodem" size="lg" hide-footer title="Select Gamemode">
    <div class="container">
      <b-button class="col align-self-center btn btn-primary" to="tetris">
        <p class="btnFont">1 Player</p>
      </b-button>
      <b-button class="col align-self-center btn btn-primary" to="tetrisMP">
        <p class="btnFont">2 Players</p>
      </b-button>
      <b-button class="col align-self-center btn btn-primary" to="tetrisinv">
        <p class="btnFont">Invisible (1P)</p>
      </b-button>
    </div>
  </b-modal>
</template>

<style>
@import './../../static/modal.css';
</style>
