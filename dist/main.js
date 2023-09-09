/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computerGameBoard: () => (/* binding */ computerGameBoard),
/* harmony export */   playerGameBoard: () => (/* binding */ playerGameBoard)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




var playerGameBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.GameBoard)();
var computerGameBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.GameBoard)();
var allPossibleMoves = playerGameBoard.coords();
var placeShips = function placeShips() {
  var placeShips = document.querySelector(".place-ships");
  var grid = placeShips.querySelector(".grid");
  var ships = placeShips.querySelectorAll(".ships >  div");
  var playerPlayGround = document.querySelector(".playerGameBoard");
  var gridOfPlayer = playerPlayGround.children;
  var shipType = "";
  var start = "";
  var axis = "";
  var squareNum = null;
  var squareNumWhileDragging = null;
  var _iterator = _createForOfIteratorHelper(playerGameBoard.coords()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var coord = _step.value;
      var square = document.createElement("div");
      square.setAttribute("data-coord", coord);
      grid.appendChild(square);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  ships.forEach(function (ship) {
    return ship.addEventListener("dblclick", function (event) {
      ship.classList.toggle("vertical");
    });
  });
  ships.forEach(function (ship) {
    ship.querySelectorAll("div[data-num]").forEach(function (child) {
      child.addEventListener("mouseover", function () {
        var dataNum = child.getAttribute("data-num");
        shipType = ship.getAttribute("id");
        squareNum = dataNum;
        axis = ship.classList[0];
      });
    });
  });
  ships.forEach(function (ship) {
    return ship.addEventListener("dragstart", function () {
      squareNumWhileDragging = squareNum;
    });
  });
  grid.childNodes.forEach(function (child) {
    return child.addEventListener("dragover", function (event) {
      event.preventDefault();
    });
  });
  grid.childNodes.forEach(function (child) {
    return child.addEventListener("drop", function (event) {
      start = event.target.dataset.coord;
      var ship = document.getElementById(shipType);
      if (axis === undefined) {
        start = start[0] + (+start.slice(1) - squareNumWhileDragging);
        axis = "horizontal";
      } else {
        var alpha = playerGameBoard.alphaNumbericConversion[start[0]] - squareNumWhileDragging;
        start = playerGameBoard.convertNumberToAlpha(alpha) + start.slice(1);
      }
      if (playerGameBoard.isPlacementValid(shipType, start, axis, playerGameBoard)) {
        playerGameBoard.placeShips(shipType, start, axis);
        (0,_player__WEBPACK_IMPORTED_MODULE_1__.placeComputerShips)(shipType);
        renderShips(grid.childNodes);
        renderShips(gridOfPlayer);
        ship.parentElement.removeChild(ship);
        hideShipsPlacementPage();
      }
    });
  });
};
var hideShipsPlacementPage = function hideShipsPlacementPage() {
  var placeShips = document.querySelector(".place-ships");
  var ships = placeShips.querySelector(".ships");
  var grid = placeShips.querySelector(".grid");
  if (!ships.firstElementChild) {
    placeShips.style.visibility = "hidden";
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }
  }
};
var renderGameBoard = function renderGameBoard() {
  var playerPlayGround = document.querySelector(".playerGameBoard");
  var computerPlayGround = document.querySelector(".computerGameBoard");
  var _iterator2 = _createForOfIteratorHelper(playerGameBoard.coords()),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var coord = _step2.value;
      var square = document.createElement("div");
      square.setAttribute("data-coord", coord);
      if (playerGameBoard.moves.hits.includes(coord)) {
        square.classList.add("a-hit");
      } else if (playerGameBoard.moves.misses.includes(coord)) {
        square.classList.add("a-miss");
      }
      playerPlayGround.appendChild(square);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var _iterator3 = _createForOfIteratorHelper(computerGameBoard.coords()),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _coord = _step3.value;
      var _square = document.createElement("div");
      _square.setAttribute("data-coord", _coord);
      if (computerGameBoard.moves.hits.includes(_coord)) {
        _square.classList.add("a-hit");
      } else if (computerGameBoard.moves.misses.includes(_coord)) {
        _square.classList.add("a-miss");
      }
      computerPlayGround.appendChild(_square);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
};
var renderShips = function renderShips(squares) {
  for (var ship in playerGameBoard.coordsOfShips) {
    var _iterator4 = _createForOfIteratorHelper(squares),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var square = _step4.value;
        if (playerGameBoard.coordsOfShips[ship].includes(square.dataset.coord)) {
          square.classList.add("ship");
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }
};
var removeExistingMarks = function removeExistingMarks() {
  var playerPlayGround = document.querySelector(".playerGameBoard");
  var computerPlayGround = document.querySelector(".computerGameBoard");
  while (playerPlayGround.firstChild || computerPlayGround.firstChild) {
    playerPlayGround.removeChild(playerPlayGround.firstChild);
    computerPlayGround.removeChild(computerPlayGround.firstChild);
  }
};
var playGame = function playGame() {
  var computerPlayGround = document.querySelector(".computerGameBoard");
  var placeShips = document.querySelector(".place-ships");
  var grid = placeShips.querySelector(".grid");
  var playerPlayGround = document.querySelector(".playerGameBoard");
  var gridOfPlayer = playerPlayGround.children;
  var announceWinner = function announceWinner(winner) {
    var winnerText = document.querySelector(".announce-winner h1");
    winnerText.textContent = winner;
    winnerText.parentElement.parentElement.style.cssText = "visibility: visible";
  };
  computerPlayGround.addEventListener("click", function (event) {
    if (event.target.nodeName === "DIV" && !computerGameBoard.moves.hits.includes(event.target.dataset.coord) && !computerGameBoard.moves.misses.includes(event.target.dataset.coord) && !playerGameBoard.allShipsAreSunk() && !computerGameBoard.allShipsAreSunk()) {
      removeExistingMarks();
      (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)(event.target.dataset.coord);
      (0,_player__WEBPACK_IMPORTED_MODULE_1__.Computer)(allPossibleMoves);
      renderGameBoard();
      renderShips(grid.childNodes);
      renderShips(gridOfPlayer);
    }
    if (playerGameBoard.allShipsAreSunk() || computerGameBoard.allShipsAreSunk()) {
      playerGameBoard.allShipsAreSunk() ? announceWinner("Computer") : announceWinner("You");
    }
  });
};
var restartGame = function restartGame() {
  var restartBtn = document.querySelector(".announce-winner button");
  var renderShipModels = function renderShipModels() {
    var placeShips = document.querySelector(".place-ships");
    var modelShip = placeShips.querySelector(".ships");
    for (var ship in playerGameBoard.ships) {
      var container = document.createElement("div");
      container.setAttribute("id", ship);
      container.setAttribute("draggable", "true");
      for (var i = 0; i < playerGameBoard.ships[ship].length; i++) {
        var div = document.createElement("div");
        div.setAttribute("data-num", i);
        container.appendChild(div);
      }
      modelShip.appendChild(container);
    }
    placeShips.style.visibility = "visible";
  };
  restartBtn.addEventListener("click", function () {
    removeExistingMarks();
    playerGameBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.GameBoard)();
    computerGameBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.GameBoard)();
    renderShipModels();
    placeShips();
    renderGameBoard();
    playGame();
    restartBtn.parentElement.style.cssText = "visibility: hidden";
  });
};
placeShips();
renderGameBoard();
playGame();
restartGame();

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoard: () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


