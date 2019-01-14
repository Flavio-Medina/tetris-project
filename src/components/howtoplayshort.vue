<template>
  <p id="h2ps">Controls:
    <br>Left/Right: Move Left/Right
    <br>Up: Rotate
    <br>Down: Soft Drop
    <br>Space: Hard Drop
    <br>
  </p>
</template>

<style scoped>
p {
  color: hotpink;
  position: fixed;
  bottom: 0px;
  left: 10px;
  padding: 4px;
  border-style: solid;
  border-color: hotpink;
  background-color: rgb(255, 214, 237);
}
</style>

<style>
@media (max-width: 900px) {
  #h2ps {
    display: none;
  }
}
</style>
