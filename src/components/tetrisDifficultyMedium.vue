<template>
  <div>
    <gamemenu/>
    <howtoplayshort/>
    <tetrisgameDifficultyMedium/>
  </div>
</template>

<script>
  import tetrisgameDifficultyMedium from "./tetrisgameDifficultyMedium";
  import howtoplayshort from "./howtoplayshort";
  import gamemenu from "./gamemenu";
  export default {
    components: {
      tetrisgameDifficultyMedium,
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