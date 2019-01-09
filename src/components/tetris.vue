<template>
  <div>
    <gamemenu/>
    <tetrisgame/>
  </div>
</template>

<script>
import tetrisgame from "./tetrisgame";
import gamemenu from "./gamemenu";
export default {
  components: {
    tetrisgame,
    gamemenu
  }
};
</script>
