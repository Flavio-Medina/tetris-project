<template>
  <div>
    <gamemenu/>
    <howtoplayshortMP/>
    <tetrisgameMP/>
  </div>
</template>

<script>
import tetrisgameMP from "./tetrisgameMP";
import gamemenu from "./gamemenu";
import howtoplayshortMP from "./howtoplayshortMP"
export default {
  components: {
    tetrisgameMP,
    howtoplayshortMP,
    gamemenu
  }
};
</script>

<style>
.sounds {
  display: none;
}
</style>