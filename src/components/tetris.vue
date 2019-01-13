<template>
  <div>
    <gamemenu/>
    <howtoplayshort/>
    <tetrisgame/>
  </div>
</template>

<script>
import tetrisgame from "./tetrisgame";
import howtoplayshort from "./howtoplayshort";
import gamemenu from "./gamemenu";
export default {
  components: {
    tetrisgame,
    howtoplayshort,
    gamemenu
  }
};
</script>
