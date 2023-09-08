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
var allPossibleCoords = computerGameBoard.coords();
var placePlayerShips = function placePlayerShips() {
  var placeShips = document.querySelector(".place-ships");
  var grid = placeShips.querySelector(".grid");
  var ships = placeShips.querySelectorAll(".ships >  div");
  var playerPlayGround = document.querySelector(".playerGameBoard");
  var gridOfPlayer = playerPlayGround.children;
  var shipType = "";
  var start = "";
  var axis = "";
  var squareNum = null;
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
      child.addEventListener("mouseover", function (event) {
        event.preventDefault();
        var dataNum = child.getAttribute("data-num");
        shipType = ship.getAttribute("id");
        squareNum = dataNum;
        axis = ship.classList[0];
      });
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
        start = start[0] + (+start.slice(1) - squareNum);
        axis = "horizontal";
      } else {
        var alpha = playerGameBoard.alphaNumbericConversion[start[0]] - squareNum;
        start = playerGameBoard.convertNumberToAlpha(alpha) + start.slice(1);
      }
      playerGameBoard.placeShips(shipType, start, axis);
      (0,_player__WEBPACK_IMPORTED_MODULE_1__.placeComputerShips)(shipType, allPossibleCoords);
      // console.log({ shipType, start, axis });
      renderShips(grid.childNodes);
      renderShips(gridOfPlayer);
      ship.parentElement.removeChild(ship);
      hideShipsPlacementPage();
    });
  });
};
var hideShipsPlacementPage = function hideShipsPlacementPage() {
  var ships = document.querySelector(".ships");
  var placeShips = document.querySelector(".place-ships");
  if (!ships.firstElementChild) {
    placeShips.style.cssText = "visibility: hidden";
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
  var announceWinner = function announceWinner(winner) {
    var winnerText = document.querySelector(".announce-winner h1");
    winnerText.textContent = winner;
    winnerText.parentElement.style.cssText = "visibility: visible";
  };
  computerPlayGround.addEventListener("click", function (event) {
    if (event.target.nodeName === "DIV" && !computerGameBoard.moves.hits.includes(event.target.dataset.coord) && !computerGameBoard.moves.misses.includes(event.target.dataset.coord) && !playerGameBoard.allShipsAreSunk() && !computerGameBoard.allShipsAreSunk()) {
      removeExistingMarks();
      (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)(event.target.dataset.coord);
      (0,_player__WEBPACK_IMPORTED_MODULE_1__.Computer)(allPossibleMoves);
      renderGameBoard();
      renderShips();
    }
    if (playerGameBoard.allShipsAreSunk() || computerGameBoard.allShipsAreSunk()) {
      playerGameBoard.allShipsAreSunk() ? announceWinner("Computer") : announceWinner("You");
    }
  });
};
var restartGame = function restartGame() {
  var restartBtn = document.querySelector(".announce-winner button");
  restartBtn.addEventListener("click", function () {
    removeExistingMarks();
    playerGameBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.GameBoard)();
    computerGameBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.GameBoard)();
    renderGameBoard();
    renderShips();
    playGame();
    restartBtn.parentElement.style.cssText = "visibility: hidden";
  });
};
placePlayerShips();
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
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");

