<template>
  <div>
    <canvas id="tetris1P" width="240" height="400"/>
    <canvas id="tetris2P" width="240" height="400"/>
    <canvas id="next1P" width="60" height="80"/>
    <canvas id="next2P" width="60" height="80"/>
    <p class="sc1P">
      Score:
      <span class="score1P"></span>
      <br>Lines:
      <span class="lines1P"></span>
      <br>Level:
      <span class="level1P"></span>
      <br>Game Over:
      <span class="gameover1P"></span>
    </p>

    <p class="sc2P">
      Score:
      <span class="score2P"></span>
      <br>Lines:
      <span class="lines2P"></span>
      <br>Level:
      <span class="level2P"></span>
      <br>Game Over:
      <span class="gameover2P"></span>
    </p>
    <p class="scs1P">
      Score:
      <span class="score1P"></span>
      &nbsp; &nbsp;
      Lines:
      <span class="lines1P"></span>
      &nbsp; &nbsp;
      Level:
      <span class="level1P"></span>
      &nbsp; &nbsp;
      Game Over:
      <span class="gameover1P"></span>
    </p>

    <p class="scs2P">
      Score:
      <span class="score2P"></span>
      &nbsp; &nbsp;
      Lines:
      <span class="lines2P"></span>
      &nbsp; &nbsp;
      Level:
      <span class="level2P"></span>
      &nbsp; &nbsp;
      Game Over:
      <span class="gameover2P"></span>
    </p>
  </div>
</template>

