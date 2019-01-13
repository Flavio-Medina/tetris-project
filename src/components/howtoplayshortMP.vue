<template>
  <div id="h2psMP">
    <p id="p1">1P Controls:
      <br>Left/Right: Move Left/Right
      <br>Up: Rotate
      <br>Down: Soft Drop
      <br>RightCtrl: Hard Drop
      <br>
    </p>
    <p id="p2">2P Controls:
      <br>A/S: Move Left/Right
      <br>W: Rotate
      <br>S: Soft Drop
      <br>F: Hard Drop
      <br>
    </p>
  </div>
</template>

<style scoped>
p {
  color: hotpink;
  position: fixed;
  bottom: 0px;
  padding: 4px;
  border-style: solid;
  border-color: hotpink;
  background-color: rgb(255, 214, 237);
}

#p1 {
  left: 10px;
}

#p2 {
  right: 10px;
}
</style>

