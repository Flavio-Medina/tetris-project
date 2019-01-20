<template>
  <p id="h2ps">Controls:
    <br>Left/Right: Move Left/Right
    <br>Up: Rotate
    <br>Down: Soft Drop
    <br>Space: Hard Drop
    <br>C: Hold piece
    <br>
  </p>
</template>

<style scoped>
p {
  color: hotpink;
  position: fixed;
  bottom: 2vh;
  margin: 0;
  padding: 0.6em;
  width: 14.2em;
  font-size: 18px;
  font-weight: 450;
  left: 1vw;
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