<script>
module.exports = {
  mounted() {
    const canvas1P = document.getElementById("tetris1P");
    const context1P = canvas1P.getContext("2d");
    const canvas2P = document.getElementById("tetris2P");
    const context2P = canvas2P.getContext("2d");

    const linesfx = new Audio("../../static/cat.mp3");

    const canvasNext1P = document.getElementById("next1P");
    const contextNext1P = canvasNext1P.getContext("2d");
    contextNext1P.scale(20, 20);

    const canvasNext2P = document.getElementById("next2P");
    const contextNext2P = canvasNext2P.getContext("2d");
    contextNext2P.scale(20, 20);

    context1P.scale(20, 20);
    context2P.scale(20, 20);

    const arena1P = createMatrix(12, 20);
    const arena2P = createMatrix(12, 20);

    const player1 = {
      position: {
        x: 0,
        y: 0
      },
      matrix: null,
      dropCounter: 0,
      score: 0,
      dropInterval: 1000,
      level: 1,
      lines: 0,
      gameover: 0
    };

    const player2 = {
      position: {
        x: 0,
        y: 0
      },
      matrix: null,
      dropCounter: 0,
      score: 0,
      dropInterval: 1000,
      level: 1,
      lines: 0,
      gameover: 0
    };

    function createMatrix(width, height) {
      const matrix = [];
      while (height--) {
        matrix.push(new Array(width).fill(0));
      }
      return matrix;
    }

    function draw(context, canvas, arena, player) {
      context.fillStyle = "rgb(255, 192, 227)";
      context.fillRect(0, 0, canvas.width, canvas.height);

      drawMatrix(arena, { x: 0, y: 0 }, context);
      drawMatrix(player.matrix, player.position, context);
      drawLines(context);
    }

    function drawLines(context) {
      context.lineWidth = 0.01;
      context.strokeStyle = "rgb(255, 105, 180)";

      for (let x = 0; x <= 12; x++) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, 20);
        context.stroke();
      }
      for (let y = 0; y <= 20; y++) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(12, y);
        context.stroke();
      }
    }

    function drawMatrix(matrix, offset, context) {
      matrix.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            context.fillStyle = colors[value];
            context.fillRect(x + offset.x, y + offset.y, 1, 1);
          }
        });
      });
    }

    function createTetromino(type) {
      if (type === "I") {
        return [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]];
      } else if (type === "L") {
        return [[0, 2, 0], [0, 2, 0], [0, 2, 2]];
      } else if (type === "J") {
        return [[0, 3, 0], [0, 3, 0], [3, 3, 0]];
      } else if (type === "O") {
        return [[4, 4], [4, 4]];
      } else if (type === "Z") {
        return [[5, 5, 0], [0, 5, 5], [0, 0, 0]];
      } else if (type === "S") {
        return [[0, 6, 6], [6, 6, 0], [0, 0, 0]];
      } else if (type === "T") {
        return [[0, 7, 0], [7, 7, 7], [0, 0, 0]];
      }
    }

    let lastTime = 0;

    function updateGame(time = 0) {
      if (player1.lines >= 3 && player1.lines <= 5) {
        player1.level = 2;
        player1.dropInterval = 800;
      } else if (player1.lines >= 6 && player1.lines <= 8) {
        player1.level = 3;
        player1.dropInterval = 600;
      } else if (player1.lines >= 9 && player1.lines <= 12) {
        player1.level = 4;
        player1.dropInterval = 400;
      } else if (player1.lines >= 13 && player1.lines <= 16) {
        player1.level = 5;
        player1.dropInterval = 300;
      } else if (player1.lines >= 17 && player1.lines <= 20) {
        player1.level = 6;
        player1.dropInterval = 250;
      } else if (player1.lines >= 21 && player1.lines <= 25) {
        player1.level = 7;
        player1.dropInterval = 200;
      } else if (player1.lines >= 26 && player1.lines <= 30) {
        player1.level = 8;
        player1.dropInterval = 150;
      } else if (player1.lines >= 31) {
        player1.level = 9;
        player1.dropInterval = 100;
      }

      updateScoreAndLevel(player1);

      if (player2.lines >= 3 && player2.lines <= 5) {
        player2.level = 2;
        player2.dropInterval = 800;
      } else if (player2.lines >= 6 && player2.lines <= 8) {
        player2.level = 3;
        player2.dropInterval = 600;
      } else if (player2.lines >= 9 && player2.lines <= 12) {
        player2.level = 4;
        player2.dropInterval = 400;
      } else if (player2.lines >= 13 && player2.lines <= 16) {
        player2.level = 5;
        player2.dropInterval = 300;
      } else if (player2.lines >= 17 && player2.lines <= 20) {
        player2.level = 6;
        player2.dropInterval = 250;
      } else if (player2.lines >= 21 && player2.lines <= 25) {
        player2.level = 7;
        player2.dropInterval = 200;
      } else if (player2.lines >= 26 && player2.lines <= 30) {
        player2.level = 8;
        player2.dropInterval = 150;
      } else if (player2.lines >= 31) {
        player2.level = 9;
        player2.dropInterval = 100;
      }

      updateScoreAndLevel(player2);

      const deltaTime = time - lastTime;

      player1.dropCounter += deltaTime;
      if (player1.dropCounter > player1.dropInterval) {
        softDrop(arena1P, player1);
      }

      player2.dropCounter += deltaTime;
      if (player2.dropCounter > player2.dropInterval) {
        softDrop(arena2P, player2);
      }

      lastTime = time;

      draw(context1P, canvas1P, arena1P, player1);
      draw(context2P, canvas2P, arena2P, player2);
      window.requestAnimationFrame(updateGame);
    }

    function softDrop(arena, player) {
      if (!collide(arena, player)) {
        player.position.y++;

        if (collide(arena, player)) {
          player.position.y--;
          merge(arena, player);
          reset(arena, player);
          clearRow(arena, player);
          updateScoreAndLevel(player);
        }

        player.dropCounter = 0;
      }
    }

    function hardDrop(arena, player) {
      if (!collide(arena, player)) {
        player.score += 1;
        while (!collide(arena, player)) {
          player.position.y++;
        }
        player.position.y--;
        merge(arena, player);
        reset(arena, player);
        clearRow(arena, player);
        updateScoreAndLevel(player);
      }
    }

    document.addEventListener("keydown", event => {
      if (event.key === "a" || event.key === "A") {
        move(-1, arena1P, player1);
      } else if (event.key === "d" || event.key === "D") {
        move(1, arena1P, player1);
      } else if (event.key === "s" || event.key === "S") {
        softDrop(arena1P, player1);
      } else if (event.key === "w" || event.key === "W") {
        rotate(1, arena1P, player1);
      } else if (event.key === "f" || event.key === "F") {
        hardDrop(arena1P, player1);
      }
    });

    document.addEventListener("keydown", event => {
      if (event.key === "ArrowLeft") {
        move(-1, arena2P, player2);
      } else if (event.key === "ArrowRight") {
        move(1, arena2P, player2);
      } else if (event.key === "ArrowDown") {
        softDrop(arena2P, player2);
      } else if (event.key === "ArrowUp") {
        rotate(1, arena2P, player2);
      } else if (event.location === 2 && event.shiftKey) {
        hardDrop(arena2P, player2);
      }
    });

    function move(offset, arena, player) {
      if (!collide(arena, player)) {
        player.position.x += offset;

        // Blöcke sollen beim Steuern nicht außerhalb des Spielfeldes gelangen
        if (collide(arena, player)) {
          player.position.x -= offset;
        }
      }
    }

    function rotate(direction, arena, player) {
      if (!collide(arena, player)) {
        const position = player.position.x;
        let offset = 1;
        rotateTetromino(player.matrix, direction);
        // Bei Rotation am linken oder rechten Rand sollen die Blöcke nicht außerhalb des Spielfeldes gelangen
        while (collide(arena, player)) {
          player.position.x += offset;
          offset = -(offset + (offset > 0 ? 1 : -1));
          if (offset > player.matrix[0].length) {
            rotateTetromino(player.matrix, -direction);
            player.position.x = position;
            return;
          }
        }
      }
    }

    function rotateTetromino(matrix, direction) {
      for (let y = 0; y < matrix.length; ++y) {
        for (let x = 0; x < y; ++x) {
          [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
        }
      }

      if (direction > 0) {
        matrix.forEach(row => row.reverse());
      } else {
        matrix.reverse();
      }
    }

    function clearRow(arena, player) {
      outer: for (let y = arena.length - 1; y > 0; --y) {
        for (let x = 0; x < arena[y].length; ++x) {
          if (arena[y][x] === 0) {
            continue outer;
          }
        }

        const row = arena.splice(y, 1)[0].fill(0);
        arena.unshift(row);
        ++y;
        if (document.getElementById("sfx").checked === true) {
          linesfx.play();
        }
        player.score += 9 + player.level;
        player.lines += 1;
      }
    }

    // Kollision mit unterem Spielrand oder anderen Spielblöcken identifizieren
    function collide(arena, player) {
      const m = player.matrix;
      const o = player.position;
      for (let y = 0; y < m.length; ++y) {
        for (let x = 0; x < m[y].length; ++x) {
          if (
            m[y][x] !== 0 &&
            (arena[y + o.y] && arena[y + o.y][x + o.x]) !== 0
          ) {
            return true;
          }
        }
      }
      return false;
    }

    // Blöcke verschwinden unten nicht, sondern bleiben an der Stelle stehen
    function merge(arena, player) {
      player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            arena[y + player.position.y][x + player.position.x] = value;
          }
        });
      });
    }

    let nextT1P = piece();
    let nextT2P = piece();

    function piece() {
      const pieces = "TJLOSZI";
      return createTetromino(pieces[(pieces.length * Math.random()) | 0]);
    }

    function showNext(player) {
      nextPiece = piece();
      if (player === player1) {
        contextNext1P.fillStyle = "rgb(255, 192, 227)";
        contextNext1P.fillRect(0, 0, canvasNext1P.width, canvasNext1P.height);
        drawMatrix(nextPiece, { x: 0, y: 0 }, contextNext1P);
        nextT1P = nextPiece;
      }
      if (player === player2) {
        contextNext2P.fillStyle = "rgb(255, 192, 227)";
        contextNext2P.fillRect(0, 0, canvasNext2P.width, canvasNext2P.height);
        drawMatrix(nextPiece, { x: 0, y: 0 }, contextNext2P);
        nextT2P = nextPiece;
      }
    }

    // Sorgt dafür, dass ein neuer, zufälliger Block von oben fällt
    function reset(arena, player) {
      if (player === player1) {
        player.matrix = nextT1P;
      }
      if (player === player2) {
        player.matrix = nextT2P;
      }
      player.position.y = 0;
      player.position.x =
        ((arena[0].length / 2) | 0) - ((player.matrix[0].length / 2) | 0);

      showNext(player);
      if (collide(arena, player)) {
        arena.forEach(row => row.fill(0));
        player.score = 0;
        player.level = 1;
        player.dropInterval = 1000;
        player.gameover += 1;
        updateScoreAndLevel(player);
      }
    }

    function updateScoreAndLevel(player) {
      try {
        if (player === player1) {
          document.getElementsByClassName("score1P")[0].innerText =
            player.score;
          document.getElementsByClassName("level1P")[0].innerText =
            player.level;
          document.getElementsByClassName("lines1P")[0].innerText =
            player.lines;
          document.getElementsByClassName("gameover1P")[0].innerText =
            player.gameover;
          document.getElementsByClassName("score1P")[1].innerText =
            player.score;
          document.getElementsByClassName("level1P")[1].innerText =
            player.level;
          document.getElementsByClassName("lines1P")[1].innerText =
            player.lines;
          document.getElementsByClassName("gameover1P")[1].innerText =
            player.gameover;
        } else if (player === player2) {
          document.getElementsByClassName("score2P")[0].innerText =
            player.score;
          document.getElementsByClassName("level2P")[0].innerText =
            player.level;
          document.getElementsByClassName("lines2P")[0].innerText =
            player.lines;
          document.getElementsByClassName("gameover2P")[0].innerText =
            player.gameover;
          document.getElementsByClassName("score2P")[1].innerText =
            player.score;
          document.getElementsByClassName("level2P")[1].innerText =
            player.level;
          document.getElementsByClassName("lines2P")[1].innerText =
            player.lines;
          document.getElementsByClassName("gameover2P")[1].innerText =
            player.gameover;
        }
      } catch (error) {}
    }

    const colors = [
      null,
      "red",
      "blue",
      "green",
      "hotpink",
      "orange",
      "yellow",
      "darkblue"
    ];

    reset(arena1P, player1);
    reset(arena2P, player2);
    updateScoreAndLevel(player1);
    updateScoreAndLevel(player2);
    updateGame();
  }
};
</script>

