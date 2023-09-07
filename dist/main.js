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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




var playerGameBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.GameBoard)();
var computerGameBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.GameBoard)();
var allPossibleMoves = playerGameBoard.coords();
function placeShipsmanually() {
  playerGameBoard.placeShips("destroyer", "A2", "horizontal");
  playerGameBoard.placeShips("submarine", "E1", "horizontal");
  playerGameBoard.placeShips("cruiser", "F10", "vertical");
  playerGameBoard.placeShips("battleship", "J1", "horizontal");
  playerGameBoard.placeShips("carrier", "C8", "vertical");
  computerGameBoard.placeShips("destroyer", "J2", "horizontal");
  computerGameBoard.placeShips("submarine", "C10", "vertical");
  computerGameBoard.placeShips("cruiser", "D2", "vertical");
  computerGameBoard.placeShips("battleship", "A4", "horizontal");
  computerGameBoard.placeShips("carrier", "E4", "vertical");
}
var renderGameBoard = function renderGameBoard() {
  var playerPlayGround = document.querySelector(".playerGameBoard");
  var computerPlayGround = document.querySelector(".computerGameBoard");
  var _iterator = _createForOfIteratorHelper(playerGameBoard.coords()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var coord = _step.value;
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
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper(computerGameBoard.coords()),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _coord = _step2.value;
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
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};
var renderShips = function renderShips() {
  var playerSquares = _toConsumableArray(document.querySelectorAll(".playerGameBoard > div"));
  var computerSquares = _toConsumableArray(document.querySelectorAll(".computerGameBoard > div"));
  for (var ship in playerGameBoard.coordsOfShips) {
    var _iterator3 = _createForOfIteratorHelper(playerSquares),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var square = _step3.value;
        if (playerGameBoard.coordsOfShips[ship].includes(square.dataset.coord)) {
          square.classList.add("ship");
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }
  for (var _ship in computerGameBoard.coordsOfShips) {
    var _iterator4 = _createForOfIteratorHelper(computerSquares),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _square2 = _step4.value;
        if (computerGameBoard.coordsOfShips[_ship].includes(_square2.dataset.coord)) {
          _square2.classList.add("ship");
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
    winnerText.textContent = winner + " Wons!";
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
      playerGameBoard.allShipsAreSunk ? announceWinner("You") : announceWinner("The computer");
    }
  });
};
var restartGame = function restartGame() {
  var restartBtn = document.querySelector(".announce-winner button");
  restartBtn.addEventListener("click", function () {
    removeExistingMarks();
    playerGameBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.GameBoard)();
    computerGameBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.GameBoard)();
    placeShipsmanually();
    renderGameBoard();
    renderShips();
    playGame();
    restartBtn.parentElement.style.cssText = "visibility: hidden";
  });
};
placeShipsmanually();
renderGameBoard();
renderShips();
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
  var placeShips = function placeShips(shipType, startCoord) {
    var axis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "horizontal";
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
/* harmony export */   Player: () => (/* binding */ Player)
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
.computerGameBoard {
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
.computerGameBoard > div:nth-child(10n + 1) {
    border-left: 1px solid gray;
}
.playerGameBoard > div:nth-child(-n + 10),
.computerGameBoard > div:nth-child(-n + 10) {
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
.container .ship {
    background-color: gray;
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
}
.announce-winner h1 {
    font-size: 6rem;
    font-family: "Times New Roman", Times, serif;
    width: min(15ch);
    text-align: center;
}
.announce-winner button {
    padding: 20px 70px;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 500;
    border-radius: 20px;
    border: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,SAAS;AACb;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,UAAU;IACV,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;;IAEI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,2BAA2B;AAC/B;AACA;;IAEI,4BAA4B;IAC5B,6BAA6B;IAC7B,YAAY;IACZ,WAAW;IACX,SAAS;AACb;AACA;;IAEI,2BAA2B;AAC/B;AACA;;IAEI,0BAA0B;AAC9B;AACA;;;;IAII,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,SAAS;IACT,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,UAAU;IACV,WAAW;IACX,SAAS;AACb;AACA;IACI,WAAW;IACX,SAAS;IACT,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,UAAU;IACV,WAAW;IACX,SAAS;AACb;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,qBAAqB;AACzB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,2BAA2B;IAC3B,2BAA2B;IAC3B,WAAW;IACX,YAAY;IACZ,WAAW;AACf;AACA;IACI,eAAe;IACf,4CAA4C;IAC5C,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;AAChB","sourcesContent":[":root {\n    box-sizing: border-box;\n}\nbody {\n    display: flex;\n    flex-flow: column wrap;\n    padding: 0 150px;\n    gap: 50px;\n}\nh1 {\n    font-size: 2.5rem;\n    text-align: center;\n    font-family: cursive;\n}\n.container {\n    display: flex;\n    gap: 120px;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n.playerGameBoard,\n.computerGameBoard {\n    height: 330px;\n    width: 330px;\n    display: grid;\n    grid: 1fr / repeat(10, 1fr);\n}\n.playerGameBoard > div,\n.computerGameBoard > div {\n    border-right: 1px solid gray;\n    border-bottom: 1px solid gray;\n    height: 33px;\n    width: 33px;\n    margin: 0;\n}\n.playerGameBoard > div:nth-child(10n + 1),\n.computerGameBoard > div:nth-child(10n + 1) {\n    border-left: 1px solid gray;\n}\n.playerGameBoard > div:nth-child(-n + 10),\n.computerGameBoard > div:nth-child(-n + 10) {\n    border-top: 1px solid gray;\n}\n.player_rows,\n.computer_rows,\n.player_columns,\n.computer_columns {\n    position: absolute;\n    font-size: 0.8rem;\n}\n.player_rows {\n    left: 105px;\n    top: 10px;\n    display: flex;\n    gap: 18px;\n    flex-direction: column;\n    text-align: center;\n}\n.player_columns {\n    display: flex;\n    top: -25px;\n    left: 148px;\n    gap: 25px;\n}\n.computer_rows {\n    left: 555px;\n    top: 10px;\n    display: flex;\n    gap: 18px;\n    flex-direction: column;\n    text-align: center;\n}\n.computer_columns {\n    display: flex;\n    top: -25px;\n    left: 597px;\n    gap: 25px;\n}\n.container .ship {\n    background-color: gray;\n}\n.container div.a-miss {\n    background-color: green;\n}\n.container div.a-hit {\n    background-color: red;\n}\n.announce-winner {\n    position: absolute;\n    visibility: hidden;\n    top: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #00081483;\n    backdrop-filter: blur(10px);\n    width: 100%;\n    height: 100%;\n    color: #fff;\n}\n.announce-winner h1 {\n    font-size: 6rem;\n    font-family: \"Times New Roman\", Times, serif;\n    width: min(15ch);\n    text-align: center;\n}\n.announce-winner button {\n    padding: 20px 70px;\n    cursor: pointer;\n    font-size: 1.5rem;\n    font-weight: 500;\n    border-radius: 20px;\n    border: none;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuaW1wb3J0IHsgUGxheWVyLCBDb21wdXRlciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZXhwb3J0IGxldCBwbGF5ZXJHYW1lQm9hcmQgPSBHYW1lQm9hcmQoKTtcbmV4cG9ydCBsZXQgY29tcHV0ZXJHYW1lQm9hcmQgPSBHYW1lQm9hcmQoKTtcbmNvbnN0IGFsbFBvc3NpYmxlTW92ZXMgPSBwbGF5ZXJHYW1lQm9hcmQuY29vcmRzKCk7XG5mdW5jdGlvbiBwbGFjZVNoaXBzbWFudWFsbHkoKSB7XG4gICAgcGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcHMoXCJkZXN0cm95ZXJcIiwgXCJBMlwiLCBcImhvcml6b250YWxcIik7XG4gICAgcGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcHMoXCJzdWJtYXJpbmVcIiwgXCJFMVwiLCBcImhvcml6b250YWxcIik7XG4gICAgcGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcHMoXCJjcnVpc2VyXCIsIFwiRjEwXCIsIFwidmVydGljYWxcIik7XG4gICAgcGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcHMoXCJiYXR0bGVzaGlwXCIsIFwiSjFcIiwgXCJob3Jpem9udGFsXCIpO1xuICAgIHBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXBzKFwiY2FycmllclwiLCBcIkM4XCIsIFwidmVydGljYWxcIik7XG4gICAgY29tcHV0ZXJHYW1lQm9hcmQucGxhY2VTaGlwcyhcImRlc3Ryb3llclwiLCBcIkoyXCIsIFwiaG9yaXpvbnRhbFwiKTtcbiAgICBjb21wdXRlckdhbWVCb2FyZC5wbGFjZVNoaXBzKFwic3VibWFyaW5lXCIsIFwiQzEwXCIsIFwidmVydGljYWxcIik7XG4gICAgY29tcHV0ZXJHYW1lQm9hcmQucGxhY2VTaGlwcyhcImNydWlzZXJcIiwgXCJEMlwiLCBcInZlcnRpY2FsXCIpO1xuICAgIGNvbXB1dGVyR2FtZUJvYXJkLnBsYWNlU2hpcHMoXCJiYXR0bGVzaGlwXCIsIFwiQTRcIiwgXCJob3Jpem9udGFsXCIpO1xuICAgIGNvbXB1dGVyR2FtZUJvYXJkLnBsYWNlU2hpcHMoXCJjYXJyaWVyXCIsIFwiRTRcIiwgXCJ2ZXJ0aWNhbFwiKTtcbn1cblxuY29uc3QgcmVuZGVyR2FtZUJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllclBsYXlHcm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllckdhbWVCb2FyZFwiKTtcbiAgICBjb25zdCBjb21wdXRlclBsYXlHcm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyR2FtZUJvYXJkXCIpO1xuICAgIGZvciAobGV0IGNvb3JkIG9mIHBsYXllckdhbWVCb2FyZC5jb29yZHMoKSkge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS1jb29yZFwiLCBjb29yZCk7XG4gICAgICAgIGlmIChwbGF5ZXJHYW1lQm9hcmQubW92ZXMuaGl0cy5pbmNsdWRlcyhjb29yZCkpIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiYS1oaXRcIik7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyR2FtZUJvYXJkLm1vdmVzLm1pc3Nlcy5pbmNsdWRlcyhjb29yZCkpIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiYS1taXNzXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBsYXllclBsYXlHcm91bmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gICAgZm9yIChsZXQgY29vcmQgb2YgY29tcHV0ZXJHYW1lQm9hcmQuY29vcmRzKCkpIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEtY29vcmRcIiwgY29vcmQpO1xuXG4gICAgICAgIGlmIChjb21wdXRlckdhbWVCb2FyZC5tb3Zlcy5oaXRzLmluY2x1ZGVzKGNvb3JkKSkge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJhLWhpdFwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb21wdXRlckdhbWVCb2FyZC5tb3Zlcy5taXNzZXMuaW5jbHVkZXMoY29vcmQpKSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImEtbWlzc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBjb21wdXRlclBsYXlHcm91bmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG59O1xuY29uc3QgcmVuZGVyU2hpcHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyU3F1YXJlcyA9IFtcbiAgICAgICAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXJHYW1lQm9hcmQgPiBkaXZcIiksXG4gICAgXTtcbiAgICBjb25zdCBjb21wdXRlclNxdWFyZXMgPSBbXG4gICAgICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tcHV0ZXJHYW1lQm9hcmQgPiBkaXZcIiksXG4gICAgXTtcblxuICAgIGZvciAobGV0IHNoaXAgaW4gcGxheWVyR2FtZUJvYXJkLmNvb3Jkc09mU2hpcHMpIHtcbiAgICAgICAgZm9yIChsZXQgc3F1YXJlIG9mIHBsYXllclNxdWFyZXMpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBwbGF5ZXJHYW1lQm9hcmQuY29vcmRzT2ZTaGlwc1tzaGlwXS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmRhdGFzZXQuY29vcmRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgc2hpcCBpbiBjb21wdXRlckdhbWVCb2FyZC5jb29yZHNPZlNoaXBzKSB7XG4gICAgICAgIGZvciAobGV0IHNxdWFyZSBvZiBjb21wdXRlclNxdWFyZXMpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBjb21wdXRlckdhbWVCb2FyZC5jb29yZHNPZlNoaXBzW3NoaXBdLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuZGF0YXNldC5jb29yZFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCByZW1vdmVFeGlzdGluZ01hcmtzID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllclBsYXlHcm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllckdhbWVCb2FyZFwiKTtcbiAgICBjb25zdCBjb21wdXRlclBsYXlHcm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyR2FtZUJvYXJkXCIpO1xuICAgIHdoaWxlIChwbGF5ZXJQbGF5R3JvdW5kLmZpcnN0Q2hpbGQgfHwgY29tcHV0ZXJQbGF5R3JvdW5kLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGxheWVyUGxheUdyb3VuZC5yZW1vdmVDaGlsZChwbGF5ZXJQbGF5R3JvdW5kLmZpcnN0Q2hpbGQpO1xuICAgICAgICBjb21wdXRlclBsYXlHcm91bmQucmVtb3ZlQ2hpbGQoY29tcHV0ZXJQbGF5R3JvdW5kLmZpcnN0Q2hpbGQpO1xuICAgIH1cbn07XG5jb25zdCBwbGF5R2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb21wdXRlclBsYXlHcm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyR2FtZUJvYXJkXCIpO1xuICAgIGNvbnN0IGFubm91bmNlV2lubmVyID0gKHdpbm5lcikgPT4ge1xuICAgICAgICBjb25zdCB3aW5uZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbm5vdW5jZS13aW5uZXIgaDFcIik7XG4gICAgICAgIHdpbm5lclRleHQudGV4dENvbnRlbnQgPSB3aW5uZXIgKyBcIiBXb25zIVwiO1xuICAgICAgICB3aW5uZXJUZXh0LnBhcmVudEVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiO1xuICAgIH07XG5cbiAgICBjb21wdXRlclBsYXlHcm91bmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBldmVudC50YXJnZXQubm9kZU5hbWUgPT09IFwiRElWXCIgJiZcbiAgICAgICAgICAgICFjb21wdXRlckdhbWVCb2FyZC5tb3Zlcy5oaXRzLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5kYXRhc2V0LmNvb3JkXG4gICAgICAgICAgICApICYmXG4gICAgICAgICAgICAhY29tcHV0ZXJHYW1lQm9hcmQubW92ZXMubWlzc2VzLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5kYXRhc2V0LmNvb3JkXG4gICAgICAgICAgICApICYmXG4gICAgICAgICAgICAhcGxheWVyR2FtZUJvYXJkLmFsbFNoaXBzQXJlU3VuaygpICYmXG4gICAgICAgICAgICAhY29tcHV0ZXJHYW1lQm9hcmQuYWxsU2hpcHNBcmVTdW5rKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZW1vdmVFeGlzdGluZ01hcmtzKCk7XG4gICAgICAgICAgICBQbGF5ZXIoZXZlbnQudGFyZ2V0LmRhdGFzZXQuY29vcmQpO1xuICAgICAgICAgICAgQ29tcHV0ZXIoYWxsUG9zc2libGVNb3Zlcyk7XG4gICAgICAgICAgICByZW5kZXJHYW1lQm9hcmQoKTtcbiAgICAgICAgICAgIHJlbmRlclNoaXBzKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgcGxheWVyR2FtZUJvYXJkLmFsbFNoaXBzQXJlU3VuaygpIHx8XG4gICAgICAgICAgICBjb21wdXRlckdhbWVCb2FyZC5hbGxTaGlwc0FyZVN1bmsoKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHBsYXllckdhbWVCb2FyZC5hbGxTaGlwc0FyZVN1bmtcbiAgICAgICAgICAgICAgICA/IGFubm91bmNlV2lubmVyKFwiWW91XCIpXG4gICAgICAgICAgICAgICAgOiBhbm5vdW5jZVdpbm5lcihcIlRoZSBjb21wdXRlclwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbmNvbnN0IHJlc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFubm91bmNlLXdpbm5lciBidXR0b25cIik7XG4gICAgcmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByZW1vdmVFeGlzdGluZ01hcmtzKCk7XG4gICAgICAgIHBsYXllckdhbWVCb2FyZCA9IEdhbWVCb2FyZCgpO1xuICAgICAgICBjb21wdXRlckdhbWVCb2FyZCA9IEdhbWVCb2FyZCgpO1xuICAgICAgICBwbGFjZVNoaXBzbWFudWFsbHkoKTtcbiAgICAgICAgcmVuZGVyR2FtZUJvYXJkKCk7XG4gICAgICAgIHJlbmRlclNoaXBzKCk7XG4gICAgICAgIHBsYXlHYW1lKCk7XG4gICAgICAgIHJlc3RhcnRCdG4ucGFyZW50RWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gXCJ2aXNpYmlsaXR5OiBoaWRkZW5cIjtcbiAgICB9KTtcbn07XG5wbGFjZVNoaXBzbWFudWFsbHkoKTtcbnJlbmRlckdhbWVCb2FyZCgpO1xucmVuZGVyU2hpcHMoKTtcbnBsYXlHYW1lKCk7XG5yZXN0YXJ0R2FtZSgpO1xuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxuZXhwb3J0IGNvbnN0IEdhbWVCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBtb3ZlcyA9IHsgaGl0czogW10sIG1pc3NlczogW10gfTtcbiAgICBjb25zdCBzaGlwcyA9IFNoaXAoKTtcbiAgICBjb25zdCBjb29yZHNPZlNoaXBzID0ge307XG4gICAgY29uc3QgYWxwaGFOdW1iZXJpY0NvbnZlcnNpb24gPSB7XG4gICAgICAgIEE6IDEsXG4gICAgICAgIEI6IDIsXG4gICAgICAgIEM6IDMsXG4gICAgICAgIEQ6IDQsXG4gICAgICAgIEU6IDUsXG4gICAgICAgIEY6IDYsXG4gICAgICAgIEc6IDcsXG4gICAgICAgIEg6IDgsXG4gICAgICAgIEk6IDksXG4gICAgICAgIEo6IDEwLFxuICAgIH07XG4gICAgZnVuY3Rpb24gY29udmVydE51bWJlclRvQWxwaGEobnVtKSB7XG4gICAgICAgIGZvciAobGV0IGFscGhhIGluIGFscGhhTnVtYmVyaWNDb252ZXJzaW9uKSB7XG4gICAgICAgICAgICBpZiAoYWxwaGFOdW1iZXJpY0NvbnZlcnNpb25bYWxwaGFdID09PSBudW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxwaGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgY29vcmRzID0gKCkgPT4ge1xuICAgICAgICBsZXQgYWxsQ29vcmRzID0gW107XG4gICAgICAgIGxldCBhbHBoYSA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxwaGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgMTE7IGorKykge1xuICAgICAgICAgICAgICAgIGFsbENvb3Jkcy5wdXNoKGFscGhhW2ldICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWxsQ29vcmRzO1xuICAgIH07XG4gICAgY29uc3QgcGxhY2VTaGlwcyA9IChzaGlwVHlwZSwgc3RhcnRDb29yZCwgYXhpcyA9IFwiaG9yaXpvbnRhbFwiKSA9PiB7XG4gICAgICAgIGNvb3Jkc09mU2hpcHNbc2hpcFR5cGVdID0gW3N0YXJ0Q29vcmRdO1xuICAgICAgICBpZiAoc2hpcHNbc2hpcFR5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcHNbc2hpcFR5cGVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF4aXMgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0Q29vcmQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRDb29yZFswXSArIChOdW1iZXIucGFyc2VJbnQoc3RhcnRDb29yZFsxXSkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRzT2ZTaGlwc1tzaGlwVHlwZV0ucHVzaChzdGFydENvb3JkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGF4aXMgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgICAgICBzdGFydENvb3JkID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnZlcnROdW1iZXJUb0FscGhhKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlci5wYXJzZUludChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxwaGFOdW1iZXJpY0NvbnZlcnNpb25bc3RhcnRDb29yZFswXV0gKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSArIHN0YXJ0Q29vcmQuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvb3Jkc09mU2hpcHNbc2hpcFR5cGVdLnB1c2goc3RhcnRDb29yZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb29yZHNPZlNoaXBzO1xuICAgIH07XG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChhdENvb3JkKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uT2ZTaGlwcyA9IHBsYWNlU2hpcHMoKTtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBpbiBwb3NpdGlvbk9mU2hpcHMpIHtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbk9mU2hpcHNbc2hpcF0uaW5jbHVkZXMoYXRDb29yZCkpIHtcbiAgICAgICAgICAgICAgICBzaGlwc1tzaGlwXS5oaXQoKTtcbiAgICAgICAgICAgICAgICBtb3Zlcy5oaXRzLnB1c2goYXRDb29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtb3Zlcy5oaXRzLmluY2x1ZGVzKGF0Q29vcmQpKSB7XG4gICAgICAgICAgICBtb3Zlcy5taXNzZXMucHVzaChhdENvb3JkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtb3ZlcztcbiAgICB9O1xuICAgIGNvbnN0IGFsbFNoaXBzQXJlU3VuayA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFsbFNoaXBzQXJlU3VuayA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IHNoaXAgaW4gc2hpcHMpIHtcbiAgICAgICAgICAgIGlmIChzaGlwc1tzaGlwXS5pc1N1bmsoKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGFsbFNoaXBzQXJlU3VuayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBhbGxTaGlwc0FyZVN1bms7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFsbFNoaXBzQXJlU3VuaztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29vcmRzLFxuICAgICAgICBzaGlwcyxcbiAgICAgICAgbW92ZXMsXG4gICAgICAgIGNvb3Jkc09mU2hpcHMsXG4gICAgICAgIHBsYWNlU2hpcHMsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGFsbFNoaXBzQXJlU3VuayxcbiAgICB9O1xufTtcbiIsImltcG9ydCB7IHBsYXllckdhbWVCb2FyZCwgY29tcHV0ZXJHYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcblxuY29uc3QgUGxheWVyID0gKGF0Q29vcmQpID0+IGNvbXB1dGVyR2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soYXRDb29yZCk7XG5cbmNvbnN0IENvbXB1dGVyID0gKHBvc3NpYmxlTW92ZXMpID0+IHtcbiAgICBjb25zdCBjb21wdXRlck1vdmUgPVxuICAgICAgICBwb3NzaWJsZU1vdmVzW35+KE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZU1vdmVzLmxlbmd0aCldO1xuICAgIGNvbnN0IG1vdmVJbmRleCA9IHBvc3NpYmxlTW92ZXMuZmluZEluZGV4KFxuICAgICAgICAoY29vcmQpID0+IGNvb3JkID09PSBjb21wdXRlck1vdmVcbiAgICApO1xuICAgIHBvc3NpYmxlTW92ZXMuc3BsaWNlKG1vdmVJbmRleCwgMSk7XG4gICAgcGxheWVyR2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soY29tcHV0ZXJNb3ZlKTtcbn07XG5cbmV4cG9ydCB7IENvbXB1dGVyLCBQbGF5ZXIgfTtcbiIsImV4cG9ydCBjb25zdCBTaGlwID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IHtcbiAgICAgICAgbGVuZ3RoOiAyLFxuICAgICAgICBoaXRzOiAwLFxuICAgICAgICBoaXQoKSB7XG4gICAgICAgICAgICB0aGlzLmhpdHMrKztcbiAgICAgICAgfSxcbiAgICAgICAgaXNTdW5rKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLmhpdHMpIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCBzdWJtYXJpbmUgPSB7XG4gICAgICAgIGxlbmd0aDogMyxcbiAgICAgICAgaGl0czogMCxcbiAgICAgICAgaGl0KCkge1xuICAgICAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRzKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgY3J1aXNlciA9IHtcbiAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICBoaXRzOiAwLFxuICAgICAgICBoaXQoKSB7XG4gICAgICAgICAgICB0aGlzLmhpdHMrKztcbiAgICAgICAgfSxcbiAgICAgICAgaXNTdW5rKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLmhpdHMpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IHtcbiAgICAgICAgbGVuZ3RoOiA0LFxuICAgICAgICBoaXRzOiAwLFxuICAgICAgICBoaXQoKSB7XG4gICAgICAgICAgICB0aGlzLmhpdHMrKztcbiAgICAgICAgfSxcbiAgICAgICAgaXNTdW5rKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLmhpdHMpIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCBjYXJyaWVyID0ge1xuICAgICAgICBsZW5ndGg6IDUsXG4gICAgICAgIGhpdHM6IDAsXG4gICAgICAgIGhpdCgpIHtcbiAgICAgICAgICAgIHRoaXMuaGl0cysrO1xuICAgICAgICB9LFxuICAgICAgICBpc1N1bmsoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IHRoaXMuaGl0cykgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZGVzdHJveWVyLCBzdWJtYXJpbmUsIGNydWlzZXIsIGJhdHRsZXNoaXAsIGNhcnJpZXIgfTtcbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gICAgcGFkZGluZzogMCAxNTBweDtcbiAgICBnYXA6IDUwcHg7XG59XG5oMSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xufVxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEyMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBsYXllckdhbWVCb2FyZCxcbi5jb21wdXRlckdhbWVCb2FyZCB7XG4gICAgaGVpZ2h0OiAzMzBweDtcbiAgICB3aWR0aDogMzMwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkOiAxZnIgLyByZXBlYXQoMTAsIDFmcik7XG59XG4ucGxheWVyR2FtZUJvYXJkID4gZGl2LFxuLmNvbXB1dGVyR2FtZUJvYXJkID4gZGl2IHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICAgIGhlaWdodDogMzNweDtcbiAgICB3aWR0aDogMzNweDtcbiAgICBtYXJnaW46IDA7XG59XG4ucGxheWVyR2FtZUJvYXJkID4gZGl2Om50aC1jaGlsZCgxMG4gKyAxKSxcbi5jb21wdXRlckdhbWVCb2FyZCA+IGRpdjpudGgtY2hpbGQoMTBuICsgMSkge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcbn1cbi5wbGF5ZXJHYW1lQm9hcmQgPiBkaXY6bnRoLWNoaWxkKC1uICsgMTApLFxuLmNvbXB1dGVyR2FtZUJvYXJkID4gZGl2Om50aC1jaGlsZCgtbiArIDEwKSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XG59XG4ucGxheWVyX3Jvd3MsXG4uY29tcHV0ZXJfcm93cyxcbi5wbGF5ZXJfY29sdW1ucyxcbi5jb21wdXRlcl9jb2x1bW5zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG4ucGxheWVyX3Jvd3Mge1xuICAgIGxlZnQ6IDEwNXB4O1xuICAgIHRvcDogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMThweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wbGF5ZXJfY29sdW1ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0b3A6IC0yNXB4O1xuICAgIGxlZnQ6IDE0OHB4O1xuICAgIGdhcDogMjVweDtcbn1cbi5jb21wdXRlcl9yb3dzIHtcbiAgICBsZWZ0OiA1NTVweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDE4cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29tcHV0ZXJfY29sdW1ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0b3A6IC0yNXB4O1xuICAgIGxlZnQ6IDU5N3B4O1xuICAgIGdhcDogMjVweDtcbn1cbi5jb250YWluZXIgLnNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG4uY29udGFpbmVyIGRpdi5hLW1pc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuLmNvbnRhaW5lciBkaXYuYS1oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi5hbm5vdW5jZS13aW5uZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDgxNDgzO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uYW5ub3VuY2Utd2lubmVyIGgxIHtcbiAgICBmb250LXNpemU6IDZyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgICB3aWR0aDogbWluKDE1Y2gpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hbm5vdW5jZS13aW5uZXIgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAyMHB4IDcwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7QUFDQTs7SUFFSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztBQUNiO0FBQ0E7O0lBRUksMkJBQTJCO0FBQy9CO0FBQ0E7O0lBRUksMEJBQTBCO0FBQzlCO0FBQ0E7Ozs7SUFJSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULGFBQWE7SUFDYixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsU0FBUztBQUNiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULGFBQWE7SUFDYixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsU0FBUztBQUNiO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZiw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgIHBhZGRpbmc6IDAgMTUwcHg7XFxuICAgIGdhcDogNTBweDtcXG59XFxuaDEge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG59XFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wbGF5ZXJHYW1lQm9hcmQsXFxuLmNvbXB1dGVyR2FtZUJvYXJkIHtcXG4gICAgaGVpZ2h0OiAzMzBweDtcXG4gICAgd2lkdGg6IDMzMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiAxZnIgLyByZXBlYXQoMTAsIDFmcik7XFxufVxcbi5wbGF5ZXJHYW1lQm9hcmQgPiBkaXYsXFxuLmNvbXB1dGVyR2FtZUJvYXJkID4gZGl2IHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XFxuICAgIGhlaWdodDogMzNweDtcXG4gICAgd2lkdGg6IDMzcHg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLnBsYXllckdhbWVCb2FyZCA+IGRpdjpudGgtY2hpbGQoMTBuICsgMSksXFxuLmNvbXB1dGVyR2FtZUJvYXJkID4gZGl2Om50aC1jaGlsZCgxMG4gKyAxKSB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcXG59XFxuLnBsYXllckdhbWVCb2FyZCA+IGRpdjpudGgtY2hpbGQoLW4gKyAxMCksXFxuLmNvbXB1dGVyR2FtZUJvYXJkID4gZGl2Om50aC1jaGlsZCgtbiArIDEwKSB7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xcbn1cXG4ucGxheWVyX3Jvd3MsXFxuLmNvbXB1dGVyX3Jvd3MsXFxuLnBsYXllcl9jb2x1bW5zLFxcbi5jb21wdXRlcl9jb2x1bW5zIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuLnBsYXllcl9yb3dzIHtcXG4gICAgbGVmdDogMTA1cHg7XFxuICAgIHRvcDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxOHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5wbGF5ZXJfY29sdW1ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRvcDogLTI1cHg7XFxuICAgIGxlZnQ6IDE0OHB4O1xcbiAgICBnYXA6IDI1cHg7XFxufVxcbi5jb21wdXRlcl9yb3dzIHtcXG4gICAgbGVmdDogNTU1cHg7XFxuICAgIHRvcDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxOHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jb21wdXRlcl9jb2x1bW5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdG9wOiAtMjVweDtcXG4gICAgbGVmdDogNTk3cHg7XFxuICAgIGdhcDogMjVweDtcXG59XFxuLmNvbnRhaW5lciAuc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcbi5jb250YWluZXIgZGl2LmEtbWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG4uY29udGFpbmVyIGRpdi5hLWhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLmFubm91bmNlLXdpbm5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwODE0ODM7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcbi5hbm5vdW5jZS13aW5uZXIgaDEge1xcbiAgICBmb250LXNpemU6IDZyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgVGltZXMsIHNlcmlmO1xcbiAgICB3aWR0aDogbWluKDE1Y2gpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5hbm5vdW5jZS13aW5uZXIgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMjBweCA3MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9nYW1lLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIkdhbWVCb2FyZCIsIlBsYXllciIsIkNvbXB1dGVyIiwiU2hpcCIsInBsYXllckdhbWVCb2FyZCIsImNvbXB1dGVyR2FtZUJvYXJkIiwiYWxsUG9zc2libGVNb3ZlcyIsImNvb3JkcyIsInBsYWNlU2hpcHNtYW51YWxseSIsInBsYWNlU2hpcHMiLCJyZW5kZXJHYW1lQm9hcmQiLCJwbGF5ZXJQbGF5R3JvdW5kIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29tcHV0ZXJQbGF5R3JvdW5kIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImNvb3JkIiwidmFsdWUiLCJzcXVhcmUiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwibW92ZXMiLCJoaXRzIiwiaW5jbHVkZXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJtaXNzZXMiLCJhcHBlbmRDaGlsZCIsImVyciIsImUiLCJmIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsInJlbmRlclNoaXBzIiwicGxheWVyU3F1YXJlcyIsIl90b0NvbnN1bWFibGVBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb21wdXRlclNxdWFyZXMiLCJzaGlwIiwiY29vcmRzT2ZTaGlwcyIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJkYXRhc2V0IiwiX2l0ZXJhdG9yNCIsIl9zdGVwNCIsInJlbW92ZUV4aXN0aW5nTWFya3MiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJwbGF5R2FtZSIsImFubm91bmNlV2lubmVyIiwid2lubmVyIiwid2lubmVyVGV4dCIsInRleHRDb250ZW50IiwicGFyZW50RWxlbWVudCIsInN0eWxlIiwiY3NzVGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsIm5vZGVOYW1lIiwiYWxsU2hpcHNBcmVTdW5rIiwicmVzdGFydEdhbWUiLCJyZXN0YXJ0QnRuIiwic2hpcHMiLCJhbHBoYU51bWJlcmljQ29udmVyc2lvbiIsIkEiLCJCIiwiQyIsIkQiLCJFIiwiRiIsIkciLCJIIiwiSSIsIkoiLCJjb252ZXJ0TnVtYmVyVG9BbHBoYSIsIm51bSIsImFscGhhIiwiYWxsQ29vcmRzIiwiaSIsImxlbmd0aCIsImoiLCJwdXNoIiwic2hpcFR5cGUiLCJzdGFydENvb3JkIiwiYXhpcyIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsIk51bWJlciIsInBhcnNlSW50Iiwic2xpY2UiLCJyZWNlaXZlQXR0YWNrIiwiYXRDb29yZCIsInBvc2l0aW9uT2ZTaGlwcyIsImhpdCIsImlzU3VuayIsInBvc3NpYmxlTW92ZXMiLCJjb21wdXRlck1vdmUiLCJNYXRoIiwicmFuZG9tIiwibW92ZUluZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwiZGVzdHJveWVyIiwic3VibWFyaW5lIiwiY3J1aXNlciIsImJhdHRsZXNoaXAiLCJjYXJyaWVyIl0sInNvdXJjZVJvb3QiOiIifQ==