var GameBoard = function GameBoard() {
  var moves = {
    hits: [],
    misses: []
  };
  var ships = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.Ship)();
  var coordsOfShips = {};
  var alphaNumbericConversion = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10
  };
  function convertNumberToAlpha(num) {
    for (var alpha in alphaNumbericConversion) {
      if (alphaNumbericConversion[alpha] === num) {
        return alpha;
      }
    }
  }
  var coords = function coords() {
    var allCoords = [];
    var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    for (var i = 0; i < alpha.length; i++) {
      for (var j = 1; j < 11; j++) {
        allCoords.push(alpha[i] + j);
      }
    }
    return allCoords;
  };
  var placeShips = function placeShips(shipType, startCoord, axis) {
    coordsOfShips[shipType] = [startCoord];
    if (ships[shipType] !== undefined) {
      for (var i = 1; i < ships[shipType].length; i++) {
        if (axis === "horizontal") {
          startCoord = startCoord[0] + (+startCoord[1] + 1);
          coordsOfShips[shipType].push(startCoord);
        } else if (axis === "vertical") {
          startCoord = convertNumberToAlpha(+alphaNumbericConversion[startCoord[0]] + 1) + startCoord.slice(1);
          coordsOfShips[shipType].push(startCoord);
        }
      }
    }
    return coordsOfShips;
  };
  var isPlacementValid = function isPlacementValid(shipType, startCoord, axis, gameBoard) {
    var alpha = gameBoard.alphaNumbericConversion[startCoord[0]];
    var coords = [startCoord];
    if (axis === "horizontal" && (+startCoord.slice(1) + ships[shipType].length > 11 || +startCoord.slice(1) < 1) || axis === "vertical" && (+alpha + ships[shipType].length > 11 || +alpha < 1)) {
      return false;
    }
    for (var i = 1; i < ships[shipType].length; i++) {
      if (axis === "horizontal") {
        startCoord = startCoord[0] + (+startCoord[1] + 1);
        coords.push(startCoord);
      } else if (axis === "vertical") {
        startCoord = convertNumberToAlpha(+alphaNumbericConversion[startCoord[0]] + 1) + startCoord.slice(1);
        coords.push(startCoord);
      }
    }
    for (var _i = 0, _coords = coords; _i < _coords.length; _i++) {
      var coord = _coords[_i];
      for (var ship in coordsOfShips) {
        if (coordsOfShips[ship].includes(coord)) {
          return false;
        }
      }
    }
    return true;
  };
  var receiveAttack = function receiveAttack(atCoord) {
    for (var ship in coordsOfShips) {
      if (coordsOfShips[ship].includes(atCoord)) {
        ships[ship].hit();
        moves.hits.push(atCoord);
      }
    }
    if (!moves.hits.includes(atCoord)) {
      moves.misses.push(atCoord);
    }
    return moves;
  };
  var allShipsAreSunk = function allShipsAreSunk() {
    var allShipsAreSunk = true;
    for (var ship in ships) {
      if (ships[ship].isSunk() == false) {
        allShipsAreSunk = false;
        return allShipsAreSunk;
      }
    }
    return allShipsAreSunk;
  };
  return {
    alphaNumbericConversion: alphaNumbericConversion,
    convertNumberToAlpha: convertNumberToAlpha,
    coords: coords,
    ships: ships,
    moves: moves,
    coordsOfShips: coordsOfShips,
    placeShips: placeShips,
    isPlacementValid: isPlacementValid,
    receiveAttack: receiveAttack,
    allShipsAreSunk: allShipsAreSunk
  };
};

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Computer: () => (/* binding */ Computer),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   placeComputerShips: () => (/* binding */ placeComputerShips)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");


var Player = function Player(atCoord) {
  return _game__WEBPACK_IMPORTED_MODULE_0__.computerGameBoard.receiveAttack(atCoord);
};
var Computer = function Computer(possibleMoves) {
  var computerMove = possibleMoves[~~(Math.random() * possibleMoves.length)];
  var moveIndex = possibleMoves.findIndex(function (coord) {
    return coord === computerMove;
  });
  possibleMoves.splice(moveIndex, 1);
  _game__WEBPACK_IMPORTED_MODULE_0__.playerGameBoard.receiveAttack(computerMove);
};
var placeComputerShips = function placeComputerShips(shipType) {
  var axises = ["vertical", "horizontal"];
  var possibleCoords = _game__WEBPACK_IMPORTED_MODULE_0__.computerGameBoard.coords();
  while (true) {
    var shipPlacementAxis = axises[~~(Math.random() * axises.length)];
    var startingCoord = possibleCoords[~~(Math.random() * possibleCoords.length)];
    if (_game__WEBPACK_IMPORTED_MODULE_0__.computerGameBoard.isPlacementValid(shipType, startingCoord, shipPlacementAxis, _game__WEBPACK_IMPORTED_MODULE_0__.computerGameBoard)) {
      _game__WEBPACK_IMPORTED_MODULE_0__.computerGameBoard.placeShips(shipType, startingCoord, shipPlacementAxis);
      return;
    }
  }
};


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
var Ship = function Ship() {
  var destroyer = {
    length: 2,
    hits: 0,
    hit: function hit() {
      this.hits++;
    },
    isSunk: function isSunk() {
      if (this.length === this.hits) return true;
      return false;
    }
  };
  var submarine = {
    length: 3,
    hits: 0,
    hit: function hit() {
      this.hits++;
    },
    isSunk: function isSunk() {
      if (this.length === this.hits) return true;
      return false;
    }
  };
  var cruiser = {
    length: 3,
    hits: 0,
    hit: function hit() {
      this.hits++;
    },
    isSunk: function isSunk() {
      if (this.length === this.hits) return true;
      return false;
    }
  };
  var battleship = {
    length: 4,
    hits: 0,
    hit: function hit() {
      this.hits++;
    },
    isSunk: function isSunk() {
      if (this.length === this.hits) return true;
      return false;
    }
  };
  var carrier = {
    length: 5,
    hits: 0,
    hit: function hit() {
      this.hits++;
    },
    isSunk: function isSunk() {
      if (this.length === this.hits) return true;
      return false;
    }
  };
  return {
    destroyer: destroyer,
    submarine: submarine,
    cruiser: cruiser,
    battleship: battleship,
    carrier: carrier
  };
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    box-sizing: border-box;
}
body {
    display: flex;
    flex-flow: column wrap;
    padding: 0 150px;
    gap: 50px;
    font-family: "Times New Roman", Times, serif;
}
h1 {
    font-size: 2.5rem;
    text-align: center;
    font-family: cursive;
}
.container {
    display: flex;
    gap: 120px;
    justify-content: center;
    align-items: center;
    position: relative;
}
.playerGameBoard,
.computerGameBoard,
.grid {
    height: 330px;
    width: 330px;
    display: grid;
    grid: 1fr / repeat(10, 1fr);
}
.playerGameBoard > div,
.computerGameBoard > div {
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
    height: 33px;
    width: 33px;
    margin: 0;
}
.playerGameBoard > div:nth-child(10n + 1),
.computerGameBoard > div:nth-child(10n + 1),
.grid > div:nth-child(10n + 1) {
    border-left: 1px solid gray;
}
.playerGameBoard > div:nth-child(-n + 10),
.computerGameBoard > div:nth-child(-n + 10),
.grid > div:nth-child(-n + 10) {
    border-top: 1px solid gray;
}
.player_rows,
.computer_rows,
.player_columns,
.computer_columns,
.grid_rows,
.grid_columns {
    position: absolute;
    font-size: 0.9rem;
}
.player_rows {
    left: 105px;
    top: 10px;
    display: flex;
    gap: 17px;
    flex-direction: column;
    text-align: center;
}
.player_columns {
    display: flex;
    top: -25px;
    left: 148px;
    gap: 26px;
}
.computer_rows {
    left: 555px;
    top: 10px;
    display: flex;
    gap: 17px;
    flex-direction: column;
    text-align: center;
}
.computer_columns {
    display: flex;
    top: -25px;
    left: 597px;
    gap: 26px;
}
.announce-winner {
    position: absolute;
    visibility: hidden;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000814ab;
    backdrop-filter: blur(10px);
    width: 100%;
    height: 100%;
    color: #fff;
    gap: 30px;
    z-index: 100;
}
.announce-winner div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.announce-winner h2 {
    font-size: 3rem;
    margin-bottom: 0;
}
.announce-winner h1 {
    font-size: 6rem;
    font-family: "Times New Roman", Times, serif;
    width: min(15ch);
    text-align: center;
    margin-top: 10px;
}
.announce-winner button {
    padding: 13px 100px;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 500;
    border-radius: 15px;
    border: none;
}
.place-ships {
    margin-top: -30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #fff;
    z-index: 100;
    color: #000;
}
.place-ships > div {
    display: flex;
    gap: 100px;
    align-items: normal;
}
.grid > div {
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
    height: 33px;
    width: 33px;
    margin: 0;
}

