const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

context.scale(20, 20);

const arena = createMatrix(12, 20);

const player = {
  position: {x: 0, y: 0},
  matrix: null,
  score: 0,
};

function createMatrix(width, height) {
  const matrix = [];
  while (height--) {
    matrix.push(new Array(width).fill(0));
  }
  return matrix;
}

function draw() {
  context.fillStyle = 'rgb(255, 192, 227)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  drawMatrix(arena, {x: 0, y: 0});
  drawMatrix(player.matrix, player.position);
}

function drawMatrix(matrix, offset) {
  matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        context.fillStyle = colors[value];
        context.fillRect(x + offset.x, y + offset.y, 1, 1);
      }
    });
  });
}

function createTetromino(type)
{
  if (type === 'I') {
    return [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ];
  } else if (type === 'L') {
    return [
      [0, 2, 0],
      [0, 2, 0],
      [0, 2, 2],
    ];
  } else if (type === 'J') {
    return [
      [0, 3, 0],
      [0, 3, 0],
      [3, 3, 0],
    ];
  } else if (type === 'O') {
    return [
      [4, 4],
      [4, 4],
    ];
  } else if (type === 'Z') {
    return [
      [5, 5, 0],
      [0, 5, 5],
      [0, 0, 0],
    ];
  } else if (type === 'S') {
    return [
      [0, 6, 6],
      [6, 6, 0],
      [0, 0, 0],
    ];
  } else if (type === 'T') {
    return [
      [0, 7, 0],
      [7, 7, 7],
      [0, 0, 0],
    ];
  }
}

let dropCounter = 0;
let dropInterval = 1000;

let lastTime = 0;

function update(time = 0) {
  const deltaTime = time - lastTime;

  dropCounter += deltaTime;
  if (dropCounter > dropInterval) {
    softDrop();
  }

  lastTime = time;

  draw();
  window.requestAnimationFrame(update);
}

function softDrop() {
  player.position.y++;

  if (collide(arena, player)) {
    player.position.y--;
    merge(arena, player);
    reset();
    clearRow();
    updateScore();
  }

  dropCounter = 0;
}

function hardDrop() {
  while(!collide(arena, player)) {
    player.position.y++;
  }
  player.position.y--;
  merge(arena, player);
  reset();
  clearRow();
  updateScore();
}

document.addEventListener('keydown', event => {
  if (event.key === "ArrowLeft") {
    move(-1);
  } else if (event.key === "ArrowRight") {
    move(1);
  } else if (event.key === "ArrowDown") {
    softDrop();
  } else if (event.key === "ArrowUp") {
    rotate(1);
  } else if (event.code === "Space") {
    hardDrop();
  }

});


window.addEventListener("keydown", function(e) {
  if(["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp", "Space"].indexOf(e.key) > -1) {
    e.preventDefault();
  }
}, false);

function move(offset) {
  player.position.x += offset;

  // Blöcke sollen beim Steuern nicht außerhalb des Spielfeldes gelangen
  if (collide(arena, player)) {
    player.position.x -= offset;
  }

}

function rotate(direction) {
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

function rotateTetromino(matrix, direction) {
  for (let y = 0; y < matrix.length; ++y) {
    for (let x = 0; x < y; ++x) {
      [
        matrix[x][y],
        matrix[y][x],
      ] = [
        matrix[y][x],
        matrix[x][y],
      ];
    }
  }

  if (direction > 0) {
    matrix.forEach(row => row.reverse());
  } else {
    matrix.reverse();
  }
}

function clearRow() {
  outer: for (let y = arena.length -1; y > 0; --y) {
    for (let x = 0; x < arena[y].length; ++x) {
      if (arena[y][x] === 0) {
        continue outer;
      }
    }

    const row = arena.splice(y, 1)[0].fill(0);
    arena.unshift(row);
    ++y;

    player.score += 10;
  }
}


// Kollision mit unterem Spielrand oder anderen Spielblöcken identifizieren
function collide(arena, player) {
  const m = player.matrix;
  const o = player.position;
  for (let y = 0; y < m.length; ++y) {
    for (let x = 0; x < m[y].length; ++x) {
      if (m[y][x] !== 0 && (arena[y + o.y] && arena[y + o.y][x + o.x]) !== 0) {
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
function reset() {
  const pieces = 'TJLOSZI';
  player.matrix = createTetromino(pieces[pieces.length * Math.random() | 0]);
  player.position.y = 0;
  player.position.x = (arena[0].length / 2 | 0) - (player.matrix[0].length / 2 | 0);

  if (collide(arena, player)) {
    arena.forEach(row => row.fill(0));
    player.score = 0;
    updateScore();
  }
}

function updateScore() {
  document.getElementById('score').innerText = player.score;
}

const colors = [
  null,
  'red',
  'blue',
  'green',
  'hotpink',
  'orange',
  'yellow',
  'darkblue',
];

reset();
updateScore();
update();