var GameBoard = function GameBoard() {
  var moves = {
    hits: [],
    misses: []
  };
  var ships = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)();
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
          startCoord = startCoord[0] + (Number.parseInt(startCoord[1]) + 1);
          coordsOfShips[shipType].push(startCoord);
        } else if (axis === "vertical") {
          startCoord = convertNumberToAlpha(Number.parseInt(alphaNumbericConversion[startCoord[0]] + 1)) + startCoord.slice(1);
          coordsOfShips[shipType].push(startCoord);
        }
      }
    }
    return coordsOfShips;
  };
  var receiveAttack = function receiveAttack(atCoord) {
    var positionOfShips = placeShips();
    for (var ship in positionOfShips) {
      if (positionOfShips[ship].includes(atCoord)) {
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
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


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
var placeComputerShips = function placeComputerShips(shipType, possibleCoords) {
  for (var ship in _game__WEBPACK_IMPORTED_MODULE_0__.computerGameBoard.coordsOfShips) {
    var _iterator = _createForOfIteratorHelper(_game__WEBPACK_IMPORTED_MODULE_0__.computerGameBoard.coordsOfShips[ship]),
      _step;
    try {
      var _loop = function _loop() {
        var coord = _step.value;
        if (possibleCoords.includes(coord)) {
          var coordIndex = possibleCoords.findIndex(function (item) {
            return item === coord;
          });
          possibleCoords.splice(coordIndex, 1);
        }
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  var axises = ["vertical", "horizontal"];
  var shipPlacementAxis = axises[~~(Math.random() * axises.length)];
  var startingCoord = possibleCoords[~~(Math.random() * possibleCoords.length)];
  _game__WEBPACK_IMPORTED_MODULE_0__.computerGameBoard.placeShips(shipType, startingCoord, shipPlacementAxis);
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
.computer_columns {
    position: absolute;
    font-size: 0.8rem;
}
.player_rows {
    left: 105px;
    top: 10px;
    display: flex;
    gap: 18px;
    flex-direction: column;
    text-align: center;
}
.player_columns {
    display: flex;
    top: -25px;
    left: 148px;
    gap: 25px;
}
.computer_rows {
    left: 555px;
    top: 10px;
    display: flex;
    gap: 18px;
    flex-direction: column;
    text-align: center;
}
.computer_columns {
    display: flex;
    top: -25px;
    left: 597px;
    gap: 25px;
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
.place-ships h2 {
    margin-top: 10px;
    margin-bottom: 40px;
    font-size: 1.5;
}
.ship {
    background-color: red !important;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,SAAS;AACb;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,UAAU;IACV,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;;;IAGI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,2BAA2B;AAC/B;AACA;;IAEI,4BAA4B;IAC5B,6BAA6B;IAC7B,YAAY;IACZ,WAAW;IACX,SAAS;AACb;AACA;;;IAGI,2BAA2B;AAC/B;AACA;;;IAGI,0BAA0B;AAC9B;AACA;;;;IAII,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,SAAS;IACT,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,UAAU;IACV,WAAW;IACX,SAAS;AACb;AACA;IACI,WAAW;IACX,SAAS;IACT,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,UAAU;IACV,WAAW;IACX,SAAS;AACb;;AAEA;IACI,uBAAuB;AAC3B;AACA;IACI,qBAAqB;AACzB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,2BAA2B;IAC3B,2BAA2B;IAC3B,WAAW;IACX,YAAY;IACZ,WAAW;IACX,SAAS;AACb;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,4CAA4C;IAC5C,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,YAAY;IACZ,WAAW;AACf;AACA;IACI,aAAa;IACb,UAAU;IACV,mBAAmB;AACvB;AACA;IACI,4BAA4B;IAC5B,6BAA6B;IAC7B,YAAY;IACZ,WAAW;IACX,SAAS;AACb;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,YAAY;AAChB;AACA;IACI,aAAa;AACjB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,uBAAuB;AAC3B;AACA;IACI,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;AAClB;AACA;IACI,gCAAgC;AACpC","sourcesContent":[":root {\n    box-sizing: border-box;\n}\nbody {\n    display: flex;\n    flex-flow: column wrap;\n    padding: 0 150px;\n    gap: 50px;\n}\nh1 {\n    font-size: 2.5rem;\n    text-align: center;\n    font-family: cursive;\n}\n.container {\n    display: flex;\n    gap: 120px;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n.playerGameBoard,\n.computerGameBoard,\n.grid {\n    height: 330px;\n    width: 330px;\n    display: grid;\n    grid: 1fr / repeat(10, 1fr);\n}\n.playerGameBoard > div,\n.computerGameBoard > div {\n    border-right: 1px solid gray;\n    border-bottom: 1px solid gray;\n    height: 33px;\n    width: 33px;\n    margin: 0;\n}\n.playerGameBoard > div:nth-child(10n + 1),\n.computerGameBoard > div:nth-child(10n + 1),\n.grid > div:nth-child(10n + 1) {\n    border-left: 1px solid gray;\n}\n.playerGameBoard > div:nth-child(-n + 10),\n.computerGameBoard > div:nth-child(-n + 10),\n.grid > div:nth-child(-n + 10) {\n    border-top: 1px solid gray;\n}\n.player_rows,\n.computer_rows,\n.player_columns,\n.computer_columns {\n    position: absolute;\n    font-size: 0.8rem;\n}\n.player_rows {\n    left: 105px;\n    top: 10px;\n    display: flex;\n    gap: 18px;\n    flex-direction: column;\n    text-align: center;\n}\n.player_columns {\n    display: flex;\n    top: -25px;\n    left: 148px;\n    gap: 25px;\n}\n.computer_rows {\n    left: 555px;\n    top: 10px;\n    display: flex;\n    gap: 18px;\n    flex-direction: column;\n    text-align: center;\n}\n.computer_columns {\n    display: flex;\n    top: -25px;\n    left: 597px;\n    gap: 25px;\n}\n\n.container div.a-miss {\n    background-color: green;\n}\n.container div.a-hit {\n    background-color: red;\n}\n.announce-winner {\n    position: absolute;\n    visibility: hidden;\n    top: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #00081483;\n    backdrop-filter: blur(10px);\n    width: 100%;\n    height: 100%;\n    color: #fff;\n    gap: 30px;\n}\n.announce-winner div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.announce-winner h2 {\n    font-size: 3rem;\n    margin-bottom: 0;\n}\n.announce-winner h1 {\n    font-size: 6rem;\n    font-family: \"Times New Roman\", Times, serif;\n    width: min(15ch);\n    text-align: center;\n    margin-top: 10px;\n}\n.announce-winner button {\n    padding: 13px 100px;\n    cursor: pointer;\n    font-size: 1.5rem;\n    font-weight: 500;\n    border-radius: 15px;\n    border: none;\n}\n.place-ships {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-color: #fff;\n    z-index: 100;\n    color: #000;\n}\n.place-ships > div {\n    display: flex;\n    gap: 100px;\n    align-items: normal;\n}\n.grid > div {\n    border-right: 1px solid gray;\n    border-bottom: 1px solid gray;\n    height: 33px;\n    width: 33px;\n    margin: 0;\n}\n\n.grid > div:nth-child(10n + 1) {\n    border-left: 1px solid gray;\n}\n\n.grid > div:nth-child(-n + 10) {\n    border-top: 1px solid gray;\n}\n\n.ships {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    width: 300px;\n}\n.ships > div {\n    display: flex;\n}\n.vertical {\n    flex-direction: column;\n}\n.ships > div > div {\n    height: 33px;\n    width: 33px;\n    border: 1px solid #fff;\n    background-color: black;\n}\n.place-ships h1 {\n    margin-bottom: 10px;\n}\n.place-ships h2 {\n    margin-top: 10px;\n    margin-bottom: 40px;\n    font-size: 1.5;\n}\n.ship {\n    background-color: red !important;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLE9BQU8sWUFBWSxNQUFNLE9BQU8sWUFBWSxNQUFNLFFBQVEsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFB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YjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5pbXBvcnQgeyBQbGF5ZXIsIENvbXB1dGVyLCBwbGFjZUNvbXB1dGVyU2hpcHMgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmV4cG9ydCBsZXQgcGxheWVyR2FtZUJvYXJkID0gR2FtZUJvYXJkKCk7XG5leHBvcnQgbGV0IGNvbXB1dGVyR2FtZUJvYXJkID0gR2FtZUJvYXJkKCk7XG5jb25zdCBhbGxQb3NzaWJsZU1vdmVzID0gcGxheWVyR2FtZUJvYXJkLmNvb3JkcygpO1xuY29uc3QgYWxsUG9zc2libGVDb29yZHMgPSBjb21wdXRlckdhbWVCb2FyZC5jb29yZHMoKTtcblxuY29uc3QgcGxhY2VQbGF5ZXJTaGlwcyA9ICgpID0+IHtcbiAgICBjb25zdCBwbGFjZVNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGFjZS1zaGlwc1wiKTtcbiAgICBjb25zdCBncmlkID0gcGxhY2VTaGlwcy5xdWVyeVNlbGVjdG9yKFwiLmdyaWRcIik7XG4gICAgY29uc3Qgc2hpcHMgPSBwbGFjZVNoaXBzLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcHMgPiAgZGl2XCIpO1xuICAgIGNvbnN0IHBsYXllclBsYXlHcm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllckdhbWVCb2FyZFwiKTtcbiAgICBjb25zdCBncmlkT2ZQbGF5ZXIgPSBwbGF5ZXJQbGF5R3JvdW5kLmNoaWxkcmVuO1xuICAgIGxldCBzaGlwVHlwZSA9IFwiXCI7XG4gICAgbGV0IHN0YXJ0ID0gXCJcIjtcbiAgICBsZXQgYXhpcyA9IFwiXCI7XG4gICAgbGV0IHNxdWFyZU51bSA9IG51bGw7XG5cbiAgICBmb3IgKGxldCBjb29yZCBvZiBwbGF5ZXJHYW1lQm9hcmQuY29vcmRzKCkpIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEtY29vcmRcIiwgY29vcmQpO1xuICAgICAgICBncmlkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+XG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QudG9nZ2xlKFwidmVydGljYWxcIik7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIHNoaXAucXVlcnlTZWxlY3RvckFsbChcImRpdltkYXRhLW51bV1cIikuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhTnVtID0gY2hpbGQuZ2V0QXR0cmlidXRlKFwiZGF0YS1udW1cIik7XG4gICAgICAgICAgICAgICAgc2hpcFR5cGUgPSBzaGlwLmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZU51bSA9IGRhdGFOdW07XG4gICAgICAgICAgICAgICAgYXhpcyA9IHNoaXAuY2xhc3NMaXN0WzBdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGdyaWQuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZCkgPT5cbiAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSlcbiAgICApO1xuICAgIGdyaWQuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZCkgPT5cbiAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBzdGFydCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmNvb3JkO1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNoaXBUeXBlKTtcbiAgICAgICAgICAgIGlmIChheGlzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IHN0YXJ0WzBdICsgKCtzdGFydC5zbGljZSgxKSAtIHNxdWFyZU51bSk7XG4gICAgICAgICAgICAgICAgYXhpcyA9IFwiaG9yaXpvbnRhbFwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbHBoYSA9XG4gICAgICAgICAgICAgICAgICAgIHBsYXllckdhbWVCb2FyZC5hbHBoYU51bWJlcmljQ29udmVyc2lvbltzdGFydFswXV0gLVxuICAgICAgICAgICAgICAgICAgICBzcXVhcmVOdW07XG5cbiAgICAgICAgICAgICAgICBzdGFydCA9XG4gICAgICAgICAgICAgICAgICAgIHBsYXllckdhbWVCb2FyZC5jb252ZXJ0TnVtYmVyVG9BbHBoYShhbHBoYSkgK1xuICAgICAgICAgICAgICAgICAgICBzdGFydC5zbGljZSgxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcHMoc2hpcFR5cGUsIHN0YXJ0LCBheGlzKTtcbiAgICAgICAgICAgIHBsYWNlQ29tcHV0ZXJTaGlwcyhzaGlwVHlwZSwgYWxsUG9zc2libGVDb29yZHMpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coeyBzaGlwVHlwZSwgc3RhcnQsIGF4aXMgfSk7XG4gICAgICAgICAgICByZW5kZXJTaGlwcyhncmlkLmNoaWxkTm9kZXMpO1xuICAgICAgICAgICAgcmVuZGVyU2hpcHMoZ3JpZE9mUGxheWVyKTtcbiAgICAgICAgICAgIHNoaXAucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChzaGlwKTtcbiAgICAgICAgICAgIGhpZGVTaGlwc1BsYWNlbWVudFBhZ2UoKTtcbiAgICAgICAgfSlcbiAgICApO1xufTtcbmNvbnN0IGhpZGVTaGlwc1BsYWNlbWVudFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBzXCIpO1xuICAgIGNvbnN0IHBsYWNlU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYWNlLXNoaXBzXCIpO1xuICAgIGlmICghc2hpcHMuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgcGxhY2VTaGlwcy5zdHlsZS5jc3NUZXh0ID0gXCJ2aXNpYmlsaXR5OiBoaWRkZW5cIjtcbiAgICB9XG59O1xuY29uc3QgcmVuZGVyR2FtZUJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllclBsYXlHcm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllckdhbWVCb2FyZFwiKTtcbiAgICBjb25zdCBjb21wdXRlclBsYXlHcm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyR2FtZUJvYXJkXCIpO1xuICAgIGZvciAobGV0IGNvb3JkIG9mIHBsYXllckdhbWVCb2FyZC5jb29yZHMoKSkge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS1jb29yZFwiLCBjb29yZCk7XG4gICAgICAgIGlmIChwbGF5ZXJHYW1lQm9hcmQubW92ZXMuaGl0cy5pbmNsdWRlcyhjb29yZCkpIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiYS1oaXRcIik7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyR2FtZUJvYXJkLm1vdmVzLm1pc3Nlcy5pbmNsdWRlcyhjb29yZCkpIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiYS1taXNzXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBsYXllclBsYXlHcm91bmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gICAgZm9yIChsZXQgY29vcmQgb2YgY29tcHV0ZXJHYW1lQm9hcmQuY29vcmRzKCkpIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEtY29vcmRcIiwgY29vcmQpO1xuXG4gICAgICAgIGlmIChjb21wdXRlckdhbWVCb2FyZC5tb3Zlcy5oaXRzLmluY2x1ZGVzKGNvb3JkKSkge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJhLWhpdFwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb21wdXRlckdhbWVCb2FyZC5tb3Zlcy5taXNzZXMuaW5jbHVkZXMoY29vcmQpKSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImEtbWlzc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBjb21wdXRlclBsYXlHcm91bmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG59O1xuY29uc3QgcmVuZGVyU2hpcHMgPSAoc3F1YXJlcykgPT4ge1xuICAgIGZvciAobGV0IHNoaXAgaW4gcGxheWVyR2FtZUJvYXJkLmNvb3Jkc09mU2hpcHMpIHtcbiAgICAgICAgZm9yIChsZXQgc3F1YXJlIG9mIHNxdWFyZXMpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBwbGF5ZXJHYW1lQm9hcmQuY29vcmRzT2ZTaGlwc1tzaGlwXS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmRhdGFzZXQuY29vcmRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgcmVtb3ZlRXhpc3RpbmdNYXJrcyA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJQbGF5R3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJHYW1lQm9hcmRcIik7XG4gICAgY29uc3QgY29tcHV0ZXJQbGF5R3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlckdhbWVCb2FyZFwiKTtcbiAgICB3aGlsZSAocGxheWVyUGxheUdyb3VuZC5maXJzdENoaWxkIHx8IGNvbXB1dGVyUGxheUdyb3VuZC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBsYXllclBsYXlHcm91bmQucmVtb3ZlQ2hpbGQocGxheWVyUGxheUdyb3VuZC5maXJzdENoaWxkKTtcbiAgICAgICAgY29tcHV0ZXJQbGF5R3JvdW5kLnJlbW92ZUNoaWxkKGNvbXB1dGVyUGxheUdyb3VuZC5maXJzdENoaWxkKTtcbiAgICB9XG59O1xuY29uc3QgcGxheUdhbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgY29tcHV0ZXJQbGF5R3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlckdhbWVCb2FyZFwiKTtcbiAgICBjb25zdCBhbm5vdW5jZVdpbm5lciA9ICh3aW5uZXIpID0+IHtcbiAgICAgICAgY29uc3Qgd2lubmVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYW5ub3VuY2Utd2lubmVyIGgxXCIpO1xuICAgICAgICB3aW5uZXJUZXh0LnRleHRDb250ZW50ID0gd2lubmVyO1xuICAgICAgICB3aW5uZXJUZXh0LnBhcmVudEVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiO1xuICAgIH07XG5cbiAgICBjb21wdXRlclBsYXlHcm91bmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBldmVudC50YXJnZXQubm9kZU5hbWUgPT09IFwiRElWXCIgJiZcbiAgICAgICAgICAgICFjb21wdXRlckdhbWVCb2FyZC5tb3Zlcy5oaXRzLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5kYXRhc2V0LmNvb3JkXG4gICAgICAgICAgICApICYmXG4gICAgICAgICAgICAhY29tcHV0ZXJHYW1lQm9hcmQubW92ZXMubWlzc2VzLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5kYXRhc2V0LmNvb3JkXG4gICAgICAgICAgICApICYmXG4gICAgICAgICAgICAhcGxheWVyR2FtZUJvYXJkLmFsbFNoaXBzQXJlU3VuaygpICYmXG4gICAgICAgICAgICAhY29tcHV0ZXJHYW1lQm9hcmQuYWxsU2hpcHNBcmVTdW5rKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZW1vdmVFeGlzdGluZ01hcmtzKCk7XG4gICAgICAgICAgICBQbGF5ZXIoZXZlbnQudGFyZ2V0LmRhdGFzZXQuY29vcmQpO1xuICAgICAgICAgICAgQ29tcHV0ZXIoYWxsUG9zc2libGVNb3Zlcyk7XG4gICAgICAgICAgICByZW5kZXJHYW1lQm9hcmQoKTtcbiAgICAgICAgICAgIHJlbmRlclNoaXBzKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgcGxheWVyR2FtZUJvYXJkLmFsbFNoaXBzQXJlU3VuaygpIHx8XG4gICAgICAgICAgICBjb21wdXRlckdhbWVCb2FyZC5hbGxTaGlwc0FyZVN1bmsoKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHBsYXllckdhbWVCb2FyZC5hbGxTaGlwc0FyZVN1bmsoKVxuICAgICAgICAgICAgICAgID8gYW5ub3VuY2VXaW5uZXIoXCJDb21wdXRlclwiKVxuICAgICAgICAgICAgICAgIDogYW5ub3VuY2VXaW5uZXIoXCJZb3VcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5jb25zdCByZXN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbm5vdW5jZS13aW5uZXIgYnV0dG9uXCIpO1xuICAgIHJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlRXhpc3RpbmdNYXJrcygpO1xuICAgICAgICBwbGF5ZXJHYW1lQm9hcmQgPSBHYW1lQm9hcmQoKTtcbiAgICAgICAgY29tcHV0ZXJHYW1lQm9hcmQgPSBHYW1lQm9hcmQoKTtcbiAgICAgICAgcmVuZGVyR2FtZUJvYXJkKCk7XG4gICAgICAgIHJlbmRlclNoaXBzKCk7XG4gICAgICAgIHBsYXlHYW1lKCk7XG4gICAgICAgIHJlc3RhcnRCdG4ucGFyZW50RWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gXCJ2aXNpYmlsaXR5OiBoaWRkZW5cIjtcbiAgICB9KTtcbn07XG5cbnBsYWNlUGxheWVyU2hpcHMoKTtcbnJlbmRlckdhbWVCb2FyZCgpO1xucGxheUdhbWUoKTtcbnJlc3RhcnRHYW1lKCk7XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgY29uc3QgR2FtZUJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vdmVzID0geyBoaXRzOiBbXSwgbWlzc2VzOiBbXSB9O1xuICAgIGNvbnN0IHNoaXBzID0gU2hpcCgpO1xuICAgIGNvbnN0IGNvb3Jkc09mU2hpcHMgPSB7fTtcbiAgICBjb25zdCBhbHBoYU51bWJlcmljQ29udmVyc2lvbiA9IHtcbiAgICAgICAgQTogMSxcbiAgICAgICAgQjogMixcbiAgICAgICAgQzogMyxcbiAgICAgICAgRDogNCxcbiAgICAgICAgRTogNSxcbiAgICAgICAgRjogNixcbiAgICAgICAgRzogNyxcbiAgICAgICAgSDogOCxcbiAgICAgICAgSTogOSxcbiAgICAgICAgSjogMTAsXG4gICAgfTtcbiAgICBmdW5jdGlvbiBjb252ZXJ0TnVtYmVyVG9BbHBoYShudW0pIHtcbiAgICAgICAgZm9yIChsZXQgYWxwaGEgaW4gYWxwaGFOdW1iZXJpY0NvbnZlcnNpb24pIHtcbiAgICAgICAgICAgIGlmIChhbHBoYU51bWJlcmljQ29udmVyc2lvblthbHBoYV0gPT09IG51bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbHBoYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBjb29yZHMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBhbGxDb29yZHMgPSBbXTtcbiAgICAgICAgbGV0IGFscGhhID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbHBoYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCAxMTsgaisrKSB7XG4gICAgICAgICAgICAgICAgYWxsQ29vcmRzLnB1c2goYWxwaGFbaV0gKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhbGxDb29yZHM7XG4gICAgfTtcbiAgICBjb25zdCBwbGFjZVNoaXBzID0gKHNoaXBUeXBlLCBzdGFydENvb3JkLCBheGlzKSA9PiB7XG4gICAgICAgIGNvb3Jkc09mU2hpcHNbc2hpcFR5cGVdID0gW3N0YXJ0Q29vcmRdO1xuICAgICAgICBpZiAoc2hpcHNbc2hpcFR5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcHNbc2hpcFR5cGVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF4aXMgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0Q29vcmQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRDb29yZFswXSArIChOdW1iZXIucGFyc2VJbnQoc3RhcnRDb29yZFsxXSkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRzT2ZTaGlwc1tzaGlwVHlwZV0ucHVzaChzdGFydENvb3JkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGF4aXMgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgICAgICBzdGFydENvb3JkID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnZlcnROdW1iZXJUb0FscGhhKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlci5wYXJzZUludChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxwaGFOdW1iZXJpY0NvbnZlcnNpb25bc3RhcnRDb29yZFswXV0gKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSArIHN0YXJ0Q29vcmQuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvb3Jkc09mU2hpcHNbc2hpcFR5cGVdLnB1c2goc3RhcnRDb29yZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb29yZHNPZlNoaXBzO1xuICAgIH07XG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChhdENvb3JkKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uT2ZTaGlwcyA9IHBsYWNlU2hpcHMoKTtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBpbiBwb3NpdGlvbk9mU2hpcHMpIHtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbk9mU2hpcHNbc2hpcF0uaW5jbHVkZXMoYXRDb29yZCkpIHtcbiAgICAgICAgICAgICAgICBzaGlwc1tzaGlwXS5oaXQoKTtcbiAgICAgICAgICAgICAgICBtb3Zlcy5oaXRzLnB1c2goYXRDb29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtb3Zlcy5oaXRzLmluY2x1ZGVzKGF0Q29vcmQpKSB7XG4gICAgICAgICAgICBtb3Zlcy5taXNzZXMucHVzaChhdENvb3JkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtb3ZlcztcbiAgICB9O1xuICAgIGNvbnN0IGFsbFNoaXBzQXJlU3VuayA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFsbFNoaXBzQXJlU3VuayA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IHNoaXAgaW4gc2hpcHMpIHtcbiAgICAgICAgICAgIGlmIChzaGlwc1tzaGlwXS5pc1N1bmsoKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGFsbFNoaXBzQXJlU3VuayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBhbGxTaGlwc0FyZVN1bms7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFsbFNoaXBzQXJlU3VuaztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWxwaGFOdW1iZXJpY0NvbnZlcnNpb24sXG4gICAgICAgIGNvbnZlcnROdW1iZXJUb0FscGhhLFxuICAgICAgICBjb29yZHMsXG4gICAgICAgIHNoaXBzLFxuICAgICAgICBtb3ZlcyxcbiAgICAgICAgY29vcmRzT2ZTaGlwcyxcbiAgICAgICAgcGxhY2VTaGlwcyxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgYWxsU2hpcHNBcmVTdW5rLFxuICAgIH07XG59O1xuIiwiaW1wb3J0IHsgcGxheWVyR2FtZUJvYXJkLCBjb21wdXRlckdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuXG5jb25zdCBQbGF5ZXIgPSAoYXRDb29yZCkgPT4gY29tcHV0ZXJHYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhhdENvb3JkKTtcblxuY29uc3QgQ29tcHV0ZXIgPSAocG9zc2libGVNb3ZlcykgPT4ge1xuICAgIGNvbnN0IGNvbXB1dGVyTW92ZSA9XG4gICAgICAgIHBvc3NpYmxlTW92ZXNbfn4oTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlTW92ZXMubGVuZ3RoKV07XG4gICAgY29uc3QgbW92ZUluZGV4ID0gcG9zc2libGVNb3Zlcy5maW5kSW5kZXgoXG4gICAgICAgIChjb29yZCkgPT4gY29vcmQgPT09IGNvbXB1dGVyTW92ZVxuICAgICk7XG4gICAgcG9zc2libGVNb3Zlcy5zcGxpY2UobW92ZUluZGV4LCAxKTtcbiAgICBwbGF5ZXJHYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhjb21wdXRlck1vdmUpO1xufTtcbmNvbnN0IHBsYWNlQ29tcHV0ZXJTaGlwcyA9IChzaGlwVHlwZSwgcG9zc2libGVDb29yZHMpID0+IHtcbiAgICBmb3IgKGxldCBzaGlwIGluIGNvbXB1dGVyR2FtZUJvYXJkLmNvb3Jkc09mU2hpcHMpIHtcbiAgICAgICAgZm9yIChsZXQgY29vcmQgb2YgY29tcHV0ZXJHYW1lQm9hcmQuY29vcmRzT2ZTaGlwc1tzaGlwXSkge1xuICAgICAgICAgICAgaWYgKHBvc3NpYmxlQ29vcmRzLmluY2x1ZGVzKGNvb3JkKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkSW5kZXggPSBwb3NzaWJsZUNvb3Jkcy5maW5kSW5kZXgoXG4gICAgICAgICAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtID09PSBjb29yZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcG9zc2libGVDb29yZHMuc3BsaWNlKGNvb3JkSW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGF4aXNlcyA9IFtcInZlcnRpY2FsXCIsIFwiaG9yaXpvbnRhbFwiXTtcbiAgICBjb25zdCBzaGlwUGxhY2VtZW50QXhpcyA9IGF4aXNlc1t+fihNYXRoLnJhbmRvbSgpICogYXhpc2VzLmxlbmd0aCldO1xuICAgIGNvbnN0IHN0YXJ0aW5nQ29vcmQgPVxuICAgICAgICBwb3NzaWJsZUNvb3Jkc1t+fihNYXRoLnJhbmRvbSgpICogcG9zc2libGVDb29yZHMubGVuZ3RoKV07XG5cbiAgICBjb21wdXRlckdhbWVCb2FyZC5wbGFjZVNoaXBzKHNoaXBUeXBlLCBzdGFydGluZ0Nvb3JkLCBzaGlwUGxhY2VtZW50QXhpcyk7XG59O1xuXG5leHBvcnQgeyBDb21wdXRlciwgUGxheWVyLCBwbGFjZUNvbXB1dGVyU2hpcHMgfTtcbiIsImV4cG9ydCBjb25zdCBTaGlwID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IHtcbiAgICAgICAgbGVuZ3RoOiAyLFxuICAgICAgICBoaXRzOiAwLFxuICAgICAgICBoaXQoKSB7XG4gICAgICAgICAgICB0aGlzLmhpdHMrKztcbiAgICAgICAgfSxcbiAgICAgICAgaXNTdW5rKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLmhpdHMpIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCBzdWJtYXJpbmUgPSB7XG4gICAgICAgIGxlbmd0aDogMyxcbiAgICAgICAgaGl0czogMCxcbiAgICAgICAgaGl0KCkge1xuICAgICAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRzKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgY3J1aXNlciA9IHtcbiAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICBoaXRzOiAwLFxuICAgICAgICBoaXQoKSB7XG4gICAgICAgICAgICB0aGlzLmhpdHMrKztcbiAgICAgICAgfSxcbiAgICAgICAgaXNTdW5rKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLmhpdHMpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IHtcbiAgICAgICAgbGVuZ3RoOiA0LFxuICAgICAgICBoaXRzOiAwLFxuICAgICAgICBoaXQoKSB7XG4gICAgICAgICAgICB0aGlzLmhpdHMrKztcbiAgICAgICAgfSxcbiAgICAgICAgaXNTdW5rKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLmhpdHMpIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCBjYXJyaWVyID0ge1xuICAgICAgICBsZW5ndGg6IDUsXG4gICAgICAgIGhpdHM6IDAsXG4gICAgICAgIGhpdCgpIHtcbiAgICAgICAgICAgIHRoaXMuaGl0cysrO1xuICAgICAgICB9LFxuICAgICAgICBpc1N1bmsoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IHRoaXMuaGl0cykgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZGVzdHJveWVyLCBzdWJtYXJpbmUsIGNydWlzZXIsIGJhdHRsZXNoaXAsIGNhcnJpZXIgfTtcbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gICAgcGFkZGluZzogMCAxNTBweDtcbiAgICBnYXA6IDUwcHg7XG59XG5oMSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xufVxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEyMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBsYXllckdhbWVCb2FyZCxcbi5jb21wdXRlckdhbWVCb2FyZCxcbi5ncmlkIHtcbiAgICBoZWlnaHQ6IDMzMHB4O1xuICAgIHdpZHRoOiAzMzBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQ6IDFmciAvIHJlcGVhdCgxMCwgMWZyKTtcbn1cbi5wbGF5ZXJHYW1lQm9hcmQgPiBkaXYsXG4uY29tcHV0ZXJHYW1lQm9hcmQgPiBkaXYge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gICAgaGVpZ2h0OiAzM3B4O1xuICAgIHdpZHRoOiAzM3B4O1xuICAgIG1hcmdpbjogMDtcbn1cbi5wbGF5ZXJHYW1lQm9hcmQgPiBkaXY6bnRoLWNoaWxkKDEwbiArIDEpLFxuLmNvbXB1dGVyR2FtZUJvYXJkID4gZGl2Om50aC1jaGlsZCgxMG4gKyAxKSxcbi5ncmlkID4gZGl2Om50aC1jaGlsZCgxMG4gKyAxKSB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xufVxuLnBsYXllckdhbWVCb2FyZCA+IGRpdjpudGgtY2hpbGQoLW4gKyAxMCksXG4uY29tcHV0ZXJHYW1lQm9hcmQgPiBkaXY6bnRoLWNoaWxkKC1uICsgMTApLFxuLmdyaWQgPiBkaXY6bnRoLWNoaWxkKC1uICsgMTApIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcbn1cbi5wbGF5ZXJfcm93cyxcbi5jb21wdXRlcl9yb3dzLFxuLnBsYXllcl9jb2x1bW5zLFxuLmNvbXB1dGVyX2NvbHVtbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5wbGF5ZXJfcm93cyB7XG4gICAgbGVmdDogMTA1cHg7XG4gICAgdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxOHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBsYXllcl9jb2x1bW5zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRvcDogLTI1cHg7XG4gICAgbGVmdDogMTQ4cHg7XG4gICAgZ2FwOiAyNXB4O1xufVxuLmNvbXB1dGVyX3Jvd3Mge1xuICAgIGxlZnQ6IDU1NXB4O1xuICAgIHRvcDogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMThweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb21wdXRlcl9jb2x1bW5zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRvcDogLTI1cHg7XG4gICAgbGVmdDogNTk3cHg7XG4gICAgZ2FwOiAyNXB4O1xufVxuXG4uY29udGFpbmVyIGRpdi5hLW1pc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuLmNvbnRhaW5lciBkaXYuYS1oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi5hbm5vdW5jZS13aW5uZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDgxNDgzO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZ2FwOiAzMHB4O1xufVxuLmFubm91bmNlLXdpbm5lciBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFubm91bmNlLXdpbm5lciBoMiB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG4uYW5ub3VuY2Utd2lubmVyIGgxIHtcbiAgICBmb250LXNpemU6IDZyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgICB3aWR0aDogbWluKDE1Y2gpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmFubm91bmNlLXdpbm5lciBidXR0b24ge1xuICAgIHBhZGRpbmc6IDEzcHggMTAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4ucGxhY2Utc2hpcHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgY29sb3I6ICMwMDA7XG59XG4ucGxhY2Utc2hpcHMgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMDBweDtcbiAgICBhbGlnbi1pdGVtczogbm9ybWFsO1xufVxuLmdyaWQgPiBkaXYge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gICAgaGVpZ2h0OiAzM3B4O1xuICAgIHdpZHRoOiAzM3B4O1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmdyaWQgPiBkaXY6bnRoLWNoaWxkKDEwbiArIDEpIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5ncmlkID4gZGl2Om50aC1jaGlsZCgtbiArIDEwKSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5zaGlwcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbn1cbi5zaGlwcyA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi52ZXJ0aWNhbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zaGlwcyA+IGRpdiA+IGRpdiB7XG4gICAgaGVpZ2h0OiAzM3B4O1xuICAgIHdpZHRoOiAzM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4ucGxhY2Utc2hpcHMgaDEge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucGxhY2Utc2hpcHMgaDIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBmb250LXNpemU6IDEuNTtcbn1cbi5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBOzs7SUFHSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7QUFDQTs7SUFFSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztBQUNiO0FBQ0E7OztJQUdJLDJCQUEyQjtBQUMvQjtBQUNBOzs7SUFHSSwwQkFBMEI7QUFDOUI7QUFDQTs7OztJQUlJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsYUFBYTtJQUNiLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCxTQUFTO0FBQ2I7QUFDQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsYUFBYTtJQUNiLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsNENBQTRDO0lBQzVDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztJQUNULFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgIHBhZGRpbmc6IDAgMTUwcHg7XFxuICAgIGdhcDogNTBweDtcXG59XFxuaDEge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG59XFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wbGF5ZXJHYW1lQm9hcmQsXFxuLmNvbXB1dGVyR2FtZUJvYXJkLFxcbi5ncmlkIHtcXG4gICAgaGVpZ2h0OiAzMzBweDtcXG4gICAgd2lkdGg6IDMzMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiAxZnIgLyByZXBlYXQoMTAsIDFmcik7XFxufVxcbi5wbGF5ZXJHYW1lQm9hcmQgPiBkaXYsXFxuLmNvbXB1dGVyR2FtZUJvYXJkID4gZGl2IHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XFxuICAgIGhlaWdodDogMzNweDtcXG4gICAgd2lkdGg6IDMzcHg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLnBsYXllckdhbWVCb2FyZCA+IGRpdjpudGgtY2hpbGQoMTBuICsgMSksXFxuLmNvbXB1dGVyR2FtZUJvYXJkID4gZGl2Om50aC1jaGlsZCgxMG4gKyAxKSxcXG4uZ3JpZCA+IGRpdjpudGgtY2hpbGQoMTBuICsgMSkge1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XFxufVxcbi5wbGF5ZXJHYW1lQm9hcmQgPiBkaXY6bnRoLWNoaWxkKC1uICsgMTApLFxcbi5jb21wdXRlckdhbWVCb2FyZCA+IGRpdjpudGgtY2hpbGQoLW4gKyAxMCksXFxuLmdyaWQgPiBkaXY6bnRoLWNoaWxkKC1uICsgMTApIHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XFxufVxcbi5wbGF5ZXJfcm93cyxcXG4uY29tcHV0ZXJfcm93cyxcXG4ucGxheWVyX2NvbHVtbnMsXFxuLmNvbXB1dGVyX2NvbHVtbnMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG4ucGxheWVyX3Jvd3Mge1xcbiAgICBsZWZ0OiAxMDVweDtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE4cHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnBsYXllcl9jb2x1bW5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdG9wOiAtMjVweDtcXG4gICAgbGVmdDogMTQ4cHg7XFxuICAgIGdhcDogMjVweDtcXG59XFxuLmNvbXB1dGVyX3Jvd3Mge1xcbiAgICBsZWZ0OiA1NTVweDtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE4cHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmNvbXB1dGVyX2NvbHVtbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0b3A6IC0yNXB4O1xcbiAgICBsZWZ0OiA1OTdweDtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4uY29udGFpbmVyIGRpdi5hLW1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuLmNvbnRhaW5lciBkaXYuYS1oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbi5hbm5vdW5jZS13aW5uZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDgxNDgzO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBnYXA6IDMwcHg7XFxufVxcbi5hbm5vdW5jZS13aW5uZXIgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5hbm5vdW5jZS13aW5uZXIgaDIge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5hbm5vdW5jZS13aW5uZXIgaDEge1xcbiAgICBmb250LXNpemU6IDZyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgVGltZXMsIHNlcmlmO1xcbiAgICB3aWR0aDogbWluKDE1Y2gpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5hbm5vdW5jZS13aW5uZXIgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMTNweCAxMDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG4ucGxhY2Utc2hpcHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcbi5wbGFjZS1zaGlwcyA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBub3JtYWw7XFxufVxcbi5ncmlkID4gZGl2IHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XFxuICAgIGhlaWdodDogMzNweDtcXG4gICAgd2lkdGg6IDMzcHg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmdyaWQgPiBkaXY6bnRoLWNoaWxkKDEwbiArIDEpIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4uZ3JpZCA+IGRpdjpudGgtY2hpbGQoLW4gKyAxMCkge1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcXG59XFxuXFxuLnNoaXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuLnNoaXBzID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnZlcnRpY2FsIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnNoaXBzID4gZGl2ID4gZGl2IHtcXG4gICAgaGVpZ2h0OiAzM3B4O1xcbiAgICB3aWR0aDogMzNweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5wbGFjZS1zaGlwcyBoMSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5wbGFjZS1zaGlwcyBoMiB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41O1xcbn1cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZ2FtZS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJHYW1lQm9hcmQiLCJQbGF5ZXIiLCJDb21wdXRlciIsInBsYWNlQ29tcHV0ZXJTaGlwcyIsIlNoaXAiLCJwbGF5ZXJHYW1lQm9hcmQiLCJjb21wdXRlckdhbWVCb2FyZCIsImFsbFBvc3NpYmxlTW92ZXMiLCJjb29yZHMiLCJhbGxQb3NzaWJsZUNvb3JkcyIsInBsYWNlUGxheWVyU2hpcHMiLCJwbGFjZVNoaXBzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ3JpZCIsInNoaXBzIiwicXVlcnlTZWxlY3RvckFsbCIsInBsYXllclBsYXlHcm91bmQiLCJncmlkT2ZQbGF5ZXIiLCJjaGlsZHJlbiIsInNoaXBUeXBlIiwic3RhcnQiLCJheGlzIiwic3F1YXJlTnVtIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImNvb3JkIiwidmFsdWUiLCJzcXVhcmUiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJlcnIiLCJlIiwiZiIsImZvckVhY2giLCJzaGlwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY2hpbGQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGFOdW0iLCJnZXRBdHRyaWJ1dGUiLCJjaGlsZE5vZGVzIiwidGFyZ2V0IiwiZGF0YXNldCIsImdldEVsZW1lbnRCeUlkIiwidW5kZWZpbmVkIiwic2xpY2UiLCJhbHBoYSIsImFscGhhTnVtYmVyaWNDb252ZXJzaW9uIiwiY29udmVydE51bWJlclRvQWxwaGEiLCJyZW5kZXJTaGlwcyIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsImhpZGVTaGlwc1BsYWNlbWVudFBhZ2UiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInN0eWxlIiwiY3NzVGV4dCIsInJlbmRlckdhbWVCb2FyZCIsImNvbXB1dGVyUGxheUdyb3VuZCIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJtb3ZlcyIsImhpdHMiLCJpbmNsdWRlcyIsImFkZCIsIm1pc3NlcyIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJzcXVhcmVzIiwiY29vcmRzT2ZTaGlwcyIsIl9pdGVyYXRvcjQiLCJfc3RlcDQiLCJyZW1vdmVFeGlzdGluZ01hcmtzIiwiZmlyc3RDaGlsZCIsInBsYXlHYW1lIiwiYW5ub3VuY2VXaW5uZXIiLCJ3aW5uZXIiLCJ3aW5uZXJUZXh0IiwidGV4dENvbnRlbnQiLCJub2RlTmFtZSIsImFsbFNoaXBzQXJlU3VuayIsInJlc3RhcnRHYW1lIiwicmVzdGFydEJ0biIsIkEiLCJCIiwiQyIsIkQiLCJFIiwiRiIsIkciLCJIIiwiSSIsIkoiLCJudW0iLCJhbGxDb29yZHMiLCJpIiwibGVuZ3RoIiwiaiIsInB1c2giLCJzdGFydENvb3JkIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJyZWNlaXZlQXR0YWNrIiwiYXRDb29yZCIsInBvc2l0aW9uT2ZTaGlwcyIsImhpdCIsImlzU3VuayIsInBvc3NpYmxlTW92ZXMiLCJjb21wdXRlck1vdmUiLCJNYXRoIiwicmFuZG9tIiwibW92ZUluZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwicG9zc2libGVDb29yZHMiLCJfbG9vcCIsImNvb3JkSW5kZXgiLCJpdGVtIiwiYXhpc2VzIiwic2hpcFBsYWNlbWVudEF4aXMiLCJzdGFydGluZ0Nvb3JkIiwiZGVzdHJveWVyIiwic3VibWFyaW5lIiwiY3J1aXNlciIsImJhdHRsZXNoaXAiLCJjYXJyaWVyIl0sInNvdXJjZVJvb3QiOiIifQ==