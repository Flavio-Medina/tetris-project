<template>
  <div>
    <gamemenu/>
    <howtoplayshort/>
    <tetrisgameinv/>
  </div>
</template>

<script>
import tetrisgameinv from "./tetrisgameinv";
import howtoplayshort from "./howtoplayshort";
import gamemenu from "./gamemenu";
export default {
  components: {
    tetrisgameinv,
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