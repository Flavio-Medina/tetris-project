<template>
  <div>
    <gamemenu/>
    <howtoplayshort/>
    <tetrisgameTimer/>
  </div>
</template>

<script>
import tetrisgameTimer from "./tetrisgameTimer";
import howtoplayshort from "./howtoplayshort";
import gamemenu from "./gamemenu";
export default {
  components: {
    tetrisgameTimer,
    howtoplayshort,
    gamemenu
  }
};
</script>

<style>
.sounds {
  display: initial;
}
</style>
