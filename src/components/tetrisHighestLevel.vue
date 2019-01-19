<template>
  <div>
    <gamemenu/>
    <howtoplayshort/>
    <tetrisgameHighestLevel/>
  </div>
</template>

<script>
  import tetrisgameHighestLevel from "./tetrisgameHighestLevel";
  import howtoplayshort from "./howtoplayshort";
  import gamemenu from "./gamemenu";
  export default {
    components: {
      tetrisgameHighestLevel,
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