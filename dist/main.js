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
    console.log(computerGameBoard.coordsOfShips);
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
    if (axis === "horizontal" && (+startCoord.slice(1) + ships[shipType].length > 11 || +startCoord.slice(1)) || axis === "vertical" && +alpha + ships[shipType].length > 11) {
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
  var shipPlacementAxis = axises[~~(Math.random() * axises.length)];
  var possibleCoords = _game__WEBPACK_IMPORTED_MODULE_0__.computerGameBoard.coords();
  while (true) {
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

.container div.a-miss {
    background-color: green;
}
.container div.a-hit {
    background-color: red;
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
    background-color: #00081483;
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
    /* visibility: hidden; */
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
    background-color: black !important;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,SAAS;IACT,4CAA4C;AAChD;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,UAAU;IACV,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;;;IAGI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,2BAA2B;AAC/B;AACA;;IAEI,4BAA4B;IAC5B,6BAA6B;IAC7B,YAAY;IACZ,WAAW;IACX,SAAS;AACb;AACA;;;IAGI,2BAA2B;AAC/B;AACA;;;IAGI,0BAA0B;AAC9B;AACA;;;;;;IAMI,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,SAAS;IACT,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,UAAU;IACV,WAAW;IACX,SAAS;AACb;AACA;IACI,WAAW;IACX,SAAS;IACT,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,UAAU;IACV,WAAW;IACX,SAAS;AACb;;AAEA;IACI,uBAAuB;AAC3B;AACA;IACI,qBAAqB;AACzB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,2BAA2B;IAC3B,2BAA2B;IAC3B,WAAW;IACX,YAAY;IACZ,WAAW;IACX,SAAS;IACT,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,4CAA4C;IAC5C,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,wBAAwB;AAC5B;AACA;IACI,aAAa;IACb,UAAU;IACV,mBAAmB;AACvB;AACA;IACI,4BAA4B;IAC5B,6BAA6B;IAC7B,YAAY;IACZ,WAAW;IACX,SAAS;AACb;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,YAAY;AAChB;AACA;IACI,aAAa;AACjB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,uBAAuB;AAC3B;AACA;IACI,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,UAAU;AACd;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,oBAAoB;AACxB;AACA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,cAAc;IACd,kBAAkB;AACtB;AACA;IACI,kCAAkC;AACtC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,UAAU;IACV,SAAS;AACb;AACA;IACI,aAAa;IACb,WAAW;IACX,UAAU;IACV,SAAS;AACb","sourcesContent":[":root {\n    box-sizing: border-box;\n}\nbody {\n    display: flex;\n    flex-flow: column wrap;\n    padding: 0 150px;\n    gap: 50px;\n    font-family: \"Times New Roman\", Times, serif;\n}\nh1 {\n    font-size: 2.5rem;\n    text-align: center;\n    font-family: cursive;\n}\n.container {\n    display: flex;\n    gap: 120px;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n.playerGameBoard,\n.computerGameBoard,\n.grid {\n    height: 330px;\n    width: 330px;\n    display: grid;\n    grid: 1fr / repeat(10, 1fr);\n}\n.playerGameBoard > div,\n.computerGameBoard > div {\n    border-right: 1px solid gray;\n    border-bottom: 1px solid gray;\n    height: 33px;\n    width: 33px;\n    margin: 0;\n}\n.playerGameBoard > div:nth-child(10n + 1),\n.computerGameBoard > div:nth-child(10n + 1),\n.grid > div:nth-child(10n + 1) {\n    border-left: 1px solid gray;\n}\n.playerGameBoard > div:nth-child(-n + 10),\n.computerGameBoard > div:nth-child(-n + 10),\n.grid > div:nth-child(-n + 10) {\n    border-top: 1px solid gray;\n}\n.player_rows,\n.computer_rows,\n.player_columns,\n.computer_columns,\n.grid_rows,\n.grid_columns {\n    position: absolute;\n    font-size: 0.9rem;\n}\n.player_rows {\n    left: 105px;\n    top: 10px;\n    display: flex;\n    gap: 17px;\n    flex-direction: column;\n    text-align: center;\n}\n.player_columns {\n    display: flex;\n    top: -25px;\n    left: 148px;\n    gap: 26px;\n}\n.computer_rows {\n    left: 555px;\n    top: 10px;\n    display: flex;\n    gap: 17px;\n    flex-direction: column;\n    text-align: center;\n}\n.computer_columns {\n    display: flex;\n    top: -25px;\n    left: 597px;\n    gap: 26px;\n}\n\n.container div.a-miss {\n    background-color: green;\n}\n.container div.a-hit {\n    background-color: red;\n}\n.announce-winner {\n    position: absolute;\n    visibility: hidden;\n    top: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #00081483;\n    backdrop-filter: blur(10px);\n    width: 100%;\n    height: 100%;\n    color: #fff;\n    gap: 30px;\n    z-index: 100;\n}\n.announce-winner div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.announce-winner h2 {\n    font-size: 3rem;\n    margin-bottom: 0;\n}\n.announce-winner h1 {\n    font-size: 6rem;\n    font-family: \"Times New Roman\", Times, serif;\n    width: min(15ch);\n    text-align: center;\n    margin-top: 10px;\n}\n.announce-winner button {\n    padding: 13px 100px;\n    cursor: pointer;\n    font-size: 1.5rem;\n    font-weight: 500;\n    border-radius: 15px;\n    border: none;\n}\n.place-ships {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-color: #fff;\n    z-index: 100;\n    color: #000;\n    /* visibility: hidden; */\n}\n.place-ships > div {\n    display: flex;\n    gap: 100px;\n    align-items: normal;\n}\n.grid > div {\n    border-right: 1px solid gray;\n    border-bottom: 1px solid gray;\n    height: 33px;\n    width: 33px;\n    margin: 0;\n}\n\n.grid > div:nth-child(10n + 1) {\n    border-left: 1px solid gray;\n}\n\n.grid > div:nth-child(-n + 10) {\n    border-top: 1px solid gray;\n}\n\n.ships {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    width: 300px;\n}\n.ships > div {\n    display: flex;\n}\n.vertical {\n    flex-direction: column;\n}\n.ships > div > div {\n    height: 33px;\n    width: 33px;\n    border: 1px solid #fff;\n    background-color: black;\n}\n.place-ships h1 {\n    margin-bottom: 10px;\n}\n.place-ships .description {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-bottom: 40px;\n    width: 40%;\n}\nul {\n    list-style: circle;\n    margin-top: 0;\n    font-size: 1rem;\n    font-family: inherit;\n}\n.place-ships h2 {\n    margin-top: 10px;\n    margin-bottom: 0;\n    font-size: 1.5;\n    align-self: center;\n}\n.ship {\n    background-color: black !important;\n}\n.grid_rows {\n    display: flex;\n    flex-direction: column;\n    left: 300px;\n    top: 287px;\n    gap: 17px;\n}\n.grid_columns {\n    display: flex;\n    left: 333px;\n    top: 257px;\n    gap: 26px;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ3dCO0FBQ2xDO0FBRVQ7QUFFZCxJQUFJSyxlQUFlLEdBQUdMLHFEQUFTLENBQUMsQ0FBQztBQUNqQyxJQUFJTSxpQkFBaUIsR0FBR04scURBQVMsQ0FBQyxDQUFDO0FBQzFDLElBQU1PLGdCQUFnQixHQUFHRixlQUFlLENBQUNHLE1BQU0sQ0FBQyxDQUFDO0FBRWpELElBQU1DLFVBQVUsR0FBRyxTQUFBQSxXQUFBLEVBQU07RUFDckIsSUFBTUEsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7RUFDekQsSUFBTUMsSUFBSSxHQUFHSCxVQUFVLENBQUNFLGFBQWEsQ0FBQyxPQUFPLENBQUM7RUFDOUMsSUFBTUUsS0FBSyxHQUFHSixVQUFVLENBQUNLLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztFQUMxRCxJQUFNQyxnQkFBZ0IsR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7RUFDbkUsSUFBTUssWUFBWSxHQUFHRCxnQkFBZ0IsQ0FBQ0UsUUFBUTtFQUM5QyxJQUFJQyxRQUFRLEdBQUcsRUFBRTtFQUNqQixJQUFJQyxLQUFLLEdBQUcsRUFBRTtFQUNkLElBQUlDLElBQUksR0FBRyxFQUFFO0VBQ2IsSUFBSUMsU0FBUyxHQUFHLElBQUk7RUFDcEIsSUFBSUMsc0JBQXNCLEdBQUcsSUFBSTtFQUFDLElBQUFDLFNBQUEsR0FBQUMsMEJBQUEsQ0FFaEJuQixlQUFlLENBQUNHLE1BQU0sQ0FBQyxDQUFDO0lBQUFpQixLQUFBO0VBQUE7SUFBMUMsS0FBQUYsU0FBQSxDQUFBRyxDQUFBLE1BQUFELEtBQUEsR0FBQUYsU0FBQSxDQUFBSSxDQUFBLElBQUFDLElBQUEsR0FBNEM7TUFBQSxJQUFuQ0MsS0FBSyxHQUFBSixLQUFBLENBQUFLLEtBQUE7TUFDVixJQUFNQyxNQUFNLEdBQUdyQixRQUFRLENBQUNzQixhQUFhLENBQUMsS0FBSyxDQUFDO01BQzVDRCxNQUFNLENBQUNFLFlBQVksQ0FBQyxZQUFZLEVBQUVKLEtBQUssQ0FBQztNQUN4Q2pCLElBQUksQ0FBQ3NCLFdBQVcsQ0FBQ0gsTUFBTSxDQUFDO0lBQzVCO0VBQUMsU0FBQUksR0FBQTtJQUFBWixTQUFBLENBQUFhLENBQUEsQ0FBQUQsR0FBQTtFQUFBO0lBQUFaLFNBQUEsQ0FBQWMsQ0FBQTtFQUFBO0VBQ0R4QixLQUFLLENBQUN5QixPQUFPLENBQUMsVUFBQ0MsSUFBSTtJQUFBLE9BQ2ZBLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFVBQUNDLEtBQUssRUFBSztNQUN6Q0YsSUFBSSxDQUFDRyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDckMsQ0FBQyxDQUFDO0VBQUEsQ0FDTixDQUFDO0VBQ0Q5QixLQUFLLENBQUN5QixPQUFPLENBQUMsVUFBQ0MsSUFBSSxFQUFLO0lBQ3BCQSxJQUFJLENBQUN6QixnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQ3dCLE9BQU8sQ0FBQyxVQUFDTSxLQUFLLEVBQUs7TUFDdERBLEtBQUssQ0FBQ0osZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFlBQU07UUFDdEMsSUFBTUssT0FBTyxHQUFHRCxLQUFLLENBQUNFLFlBQVksQ0FBQyxVQUFVLENBQUM7UUFDOUM1QixRQUFRLEdBQUdxQixJQUFJLENBQUNPLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDbEN6QixTQUFTLEdBQUd3QixPQUFPO1FBQ25CekIsSUFBSSxHQUFHbUIsSUFBSSxDQUFDRyxTQUFTLENBQUMsQ0FBQyxDQUFDO01BQzVCLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztFQUNGN0IsS0FBSyxDQUFDeUIsT0FBTyxDQUFDLFVBQUNDLElBQUk7SUFBQSxPQUNmQSxJQUFJLENBQUNDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxZQUFNO01BQ3JDbEIsc0JBQXNCLEdBQUdELFNBQVM7SUFDdEMsQ0FBQyxDQUFDO0VBQUEsQ0FDTixDQUFDO0VBQ0RULElBQUksQ0FBQ21DLFVBQVUsQ0FBQ1QsT0FBTyxDQUFDLFVBQUNNLEtBQUs7SUFBQSxPQUMxQkEsS0FBSyxDQUFDSixnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO01BQzFDQSxLQUFLLENBQUNPLGNBQWMsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQztFQUFBLENBQ04sQ0FBQztFQUNEcEMsSUFBSSxDQUFDbUMsVUFBVSxDQUFDVCxPQUFPLENBQUMsVUFBQ00sS0FBSztJQUFBLE9BQzFCQSxLQUFLLENBQUNKLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxVQUFDQyxLQUFLLEVBQUs7TUFDdEN0QixLQUFLLEdBQUdzQixLQUFLLENBQUNRLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDckIsS0FBSztNQUNsQyxJQUFNVSxJQUFJLEdBQUc3QixRQUFRLENBQUN5QyxjQUFjLENBQUNqQyxRQUFRLENBQUM7TUFDOUMsSUFBSUUsSUFBSSxLQUFLZ0MsU0FBUyxFQUFFO1FBQ3BCakMsS0FBSyxHQUFHQSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQ0EsS0FBSyxDQUFDa0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHL0Isc0JBQXNCLENBQUM7UUFDN0RGLElBQUksR0FBRyxZQUFZO01BQ3ZCLENBQUMsTUFBTTtRQUNILElBQU1rQyxLQUFLLEdBQ1BqRCxlQUFlLENBQUNrRCx1QkFBdUIsQ0FBQ3BDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUNqREcsc0JBQXNCO1FBQzFCSCxLQUFLLEdBQ0RkLGVBQWUsQ0FBQ21ELG9CQUFvQixDQUFDRixLQUFLLENBQUMsR0FDM0NuQyxLQUFLLENBQUNrQyxLQUFLLENBQUMsQ0FBQyxDQUFDO01BQ3RCO01BRUEsSUFDSWhELGVBQWUsQ0FBQ29ELGdCQUFnQixDQUM1QnZDLFFBQVEsRUFDUkMsS0FBSyxFQUNMQyxJQUFJLEVBQ0pmLGVBQ0osQ0FBQyxFQUNIO1FBQ0VBLGVBQWUsQ0FBQ0ksVUFBVSxDQUFDUyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxDQUFDO1FBQ2pEakIsMkRBQWtCLENBQUNlLFFBQVEsQ0FBQztRQUM1QndDLFdBQVcsQ0FBQzlDLElBQUksQ0FBQ21DLFVBQVUsQ0FBQztRQUM1QlcsV0FBVyxDQUFDMUMsWUFBWSxDQUFDO1FBQ3pCdUIsSUFBSSxDQUFDb0IsYUFBYSxDQUFDQyxXQUFXLENBQUNyQixJQUFJLENBQUM7UUFDcENzQixzQkFBc0IsQ0FBQyxDQUFDO01BQzVCO0lBQ0osQ0FBQyxDQUFDO0VBQUEsQ0FDTixDQUFDO0FBQ0wsQ0FBQztBQUNELElBQU1BLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBc0JBLENBQUEsRUFBUztFQUNqQyxJQUFNcEQsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7RUFDekQsSUFBTUUsS0FBSyxHQUFHSixVQUFVLENBQUNFLGFBQWEsQ0FBQyxRQUFRLENBQUM7RUFDaEQsSUFBTUMsSUFBSSxHQUFHSCxVQUFVLENBQUNFLGFBQWEsQ0FBQyxPQUFPLENBQUM7RUFFOUMsSUFBSSxDQUFDRSxLQUFLLENBQUNpRCxpQkFBaUIsRUFBRTtJQUMxQnJELFVBQVUsQ0FBQ3NELEtBQUssQ0FBQ0MsVUFBVSxHQUFHLFFBQVE7SUFDdEMsT0FBT3BELElBQUksQ0FBQ3FELFVBQVUsRUFBRTtNQUNwQnJELElBQUksQ0FBQ2dELFdBQVcsQ0FBQ2hELElBQUksQ0FBQ3FELFVBQVUsQ0FBQztJQUNyQztJQUNBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQzdELGlCQUFpQixDQUFDOEQsYUFBYSxDQUFDO0VBQ2hEO0FBQ0osQ0FBQztBQUNELElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBQSxFQUFTO0VBQzFCLElBQU10RCxnQkFBZ0IsR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7RUFDbkUsSUFBTTJELGtCQUFrQixHQUFHNUQsUUFBUSxDQUFDQyxhQUFhLENBQUMsb0JBQW9CLENBQUM7RUFBQyxJQUFBNEQsVUFBQSxHQUFBL0MsMEJBQUEsQ0FDdERuQixlQUFlLENBQUNHLE1BQU0sQ0FBQyxDQUFDO0lBQUFnRSxNQUFBO0VBQUE7SUFBMUMsS0FBQUQsVUFBQSxDQUFBN0MsQ0FBQSxNQUFBOEMsTUFBQSxHQUFBRCxVQUFBLENBQUE1QyxDQUFBLElBQUFDLElBQUEsR0FBNEM7TUFBQSxJQUFuQ0MsS0FBSyxHQUFBMkMsTUFBQSxDQUFBMUMsS0FBQTtNQUNWLElBQU1DLE1BQU0sR0FBR3JCLFFBQVEsQ0FBQ3NCLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDNUNELE1BQU0sQ0FBQ0UsWUFBWSxDQUFDLFlBQVksRUFBRUosS0FBSyxDQUFDO01BQ3hDLElBQUl4QixlQUFlLENBQUNvRSxLQUFLLENBQUNDLElBQUksQ0FBQ0MsUUFBUSxDQUFDOUMsS0FBSyxDQUFDLEVBQUU7UUFDNUNFLE1BQU0sQ0FBQ1csU0FBUyxDQUFDa0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztNQUNqQyxDQUFDLE1BQU0sSUFBSXZFLGVBQWUsQ0FBQ29FLEtBQUssQ0FBQ0ksTUFBTSxDQUFDRixRQUFRLENBQUM5QyxLQUFLLENBQUMsRUFBRTtRQUNyREUsTUFBTSxDQUFDVyxTQUFTLENBQUNrQyxHQUFHLENBQUMsUUFBUSxDQUFDO01BQ2xDO01BQ0E3RCxnQkFBZ0IsQ0FBQ21CLFdBQVcsQ0FBQ0gsTUFBTSxDQUFDO0lBQ3hDO0VBQUMsU0FBQUksR0FBQTtJQUFBb0MsVUFBQSxDQUFBbkMsQ0FBQSxDQUFBRCxHQUFBO0VBQUE7SUFBQW9DLFVBQUEsQ0FBQWxDLENBQUE7RUFBQTtFQUFBLElBQUF5QyxVQUFBLEdBQUF0RCwwQkFBQSxDQUNpQmxCLGlCQUFpQixDQUFDRSxNQUFNLENBQUMsQ0FBQztJQUFBdUUsTUFBQTtFQUFBO0lBQTVDLEtBQUFELFVBQUEsQ0FBQXBELENBQUEsTUFBQXFELE1BQUEsR0FBQUQsVUFBQSxDQUFBbkQsQ0FBQSxJQUFBQyxJQUFBLEdBQThDO01BQUEsSUFBckNDLE1BQUssR0FBQWtELE1BQUEsQ0FBQWpELEtBQUE7TUFDVixJQUFNQyxPQUFNLEdBQUdyQixRQUFRLENBQUNzQixhQUFhLENBQUMsS0FBSyxDQUFDO01BQzVDRCxPQUFNLENBQUNFLFlBQVksQ0FBQyxZQUFZLEVBQUVKLE1BQUssQ0FBQztNQUV4QyxJQUFJdkIsaUJBQWlCLENBQUNtRSxLQUFLLENBQUNDLElBQUksQ0FBQ0MsUUFBUSxDQUFDOUMsTUFBSyxDQUFDLEVBQUU7UUFDOUNFLE9BQU0sQ0FBQ1csU0FBUyxDQUFDa0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztNQUNqQyxDQUFDLE1BQU0sSUFBSXRFLGlCQUFpQixDQUFDbUUsS0FBSyxDQUFDSSxNQUFNLENBQUNGLFFBQVEsQ0FBQzlDLE1BQUssQ0FBQyxFQUFFO1FBQ3ZERSxPQUFNLENBQUNXLFNBQVMsQ0FBQ2tDLEdBQUcsQ0FBQyxRQUFRLENBQUM7TUFDbEM7TUFDQU4sa0JBQWtCLENBQUNwQyxXQUFXLENBQUNILE9BQU0sQ0FBQztJQUMxQztFQUFDLFNBQUFJLEdBQUE7SUFBQTJDLFVBQUEsQ0FBQTFDLENBQUEsQ0FBQUQsR0FBQTtFQUFBO0lBQUEyQyxVQUFBLENBQUF6QyxDQUFBO0VBQUE7QUFDTCxDQUFDO0FBQ0QsSUFBTXFCLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJc0IsT0FBTyxFQUFLO0VBQzdCLEtBQUssSUFBSXpDLElBQUksSUFBSWxDLGVBQWUsQ0FBQytELGFBQWEsRUFBRTtJQUFBLElBQUFhLFVBQUEsR0FBQXpELDBCQUFBLENBQ3pCd0QsT0FBTztNQUFBRSxNQUFBO0lBQUE7TUFBMUIsS0FBQUQsVUFBQSxDQUFBdkQsQ0FBQSxNQUFBd0QsTUFBQSxHQUFBRCxVQUFBLENBQUF0RCxDQUFBLElBQUFDLElBQUEsR0FBNEI7UUFBQSxJQUFuQkcsTUFBTSxHQUFBbUQsTUFBQSxDQUFBcEQsS0FBQTtRQUNYLElBQ0l6QixlQUFlLENBQUMrRCxhQUFhLENBQUM3QixJQUFJLENBQUMsQ0FBQ29DLFFBQVEsQ0FDeEM1QyxNQUFNLENBQUNtQixPQUFPLENBQUNyQixLQUNuQixDQUFDLEVBQ0g7VUFDRUUsTUFBTSxDQUFDVyxTQUFTLENBQUNrQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ2hDO01BQ0o7SUFBQyxTQUFBekMsR0FBQTtNQUFBOEMsVUFBQSxDQUFBN0MsQ0FBQSxDQUFBRCxHQUFBO0lBQUE7TUFBQThDLFVBQUEsQ0FBQTVDLENBQUE7SUFBQTtFQUNMO0FBQ0osQ0FBQztBQUNELElBQU04QyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFBLEVBQVM7RUFDOUIsSUFBTXBFLGdCQUFnQixHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztFQUNuRSxJQUFNMkQsa0JBQWtCLEdBQUc1RCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztFQUN2RSxPQUFPSSxnQkFBZ0IsQ0FBQ2tELFVBQVUsSUFBSUssa0JBQWtCLENBQUNMLFVBQVUsRUFBRTtJQUNqRWxELGdCQUFnQixDQUFDNkMsV0FBVyxDQUFDN0MsZ0JBQWdCLENBQUNrRCxVQUFVLENBQUM7SUFDekRLLGtCQUFrQixDQUFDVixXQUFXLENBQUNVLGtCQUFrQixDQUFDTCxVQUFVLENBQUM7RUFDakU7QUFDSixDQUFDO0FBQ0QsSUFBTW1CLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBLEVBQVM7RUFDbkIsSUFBTWQsa0JBQWtCLEdBQUc1RCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztFQUN2RSxJQUFNRixVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztFQUN6RCxJQUFNQyxJQUFJLEdBQUdILFVBQVUsQ0FBQ0UsYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUM5QyxJQUFNSSxnQkFBZ0IsR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7RUFDbkUsSUFBTUssWUFBWSxHQUFHRCxnQkFBZ0IsQ0FBQ0UsUUFBUTtFQUM5QyxJQUFNb0UsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJQyxNQUFNLEVBQUs7SUFDL0IsSUFBTUMsVUFBVSxHQUFHN0UsUUFBUSxDQUFDQyxhQUFhLENBQUMscUJBQXFCLENBQUM7SUFDaEU0RSxVQUFVLENBQUNDLFdBQVcsR0FBR0YsTUFBTTtJQUMvQkMsVUFBVSxDQUFDNUIsYUFBYSxDQUFDQSxhQUFhLENBQUNJLEtBQUssQ0FBQzBCLE9BQU8sR0FDaEQscUJBQXFCO0VBQzdCLENBQUM7RUFFRG5CLGtCQUFrQixDQUFDOUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLEtBQUssRUFBSztJQUNwRCxJQUNJQSxLQUFLLENBQUNRLE1BQU0sQ0FBQ3lDLFFBQVEsS0FBSyxLQUFLLElBQy9CLENBQUNwRixpQkFBaUIsQ0FBQ21FLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxRQUFRLENBQ2xDbEMsS0FBSyxDQUFDUSxNQUFNLENBQUNDLE9BQU8sQ0FBQ3JCLEtBQ3pCLENBQUMsSUFDRCxDQUFDdkIsaUJBQWlCLENBQUNtRSxLQUFLLENBQUNJLE1BQU0sQ0FBQ0YsUUFBUSxDQUNwQ2xDLEtBQUssQ0FBQ1EsTUFBTSxDQUFDQyxPQUFPLENBQUNyQixLQUN6QixDQUFDLElBQ0QsQ0FBQ3hCLGVBQWUsQ0FBQ3NGLGVBQWUsQ0FBQyxDQUFDLElBQ2xDLENBQUNyRixpQkFBaUIsQ0FBQ3FGLGVBQWUsQ0FBQyxDQUFDLEVBQ3RDO01BQ0VSLG1CQUFtQixDQUFDLENBQUM7TUFDckJsRiwrQ0FBTSxDQUFDd0MsS0FBSyxDQUFDUSxNQUFNLENBQUNDLE9BQU8sQ0FBQ3JCLEtBQUssQ0FBQztNQUNsQzNCLGlEQUFRLENBQUNLLGdCQUFnQixDQUFDO01BQzFCOEQsZUFBZSxDQUFDLENBQUM7TUFDakJYLFdBQVcsQ0FBQzlDLElBQUksQ0FBQ21DLFVBQVUsQ0FBQztNQUM1QlcsV0FBVyxDQUFDMUMsWUFBWSxDQUFDO0lBQzdCO0lBQ0EsSUFDSVgsZUFBZSxDQUFDc0YsZUFBZSxDQUFDLENBQUMsSUFDakNyRixpQkFBaUIsQ0FBQ3FGLGVBQWUsQ0FBQyxDQUFDLEVBQ3JDO01BQ0V0RixlQUFlLENBQUNzRixlQUFlLENBQUMsQ0FBQyxHQUMzQk4sY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUMxQkEsY0FBYyxDQUFDLEtBQUssQ0FBQztJQUMvQjtFQUNKLENBQUMsQ0FBQztBQUNOLENBQUM7QUFDRCxJQUFNTyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0VBQ3RCLElBQU1DLFVBQVUsR0FBR25GLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHlCQUF5QixDQUFDO0VBQ3BFLElBQU1tRixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFBLEVBQVM7SUFDM0IsSUFBTXJGLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0lBQ3pELElBQU1vRixTQUFTLEdBQUd0RixVQUFVLENBQUNFLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDcEQsS0FBSyxJQUFNNEIsSUFBSSxJQUFJbEMsZUFBZSxDQUFDUSxLQUFLLEVBQUU7TUFDdEMsSUFBTW1GLFNBQVMsR0FBR3RGLFFBQVEsQ0FBQ3NCLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDL0NnRSxTQUFTLENBQUMvRCxZQUFZLENBQUMsSUFBSSxFQUFFTSxJQUFJLENBQUM7TUFDbEN5RCxTQUFTLENBQUMvRCxZQUFZLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQztNQUMzQyxLQUFLLElBQUlnRSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUc1RixlQUFlLENBQUNRLEtBQUssQ0FBQzBCLElBQUksQ0FBQyxDQUFDMkQsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtRQUN6RCxJQUFNRSxHQUFHLEdBQUd6RixRQUFRLENBQUNzQixhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3pDbUUsR0FBRyxDQUFDbEUsWUFBWSxDQUFDLFVBQVUsRUFBRWdFLENBQUMsQ0FBQztRQUMvQkQsU0FBUyxDQUFDOUQsV0FBVyxDQUFDaUUsR0FBRyxDQUFDO01BQzlCO01BQ0FKLFNBQVMsQ0FBQzdELFdBQVcsQ0FBQzhELFNBQVMsQ0FBQztJQUNwQztJQUVBdkYsVUFBVSxDQUFDc0QsS0FBSyxDQUFDQyxVQUFVLEdBQUcsU0FBUztFQUMzQyxDQUFDO0VBQ0Q2QixVQUFVLENBQUNyRCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUN2QzJDLG1CQUFtQixDQUFDLENBQUM7SUFDckI5RSxlQUFlLEdBQUdMLHFEQUFTLENBQUMsQ0FBQztJQUM3Qk0saUJBQWlCLEdBQUdOLHFEQUFTLENBQUMsQ0FBQztJQUMvQjhGLGdCQUFnQixDQUFDLENBQUM7SUFDbEJyRixVQUFVLENBQUMsQ0FBQztJQUNaNEQsZUFBZSxDQUFDLENBQUM7SUFDakJlLFFBQVEsQ0FBQyxDQUFDO0lBQ1ZTLFVBQVUsQ0FBQ2xDLGFBQWEsQ0FBQ0ksS0FBSyxDQUFDMEIsT0FBTyxHQUFHLG9CQUFvQjtFQUNqRSxDQUFDLENBQUM7QUFDTixDQUFDO0FBRURoRixVQUFVLENBQUMsQ0FBQztBQUNaNEQsZUFBZSxDQUFDLENBQUM7QUFDakJlLFFBQVEsQ0FBQyxDQUFDO0FBQ1ZRLFdBQVcsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDN044QjtBQUNiO0FBRXZCLElBQU01RixTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0VBQzNCLElBQU15RSxLQUFLLEdBQUc7SUFBRUMsSUFBSSxFQUFFLEVBQUU7SUFBRUcsTUFBTSxFQUFFO0VBQUcsQ0FBQztFQUN0QyxJQUFNaEUsS0FBSyxHQUFHVCwyQ0FBSSxDQUFDLENBQUM7RUFDcEIsSUFBTWdFLGFBQWEsR0FBRyxDQUFDLENBQUM7RUFDeEIsSUFBTWIsdUJBQXVCLEdBQUc7SUFDNUI2QyxDQUFDLEVBQUUsQ0FBQztJQUNKQyxDQUFDLEVBQUUsQ0FBQztJQUNKQyxDQUFDLEVBQUUsQ0FBQztJQUNKQyxDQUFDLEVBQUUsQ0FBQztJQUNKQyxDQUFDLEVBQUUsQ0FBQztJQUNKQyxDQUFDLEVBQUUsQ0FBQztJQUNKQyxDQUFDLEVBQUUsQ0FBQztJQUNKQyxDQUFDLEVBQUUsQ0FBQztJQUNKQyxDQUFDLEVBQUUsQ0FBQztJQUNKQyxDQUFDLEVBQUU7RUFDUCxDQUFDO0VBQ0QsU0FBU3JELG9CQUFvQkEsQ0FBQ3NELEdBQUcsRUFBRTtJQUMvQixLQUFLLElBQUl4RCxLQUFLLElBQUlDLHVCQUF1QixFQUFFO01BQ3ZDLElBQUlBLHVCQUF1QixDQUFDRCxLQUFLLENBQUMsS0FBS3dELEdBQUcsRUFBRTtRQUN4QyxPQUFPeEQsS0FBSztNQUNoQjtJQUNKO0VBQ0o7RUFDQSxJQUFNOUMsTUFBTSxHQUFHLFNBQVRBLE1BQU1BLENBQUEsRUFBUztJQUNqQixJQUFJdUcsU0FBUyxHQUFHLEVBQUU7SUFDbEIsSUFBSXpELEtBQUssR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUM5RCxLQUFLLElBQUkyQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUczQyxLQUFLLENBQUM0QyxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQ25DLEtBQUssSUFBSWUsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7UUFDekJELFNBQVMsQ0FBQ0UsSUFBSSxDQUFDM0QsS0FBSyxDQUFDMkMsQ0FBQyxDQUFDLEdBQUdlLENBQUMsQ0FBQztNQUNoQztJQUNKO0lBRUEsT0FBT0QsU0FBUztFQUNwQixDQUFDO0VBQ0QsSUFBTXRHLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJUyxRQUFRLEVBQUVnRyxVQUFVLEVBQUU5RixJQUFJLEVBQUs7SUFDL0NnRCxhQUFhLENBQUNsRCxRQUFRLENBQUMsR0FBRyxDQUFDZ0csVUFBVSxDQUFDO0lBQ3RDLElBQUlyRyxLQUFLLENBQUNLLFFBQVEsQ0FBQyxLQUFLa0MsU0FBUyxFQUFFO01BQy9CLEtBQUssSUFBSTZDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3BGLEtBQUssQ0FBQ0ssUUFBUSxDQUFDLENBQUNnRixNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO1FBQzdDLElBQUk3RSxJQUFJLEtBQUssWUFBWSxFQUFFO1VBQ3ZCOEYsVUFBVSxHQUFHQSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQ0EsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztVQUNqRDlDLGFBQWEsQ0FBQ2xELFFBQVEsQ0FBQyxDQUFDK0YsSUFBSSxDQUFDQyxVQUFVLENBQUM7UUFDNUMsQ0FBQyxNQUFNLElBQUk5RixJQUFJLEtBQUssVUFBVSxFQUFFO1VBQzVCOEYsVUFBVSxHQUNOMUQsb0JBQW9CLENBQ2hCLENBQUNELHVCQUF1QixDQUFDMkQsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FDOUMsQ0FBQyxHQUFHQSxVQUFVLENBQUM3RCxLQUFLLENBQUMsQ0FBQyxDQUFDO1VBQzNCZSxhQUFhLENBQUNsRCxRQUFRLENBQUMsQ0FBQytGLElBQUksQ0FBQ0MsVUFBVSxDQUFDO1FBQzVDO01BQ0o7SUFDSjtJQUNBLE9BQU85QyxhQUFhO0VBQ3hCLENBQUM7RUFDRCxJQUFNWCxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFJdkMsUUFBUSxFQUFFZ0csVUFBVSxFQUFFOUYsSUFBSSxFQUFFK0YsU0FBUyxFQUFLO0lBQ2hFLElBQU03RCxLQUFLLEdBQUc2RCxTQUFTLENBQUM1RCx1QkFBdUIsQ0FBQzJELFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RCxJQUFNMUcsTUFBTSxHQUFHLENBQUMwRyxVQUFVLENBQUM7SUFFM0IsSUFDSzlGLElBQUksS0FBSyxZQUFZLEtBQ2pCLENBQUM4RixVQUFVLENBQUM3RCxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUd4QyxLQUFLLENBQUNLLFFBQVEsQ0FBQyxDQUFDZ0YsTUFBTSxHQUFHLEVBQUUsSUFDL0MsQ0FBQ2dCLFVBQVUsQ0FBQzdELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUM1QmpDLElBQUksS0FBSyxVQUFVLElBQUksQ0FBQ2tDLEtBQUssR0FBR3pDLEtBQUssQ0FBQ0ssUUFBUSxDQUFDLENBQUNnRixNQUFNLEdBQUcsRUFBRyxFQUMvRDtNQUNFLE9BQU8sS0FBSztJQUNoQjtJQUVBLEtBQUssSUFBSUQsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHcEYsS0FBSyxDQUFDSyxRQUFRLENBQUMsQ0FBQ2dGLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDN0MsSUFBSTdFLElBQUksS0FBSyxZQUFZLEVBQUU7UUFDdkI4RixVQUFVLEdBQUdBLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDQSxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pEMUcsTUFBTSxDQUFDeUcsSUFBSSxDQUFDQyxVQUFVLENBQUM7TUFDM0IsQ0FBQyxNQUFNLElBQUk5RixJQUFJLEtBQUssVUFBVSxFQUFFO1FBQzVCOEYsVUFBVSxHQUNOMUQsb0JBQW9CLENBQ2hCLENBQUNELHVCQUF1QixDQUFDMkQsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FDOUMsQ0FBQyxHQUFHQSxVQUFVLENBQUM3RCxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzNCN0MsTUFBTSxDQUFDeUcsSUFBSSxDQUFDQyxVQUFVLENBQUM7TUFDM0I7SUFDSjtJQUVBLFNBQUFFLEVBQUEsTUFBQUMsT0FBQSxHQUFvQjdHLE1BQU0sRUFBQTRHLEVBQUEsR0FBQUMsT0FBQSxDQUFBbkIsTUFBQSxFQUFBa0IsRUFBQSxJQUFFO01BQXZCLElBQU12RixLQUFLLEdBQUF3RixPQUFBLENBQUFELEVBQUE7TUFDWixLQUFLLElBQU03RSxJQUFJLElBQUk2QixhQUFhLEVBQUU7UUFDOUIsSUFBSUEsYUFBYSxDQUFDN0IsSUFBSSxDQUFDLENBQUNvQyxRQUFRLENBQUM5QyxLQUFLLENBQUMsRUFBRTtVQUNyQyxPQUFPLEtBQUs7UUFDaEI7TUFDSjtJQUNKO0lBQ0EsT0FBTyxJQUFJO0VBQ2YsQ0FBQztFQUVELElBQU15RixhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlDLE9BQU8sRUFBSztJQUMvQixLQUFLLElBQUloRixJQUFJLElBQUk2QixhQUFhLEVBQUU7TUFDNUIsSUFBSUEsYUFBYSxDQUFDN0IsSUFBSSxDQUFDLENBQUNvQyxRQUFRLENBQUM0QyxPQUFPLENBQUMsRUFBRTtRQUN2QzFHLEtBQUssQ0FBQzBCLElBQUksQ0FBQyxDQUFDaUYsR0FBRyxDQUFDLENBQUM7UUFDakIvQyxLQUFLLENBQUNDLElBQUksQ0FBQ3VDLElBQUksQ0FBQ00sT0FBTyxDQUFDO01BQzVCO0lBQ0o7SUFDQSxJQUFJLENBQUM5QyxLQUFLLENBQUNDLElBQUksQ0FBQ0MsUUFBUSxDQUFDNEMsT0FBTyxDQUFDLEVBQUU7TUFDL0I5QyxLQUFLLENBQUNJLE1BQU0sQ0FBQ29DLElBQUksQ0FBQ00sT0FBTyxDQUFDO0lBQzlCO0lBRUEsT0FBTzlDLEtBQUs7RUFDaEIsQ0FBQztFQUNELElBQU1rQixlQUFlLEdBQUcsU0FBQUEsZ0JBQUEsRUFBTTtJQUMxQixJQUFJQSxlQUFlLEdBQUcsSUFBSTtJQUMxQixLQUFLLElBQUlwRCxJQUFJLElBQUkxQixLQUFLLEVBQUU7TUFDcEIsSUFBSUEsS0FBSyxDQUFDMEIsSUFBSSxDQUFDLENBQUNrRixNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRTtRQUMvQjlCLGVBQWUsR0FBRyxLQUFLO1FBQ3ZCLE9BQU9BLGVBQWU7TUFDMUI7SUFDSjtJQUNBLE9BQU9BLGVBQWU7RUFDMUIsQ0FBQztFQUVELE9BQU87SUFDSHBDLHVCQUF1QixFQUF2QkEsdUJBQXVCO0lBQ3ZCQyxvQkFBb0IsRUFBcEJBLG9CQUFvQjtJQUNwQmhELE1BQU0sRUFBTkEsTUFBTTtJQUNOSyxLQUFLLEVBQUxBLEtBQUs7SUFDTDRELEtBQUssRUFBTEEsS0FBSztJQUNMTCxhQUFhLEVBQWJBLGFBQWE7SUFDYjNELFVBQVUsRUFBVkEsVUFBVTtJQUNWZ0QsZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7SUFDaEI2RCxhQUFhLEVBQWJBLGFBQWE7SUFDYjNCLGVBQWUsRUFBZkE7RUFDSixDQUFDO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0gyRDtBQUNwQjtBQUV4QyxJQUFNMUYsTUFBTSxHQUFHLFNBQVRBLE1BQU1BLENBQUlzSCxPQUFPO0VBQUEsT0FBS2pILG9EQUFpQixDQUFDZ0gsYUFBYSxDQUFDQyxPQUFPLENBQUM7QUFBQTtBQUVwRSxJQUFNckgsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUl3SCxhQUFhLEVBQUs7RUFDaEMsSUFBTUMsWUFBWSxHQUNkRCxhQUFhLENBQUMsQ0FBQyxFQUFFRSxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDLEdBQUdILGFBQWEsQ0FBQ3hCLE1BQU0sQ0FBQyxDQUFDO0VBQzNELElBQU00QixTQUFTLEdBQUdKLGFBQWEsQ0FBQ0ssU0FBUyxDQUNyQyxVQUFDbEcsS0FBSztJQUFBLE9BQUtBLEtBQUssS0FBSzhGLFlBQVk7RUFBQSxDQUNyQyxDQUFDO0VBQ0RELGFBQWEsQ0FBQ00sTUFBTSxDQUFDRixTQUFTLEVBQUUsQ0FBQyxDQUFDO0VBQ2xDekgsa0RBQWUsQ0FBQ2lILGFBQWEsQ0FBQ0ssWUFBWSxDQUFDO0FBQy9DLENBQUM7QUFDRCxJQUFNeEgsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBSWUsUUFBUSxFQUFLO0VBQ3JDLElBQU0rRyxNQUFNLEdBQUcsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDO0VBQ3pDLElBQU1DLGlCQUFpQixHQUFHRCxNQUFNLENBQUMsQ0FBQyxFQUFFTCxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDLEdBQUdJLE1BQU0sQ0FBQy9CLE1BQU0sQ0FBQyxDQUFDO0VBQ25FLElBQU1pQyxjQUFjLEdBQUc3SCxvREFBaUIsQ0FBQ0UsTUFBTSxDQUFDLENBQUM7RUFFakQsT0FBTyxJQUFJLEVBQUU7SUFDVCxJQUFNNEgsYUFBYSxHQUNmRCxjQUFjLENBQUMsQ0FBQyxFQUFFUCxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDLEdBQUdNLGNBQWMsQ0FBQ2pDLE1BQU0sQ0FBQyxDQUFDO0lBQzdELElBQ0k1RixvREFBaUIsQ0FBQ21ELGdCQUFnQixDQUM5QnZDLFFBQVEsRUFDUmtILGFBQWEsRUFDYkYsaUJBQWlCLEVBQ2pCNUgsb0RBQ0osQ0FBQyxFQUNIO01BQ0VBLG9EQUFpQixDQUFDRyxVQUFVLENBQ3hCUyxRQUFRLEVBQ1JrSCxhQUFhLEVBQ2JGLGlCQUNKLENBQUM7TUFDRDtJQUNKO0VBQ0o7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q00sSUFBTTlILElBQUksR0FBRyxTQUFQQSxJQUFJQSxDQUFBLEVBQVM7RUFDdEIsSUFBTWlJLFNBQVMsR0FBRztJQUNkbkMsTUFBTSxFQUFFLENBQUM7SUFDVHhCLElBQUksRUFBRSxDQUFDO0lBQ1A4QyxHQUFHLFdBQUFBLElBQUEsRUFBRztNQUNGLElBQUksQ0FBQzlDLElBQUksRUFBRTtJQUNmLENBQUM7SUFDRCtDLE1BQU0sV0FBQUEsT0FBQSxFQUFHO01BQ0wsSUFBSSxJQUFJLENBQUN2QixNQUFNLEtBQUssSUFBSSxDQUFDeEIsSUFBSSxFQUFFLE9BQU8sSUFBSTtNQUUxQyxPQUFPLEtBQUs7SUFDaEI7RUFDSixDQUFDO0VBQ0QsSUFBTTRELFNBQVMsR0FBRztJQUNkcEMsTUFBTSxFQUFFLENBQUM7SUFDVHhCLElBQUksRUFBRSxDQUFDO0lBQ1A4QyxHQUFHLFdBQUFBLElBQUEsRUFBRztNQUNGLElBQUksQ0FBQzlDLElBQUksRUFBRTtJQUNmLENBQUM7SUFDRCtDLE1BQU0sV0FBQUEsT0FBQSxFQUFHO01BQ0wsSUFBSSxJQUFJLENBQUN2QixNQUFNLEtBQUssSUFBSSxDQUFDeEIsSUFBSSxFQUFFLE9BQU8sSUFBSTtNQUUxQyxPQUFPLEtBQUs7SUFDaEI7RUFDSixDQUFDO0VBQ0QsSUFBTTZELE9BQU8sR0FBRztJQUNackMsTUFBTSxFQUFFLENBQUM7SUFDVHhCLElBQUksRUFBRSxDQUFDO0lBQ1A4QyxHQUFHLFdBQUFBLElBQUEsRUFBRztNQUNGLElBQUksQ0FBQzlDLElBQUksRUFBRTtJQUNmLENBQUM7SUFDRCtDLE1BQU0sV0FBQUEsT0FBQSxFQUFHO01BQ0wsSUFBSSxJQUFJLENBQUN2QixNQUFNLEtBQUssSUFBSSxDQUFDeEIsSUFBSSxFQUFFLE9BQU8sSUFBSTtNQUMxQyxPQUFPLEtBQUs7SUFDaEI7RUFDSixDQUFDO0VBQ0QsSUFBTThELFVBQVUsR0FBRztJQUNmdEMsTUFBTSxFQUFFLENBQUM7SUFDVHhCLElBQUksRUFBRSxDQUFDO0lBQ1A4QyxHQUFHLFdBQUFBLElBQUEsRUFBRztNQUNGLElBQUksQ0FBQzlDLElBQUksRUFBRTtJQUNmLENBQUM7SUFDRCtDLE1BQU0sV0FBQUEsT0FBQSxFQUFHO01BQ0wsSUFBSSxJQUFJLENBQUN2QixNQUFNLEtBQUssSUFBSSxDQUFDeEIsSUFBSSxFQUFFLE9BQU8sSUFBSTtNQUUxQyxPQUFPLEtBQUs7SUFDaEI7RUFDSixDQUFDO0VBQ0QsSUFBTStELE9BQU8sR0FBRztJQUNadkMsTUFBTSxFQUFFLENBQUM7SUFDVHhCLElBQUksRUFBRSxDQUFDO0lBQ1A4QyxHQUFHLFdBQUFBLElBQUEsRUFBRztNQUNGLElBQUksQ0FBQzlDLElBQUksRUFBRTtJQUNmLENBQUM7SUFDRCtDLE1BQU0sV0FBQUEsT0FBQSxFQUFHO01BQ0wsSUFBSSxJQUFJLENBQUN2QixNQUFNLEtBQUssSUFBSSxDQUFDeEIsSUFBSSxFQUFFLE9BQU8sSUFBSTtNQUUxQyxPQUFPLEtBQUs7SUFDaEI7RUFDSixDQUFDO0VBRUQsT0FBTztJQUFFMkQsU0FBUyxFQUFUQSxTQUFTO0lBQUVDLFNBQVMsRUFBVEEsU0FBUztJQUFFQyxPQUFPLEVBQVBBLE9BQU87SUFBRUMsVUFBVSxFQUFWQSxVQUFVO0lBQUVDLE9BQU8sRUFBUEE7RUFBUSxDQUFDO0FBQ2pFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlERDtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsS0FBSyxPQUFPLFlBQVksTUFBTSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FB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QUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcbmltcG9ydCB7IFBsYXllciwgQ29tcHV0ZXIsIHBsYWNlQ29tcHV0ZXJTaGlwcyB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZXhwb3J0IGxldCBwbGF5ZXJHYW1lQm9hcmQgPSBHYW1lQm9hcmQoKTtcbmV4cG9ydCBsZXQgY29tcHV0ZXJHYW1lQm9hcmQgPSBHYW1lQm9hcmQoKTtcbmNvbnN0IGFsbFBvc3NpYmxlTW92ZXMgPSBwbGF5ZXJHYW1lQm9hcmQuY29vcmRzKCk7XG5cbmNvbnN0IHBsYWNlU2hpcHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxhY2VTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2Utc2hpcHNcIik7XG4gICAgY29uc3QgZ3JpZCA9IHBsYWNlU2hpcHMucXVlcnlTZWxlY3RvcihcIi5ncmlkXCIpO1xuICAgIGNvbnN0IHNoaXBzID0gcGxhY2VTaGlwcy5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBzID4gIGRpdlwiKTtcbiAgICBjb25zdCBwbGF5ZXJQbGF5R3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJHYW1lQm9hcmRcIik7XG4gICAgY29uc3QgZ3JpZE9mUGxheWVyID0gcGxheWVyUGxheUdyb3VuZC5jaGlsZHJlbjtcbiAgICBsZXQgc2hpcFR5cGUgPSBcIlwiO1xuICAgIGxldCBzdGFydCA9IFwiXCI7XG4gICAgbGV0IGF4aXMgPSBcIlwiO1xuICAgIGxldCBzcXVhcmVOdW0gPSBudWxsO1xuICAgIGxldCBzcXVhcmVOdW1XaGlsZURyYWdnaW5nID0gbnVsbDtcblxuICAgIGZvciAobGV0IGNvb3JkIG9mIHBsYXllckdhbWVCb2FyZC5jb29yZHMoKSkge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS1jb29yZFwiLCBjb29yZCk7XG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT5cbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBzaGlwLmNsYXNzTGlzdC50b2dnbGUoXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgfSlcbiAgICApO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgc2hpcC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2W2RhdGEtbnVtXVwiKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YU51bSA9IGNoaWxkLmdldEF0dHJpYnV0ZShcImRhdGEtbnVtXCIpO1xuICAgICAgICAgICAgICAgIHNoaXBUeXBlID0gc2hpcC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVOdW0gPSBkYXRhTnVtO1xuICAgICAgICAgICAgICAgIGF4aXMgPSBzaGlwLmNsYXNzTGlzdFswXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PlxuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc3F1YXJlTnVtV2hpbGVEcmFnZ2luZyA9IHNxdWFyZU51bTtcbiAgICAgICAgfSlcbiAgICApO1xuICAgIGdyaWQuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZCkgPT5cbiAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSlcbiAgICApO1xuICAgIGdyaWQuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZCkgPT5cbiAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBzdGFydCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmNvb3JkO1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNoaXBUeXBlKTtcbiAgICAgICAgICAgIGlmIChheGlzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IHN0YXJ0WzBdICsgKCtzdGFydC5zbGljZSgxKSAtIHNxdWFyZU51bVdoaWxlRHJhZ2dpbmcpO1xuICAgICAgICAgICAgICAgIGF4aXMgPSBcImhvcml6b250YWxcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxwaGEgPVxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJHYW1lQm9hcmQuYWxwaGFOdW1iZXJpY0NvbnZlcnNpb25bc3RhcnRbMF1dIC1cbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlTnVtV2hpbGVEcmFnZ2luZztcbiAgICAgICAgICAgICAgICBzdGFydCA9XG4gICAgICAgICAgICAgICAgICAgIHBsYXllckdhbWVCb2FyZC5jb252ZXJ0TnVtYmVyVG9BbHBoYShhbHBoYSkgK1xuICAgICAgICAgICAgICAgICAgICBzdGFydC5zbGljZSgxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHBsYXllckdhbWVCb2FyZC5pc1BsYWNlbWVudFZhbGlkKFxuICAgICAgICAgICAgICAgICAgICBzaGlwVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIGF4aXMsXG4gICAgICAgICAgICAgICAgICAgIHBsYXllckdhbWVCb2FyZFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXBzKHNoaXBUeXBlLCBzdGFydCwgYXhpcyk7XG4gICAgICAgICAgICAgICAgcGxhY2VDb21wdXRlclNoaXBzKHNoaXBUeXBlKTtcbiAgICAgICAgICAgICAgICByZW5kZXJTaGlwcyhncmlkLmNoaWxkTm9kZXMpO1xuICAgICAgICAgICAgICAgIHJlbmRlclNoaXBzKGdyaWRPZlBsYXllcik7XG4gICAgICAgICAgICAgICAgc2hpcC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHNoaXApO1xuICAgICAgICAgICAgICAgIGhpZGVTaGlwc1BsYWNlbWVudFBhZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICApO1xufTtcbmNvbnN0IGhpZGVTaGlwc1BsYWNlbWVudFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxhY2VTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2Utc2hpcHNcIik7XG4gICAgY29uc3Qgc2hpcHMgPSBwbGFjZVNoaXBzLnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcHNcIik7XG4gICAgY29uc3QgZ3JpZCA9IHBsYWNlU2hpcHMucXVlcnlTZWxlY3RvcihcIi5ncmlkXCIpO1xuXG4gICAgaWYgKCFzaGlwcy5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICBwbGFjZVNoaXBzLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICB3aGlsZSAoZ3JpZC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBncmlkLnJlbW92ZUNoaWxkKGdyaWQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coY29tcHV0ZXJHYW1lQm9hcmQuY29vcmRzT2ZTaGlwcyk7XG4gICAgfVxufTtcbmNvbnN0IHJlbmRlckdhbWVCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJQbGF5R3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJHYW1lQm9hcmRcIik7XG4gICAgY29uc3QgY29tcHV0ZXJQbGF5R3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlckdhbWVCb2FyZFwiKTtcbiAgICBmb3IgKGxldCBjb29yZCBvZiBwbGF5ZXJHYW1lQm9hcmQuY29vcmRzKCkpIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEtY29vcmRcIiwgY29vcmQpO1xuICAgICAgICBpZiAocGxheWVyR2FtZUJvYXJkLm1vdmVzLmhpdHMuaW5jbHVkZXMoY29vcmQpKSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImEtaGl0XCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllckdhbWVCb2FyZC5tb3Zlcy5taXNzZXMuaW5jbHVkZXMoY29vcmQpKSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImEtbWlzc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBwbGF5ZXJQbGF5R3JvdW5kLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuICAgIGZvciAobGV0IGNvb3JkIG9mIGNvbXB1dGVyR2FtZUJvYXJkLmNvb3JkcygpKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvb3JkXCIsIGNvb3JkKTtcblxuICAgICAgICBpZiAoY29tcHV0ZXJHYW1lQm9hcmQubW92ZXMuaGl0cy5pbmNsdWRlcyhjb29yZCkpIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiYS1oaXRcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoY29tcHV0ZXJHYW1lQm9hcmQubW92ZXMubWlzc2VzLmluY2x1ZGVzKGNvb3JkKSkge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJhLW1pc3NcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29tcHV0ZXJQbGF5R3JvdW5kLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxufTtcbmNvbnN0IHJlbmRlclNoaXBzID0gKHNxdWFyZXMpID0+IHtcbiAgICBmb3IgKGxldCBzaGlwIGluIHBsYXllckdhbWVCb2FyZC5jb29yZHNPZlNoaXBzKSB7XG4gICAgICAgIGZvciAobGV0IHNxdWFyZSBvZiBzcXVhcmVzKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgcGxheWVyR2FtZUJvYXJkLmNvb3Jkc09mU2hpcHNbc2hpcF0uaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5kYXRhc2V0LmNvb3JkXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IHJlbW92ZUV4aXN0aW5nTWFya3MgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyUGxheUdyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyR2FtZUJvYXJkXCIpO1xuICAgIGNvbnN0IGNvbXB1dGVyUGxheUdyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXJHYW1lQm9hcmRcIik7XG4gICAgd2hpbGUgKHBsYXllclBsYXlHcm91bmQuZmlyc3RDaGlsZCB8fCBjb21wdXRlclBsYXlHcm91bmQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwbGF5ZXJQbGF5R3JvdW5kLnJlbW92ZUNoaWxkKHBsYXllclBsYXlHcm91bmQuZmlyc3RDaGlsZCk7XG4gICAgICAgIGNvbXB1dGVyUGxheUdyb3VuZC5yZW1vdmVDaGlsZChjb21wdXRlclBsYXlHcm91bmQuZmlyc3RDaGlsZCk7XG4gICAgfVxufTtcbmNvbnN0IHBsYXlHYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbXB1dGVyUGxheUdyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXJHYW1lQm9hcmRcIik7XG4gICAgY29uc3QgcGxhY2VTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2Utc2hpcHNcIik7XG4gICAgY29uc3QgZ3JpZCA9IHBsYWNlU2hpcHMucXVlcnlTZWxlY3RvcihcIi5ncmlkXCIpO1xuICAgIGNvbnN0IHBsYXllclBsYXlHcm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllckdhbWVCb2FyZFwiKTtcbiAgICBjb25zdCBncmlkT2ZQbGF5ZXIgPSBwbGF5ZXJQbGF5R3JvdW5kLmNoaWxkcmVuO1xuICAgIGNvbnN0IGFubm91bmNlV2lubmVyID0gKHdpbm5lcikgPT4ge1xuICAgICAgICBjb25zdCB3aW5uZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbm5vdW5jZS13aW5uZXIgaDFcIik7XG4gICAgICAgIHdpbm5lclRleHQudGV4dENvbnRlbnQgPSB3aW5uZXI7XG4gICAgICAgIHdpbm5lclRleHQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmNzc1RleHQgPVxuICAgICAgICAgICAgXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCI7XG4gICAgfTtcblxuICAgIGNvbXB1dGVyUGxheUdyb3VuZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5ub2RlTmFtZSA9PT0gXCJESVZcIiAmJlxuICAgICAgICAgICAgIWNvbXB1dGVyR2FtZUJvYXJkLm1vdmVzLmhpdHMuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmRhdGFzZXQuY29vcmRcbiAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgICFjb21wdXRlckdhbWVCb2FyZC5tb3Zlcy5taXNzZXMuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmRhdGFzZXQuY29vcmRcbiAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgICFwbGF5ZXJHYW1lQm9hcmQuYWxsU2hpcHNBcmVTdW5rKCkgJiZcbiAgICAgICAgICAgICFjb21wdXRlckdhbWVCb2FyZC5hbGxTaGlwc0FyZVN1bmsoKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJlbW92ZUV4aXN0aW5nTWFya3MoKTtcbiAgICAgICAgICAgIFBsYXllcihldmVudC50YXJnZXQuZGF0YXNldC5jb29yZCk7XG4gICAgICAgICAgICBDb21wdXRlcihhbGxQb3NzaWJsZU1vdmVzKTtcbiAgICAgICAgICAgIHJlbmRlckdhbWVCb2FyZCgpO1xuICAgICAgICAgICAgcmVuZGVyU2hpcHMoZ3JpZC5jaGlsZE5vZGVzKTtcbiAgICAgICAgICAgIHJlbmRlclNoaXBzKGdyaWRPZlBsYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgcGxheWVyR2FtZUJvYXJkLmFsbFNoaXBzQXJlU3VuaygpIHx8XG4gICAgICAgICAgICBjb21wdXRlckdhbWVCb2FyZC5hbGxTaGlwc0FyZVN1bmsoKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHBsYXllckdhbWVCb2FyZC5hbGxTaGlwc0FyZVN1bmsoKVxuICAgICAgICAgICAgICAgID8gYW5ub3VuY2VXaW5uZXIoXCJDb21wdXRlclwiKVxuICAgICAgICAgICAgICAgIDogYW5ub3VuY2VXaW5uZXIoXCJZb3VcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5jb25zdCByZXN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbm5vdW5jZS13aW5uZXIgYnV0dG9uXCIpO1xuICAgIGNvbnN0IHJlbmRlclNoaXBNb2RlbHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYWNlU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYWNlLXNoaXBzXCIpO1xuICAgICAgICBjb25zdCBtb2RlbFNoaXAgPSBwbGFjZVNoaXBzLnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcHNcIik7XG4gICAgICAgIGZvciAoY29uc3Qgc2hpcCBpbiBwbGF5ZXJHYW1lQm9hcmQuc2hpcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgc2hpcCk7XG4gICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyR2FtZUJvYXJkLnNoaXBzW3NoaXBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1udW1cIiwgaSk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb2RlbFNoaXAuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBsYWNlU2hpcHMuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIH07XG4gICAgcmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByZW1vdmVFeGlzdGluZ01hcmtzKCk7XG4gICAgICAgIHBsYXllckdhbWVCb2FyZCA9IEdhbWVCb2FyZCgpO1xuICAgICAgICBjb21wdXRlckdhbWVCb2FyZCA9IEdhbWVCb2FyZCgpO1xuICAgICAgICByZW5kZXJTaGlwTW9kZWxzKCk7XG4gICAgICAgIHBsYWNlU2hpcHMoKTtcbiAgICAgICAgcmVuZGVyR2FtZUJvYXJkKCk7XG4gICAgICAgIHBsYXlHYW1lKCk7XG4gICAgICAgIHJlc3RhcnRCdG4ucGFyZW50RWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gXCJ2aXNpYmlsaXR5OiBoaWRkZW5cIjtcbiAgICB9KTtcbn07XG5cbnBsYWNlU2hpcHMoKTtcbnJlbmRlckdhbWVCb2FyZCgpO1xucGxheUdhbWUoKTtcbnJlc3RhcnRHYW1lKCk7XG4iLCJpbXBvcnQgeyBjb21wdXRlckdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBjb25zdCBHYW1lQm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgbW92ZXMgPSB7IGhpdHM6IFtdLCBtaXNzZXM6IFtdIH07XG4gICAgY29uc3Qgc2hpcHMgPSBTaGlwKCk7XG4gICAgY29uc3QgY29vcmRzT2ZTaGlwcyA9IHt9O1xuICAgIGNvbnN0IGFscGhhTnVtYmVyaWNDb252ZXJzaW9uID0ge1xuICAgICAgICBBOiAxLFxuICAgICAgICBCOiAyLFxuICAgICAgICBDOiAzLFxuICAgICAgICBEOiA0LFxuICAgICAgICBFOiA1LFxuICAgICAgICBGOiA2LFxuICAgICAgICBHOiA3LFxuICAgICAgICBIOiA4LFxuICAgICAgICBJOiA5LFxuICAgICAgICBKOiAxMCxcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGNvbnZlcnROdW1iZXJUb0FscGhhKG51bSkge1xuICAgICAgICBmb3IgKGxldCBhbHBoYSBpbiBhbHBoYU51bWJlcmljQ29udmVyc2lvbikge1xuICAgICAgICAgICAgaWYgKGFscGhhTnVtYmVyaWNDb252ZXJzaW9uW2FscGhhXSA9PT0gbnVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFscGhhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGNvb3JkcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFsbENvb3JkcyA9IFtdO1xuICAgICAgICBsZXQgYWxwaGEgPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCJdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFscGhhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDExOyBqKyspIHtcbiAgICAgICAgICAgICAgICBhbGxDb29yZHMucHVzaChhbHBoYVtpXSArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFsbENvb3JkcztcbiAgICB9O1xuICAgIGNvbnN0IHBsYWNlU2hpcHMgPSAoc2hpcFR5cGUsIHN0YXJ0Q29vcmQsIGF4aXMpID0+IHtcbiAgICAgICAgY29vcmRzT2ZTaGlwc1tzaGlwVHlwZV0gPSBbc3RhcnRDb29yZF07XG4gICAgICAgIGlmIChzaGlwc1tzaGlwVHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwc1tzaGlwVHlwZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYXhpcyA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRDb29yZCA9IHN0YXJ0Q29vcmRbMF0gKyAoK3N0YXJ0Q29vcmRbMV0gKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRzT2ZTaGlwc1tzaGlwVHlwZV0ucHVzaChzdGFydENvb3JkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGF4aXMgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgICAgICBzdGFydENvb3JkID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnZlcnROdW1iZXJUb0FscGhhKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICthbHBoYU51bWJlcmljQ29udmVyc2lvbltzdGFydENvb3JkWzBdXSArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICkgKyBzdGFydENvb3JkLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgICAgICBjb29yZHNPZlNoaXBzW3NoaXBUeXBlXS5wdXNoKHN0YXJ0Q29vcmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29vcmRzT2ZTaGlwcztcbiAgICB9O1xuICAgIGNvbnN0IGlzUGxhY2VtZW50VmFsaWQgPSAoc2hpcFR5cGUsIHN0YXJ0Q29vcmQsIGF4aXMsIGdhbWVCb2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBhbHBoYSA9IGdhbWVCb2FyZC5hbHBoYU51bWJlcmljQ29udmVyc2lvbltzdGFydENvb3JkWzBdXTtcbiAgICAgICAgY29uc3QgY29vcmRzID0gW3N0YXJ0Q29vcmRdO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChheGlzID09PSBcImhvcml6b250YWxcIiAmJlxuICAgICAgICAgICAgICAgICgrc3RhcnRDb29yZC5zbGljZSgxKSArIHNoaXBzW3NoaXBUeXBlXS5sZW5ndGggPiAxMSB8fFxuICAgICAgICAgICAgICAgICAgICArc3RhcnRDb29yZC5zbGljZSgxKSkpIHx8XG4gICAgICAgICAgICAoYXhpcyA9PT0gXCJ2ZXJ0aWNhbFwiICYmICthbHBoYSArIHNoaXBzW3NoaXBUeXBlXS5sZW5ndGggPiAxMSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXBzW3NoaXBUeXBlXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGF4aXMgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRDb29yZCA9IHN0YXJ0Q29vcmRbMF0gKyAoK3N0YXJ0Q29vcmRbMV0gKyAxKTtcbiAgICAgICAgICAgICAgICBjb29yZHMucHVzaChzdGFydENvb3JkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRDb29yZCA9XG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnROdW1iZXJUb0FscGhhKFxuICAgICAgICAgICAgICAgICAgICAgICAgK2FscGhhTnVtYmVyaWNDb252ZXJzaW9uW3N0YXJ0Q29vcmRbMF1dICsgMVxuICAgICAgICAgICAgICAgICAgICApICsgc3RhcnRDb29yZC5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICBjb29yZHMucHVzaChzdGFydENvb3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgY29vcmQgb2YgY29vcmRzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNoaXAgaW4gY29vcmRzT2ZTaGlwcykge1xuICAgICAgICAgICAgICAgIGlmIChjb29yZHNPZlNoaXBzW3NoaXBdLmluY2x1ZGVzKGNvb3JkKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGF0Q29vcmQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBpbiBjb29yZHNPZlNoaXBzKSB7XG4gICAgICAgICAgICBpZiAoY29vcmRzT2ZTaGlwc1tzaGlwXS5pbmNsdWRlcyhhdENvb3JkKSkge1xuICAgICAgICAgICAgICAgIHNoaXBzW3NoaXBdLmhpdCgpO1xuICAgICAgICAgICAgICAgIG1vdmVzLmhpdHMucHVzaChhdENvb3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1vdmVzLmhpdHMuaW5jbHVkZXMoYXRDb29yZCkpIHtcbiAgICAgICAgICAgIG1vdmVzLm1pc3Nlcy5wdXNoKGF0Q29vcmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1vdmVzO1xuICAgIH07XG4gICAgY29uc3QgYWxsU2hpcHNBcmVTdW5rID0gKCkgPT4ge1xuICAgICAgICBsZXQgYWxsU2hpcHNBcmVTdW5rID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBpbiBzaGlwcykge1xuICAgICAgICAgICAgaWYgKHNoaXBzW3NoaXBdLmlzU3VuaygpID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYWxsU2hpcHNBcmVTdW5rID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbFNoaXBzQXJlU3VuaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWxsU2hpcHNBcmVTdW5rO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhbHBoYU51bWJlcmljQ29udmVyc2lvbixcbiAgICAgICAgY29udmVydE51bWJlclRvQWxwaGEsXG4gICAgICAgIGNvb3JkcyxcbiAgICAgICAgc2hpcHMsXG4gICAgICAgIG1vdmVzLFxuICAgICAgICBjb29yZHNPZlNoaXBzLFxuICAgICAgICBwbGFjZVNoaXBzLFxuICAgICAgICBpc1BsYWNlbWVudFZhbGlkLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBhbGxTaGlwc0FyZVN1bmssXG4gICAgfTtcbn07XG4iLCJpbXBvcnQgeyBwbGF5ZXJHYW1lQm9hcmQsIGNvbXB1dGVyR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5cbmNvbnN0IFBsYXllciA9IChhdENvb3JkKSA9PiBjb21wdXRlckdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGF0Q29vcmQpO1xuXG5jb25zdCBDb21wdXRlciA9IChwb3NzaWJsZU1vdmVzKSA9PiB7XG4gICAgY29uc3QgY29tcHV0ZXJNb3ZlID1cbiAgICAgICAgcG9zc2libGVNb3Zlc1t+fihNYXRoLnJhbmRvbSgpICogcG9zc2libGVNb3Zlcy5sZW5ndGgpXTtcbiAgICBjb25zdCBtb3ZlSW5kZXggPSBwb3NzaWJsZU1vdmVzLmZpbmRJbmRleChcbiAgICAgICAgKGNvb3JkKSA9PiBjb29yZCA9PT0gY29tcHV0ZXJNb3ZlXG4gICAgKTtcbiAgICBwb3NzaWJsZU1vdmVzLnNwbGljZShtb3ZlSW5kZXgsIDEpO1xuICAgIHBsYXllckdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGNvbXB1dGVyTW92ZSk7XG59O1xuY29uc3QgcGxhY2VDb21wdXRlclNoaXBzID0gKHNoaXBUeXBlKSA9PiB7XG4gICAgY29uc3QgYXhpc2VzID0gW1widmVydGljYWxcIiwgXCJob3Jpem9udGFsXCJdO1xuICAgIGNvbnN0IHNoaXBQbGFjZW1lbnRBeGlzID0gYXhpc2VzW35+KE1hdGgucmFuZG9tKCkgKiBheGlzZXMubGVuZ3RoKV07XG4gICAgY29uc3QgcG9zc2libGVDb29yZHMgPSBjb21wdXRlckdhbWVCb2FyZC5jb29yZHMoKTtcblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0aW5nQ29vcmQgPVxuICAgICAgICAgICAgcG9zc2libGVDb29yZHNbfn4oTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlQ29vcmRzLmxlbmd0aCldO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjb21wdXRlckdhbWVCb2FyZC5pc1BsYWNlbWVudFZhbGlkKFxuICAgICAgICAgICAgICAgIHNoaXBUeXBlLFxuICAgICAgICAgICAgICAgIHN0YXJ0aW5nQ29vcmQsXG4gICAgICAgICAgICAgICAgc2hpcFBsYWNlbWVudEF4aXMsXG4gICAgICAgICAgICAgICAgY29tcHV0ZXJHYW1lQm9hcmRcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb21wdXRlckdhbWVCb2FyZC5wbGFjZVNoaXBzKFxuICAgICAgICAgICAgICAgIHNoaXBUeXBlLFxuICAgICAgICAgICAgICAgIHN0YXJ0aW5nQ29vcmQsXG4gICAgICAgICAgICAgICAgc2hpcFBsYWNlbWVudEF4aXNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgeyBDb21wdXRlciwgUGxheWVyLCBwbGFjZUNvbXB1dGVyU2hpcHMgfTtcbiIsImV4cG9ydCBjb25zdCBTaGlwID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IHtcbiAgICAgICAgbGVuZ3RoOiAyLFxuICAgICAgICBoaXRzOiAwLFxuICAgICAgICBoaXQoKSB7XG4gICAgICAgICAgICB0aGlzLmhpdHMrKztcbiAgICAgICAgfSxcbiAgICAgICAgaXNTdW5rKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLmhpdHMpIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCBzdWJtYXJpbmUgPSB7XG4gICAgICAgIGxlbmd0aDogMyxcbiAgICAgICAgaGl0czogMCxcbiAgICAgICAgaGl0KCkge1xuICAgICAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRzKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgY3J1aXNlciA9IHtcbiAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICBoaXRzOiAwLFxuICAgICAgICBoaXQoKSB7XG4gICAgICAgICAgICB0aGlzLmhpdHMrKztcbiAgICAgICAgfSxcbiAgICAgICAgaXNTdW5rKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLmhpdHMpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IHtcbiAgICAgICAgbGVuZ3RoOiA0LFxuICAgICAgICBoaXRzOiAwLFxuICAgICAgICBoaXQoKSB7XG4gICAgICAgICAgICB0aGlzLmhpdHMrKztcbiAgICAgICAgfSxcbiAgICAgICAgaXNTdW5rKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLmhpdHMpIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCBjYXJyaWVyID0ge1xuICAgICAgICBsZW5ndGg6IDUsXG4gICAgICAgIGhpdHM6IDAsXG4gICAgICAgIGhpdCgpIHtcbiAgICAgICAgICAgIHRoaXMuaGl0cysrO1xuICAgICAgICB9LFxuICAgICAgICBpc1N1bmsoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IHRoaXMuaGl0cykgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZGVzdHJveWVyLCBzdWJtYXJpbmUsIGNydWlzZXIsIGJhdHRsZXNoaXAsIGNhcnJpZXIgfTtcbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gICAgcGFkZGluZzogMCAxNTBweDtcbiAgICBnYXA6IDUwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cbmgxIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG59XG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTIwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGxheWVyR2FtZUJvYXJkLFxuLmNvbXB1dGVyR2FtZUJvYXJkLFxuLmdyaWQge1xuICAgIGhlaWdodDogMzMwcHg7XG4gICAgd2lkdGg6IDMzMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZDogMWZyIC8gcmVwZWF0KDEwLCAxZnIpO1xufVxuLnBsYXllckdhbWVCb2FyZCA+IGRpdixcbi5jb21wdXRlckdhbWVCb2FyZCA+IGRpdiB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgICBoZWlnaHQ6IDMzcHg7XG4gICAgd2lkdGg6IDMzcHg7XG4gICAgbWFyZ2luOiAwO1xufVxuLnBsYXllckdhbWVCb2FyZCA+IGRpdjpudGgtY2hpbGQoMTBuICsgMSksXG4uY29tcHV0ZXJHYW1lQm9hcmQgPiBkaXY6bnRoLWNoaWxkKDEwbiArIDEpLFxuLmdyaWQgPiBkaXY6bnRoLWNoaWxkKDEwbiArIDEpIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XG59XG4ucGxheWVyR2FtZUJvYXJkID4gZGl2Om50aC1jaGlsZCgtbiArIDEwKSxcbi5jb21wdXRlckdhbWVCb2FyZCA+IGRpdjpudGgtY2hpbGQoLW4gKyAxMCksXG4uZ3JpZCA+IGRpdjpudGgtY2hpbGQoLW4gKyAxMCkge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xufVxuLnBsYXllcl9yb3dzLFxuLmNvbXB1dGVyX3Jvd3MsXG4ucGxheWVyX2NvbHVtbnMsXG4uY29tcHV0ZXJfY29sdW1ucyxcbi5ncmlkX3Jvd3MsXG4uZ3JpZF9jb2x1bW5zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG59XG4ucGxheWVyX3Jvd3Mge1xuICAgIGxlZnQ6IDEwNXB4O1xuICAgIHRvcDogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTdweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wbGF5ZXJfY29sdW1ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0b3A6IC0yNXB4O1xuICAgIGxlZnQ6IDE0OHB4O1xuICAgIGdhcDogMjZweDtcbn1cbi5jb21wdXRlcl9yb3dzIHtcbiAgICBsZWZ0OiA1NTVweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDE3cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29tcHV0ZXJfY29sdW1ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0b3A6IC0yNXB4O1xuICAgIGxlZnQ6IDU5N3B4O1xuICAgIGdhcDogMjZweDtcbn1cblxuLmNvbnRhaW5lciBkaXYuYS1taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbi5jb250YWluZXIgZGl2LmEtaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4uYW5ub3VuY2Utd2lubmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA4MTQ4MztcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGdhcDogMzBweDtcbiAgICB6LWluZGV4OiAxMDA7XG59XG4uYW5ub3VuY2Utd2lubmVyIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYW5ub3VuY2Utd2lubmVyIGgyIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5hbm5vdW5jZS13aW5uZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICAgIHdpZHRoOiBtaW4oMTVjaCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uYW5ub3VuY2Utd2lubmVyIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTNweCAxMDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbi5wbGFjZS1zaGlwcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICAvKiB2aXNpYmlsaXR5OiBoaWRkZW47ICovXG59XG4ucGxhY2Utc2hpcHMgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMDBweDtcbiAgICBhbGlnbi1pdGVtczogbm9ybWFsO1xufVxuLmdyaWQgPiBkaXYge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gICAgaGVpZ2h0OiAzM3B4O1xuICAgIHdpZHRoOiAzM3B4O1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmdyaWQgPiBkaXY6bnRoLWNoaWxkKDEwbiArIDEpIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5ncmlkID4gZGl2Om50aC1jaGlsZCgtbiArIDEwKSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5zaGlwcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbn1cbi5zaGlwcyA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi52ZXJ0aWNhbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zaGlwcyA+IGRpdiA+IGRpdiB7XG4gICAgaGVpZ2h0OiAzM3B4O1xuICAgIHdpZHRoOiAzM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4ucGxhY2Utc2hpcHMgaDEge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucGxhY2Utc2hpcHMgLmRlc2NyaXB0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgd2lkdGg6IDQwJTtcbn1cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBjaXJjbGU7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG59XG4ucGxhY2Utc2hpcHMgaDIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXNpemU6IDEuNTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uc2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cbi5ncmlkX3Jvd3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBsZWZ0OiAzMDBweDtcbiAgICB0b3A6IDI4N3B4O1xuICAgIGdhcDogMTdweDtcbn1cbi5ncmlkX2NvbHVtbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGVmdDogMzMzcHg7XG4gICAgdG9wOiAyNTdweDtcbiAgICBnYXA6IDI2cHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCw0Q0FBNEM7QUFDaEQ7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7OztJQUdJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjtBQUNBOztJQUVJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0FBQ2I7QUFDQTs7O0lBR0ksMkJBQTJCO0FBQy9CO0FBQ0E7OztJQUdJLDBCQUEwQjtBQUM5QjtBQUNBOzs7Ozs7SUFNSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULGFBQWE7SUFDYixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsU0FBUztBQUNiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULGFBQWE7SUFDYixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsNENBQTRDO0lBQzVDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7SUFDVCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgcGFkZGluZzogMCAxNTBweDtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIFRpbWVzLCBzZXJpZjtcXG59XFxuaDEge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG59XFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wbGF5ZXJHYW1lQm9hcmQsXFxuLmNvbXB1dGVyR2FtZUJvYXJkLFxcbi5ncmlkIHtcXG4gICAgaGVpZ2h0OiAzMzBweDtcXG4gICAgd2lkdGg6IDMzMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiAxZnIgLyByZXBlYXQoMTAsIDFmcik7XFxufVxcbi5wbGF5ZXJHYW1lQm9hcmQgPiBkaXYsXFxuLmNvbXB1dGVyR2FtZUJvYXJkID4gZGl2IHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XFxuICAgIGhlaWdodDogMzNweDtcXG4gICAgd2lkdGg6IDMzcHg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLnBsYXllckdhbWVCb2FyZCA+IGRpdjpudGgtY2hpbGQoMTBuICsgMSksXFxuLmNvbXB1dGVyR2FtZUJvYXJkID4gZGl2Om50aC1jaGlsZCgxMG4gKyAxKSxcXG4uZ3JpZCA+IGRpdjpudGgtY2hpbGQoMTBuICsgMSkge1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XFxufVxcbi5wbGF5ZXJHYW1lQm9hcmQgPiBkaXY6bnRoLWNoaWxkKC1uICsgMTApLFxcbi5jb21wdXRlckdhbWVCb2FyZCA+IGRpdjpudGgtY2hpbGQoLW4gKyAxMCksXFxuLmdyaWQgPiBkaXY6bnRoLWNoaWxkKC1uICsgMTApIHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XFxufVxcbi5wbGF5ZXJfcm93cyxcXG4uY29tcHV0ZXJfcm93cyxcXG4ucGxheWVyX2NvbHVtbnMsXFxuLmNvbXB1dGVyX2NvbHVtbnMsXFxuLmdyaWRfcm93cyxcXG4uZ3JpZF9jb2x1bW5zIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuLnBsYXllcl9yb3dzIHtcXG4gICAgbGVmdDogMTA1cHg7XFxuICAgIHRvcDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxN3B4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5wbGF5ZXJfY29sdW1ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRvcDogLTI1cHg7XFxuICAgIGxlZnQ6IDE0OHB4O1xcbiAgICBnYXA6IDI2cHg7XFxufVxcbi5jb21wdXRlcl9yb3dzIHtcXG4gICAgbGVmdDogNTU1cHg7XFxuICAgIHRvcDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxN3B4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jb21wdXRlcl9jb2x1bW5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdG9wOiAtMjVweDtcXG4gICAgbGVmdDogNTk3cHg7XFxuICAgIGdhcDogMjZweDtcXG59XFxuXFxuLmNvbnRhaW5lciBkaXYuYS1taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcbi5jb250YWluZXIgZGl2LmEtaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG4uYW5ub3VuY2Utd2lubmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA4MTQ4MztcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICB6LWluZGV4OiAxMDA7XFxufVxcbi5hbm5vdW5jZS13aW5uZXIgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5hbm5vdW5jZS13aW5uZXIgaDIge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5hbm5vdW5jZS13aW5uZXIgaDEge1xcbiAgICBmb250LXNpemU6IDZyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgVGltZXMsIHNlcmlmO1xcbiAgICB3aWR0aDogbWluKDE1Y2gpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5hbm5vdW5jZS13aW5uZXIgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMTNweCAxMDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG4ucGxhY2Utc2hpcHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIC8qIHZpc2liaWxpdHk6IGhpZGRlbjsgKi9cXG59XFxuLnBsYWNlLXNoaXBzID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMDBweDtcXG4gICAgYWxpZ24taXRlbXM6IG5vcm1hbDtcXG59XFxuLmdyaWQgPiBkaXYge1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcXG4gICAgaGVpZ2h0OiAzM3B4O1xcbiAgICB3aWR0aDogMzNweDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZ3JpZCA+IGRpdjpudGgtY2hpbGQoMTBuICsgMSkge1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XFxufVxcblxcbi5ncmlkID4gZGl2Om50aC1jaGlsZCgtbiArIDEwKSB7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4uc2hpcHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG4uc2hpcHMgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udmVydGljYWwge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uc2hpcHMgPiBkaXYgPiBkaXYge1xcbiAgICBoZWlnaHQ6IDMzcHg7XFxuICAgIHdpZHRoOiAzM3B4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuLnBsYWNlLXNoaXBzIGgxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLnBsYWNlLXNoaXBzIC5kZXNjcmlwdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgd2lkdGg6IDQwJTtcXG59XFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBjaXJjbGU7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcbi5wbGFjZS1zaGlwcyBoMiB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIGZvbnQtc2l6ZTogMS41O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXG59XFxuLmdyaWRfcm93cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGxlZnQ6IDMwMHB4O1xcbiAgICB0b3A6IDI4N3B4O1xcbiAgICBnYXA6IDE3cHg7XFxufVxcbi5ncmlkX2NvbHVtbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBsZWZ0OiAzMzNweDtcXG4gICAgdG9wOiAyNTdweDtcXG4gICAgZ2FwOiAyNnB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZ2FtZS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJHYW1lQm9hcmQiLCJQbGF5ZXIiLCJDb21wdXRlciIsInBsYWNlQ29tcHV0ZXJTaGlwcyIsIlNoaXAiLCJwbGF5ZXJHYW1lQm9hcmQiLCJjb21wdXRlckdhbWVCb2FyZCIsImFsbFBvc3NpYmxlTW92ZXMiLCJjb29yZHMiLCJwbGFjZVNoaXBzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ3JpZCIsInNoaXBzIiwicXVlcnlTZWxlY3RvckFsbCIsInBsYXllclBsYXlHcm91bmQiLCJncmlkT2ZQbGF5ZXIiLCJjaGlsZHJlbiIsInNoaXBUeXBlIiwic3RhcnQiLCJheGlzIiwic3F1YXJlTnVtIiwic3F1YXJlTnVtV2hpbGVEcmFnZ2luZyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJjb29yZCIsInZhbHVlIiwic3F1YXJlIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiZXJyIiwiZSIsImYiLCJmb3JFYWNoIiwic2hpcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNoaWxkIiwiZGF0YU51bSIsImdldEF0dHJpYnV0ZSIsImNoaWxkTm9kZXMiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImRhdGFzZXQiLCJnZXRFbGVtZW50QnlJZCIsInVuZGVmaW5lZCIsInNsaWNlIiwiYWxwaGEiLCJhbHBoYU51bWJlcmljQ29udmVyc2lvbiIsImNvbnZlcnROdW1iZXJUb0FscGhhIiwiaXNQbGFjZW1lbnRWYWxpZCIsInJlbmRlclNoaXBzIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwiaGlkZVNoaXBzUGxhY2VtZW50UGFnZSIsImZpcnN0RWxlbWVudENoaWxkIiwic3R5bGUiLCJ2aXNpYmlsaXR5IiwiZmlyc3RDaGlsZCIsImNvbnNvbGUiLCJsb2ciLCJjb29yZHNPZlNoaXBzIiwicmVuZGVyR2FtZUJvYXJkIiwiY29tcHV0ZXJQbGF5R3JvdW5kIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIm1vdmVzIiwiaGl0cyIsImluY2x1ZGVzIiwiYWRkIiwibWlzc2VzIiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsInNxdWFyZXMiLCJfaXRlcmF0b3I0IiwiX3N0ZXA0IiwicmVtb3ZlRXhpc3RpbmdNYXJrcyIsInBsYXlHYW1lIiwiYW5ub3VuY2VXaW5uZXIiLCJ3aW5uZXIiLCJ3aW5uZXJUZXh0IiwidGV4dENvbnRlbnQiLCJjc3NUZXh0Iiwibm9kZU5hbWUiLCJhbGxTaGlwc0FyZVN1bmsiLCJyZXN0YXJ0R2FtZSIsInJlc3RhcnRCdG4iLCJyZW5kZXJTaGlwTW9kZWxzIiwibW9kZWxTaGlwIiwiY29udGFpbmVyIiwiaSIsImxlbmd0aCIsImRpdiIsIkEiLCJCIiwiQyIsIkQiLCJFIiwiRiIsIkciLCJIIiwiSSIsIkoiLCJudW0iLCJhbGxDb29yZHMiLCJqIiwicHVzaCIsInN0YXJ0Q29vcmQiLCJnYW1lQm9hcmQiLCJfaSIsIl9jb29yZHMiLCJyZWNlaXZlQXR0YWNrIiwiYXRDb29yZCIsImhpdCIsImlzU3VuayIsInBvc3NpYmxlTW92ZXMiLCJjb21wdXRlck1vdmUiLCJNYXRoIiwicmFuZG9tIiwibW92ZUluZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwiYXhpc2VzIiwic2hpcFBsYWNlbWVudEF4aXMiLCJwb3NzaWJsZUNvb3JkcyIsInN0YXJ0aW5nQ29vcmQiLCJkZXN0cm95ZXIiLCJzdWJtYXJpbmUiLCJjcnVpc2VyIiwiYmF0dGxlc2hpcCIsImNhcnJpZXIiXSwic291cmNlUm9vdCI6IiJ9