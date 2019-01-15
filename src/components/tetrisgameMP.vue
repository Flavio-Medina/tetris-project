<template>
  <div>
    <div class="sc1P">
      1P Score:
      <span id="score1P"></span>
      &nbsp; &nbsp; &nbsp;
      <span>
        Level:
        <span id="level1P"></span>
      </span>
    </div>

    <div class="sc2P">
      2P Score:
      <span id="score2P"></span>
      &nbsp; &nbsp; &nbsp;
      <span>
        Level:
        <span id="level2P"></span>
      </span>
    </div>

    <canvas id="tetris1P" width="240" height="400"/>
    <canvas id="tetris2P" width="240" height="400"/>
  </div>
</template>

<script>
module.exports = {
  mounted() {
    const canvas1P = document.getElementById("tetris1P");
    const context1P = canvas1P.getContext("2d");
    const canvas2P = document.getElementById("tetris2P");
    const context2P = canvas2P.getContext("2d");
    const linesfx = new Audio("../../static/line.wav");

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
      level: 1
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
      level: 1
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
      drawLines(context);
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
      if (player1.score >= 40 && player1.score <= 79) {
        player1.level = 2;
        player1.dropInterval = 750;
      } else if (player1.score >= 80 && player1.score <= 119) {
        player1.level = 3;
        player1.dropInterval = 500;
      } else if (player1.score >= 120 && player1.score <= 159) {
        player1.level = 4;
        player1.dropInterval = 250;
      } else if (player1.score >= 160 && player1.score <= 199) {
        player1.level = 5;
        player1.dropInterval = 125;
      } else if (player1.score >= 200) {
        player1.level = 6;
        player1.dropInterval = 62.5;
      }

      updateScoreAndLevel(player1);

      if (player2.score >= 40 && player2.score <= 79) {
        player2.level = 2;
        player2.dropInterval = 750;
      } else if (player2.score >= 80 && player2.score <= 119) {
        player2.level = 3;
        player2.dropInterval = 500;
      } else if (player2.score >= 120 && player2.score <= 159) {
        player2.level = 4;
        player2.dropInterval = 250;
      } else if (player2.score >= 160 && player2.score <= 199) {
        player2.level = 5;
        player2.dropInterval = 125;
      } else if (player2.score >= 200) {
        player2.level = 6;
        player2.dropInterval = 62.5;
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
        player.score += 2;
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
      } else if (event.location === 2 && event.ctrlKey) {
        hardDrop(arena2P, player2);
      }
    });

    window.addEventListener(
      "keydown",
      function(e) {
        if (
          [
            "a",
            "d",
            "s",
            "w",
            "f",
            "A",
            "D",
            "S",
            "W",
            "F",
            "ArrowLeft",
            "ArrowRight",
            "ArrowDown",
            "ArrowUp",
            "CTRL"
          ].indexOf(e.key) > -1
        ) {
          e.preventDefault();
        }
      },
      false
    );

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
        linesfx.play();
        player.score += 10;
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

    // Sorgt dafür, dass ein neuer, zufälliger Block von oben fällt
    function reset(arena, player) {
      const pieces = "TJLOSZI";
      player.matrix = createTetromino(
        pieces[(pieces.length * Math.random()) | 0]
      );
      player.position.y = 0;
      player.position.x =
        ((arena[0].length / 2) | 0) - ((player.matrix[0].length / 2) | 0);

      if (collide(arena, player)) {
        arena.forEach(row => row.fill(0));
        player.score = 0;
        player.level = 1;
        player.dropInterval = 1000;
        updateScoreAndLevel(player);
      }
    }

    function updateScoreAndLevel(player) {
      try {
        if (player === player1) {
          document.getElementById("score1P").innerText = player.score;
          document.getElementById("level1P").innerText = player.level;
        } else if (player === player2) {
          document.getElementById("score2P").innerText = player.score;
          document.getElementById("level2P").innerText = player.level;
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
canvas {
  border: solid 7px hotpink;
  height: 80vmax;
  max-height: 80vh;
  bottom: 1.1vh;
  display: inline-block;
  position: fixed;
}

#tetris1P,
.sc1P {
  right: 50vw;
}

#tetris2P,
.sc2P {
  left: 50vw;
}

.sc1P,
.sc2P {
  font-size: 5vh;
  bottom: 81vh;
  padding-left: 1vw;
  padding-right: 1vw;
  margin-bottom: 0;
  position: fixed;
  border: solid 5px hotpink;
  background-color: rgb(255, 214, 237);
  color: hotpink;
}
</style>
