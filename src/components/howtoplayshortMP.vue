<template>
  <div>
    <p id="p1">1P Controls:
      <br>A/D: Move Left/Right
      <br>W: Rotate
      <br>S: Soft Drop
      <br>F: Hard Drop
      <br>
    </p>
    <p id="p2">2P Controls:
      <br>Left/Right: Move Left/Right
      <br>Up: Rotate
      <br>Down: Soft Drop
      <br>RightShift: Hard Drop
      <br>
    </p>
  </div>
</template>

<style scoped>
p {
  color: hotpink;
  position: fixed;
  bottom: 2vh;
  margin: 0;
  padding: 0.6em;
  width: 14.5em;
  font-size: 18px;
  font-weight: 450;
  border-style: solid;
  border-color: hotpink;
  background-color: rgb(255, 214, 237);
}

#p1 {
  left: 1vw;
}

#p2 {
  right: 1vw;
}
</style>

<style>
@media (max-width: 1360px) {
  #p1, #p2 {
    display: none;
  }
}
</style>