<style scoped>
#tetris1P,
#tetris2P {
  display: inline-block;
  position: fixed;
  border: solid 7px hotpink;
  height: 800px;
  top: 100px;
  margin: auto;
}

#tetris1P,
.scs1P {
  right: 50%;
  left: auto;
}

#tetris2P,
.scs2P {
  left: 50%;
  right: auto;
}

.sc1P,
.sc2P {
  font-size: 38px;
  font-weight: 600;
  width: 280px;
  padding-left: 12px;
  top: 100px;
  margin: auto;
  position: fixed;
  border: solid 5px hotpink;
  background-color: rgb(255, 214, 237);
  color: hotpink;
}

.scs1P,
.scs2P {
  font-size: 18px;
  width: 486px;
  height: 36px;
  padding-left: 12px;
  top: 64px;
  margin: auto;
  position: fixed;
  border: solid 5px hotpink;
  background-color: rgb(255, 214, 237);
  color: hotpink;
  overflow: hidden;
}

.sc1P {
  left: 10px;
}

.sc2P {
  right: 10px;
}

#next1P,
#next2P {
  border: solid 7px hotpink;
  height: 160px;
  top: 100px;
  margin: auto;
  padding: 2vh;
  padding-bottom: 0;
  background-color: rgb(255, 192, 227);
  position: absolute;
}

#next1P {
  left: 310px;
}

#next2P {
  right: 310px;
}

@media (max-width: 1700px) {
  .sc1P,
  .sc2P,
  #next1P,
  #next2P {
    display: none;
  }
}

@media (min-width: 1700px) {
  .scs1P,
  .scs2P {
    display: none;
  }
}
</style>