.grid > div:nth-child(10n + 1) {
    border-left: 1px solid gray;
}

.grid > div:nth-child(-n + 10) {
    border-top: 1px solid gray;
}

.ships {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 300px;
}
.ships > div {
    display: flex;
}
.vertical {
    flex-direction: column;
}
.ships > div > div {
    height: 33px;
    width: 33px;
    border: 1px solid #fff;
    background-color: black;
}
.place-ships h1 {
    margin-bottom: 10px;
}
.place-ships .description {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 40px;
    width: 40%;
}
ul {
    list-style: circle;
    margin-top: 0;
    font-size: 1rem;
    font-family: inherit;
}
.place-ships h2 {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 1.5;
    align-self: center;
}
.ship {
    background-color: black;
}
.grid_rows {
    display: flex;
    flex-direction: column;
    left: 300px;
    top: 287px;
    gap: 17px;
}
.grid_columns {
    display: flex;
    left: 333px;
    top: 257px;
    gap: 26px;
}
.container div.a-miss {
    background-color: green;
}
.container div.a-hit {
    background-color: red;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,SAAS;IACT,4CAA4C;AAChD;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,UAAU;IACV,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;;;IAGI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,2BAA2B;AAC/B;AACA;;IAEI,4BAA4B;IAC5B,6BAA6B;IAC7B,YAAY;IACZ,WAAW;IACX,SAAS;AACb;AACA;;;IAGI,2BAA2B;AAC/B;AACA;;;IAGI,0BAA0B;AAC9B;AACA;;;;;;IAMI,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,SAAS;IACT,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,UAAU;IACV,WAAW;IACX,SAAS;AACb;AACA;IACI,WAAW;IACX,SAAS;IACT,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,UAAU;IACV,WAAW;IACX,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,2BAA2B;IAC3B,2BAA2B;IAC3B,WAAW;IACX,YAAY;IACZ,WAAW;IACX,SAAS;IACT,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,4CAA4C;IAC5C,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,YAAY;IACZ,WAAW;AACf;AACA;IACI,aAAa;IACb,UAAU;IACV,mBAAmB;AACvB;AACA;IACI,4BAA4B;IAC5B,6BAA6B;IAC7B,YAAY;IACZ,WAAW;IACX,SAAS;AACb;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,YAAY;AAChB;AACA;IACI,aAAa;AACjB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,uBAAuB;AAC3B;AACA;IACI,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,UAAU;AACd;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,oBAAoB;AACxB;AACA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,cAAc;IACd,kBAAkB;AACtB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,UAAU;IACV,SAAS;AACb;AACA;IACI,aAAa;IACb,WAAW;IACX,UAAU;IACV,SAAS;AACb;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,qBAAqB;AACzB","sourcesContent":[":root {\n    box-sizing: border-box;\n}\nbody {\n    display: flex;\n    flex-flow: column wrap;\n    padding: 0 150px;\n    gap: 50px;\n    font-family: \"Times New Roman\", Times, serif;\n}\nh1 {\n    font-size: 2.5rem;\n    text-align: center;\n    font-family: cursive;\n}\n.container {\n    display: flex;\n    gap: 120px;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n.playerGameBoard,\n.computerGameBoard,\n.grid {\n    height: 330px;\n    width: 330px;\n    display: grid;\n    grid: 1fr / repeat(10, 1fr);\n}\n.playerGameBoard > div,\n.computerGameBoard > div {\n    border-right: 1px solid gray;\n    border-bottom: 1px solid gray;\n    height: 33px;\n    width: 33px;\n    margin: 0;\n}\n.playerGameBoard > div:nth-child(10n + 1),\n.computerGameBoard > div:nth-child(10n + 1),\n.grid > div:nth-child(10n + 1) {\n    border-left: 1px solid gray;\n}\n.playerGameBoard > div:nth-child(-n + 10),\n.computerGameBoard > div:nth-child(-n + 10),\n.grid > div:nth-child(-n + 10) {\n    border-top: 1px solid gray;\n}\n.player_rows,\n.computer_rows,\n.player_columns,\n.computer_columns,\n.grid_rows,\n.grid_columns {\n    position: absolute;\n    font-size: 0.9rem;\n}\n.player_rows {\n    left: 105px;\n    top: 10px;\n    display: flex;\n    gap: 17px;\n    flex-direction: column;\n    text-align: center;\n}\n.player_columns {\n    display: flex;\n    top: -25px;\n    left: 148px;\n    gap: 26px;\n}\n.computer_rows {\n    left: 555px;\n    top: 10px;\n    display: flex;\n    gap: 17px;\n    flex-direction: column;\n    text-align: center;\n}\n.computer_columns {\n    display: flex;\n    top: -25px;\n    left: 597px;\n    gap: 26px;\n}\n.announce-winner {\n    position: absolute;\n    visibility: hidden;\n    top: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #000814ab;\n    backdrop-filter: blur(10px);\n    width: 100%;\n    height: 100%;\n    color: #fff;\n    gap: 30px;\n    z-index: 100;\n}\n.announce-winner div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.announce-winner h2 {\n    font-size: 3rem;\n    margin-bottom: 0;\n}\n.announce-winner h1 {\n    font-size: 6rem;\n    font-family: \"Times New Roman\", Times, serif;\n    width: min(15ch);\n    text-align: center;\n    margin-top: 10px;\n}\n.announce-winner button {\n    padding: 13px 100px;\n    cursor: pointer;\n    font-size: 1.5rem;\n    font-weight: 500;\n    border-radius: 15px;\n    border: none;\n}\n.place-ships {\n    margin-top: -30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-color: #fff;\n    z-index: 100;\n    color: #000;\n}\n.place-ships > div {\n    display: flex;\n    gap: 100px;\n    align-items: normal;\n}\n.grid > div {\n    border-right: 1px solid gray;\n    border-bottom: 1px solid gray;\n    height: 33px;\n    width: 33px;\n    margin: 0;\n}\n\n.grid > div:nth-child(10n + 1) {\n    border-left: 1px solid gray;\n}\n\n.grid > div:nth-child(-n + 10) {\n    border-top: 1px solid gray;\n}\n\n.ships {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    width: 300px;\n}\n.ships > div {\n    display: flex;\n}\n.vertical {\n    flex-direction: column;\n}\n.ships > div > div {\n    height: 33px;\n    width: 33px;\n    border: 1px solid #fff;\n    background-color: black;\n}\n.place-ships h1 {\n    margin-bottom: 10px;\n}\n.place-ships .description {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-bottom: 40px;\n    width: 40%;\n}\nul {\n    list-style: circle;\n    margin-top: 0;\n    font-size: 1rem;\n    font-family: inherit;\n}\n.place-ships h2 {\n    margin-top: 10px;\n    margin-bottom: 0;\n    font-size: 1.5;\n    align-self: center;\n}\n.ship {\n    background-color: black;\n}\n.grid_rows {\n    display: flex;\n    flex-direction: column;\n    left: 300px;\n    top: 287px;\n    gap: 17px;\n}\n.grid_columns {\n    display: flex;\n    left: 333px;\n    top: 257px;\n    gap: 26px;\n}\n.container div.a-miss {\n    background-color: green;\n}\n.container div.a-hit {\n    background-color: red;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/game.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsS0FBSyxPQUFPLFlBQVksTUFBTSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFB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QUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcbmltcG9ydCB7IFBsYXllciwgQ29tcHV0ZXIsIHBsYWNlQ29tcHV0ZXJTaGlwcyB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZXhwb3J0IGxldCBwbGF5ZXJHYW1lQm9hcmQgPSBHYW1lQm9hcmQoKTtcbmV4cG9ydCBsZXQgY29tcHV0ZXJHYW1lQm9hcmQgPSBHYW1lQm9hcmQoKTtcbmNvbnN0IGFsbFBvc3NpYmxlTW92ZXMgPSBwbGF5ZXJHYW1lQm9hcmQuY29vcmRzKCk7XG5cbmNvbnN0IHBsYWNlU2hpcHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxhY2VTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2Utc2hpcHNcIik7XG4gICAgY29uc3QgZ3JpZCA9IHBsYWNlU2hpcHMucXVlcnlTZWxlY3RvcihcIi5ncmlkXCIpO1xuICAgIGNvbnN0IHNoaXBzID0gcGxhY2VTaGlwcy5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBzID4gIGRpdlwiKTtcbiAgICBjb25zdCBwbGF5ZXJQbGF5R3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJHYW1lQm9hcmRcIik7XG4gICAgY29uc3QgZ3JpZE9mUGxheWVyID0gcGxheWVyUGxheUdyb3VuZC5jaGlsZHJlbjtcbiAgICBsZXQgc2hpcFR5cGUgPSBcIlwiO1xuICAgIGxldCBzdGFydCA9IFwiXCI7XG4gICAgbGV0IGF4aXMgPSBcIlwiO1xuICAgIGxldCBzcXVhcmVOdW0gPSBudWxsO1xuICAgIGxldCBzcXVhcmVOdW1XaGlsZURyYWdnaW5nID0gbnVsbDtcblxuICAgIGZvciAobGV0IGNvb3JkIG9mIHBsYXllckdhbWVCb2FyZC5jb29yZHMoKSkge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS1jb29yZFwiLCBjb29yZCk7XG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT5cbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBzaGlwLmNsYXNzTGlzdC50b2dnbGUoXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgfSlcbiAgICApO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgc2hpcC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2W2RhdGEtbnVtXVwiKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YU51bSA9IGNoaWxkLmdldEF0dHJpYnV0ZShcImRhdGEtbnVtXCIpO1xuICAgICAgICAgICAgICAgIHNoaXBUeXBlID0gc2hpcC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVOdW0gPSBkYXRhTnVtO1xuICAgICAgICAgICAgICAgIGF4aXMgPSBzaGlwLmNsYXNzTGlzdFswXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PlxuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc3F1YXJlTnVtV2hpbGVEcmFnZ2luZyA9IHNxdWFyZU51bTtcbiAgICAgICAgfSlcbiAgICApO1xuICAgIGdyaWQuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZCkgPT5cbiAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSlcbiAgICApO1xuICAgIGdyaWQuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZCkgPT5cbiAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBzdGFydCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmNvb3JkO1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNoaXBUeXBlKTtcbiAgICAgICAgICAgIGlmIChheGlzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IHN0YXJ0WzBdICsgKCtzdGFydC5zbGljZSgxKSAtIHNxdWFyZU51bVdoaWxlRHJhZ2dpbmcpO1xuICAgICAgICAgICAgICAgIGF4aXMgPSBcImhvcml6b250YWxcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxwaGEgPVxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJHYW1lQm9hcmQuYWxwaGFOdW1iZXJpY0NvbnZlcnNpb25bc3RhcnRbMF1dIC1cbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlTnVtV2hpbGVEcmFnZ2luZztcbiAgICAgICAgICAgICAgICBzdGFydCA9XG4gICAgICAgICAgICAgICAgICAgIHBsYXllckdhbWVCb2FyZC5jb252ZXJ0TnVtYmVyVG9BbHBoYShhbHBoYSkgK1xuICAgICAgICAgICAgICAgICAgICBzdGFydC5zbGljZSgxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHBsYXllckdhbWVCb2FyZC5pc1BsYWNlbWVudFZhbGlkKFxuICAgICAgICAgICAgICAgICAgICBzaGlwVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIGF4aXMsXG4gICAgICAgICAgICAgICAgICAgIHBsYXllckdhbWVCb2FyZFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXBzKHNoaXBUeXBlLCBzdGFydCwgYXhpcyk7XG4gICAgICAgICAgICAgICAgcGxhY2VDb21wdXRlclNoaXBzKHNoaXBUeXBlKTtcbiAgICAgICAgICAgICAgICByZW5kZXJTaGlwcyhncmlkLmNoaWxkTm9kZXMpO1xuICAgICAgICAgICAgICAgIHJlbmRlclNoaXBzKGdyaWRPZlBsYXllcik7XG4gICAgICAgICAgICAgICAgc2hpcC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHNoaXApO1xuICAgICAgICAgICAgICAgIGhpZGVTaGlwc1BsYWNlbWVudFBhZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICApO1xufTtcbmNvbnN0IGhpZGVTaGlwc1BsYWNlbWVudFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxhY2VTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2Utc2hpcHNcIik7XG4gICAgY29uc3Qgc2hpcHMgPSBwbGFjZVNoaXBzLnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcHNcIik7XG4gICAgY29uc3QgZ3JpZCA9IHBsYWNlU2hpcHMucXVlcnlTZWxlY3RvcihcIi5ncmlkXCIpO1xuXG4gICAgaWYgKCFzaGlwcy5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICBwbGFjZVNoaXBzLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICB3aGlsZSAoZ3JpZC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBncmlkLnJlbW92ZUNoaWxkKGdyaWQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgcmVuZGVyR2FtZUJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllclBsYXlHcm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllckdhbWVCb2FyZFwiKTtcbiAgICBjb25zdCBjb21wdXRlclBsYXlHcm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyR2FtZUJvYXJkXCIpO1xuICAgIGZvciAobGV0IGNvb3JkIG9mIHBsYXllckdhbWVCb2FyZC5jb29yZHMoKSkge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS1jb29yZFwiLCBjb29yZCk7XG4gICAgICAgIGlmIChwbGF5ZXJHYW1lQm9hcmQubW92ZXMuaGl0cy5pbmNsdWRlcyhjb29yZCkpIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiYS1oaXRcIik7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyR2FtZUJvYXJkLm1vdmVzLm1pc3Nlcy5pbmNsdWRlcyhjb29yZCkpIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiYS1taXNzXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBsYXllclBsYXlHcm91bmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gICAgZm9yIChsZXQgY29vcmQgb2YgY29tcHV0ZXJHYW1lQm9hcmQuY29vcmRzKCkpIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEtY29vcmRcIiwgY29vcmQpO1xuXG4gICAgICAgIGlmIChjb21wdXRlckdhbWVCb2FyZC5tb3Zlcy5oaXRzLmluY2x1ZGVzKGNvb3JkKSkge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJhLWhpdFwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb21wdXRlckdhbWVCb2FyZC5tb3Zlcy5taXNzZXMuaW5jbHVkZXMoY29vcmQpKSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImEtbWlzc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBjb21wdXRlclBsYXlHcm91bmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG59O1xuY29uc3QgcmVuZGVyU2hpcHMgPSAoc3F1YXJlcykgPT4ge1xuICAgIGZvciAobGV0IHNoaXAgaW4gcGxheWVyR2FtZUJvYXJkLmNvb3Jkc09mU2hpcHMpIHtcbiAgICAgICAgZm9yIChsZXQgc3F1YXJlIG9mIHNxdWFyZXMpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBwbGF5ZXJHYW1lQm9hcmQuY29vcmRzT2ZTaGlwc1tzaGlwXS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmRhdGFzZXQuY29vcmRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgcmVtb3ZlRXhpc3RpbmdNYXJrcyA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJQbGF5R3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJHYW1lQm9hcmRcIik7XG4gICAgY29uc3QgY29tcHV0ZXJQbGF5R3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlckdhbWVCb2FyZFwiKTtcbiAgICB3aGlsZSAocGxheWVyUGxheUdyb3VuZC5maXJzdENoaWxkIHx8IGNvbXB1dGVyUGxheUdyb3VuZC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBsYXllclBsYXlHcm91bmQucmVtb3ZlQ2hpbGQocGxheWVyUGxheUdyb3VuZC5maXJzdENoaWxkKTtcbiAgICAgICAgY29tcHV0ZXJQbGF5R3JvdW5kLnJlbW92ZUNoaWxkKGNvbXB1dGVyUGxheUdyb3VuZC5maXJzdENoaWxkKTtcbiAgICB9XG59O1xuY29uc3QgcGxheUdhbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgY29tcHV0ZXJQbGF5R3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlckdhbWVCb2FyZFwiKTtcbiAgICBjb25zdCBwbGFjZVNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGFjZS1zaGlwc1wiKTtcbiAgICBjb25zdCBncmlkID0gcGxhY2VTaGlwcy5xdWVyeVNlbGVjdG9yKFwiLmdyaWRcIik7XG4gICAgY29uc3QgcGxheWVyUGxheUdyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyR2FtZUJvYXJkXCIpO1xuICAgIGNvbnN0IGdyaWRPZlBsYXllciA9IHBsYXllclBsYXlHcm91bmQuY2hpbGRyZW47XG4gICAgY29uc3QgYW5ub3VuY2VXaW5uZXIgPSAod2lubmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpbm5lclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFubm91bmNlLXdpbm5lciBoMVwiKTtcbiAgICAgICAgd2lubmVyVGV4dC50ZXh0Q29udGVudCA9IHdpbm5lcjtcbiAgICAgICAgd2lubmVyVGV4dC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9XG4gICAgICAgICAgICBcInZpc2liaWxpdHk6IHZpc2libGVcIjtcbiAgICB9O1xuXG4gICAgY29tcHV0ZXJQbGF5R3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0Lm5vZGVOYW1lID09PSBcIkRJVlwiICYmXG4gICAgICAgICAgICAhY29tcHV0ZXJHYW1lQm9hcmQubW92ZXMuaGl0cy5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZGF0YXNldC5jb29yZFxuICAgICAgICAgICAgKSAmJlxuICAgICAgICAgICAgIWNvbXB1dGVyR2FtZUJvYXJkLm1vdmVzLm1pc3Nlcy5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZGF0YXNldC5jb29yZFxuICAgICAgICAgICAgKSAmJlxuICAgICAgICAgICAgIXBsYXllckdhbWVCb2FyZC5hbGxTaGlwc0FyZVN1bmsoKSAmJlxuICAgICAgICAgICAgIWNvbXB1dGVyR2FtZUJvYXJkLmFsbFNoaXBzQXJlU3VuaygpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmVtb3ZlRXhpc3RpbmdNYXJrcygpO1xuICAgICAgICAgICAgUGxheWVyKGV2ZW50LnRhcmdldC5kYXRhc2V0LmNvb3JkKTtcbiAgICAgICAgICAgIENvbXB1dGVyKGFsbFBvc3NpYmxlTW92ZXMpO1xuICAgICAgICAgICAgcmVuZGVyR2FtZUJvYXJkKCk7XG4gICAgICAgICAgICByZW5kZXJTaGlwcyhncmlkLmNoaWxkTm9kZXMpO1xuICAgICAgICAgICAgcmVuZGVyU2hpcHMoZ3JpZE9mUGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBwbGF5ZXJHYW1lQm9hcmQuYWxsU2hpcHNBcmVTdW5rKCkgfHxcbiAgICAgICAgICAgIGNvbXB1dGVyR2FtZUJvYXJkLmFsbFNoaXBzQXJlU3VuaygpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcGxheWVyR2FtZUJvYXJkLmFsbFNoaXBzQXJlU3VuaygpXG4gICAgICAgICAgICAgICAgPyBhbm5vdW5jZVdpbm5lcihcIkNvbXB1dGVyXCIpXG4gICAgICAgICAgICAgICAgOiBhbm5vdW5jZVdpbm5lcihcIllvdVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbmNvbnN0IHJlc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFubm91bmNlLXdpbm5lciBidXR0b25cIik7XG4gICAgY29uc3QgcmVuZGVyU2hpcE1vZGVscyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcGxhY2VTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2Utc2hpcHNcIik7XG4gICAgICAgIGNvbnN0IG1vZGVsU2hpcCA9IHBsYWNlU2hpcHMucXVlcnlTZWxlY3RvcihcIi5zaGlwc1wiKTtcbiAgICAgICAgZm9yIChjb25zdCBzaGlwIGluIHBsYXllckdhbWVCb2FyZC5zaGlwcykge1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBzaGlwKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJHYW1lQm9hcmQuc2hpcHNbc2hpcF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW51bVwiLCBpKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vZGVsU2hpcC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGxhY2VTaGlwcy5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgfTtcbiAgICByZXN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHJlbW92ZUV4aXN0aW5nTWFya3MoKTtcbiAgICAgICAgcGxheWVyR2FtZUJvYXJkID0gR2FtZUJvYXJkKCk7XG4gICAgICAgIGNvbXB1dGVyR2FtZUJvYXJkID0gR2FtZUJvYXJkKCk7XG4gICAgICAgIHJlbmRlclNoaXBNb2RlbHMoKTtcbiAgICAgICAgcGxhY2VTaGlwcygpO1xuICAgICAgICByZW5kZXJHYW1lQm9hcmQoKTtcbiAgICAgICAgcGxheUdhbWUoKTtcbiAgICAgICAgcmVzdGFydEJ0bi5wYXJlbnRFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBcInZpc2liaWxpdHk6IGhpZGRlblwiO1xuICAgIH0pO1xufTtcblxucGxhY2VTaGlwcygpO1xucmVuZGVyR2FtZUJvYXJkKCk7XG5wbGF5R2FtZSgpO1xucmVzdGFydEdhbWUoKTtcbiIsImltcG9ydCB7IGNvbXB1dGVyR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxuZXhwb3J0IGNvbnN0IEdhbWVCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBtb3ZlcyA9IHsgaGl0czogW10sIG1pc3NlczogW10gfTtcbiAgICBjb25zdCBzaGlwcyA9IFNoaXAoKTtcbiAgICBjb25zdCBjb29yZHNPZlNoaXBzID0ge307XG4gICAgY29uc3QgYWxwaGFOdW1iZXJpY0NvbnZlcnNpb24gPSB7XG4gICAgICAgIEE6IDEsXG4gICAgICAgIEI6IDIsXG4gICAgICAgIEM6IDMsXG4gICAgICAgIEQ6IDQsXG4gICAgICAgIEU6IDUsXG4gICAgICAgIEY6IDYsXG4gICAgICAgIEc6IDcsXG4gICAgICAgIEg6IDgsXG4gICAgICAgIEk6IDksXG4gICAgICAgIEo6IDEwLFxuICAgIH07XG4gICAgZnVuY3Rpb24gY29udmVydE51bWJlclRvQWxwaGEobnVtKSB7XG4gICAgICAgIGZvciAobGV0IGFscGhhIGluIGFscGhhTnVtYmVyaWNDb252ZXJzaW9uKSB7XG4gICAgICAgICAgICBpZiAoYWxwaGFOdW1iZXJpY0NvbnZlcnNpb25bYWxwaGFdID09PSBudW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxwaGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgY29vcmRzID0gKCkgPT4ge1xuICAgICAgICBsZXQgYWxsQ29vcmRzID0gW107XG4gICAgICAgIGxldCBhbHBoYSA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxwaGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgMTE7IGorKykge1xuICAgICAgICAgICAgICAgIGFsbENvb3Jkcy5wdXNoKGFscGhhW2ldICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWxsQ29vcmRzO1xuICAgIH07XG4gICAgY29uc3QgcGxhY2VTaGlwcyA9IChzaGlwVHlwZSwgc3RhcnRDb29yZCwgYXhpcykgPT4ge1xuICAgICAgICBjb29yZHNPZlNoaXBzW3NoaXBUeXBlXSA9IFtzdGFydENvb3JkXTtcbiAgICAgICAgaWYgKHNoaXBzW3NoaXBUeXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXBzW3NoaXBUeXBlXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChheGlzID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgICAgICAgICBzdGFydENvb3JkID0gc3RhcnRDb29yZFswXSArICgrc3RhcnRDb29yZFsxXSArIDEpO1xuICAgICAgICAgICAgICAgICAgICBjb29yZHNPZlNoaXBzW3NoaXBUeXBlXS5wdXNoKHN0YXJ0Q29vcmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0Q29vcmQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udmVydE51bWJlclRvQWxwaGEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgK2FscGhhTnVtYmVyaWNDb252ZXJzaW9uW3N0YXJ0Q29vcmRbMF1dICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSArIHN0YXJ0Q29vcmQuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvb3Jkc09mU2hpcHNbc2hpcFR5cGVdLnB1c2goc3RhcnRDb29yZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb29yZHNPZlNoaXBzO1xuICAgIH07XG4gICAgY29uc3QgaXNQbGFjZW1lbnRWYWxpZCA9IChzaGlwVHlwZSwgc3RhcnRDb29yZCwgYXhpcywgZ2FtZUJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGFscGhhID0gZ2FtZUJvYXJkLmFscGhhTnVtYmVyaWNDb252ZXJzaW9uW3N0YXJ0Q29vcmRbMF1dO1xuICAgICAgICBjb25zdCBjb29yZHMgPSBbc3RhcnRDb29yZF07XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKGF4aXMgPT09IFwiaG9yaXpvbnRhbFwiICYmXG4gICAgICAgICAgICAgICAgKCtzdGFydENvb3JkLnNsaWNlKDEpICsgc2hpcHNbc2hpcFR5cGVdLmxlbmd0aCA+IDExIHx8XG4gICAgICAgICAgICAgICAgICAgICtzdGFydENvb3JkLnNsaWNlKDEpIDwgMSkpIHx8XG4gICAgICAgICAgICAoYXhpcyA9PT0gXCJ2ZXJ0aWNhbFwiICYmXG4gICAgICAgICAgICAgICAgKCthbHBoYSArIHNoaXBzW3NoaXBUeXBlXS5sZW5ndGggPiAxMSB8fCArYWxwaGEgPCAxKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXBzW3NoaXBUeXBlXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGF4aXMgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRDb29yZCA9IHN0YXJ0Q29vcmRbMF0gKyAoK3N0YXJ0Q29vcmRbMV0gKyAxKTtcbiAgICAgICAgICAgICAgICBjb29yZHMucHVzaChzdGFydENvb3JkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRDb29yZCA9XG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnROdW1iZXJUb0FscGhhKFxuICAgICAgICAgICAgICAgICAgICAgICAgK2FscGhhTnVtYmVyaWNDb252ZXJzaW9uW3N0YXJ0Q29vcmRbMF1dICsgMVxuICAgICAgICAgICAgICAgICAgICApICsgc3RhcnRDb29yZC5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICBjb29yZHMucHVzaChzdGFydENvb3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgY29vcmQgb2YgY29vcmRzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNoaXAgaW4gY29vcmRzT2ZTaGlwcykge1xuICAgICAgICAgICAgICAgIGlmIChjb29yZHNPZlNoaXBzW3NoaXBdLmluY2x1ZGVzKGNvb3JkKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGF0Q29vcmQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBpbiBjb29yZHNPZlNoaXBzKSB7XG4gICAgICAgICAgICBpZiAoY29vcmRzT2ZTaGlwc1tzaGlwXS5pbmNsdWRlcyhhdENvb3JkKSkge1xuICAgICAgICAgICAgICAgIHNoaXBzW3NoaXBdLmhpdCgpO1xuICAgICAgICAgICAgICAgIG1vdmVzLmhpdHMucHVzaChhdENvb3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1vdmVzLmhpdHMuaW5jbHVkZXMoYXRDb29yZCkpIHtcbiAgICAgICAgICAgIG1vdmVzLm1pc3Nlcy5wdXNoKGF0Q29vcmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1vdmVzO1xuICAgIH07XG4gICAgY29uc3QgYWxsU2hpcHNBcmVTdW5rID0gKCkgPT4ge1xuICAgICAgICBsZXQgYWxsU2hpcHNBcmVTdW5rID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBpbiBzaGlwcykge1xuICAgICAgICAgICAgaWYgKHNoaXBzW3NoaXBdLmlzU3VuaygpID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYWxsU2hpcHNBcmVTdW5rID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbFNoaXBzQXJlU3VuaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWxsU2hpcHNBcmVTdW5rO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhbHBoYU51bWJlcmljQ29udmVyc2lvbixcbiAgICAgICAgY29udmVydE51bWJlclRvQWxwaGEsXG4gICAgICAgIGNvb3JkcyxcbiAgICAgICAgc2hpcHMsXG4gICAgICAgIG1vdmVzLFxuICAgICAgICBjb29yZHNPZlNoaXBzLFxuICAgICAgICBwbGFjZVNoaXBzLFxuICAgICAgICBpc1BsYWNlbWVudFZhbGlkLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBhbGxTaGlwc0FyZVN1bmssXG4gICAgfTtcbn07XG4iLCJpbXBvcnQgeyBwbGF5ZXJHYW1lQm9hcmQsIGNvbXB1dGVyR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5cbmNvbnN0IFBsYXllciA9IChhdENvb3JkKSA9PiBjb21wdXRlckdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGF0Q29vcmQpO1xuXG5jb25zdCBDb21wdXRlciA9IChwb3NzaWJsZU1vdmVzKSA9PiB7XG4gICAgY29uc3QgY29tcHV0ZXJNb3ZlID1cbiAgICAgICAgcG9zc2libGVNb3Zlc1t+fihNYXRoLnJhbmRvbSgpICogcG9zc2libGVNb3Zlcy5sZW5ndGgpXTtcbiAgICBjb25zdCBtb3ZlSW5kZXggPSBwb3NzaWJsZU1vdmVzLmZpbmRJbmRleChcbiAgICAgICAgKGNvb3JkKSA9PiBjb29yZCA9PT0gY29tcHV0ZXJNb3ZlXG4gICAgKTtcbiAgICBwb3NzaWJsZU1vdmVzLnNwbGljZShtb3ZlSW5kZXgsIDEpO1xuICAgIHBsYXllckdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGNvbXB1dGVyTW92ZSk7XG59O1xuY29uc3QgcGxhY2VDb21wdXRlclNoaXBzID0gKHNoaXBUeXBlKSA9PiB7XG4gICAgY29uc3QgYXhpc2VzID0gW1widmVydGljYWxcIiwgXCJob3Jpem9udGFsXCJdO1xuICAgIGNvbnN0IHBvc3NpYmxlQ29vcmRzID0gY29tcHV0ZXJHYW1lQm9hcmQuY29vcmRzKCk7XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBjb25zdCBzaGlwUGxhY2VtZW50QXhpcyA9IGF4aXNlc1t+fihNYXRoLnJhbmRvbSgpICogYXhpc2VzLmxlbmd0aCldO1xuICAgICAgICBjb25zdCBzdGFydGluZ0Nvb3JkID1cbiAgICAgICAgICAgIHBvc3NpYmxlQ29vcmRzW35+KE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZUNvb3Jkcy5sZW5ndGgpXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29tcHV0ZXJHYW1lQm9hcmQuaXNQbGFjZW1lbnRWYWxpZChcbiAgICAgICAgICAgICAgICBzaGlwVHlwZSxcbiAgICAgICAgICAgICAgICBzdGFydGluZ0Nvb3JkLFxuICAgICAgICAgICAgICAgIHNoaXBQbGFjZW1lbnRBeGlzLFxuICAgICAgICAgICAgICAgIGNvbXB1dGVyR2FtZUJvYXJkXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29tcHV0ZXJHYW1lQm9hcmQucGxhY2VTaGlwcyhcbiAgICAgICAgICAgICAgICBzaGlwVHlwZSxcbiAgICAgICAgICAgICAgICBzdGFydGluZ0Nvb3JkLFxuICAgICAgICAgICAgICAgIHNoaXBQbGFjZW1lbnRBeGlzXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IHsgQ29tcHV0ZXIsIFBsYXllciwgcGxhY2VDb21wdXRlclNoaXBzIH07XG4iLCJleHBvcnQgY29uc3QgU2hpcCA9ICgpID0+IHtcbiAgICBjb25zdCBkZXN0cm95ZXIgPSB7XG4gICAgICAgIGxlbmd0aDogMixcbiAgICAgICAgaGl0czogMCxcbiAgICAgICAgaGl0KCkge1xuICAgICAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRzKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgY29uc3Qgc3VibWFyaW5lID0ge1xuICAgICAgICBsZW5ndGg6IDMsXG4gICAgICAgIGhpdHM6IDAsXG4gICAgICAgIGhpdCgpIHtcbiAgICAgICAgICAgIHRoaXMuaGl0cysrO1xuICAgICAgICB9LFxuICAgICAgICBpc1N1bmsoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IHRoaXMuaGl0cykgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IGNydWlzZXIgPSB7XG4gICAgICAgIGxlbmd0aDogMyxcbiAgICAgICAgaGl0czogMCxcbiAgICAgICAgaGl0KCkge1xuICAgICAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRzKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSB7XG4gICAgICAgIGxlbmd0aDogNCxcbiAgICAgICAgaGl0czogMCxcbiAgICAgICAgaGl0KCkge1xuICAgICAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRzKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgY2FycmllciA9IHtcbiAgICAgICAgbGVuZ3RoOiA1LFxuICAgICAgICBoaXRzOiAwLFxuICAgICAgICBoaXQoKSB7XG4gICAgICAgICAgICB0aGlzLmhpdHMrKztcbiAgICAgICAgfSxcbiAgICAgICAgaXNTdW5rKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLmhpdHMpIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiB7IGRlc3Ryb3llciwgc3VibWFyaW5lLCBjcnVpc2VyLCBiYXR0bGVzaGlwLCBjYXJyaWVyIH07XG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICAgIHBhZGRpbmc6IDAgMTUwcHg7XG4gICAgZ2FwOiA1MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59XG5oMSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xufVxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEyMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBsYXllckdhbWVCb2FyZCxcbi5jb21wdXRlckdhbWVCb2FyZCxcbi5ncmlkIHtcbiAgICBoZWlnaHQ6IDMzMHB4O1xuICAgIHdpZHRoOiAzMzBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQ6IDFmciAvIHJlcGVhdCgxMCwgMWZyKTtcbn1cbi5wbGF5ZXJHYW1lQm9hcmQgPiBkaXYsXG4uY29tcHV0ZXJHYW1lQm9hcmQgPiBkaXYge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gICAgaGVpZ2h0OiAzM3B4O1xuICAgIHdpZHRoOiAzM3B4O1xuICAgIG1hcmdpbjogMDtcbn1cbi5wbGF5ZXJHYW1lQm9hcmQgPiBkaXY6bnRoLWNoaWxkKDEwbiArIDEpLFxuLmNvbXB1dGVyR2FtZUJvYXJkID4gZGl2Om50aC1jaGlsZCgxMG4gKyAxKSxcbi5ncmlkID4gZGl2Om50aC1jaGlsZCgxMG4gKyAxKSB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xufVxuLnBsYXllckdhbWVCb2FyZCA+IGRpdjpudGgtY2hpbGQoLW4gKyAxMCksXG4uY29tcHV0ZXJHYW1lQm9hcmQgPiBkaXY6bnRoLWNoaWxkKC1uICsgMTApLFxuLmdyaWQgPiBkaXY6bnRoLWNoaWxkKC1uICsgMTApIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcbn1cbi5wbGF5ZXJfcm93cyxcbi5jb21wdXRlcl9yb3dzLFxuLnBsYXllcl9jb2x1bW5zLFxuLmNvbXB1dGVyX2NvbHVtbnMsXG4uZ3JpZF9yb3dzLFxuLmdyaWRfY29sdW1ucyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLnBsYXllcl9yb3dzIHtcbiAgICBsZWZ0OiAxMDVweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDE3cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGxheWVyX2NvbHVtbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdG9wOiAtMjVweDtcbiAgICBsZWZ0OiAxNDhweDtcbiAgICBnYXA6IDI2cHg7XG59XG4uY29tcHV0ZXJfcm93cyB7XG4gICAgbGVmdDogNTU1cHg7XG4gICAgdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxN3B4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbXB1dGVyX2NvbHVtbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdG9wOiAtMjVweDtcbiAgICBsZWZ0OiA1OTdweDtcbiAgICBnYXA6IDI2cHg7XG59XG4uYW5ub3VuY2Utd2lubmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA4MTRhYjtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGdhcDogMzBweDtcbiAgICB6LWluZGV4OiAxMDA7XG59XG4uYW5ub3VuY2Utd2lubmVyIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYW5ub3VuY2Utd2lubmVyIGgyIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5hbm5vdW5jZS13aW5uZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICAgIHdpZHRoOiBtaW4oMTVjaCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uYW5ub3VuY2Utd2lubmVyIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTNweCAxMDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbi5wbGFjZS1zaGlwcyB7XG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBjb2xvcjogIzAwMDtcbn1cbi5wbGFjZS1zaGlwcyA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBub3JtYWw7XG59XG4uZ3JpZCA+IGRpdiB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgICBoZWlnaHQ6IDMzcHg7XG4gICAgd2lkdGg6IDMzcHg7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uZ3JpZCA+IGRpdjpudGgtY2hpbGQoMTBuICsgMSkge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcbn1cblxuLmdyaWQgPiBkaXY6bnRoLWNoaWxkKC1uICsgMTApIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcbn1cblxuLnNoaXBzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDEwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuLnNoaXBzID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLnZlcnRpY2FsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnNoaXBzID4gZGl2ID4gZGl2IHtcbiAgICBoZWlnaHQ6IDMzcHg7XG4gICAgd2lkdGg6IDMzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi5wbGFjZS1zaGlwcyBoMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5wbGFjZS1zaGlwcyAuZGVzY3JpcHRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB3aWR0aDogNDAlO1xufVxudWwge1xuICAgIGxpc3Qtc3R5bGU6IGNpcmNsZTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cbi5wbGFjZS1zaGlwcyBoMiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtc2l6ZTogMS41O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi5ncmlkX3Jvd3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBsZWZ0OiAzMDBweDtcbiAgICB0b3A6IDI4N3B4O1xuICAgIGdhcDogMTdweDtcbn1cbi5ncmlkX2NvbHVtbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGVmdDogMzMzcHg7XG4gICAgdG9wOiAyNTdweDtcbiAgICBnYXA6IDI2cHg7XG59XG4uY29udGFpbmVyIGRpdi5hLW1pc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuLmNvbnRhaW5lciBkaXYuYS1oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTs7O0lBR0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0FBQy9CO0FBQ0E7O0lBRUksNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7QUFDYjtBQUNBOzs7SUFHSSwyQkFBMkI7QUFDL0I7QUFDQTs7O0lBR0ksMEJBQTBCO0FBQzlCO0FBQ0E7Ozs7OztJQU1JLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsYUFBYTtJQUNiLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCxTQUFTO0FBQ2I7QUFDQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsYUFBYTtJQUNiLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCxTQUFTO0FBQ2I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsNENBQTRDO0lBQzVDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7SUFDVCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0FBQ2I7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgIHBhZGRpbmc6IDAgMTUwcHg7XFxuICAgIGdhcDogNTBweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBUaW1lcywgc2VyaWY7XFxufVxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxufVxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucGxheWVyR2FtZUJvYXJkLFxcbi5jb21wdXRlckdhbWVCb2FyZCxcXG4uZ3JpZCB7XFxuICAgIGhlaWdodDogMzMwcHg7XFxuICAgIHdpZHRoOiAzMzBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogMWZyIC8gcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG4ucGxheWVyR2FtZUJvYXJkID4gZGl2LFxcbi5jb21wdXRlckdhbWVCb2FyZCA+IGRpdiB7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcbiAgICBoZWlnaHQ6IDMzcHg7XFxuICAgIHdpZHRoOiAzM3B4O1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5wbGF5ZXJHYW1lQm9hcmQgPiBkaXY6bnRoLWNoaWxkKDEwbiArIDEpLFxcbi5jb21wdXRlckdhbWVCb2FyZCA+IGRpdjpudGgtY2hpbGQoMTBuICsgMSksXFxuLmdyaWQgPiBkaXY6bnRoLWNoaWxkKDEwbiArIDEpIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xcbn1cXG4ucGxheWVyR2FtZUJvYXJkID4gZGl2Om50aC1jaGlsZCgtbiArIDEwKSxcXG4uY29tcHV0ZXJHYW1lQm9hcmQgPiBkaXY6bnRoLWNoaWxkKC1uICsgMTApLFxcbi5ncmlkID4gZGl2Om50aC1jaGlsZCgtbiArIDEwKSB7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xcbn1cXG4ucGxheWVyX3Jvd3MsXFxuLmNvbXB1dGVyX3Jvd3MsXFxuLnBsYXllcl9jb2x1bW5zLFxcbi5jb21wdXRlcl9jb2x1bW5zLFxcbi5ncmlkX3Jvd3MsXFxuLmdyaWRfY29sdW1ucyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcbi5wbGF5ZXJfcm93cyB7XFxuICAgIGxlZnQ6IDEwNXB4O1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTdweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ucGxheWVyX2NvbHVtbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0b3A6IC0yNXB4O1xcbiAgICBsZWZ0OiAxNDhweDtcXG4gICAgZ2FwOiAyNnB4O1xcbn1cXG4uY29tcHV0ZXJfcm93cyB7XFxuICAgIGxlZnQ6IDU1NXB4O1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTdweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uY29tcHV0ZXJfY29sdW1ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRvcDogLTI1cHg7XFxuICAgIGxlZnQ6IDU5N3B4O1xcbiAgICBnYXA6IDI2cHg7XFxufVxcbi5hbm5vdW5jZS13aW5uZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDgxNGFiO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHotaW5kZXg6IDEwMDtcXG59XFxuLmFubm91bmNlLXdpbm5lciBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmFubm91bmNlLXdpbm5lciBoMiB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLmFubm91bmNlLXdpbm5lciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBUaW1lcywgc2VyaWY7XFxuICAgIHdpZHRoOiBtaW4oMTVjaCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLmFubm91bmNlLXdpbm5lciBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAxM3B4IDEwMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbi5wbGFjZS1zaGlwcyB7XFxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcbi5wbGFjZS1zaGlwcyA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBub3JtYWw7XFxufVxcbi5ncmlkID4gZGl2IHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XFxuICAgIGhlaWdodDogMzNweDtcXG4gICAgd2lkdGg6IDMzcHg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmdyaWQgPiBkaXY6bnRoLWNoaWxkKDEwbiArIDEpIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4uZ3JpZCA+IGRpdjpudGgtY2hpbGQoLW4gKyAxMCkge1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcXG59XFxuXFxuLnNoaXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuLnNoaXBzID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnZlcnRpY2FsIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnNoaXBzID4gZGl2ID4gZGl2IHtcXG4gICAgaGVpZ2h0OiAzM3B4O1xcbiAgICB3aWR0aDogMzNweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5wbGFjZS1zaGlwcyBoMSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5wbGFjZS1zaGlwcyAuZGVzY3JpcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgIHdpZHRoOiA0MCU7XFxufVxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogY2lyY2xlO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG4ucGxhY2Utc2hpcHMgaDIge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBmb250LXNpemU6IDEuNTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uZ3JpZF9yb3dzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbGVmdDogMzAwcHg7XFxuICAgIHRvcDogMjg3cHg7XFxuICAgIGdhcDogMTdweDtcXG59XFxuLmdyaWRfY29sdW1ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGxlZnQ6IDMzM3B4O1xcbiAgICB0b3A6IDI1N3B4O1xcbiAgICBnYXA6IDI2cHg7XFxufVxcbi5jb250YWluZXIgZGl2LmEtbWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG4uY29udGFpbmVyIGRpdi5hLWhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2dhbWUuanNcIik7XG4iLCIiXSwibmFtZXMiOlsiR2FtZUJvYXJkIiwiUGxheWVyIiwiQ29tcHV0ZXIiLCJwbGFjZUNvbXB1dGVyU2hpcHMiLCJTaGlwIiwicGxheWVyR2FtZUJvYXJkIiwiY29tcHV0ZXJHYW1lQm9hcmQiLCJhbGxQb3NzaWJsZU1vdmVzIiwiY29vcmRzIiwicGxhY2VTaGlwcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdyaWQiLCJzaGlwcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwbGF5ZXJQbGF5R3JvdW5kIiwiZ3JpZE9mUGxheWVyIiwiY2hpbGRyZW4iLCJzaGlwVHlwZSIsInN0YXJ0IiwiYXhpcyIsInNxdWFyZU51bSIsInNxdWFyZU51bVdoaWxlRHJhZ2dpbmciLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiY29vcmQiLCJ2YWx1ZSIsInNxdWFyZSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImVyciIsImUiLCJmIiwiZm9yRWFjaCIsInNoaXAiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjaGlsZCIsImRhdGFOdW0iLCJnZXRBdHRyaWJ1dGUiLCJjaGlsZE5vZGVzIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1bmRlZmluZWQiLCJzbGljZSIsImFscGhhIiwiYWxwaGFOdW1iZXJpY0NvbnZlcnNpb24iLCJjb252ZXJ0TnVtYmVyVG9BbHBoYSIsImlzUGxhY2VtZW50VmFsaWQiLCJyZW5kZXJTaGlwcyIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsImhpZGVTaGlwc1BsYWNlbWVudFBhZ2UiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInN0eWxlIiwidmlzaWJpbGl0eSIsImZpcnN0Q2hpbGQiLCJyZW5kZXJHYW1lQm9hcmQiLCJjb21wdXRlclBsYXlHcm91bmQiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwibW92ZXMiLCJoaXRzIiwiaW5jbHVkZXMiLCJhZGQiLCJtaXNzZXMiLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwic3F1YXJlcyIsImNvb3Jkc09mU2hpcHMiLCJfaXRlcmF0b3I0IiwiX3N0ZXA0IiwicmVtb3ZlRXhpc3RpbmdNYXJrcyIsInBsYXlHYW1lIiwiYW5ub3VuY2VXaW5uZXIiLCJ3aW5uZXIiLCJ3aW5uZXJUZXh0IiwidGV4dENvbnRlbnQiLCJjc3NUZXh0Iiwibm9kZU5hbWUiLCJhbGxTaGlwc0FyZVN1bmsiLCJyZXN0YXJ0R2FtZSIsInJlc3RhcnRCdG4iLCJyZW5kZXJTaGlwTW9kZWxzIiwibW9kZWxTaGlwIiwiY29udGFpbmVyIiwiaSIsImxlbmd0aCIsImRpdiIsIkEiLCJCIiwiQyIsIkQiLCJFIiwiRiIsIkciLCJIIiwiSSIsIkoiLCJudW0iLCJhbGxDb29yZHMiLCJqIiwicHVzaCIsInN0YXJ0Q29vcmQiLCJnYW1lQm9hcmQiLCJfaSIsIl9jb29yZHMiLCJyZWNlaXZlQXR0YWNrIiwiYXRDb29yZCIsImhpdCIsImlzU3VuayIsInBvc3NpYmxlTW92ZXMiLCJjb21wdXRlck1vdmUiLCJNYXRoIiwicmFuZG9tIiwibW92ZUluZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwiYXhpc2VzIiwicG9zc2libGVDb29yZHMiLCJzaGlwUGxhY2VtZW50QXhpcyIsInN0YXJ0aW5nQ29vcmQiLCJkZXN0cm95ZXIiLCJzdWJtYXJpbmUiLCJjcnVpc2VyIiwiYmF0dGxlc2hpcCIsImNhcnJpZXIiXSwic291cmNlUm9vdCI6IiJ9