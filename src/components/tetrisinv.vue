<template>
  <div>
    <gamemenu/>
    <tetrisgameinv/>
  </div>
</template>

<script>
import tetrisgameinv from "./tetrisgameinv";
import gamemenu from "./gamemenu";
export default {
  components: {
    tetrisgameinv,
    gamemenu
  }
};
</script>