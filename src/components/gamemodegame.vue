<template>
  <div>
    <p v-b-modal.gamemodem class="gm">Game Mode</p>
    <gamemodemodal/>
  </div>
</template>

<script>
import gamemodemodal from "./gamemodemodal";
export default {
  name: "gamemodegame",
  components: {
    gamemodemodal
  }
};
</script>