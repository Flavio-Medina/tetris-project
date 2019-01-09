<template>
  <div>
    <b-btn v-b-modal.gamemodem class="col align-self-center btn btn-primary btnFont">
      <p class="btnFont">Start Game</p>
    </b-btn>
    <gamemodemodal/>
  </div>
</template>

<script>
import gamemodemodal from "./gamemodemodal";
export default {
  name: "gamemode",
  components: {
    gamemodemodal
  }
};
</script>