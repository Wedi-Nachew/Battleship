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
var playGame = function playGame() {
  var computerPlayGround = document.querySelector(".computerGameBoard");
  var removeExistingMarks = function removeExistingMarks() {
    var playerPlayGround = document.querySelector(".playerGameBoard");
    var computerPlayGround = document.querySelector(".computerGameBoard");
    while (playerPlayGround.firstChild || computerPlayGround.firstChild) {
      playerPlayGround.removeChild(playerPlayGround.firstChild);
      computerPlayGround.removeChild(computerPlayGround.firstChild);
    }
  };
  var announceWinner = function announceWinner(winner) {
    var winnerText = document.querySelector(".announce-winner h1");
    winnerText.textContent = winner + " Wons!";
    winnerText.parentElement.style.cssText = "visibility: visible";
  };
  computerPlayGround.addEventListener("click", function (event) {
    if (event.target.nodeName === "DIV" && !playerGameBoard.allShipsAreSunk() && !computerGameBoard.allShipsAreSunk()) {
      removeExistingMarks();
      (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)(event.target.dataset.coord);
      (0,_player__WEBPACK_IMPORTED_MODULE_1__.Computer)();
      renderGameBoard();
      renderShips();
    }
    if (playerGameBoard.allShipsAreSunk() || computerGameBoard.allShipsAreSunk()) {
      playerGameBoard.allShipsAreSunk ? announceWinner("You") : announceWinner("The computer");
    }
  });
};
renderGameBoard();
renderShips();
playGame();

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

var Player = function Player(atCoord) {
  return _game__WEBPACK_IMPORTED_MODULE_0__.computerGameBoard.receiveAttack(atCoord);
};
var Computer = function Computer() {
  var allPossibleMoves = _game__WEBPACK_IMPORTED_MODULE_0__.computerGameBoard.coords();
  var computerMove = allPossibleMoves[~~(Math.random() * allPossibleMoves.length)];
  allPossibleMoves.splice(allPossibleMoves.findIndex(function (coord) {
    return coord === computerMove;
  }), 1);
  return _game__WEBPACK_IMPORTED_MODULE_0__.playerGameBoard.receiveAttack(computerMove);
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,SAAS;AACb;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,UAAU;IACV,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;;IAEI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,2BAA2B;AAC/B;AACA;;IAEI,4BAA4B;IAC5B,6BAA6B;IAC7B,YAAY;IACZ,WAAW;IACX,SAAS;AACb;AACA;;IAEI,2BAA2B;AAC/B;AACA;;IAEI,0BAA0B;AAC9B;AACA;;;;IAII,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,SAAS;IACT,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,UAAU;IACV,WAAW;IACX,SAAS;AACb;AACA;IACI,WAAW;IACX,SAAS;IACT,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,UAAU;IACV,WAAW;IACX,SAAS;AACb;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,qBAAqB;AACzB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,2BAA2B;IAC3B,2BAA2B;IAC3B,WAAW;IACX,YAAY;IACZ,WAAW;AACf;AACA;IACI,eAAe;IACf,4CAA4C;IAC5C,gBAAgB;IAChB,kBAAkB;AACtB","sourcesContent":[":root {\n    box-sizing: border-box;\n}\nbody {\n    display: flex;\n    flex-flow: column wrap;\n    padding: 0 150px;\n    gap: 50px;\n}\nh1 {\n    font-size: 2.5rem;\n    text-align: center;\n    font-family: cursive;\n}\n.container {\n    display: flex;\n    gap: 120px;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n.playerGameBoard,\n.computerGameBoard {\n    height: 330px;\n    width: 330px;\n    display: grid;\n    grid: 1fr / repeat(10, 1fr);\n}\n.playerGameBoard > div,\n.computerGameBoard > div {\n    border-right: 1px solid gray;\n    border-bottom: 1px solid gray;\n    height: 33px;\n    width: 33px;\n    margin: 0;\n}\n.playerGameBoard > div:nth-child(10n + 1),\n.computerGameBoard > div:nth-child(10n + 1) {\n    border-left: 1px solid gray;\n}\n.playerGameBoard > div:nth-child(-n + 10),\n.computerGameBoard > div:nth-child(-n + 10) {\n    border-top: 1px solid gray;\n}\n.player_rows,\n.computer_rows,\n.player_columns,\n.computer_columns {\n    position: absolute;\n    font-size: 0.8rem;\n}\n.player_rows {\n    left: 105px;\n    top: 10px;\n    display: flex;\n    gap: 18px;\n    flex-direction: column;\n    text-align: center;\n}\n.player_columns {\n    display: flex;\n    top: -25px;\n    left: 148px;\n    gap: 25px;\n}\n.computer_rows {\n    left: 555px;\n    top: 10px;\n    display: flex;\n    gap: 18px;\n    flex-direction: column;\n    text-align: center;\n}\n.computer_columns {\n    display: flex;\n    top: -25px;\n    left: 597px;\n    gap: 25px;\n}\n.container .ship {\n    background-color: gray;\n}\n.container div.a-miss {\n    background-color: green;\n}\n.container div.a-hit {\n    background-color: red;\n}\n.announce-winner {\n    position: absolute;\n    visibility: hidden;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #00081483;\n    backdrop-filter: blur(10px);\n    width: 100%;\n    height: 100%;\n    color: #fff;\n}\n.announce-winner h1 {\n    font-size: 6rem;\n    font-family: \"Times New Roman\", Times, serif;\n    width: min(15ch);\n    text-align: center;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5pbXBvcnQgeyBQbGF5ZXIsIENvbXB1dGVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5leHBvcnQgY29uc3QgcGxheWVyR2FtZUJvYXJkID0gR2FtZUJvYXJkKCk7XG5leHBvcnQgY29uc3QgY29tcHV0ZXJHYW1lQm9hcmQgPSBHYW1lQm9hcmQoKTtcbnBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXBzKFwiZGVzdHJveWVyXCIsIFwiQTJcIiwgXCJob3Jpem9udGFsXCIpO1xucGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcHMoXCJzdWJtYXJpbmVcIiwgXCJFMVwiLCBcImhvcml6b250YWxcIik7XG5wbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwcyhcImNydWlzZXJcIiwgXCJGMTBcIiwgXCJ2ZXJ0aWNhbFwiKTtcbnBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXBzKFwiYmF0dGxlc2hpcFwiLCBcIkoxXCIsIFwiaG9yaXpvbnRhbFwiKTtcbnBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXBzKFwiY2FycmllclwiLCBcIkM4XCIsIFwidmVydGljYWxcIik7XG5jb21wdXRlckdhbWVCb2FyZC5wbGFjZVNoaXBzKFwiZGVzdHJveWVyXCIsIFwiSjJcIiwgXCJob3Jpem9udGFsXCIpO1xuY29tcHV0ZXJHYW1lQm9hcmQucGxhY2VTaGlwcyhcInN1Ym1hcmluZVwiLCBcIkMxMFwiLCBcInZlcnRpY2FsXCIpO1xuY29tcHV0ZXJHYW1lQm9hcmQucGxhY2VTaGlwcyhcImNydWlzZXJcIiwgXCJEMlwiLCBcInZlcnRpY2FsXCIpO1xuY29tcHV0ZXJHYW1lQm9hcmQucGxhY2VTaGlwcyhcImJhdHRsZXNoaXBcIiwgXCJBNFwiLCBcImhvcml6b250YWxcIik7XG5jb21wdXRlckdhbWVCb2FyZC5wbGFjZVNoaXBzKFwiY2FycmllclwiLCBcIkU0XCIsIFwidmVydGljYWxcIik7XG5cbmNvbnN0IHJlbmRlckdhbWVCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJQbGF5R3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJHYW1lQm9hcmRcIik7XG4gICAgY29uc3QgY29tcHV0ZXJQbGF5R3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlckdhbWVCb2FyZFwiKTtcbiAgICBmb3IgKGxldCBjb29yZCBvZiBwbGF5ZXJHYW1lQm9hcmQuY29vcmRzKCkpIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEtY29vcmRcIiwgY29vcmQpO1xuICAgICAgICBpZiAocGxheWVyR2FtZUJvYXJkLm1vdmVzLmhpdHMuaW5jbHVkZXMoY29vcmQpKSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImEtaGl0XCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllckdhbWVCb2FyZC5tb3Zlcy5taXNzZXMuaW5jbHVkZXMoY29vcmQpKSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImEtbWlzc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBwbGF5ZXJQbGF5R3JvdW5kLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuICAgIGZvciAobGV0IGNvb3JkIG9mIGNvbXB1dGVyR2FtZUJvYXJkLmNvb3JkcygpKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvb3JkXCIsIGNvb3JkKTtcblxuICAgICAgICBpZiAoY29tcHV0ZXJHYW1lQm9hcmQubW92ZXMuaGl0cy5pbmNsdWRlcyhjb29yZCkpIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiYS1oaXRcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoY29tcHV0ZXJHYW1lQm9hcmQubW92ZXMubWlzc2VzLmluY2x1ZGVzKGNvb3JkKSkge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJhLW1pc3NcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29tcHV0ZXJQbGF5R3JvdW5kLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxufTtcbmNvbnN0IHJlbmRlclNoaXBzID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllclNxdWFyZXMgPSBbXG4gICAgICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyR2FtZUJvYXJkID4gZGl2XCIpLFxuICAgIF07XG4gICAgY29uc3QgY29tcHV0ZXJTcXVhcmVzID0gW1xuICAgICAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbXB1dGVyR2FtZUJvYXJkID4gZGl2XCIpLFxuICAgIF07XG5cbiAgICBmb3IgKGxldCBzaGlwIGluIHBsYXllckdhbWVCb2FyZC5jb29yZHNPZlNoaXBzKSB7XG4gICAgICAgIGZvciAobGV0IHNxdWFyZSBvZiBwbGF5ZXJTcXVhcmVzKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgcGxheWVyR2FtZUJvYXJkLmNvb3Jkc09mU2hpcHNbc2hpcF0uaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5kYXRhc2V0LmNvb3JkXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IHNoaXAgaW4gY29tcHV0ZXJHYW1lQm9hcmQuY29vcmRzT2ZTaGlwcykge1xuICAgICAgICBmb3IgKGxldCBzcXVhcmUgb2YgY29tcHV0ZXJTcXVhcmVzKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgY29tcHV0ZXJHYW1lQm9hcmQuY29vcmRzT2ZTaGlwc1tzaGlwXS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmRhdGFzZXQuY29vcmRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgcGxheUdhbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgY29tcHV0ZXJQbGF5R3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlckdhbWVCb2FyZFwiKTtcbiAgICBjb25zdCByZW1vdmVFeGlzdGluZ01hcmtzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwbGF5ZXJQbGF5R3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJHYW1lQm9hcmRcIik7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyUGxheUdyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXJHYW1lQm9hcmRcIik7XG4gICAgICAgIHdoaWxlIChwbGF5ZXJQbGF5R3JvdW5kLmZpcnN0Q2hpbGQgfHwgY29tcHV0ZXJQbGF5R3JvdW5kLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBsYXllclBsYXlHcm91bmQucmVtb3ZlQ2hpbGQocGxheWVyUGxheUdyb3VuZC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIGNvbXB1dGVyUGxheUdyb3VuZC5yZW1vdmVDaGlsZChjb21wdXRlclBsYXlHcm91bmQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGFubm91bmNlV2lubmVyID0gKHdpbm5lcikgPT4ge1xuICAgICAgICBjb25zdCB3aW5uZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbm5vdW5jZS13aW5uZXIgaDFcIik7XG4gICAgICAgIHdpbm5lclRleHQudGV4dENvbnRlbnQgPSB3aW5uZXIgKyBcIiBXb25zIVwiO1xuICAgICAgICB3aW5uZXJUZXh0LnBhcmVudEVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IFwidmlzaWJpbGl0eTogdmlzaWJsZVwiO1xuICAgIH07XG5cbiAgICBjb21wdXRlclBsYXlHcm91bmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBldmVudC50YXJnZXQubm9kZU5hbWUgPT09IFwiRElWXCIgJiZcbiAgICAgICAgICAgICFwbGF5ZXJHYW1lQm9hcmQuYWxsU2hpcHNBcmVTdW5rKCkgJiZcbiAgICAgICAgICAgICFjb21wdXRlckdhbWVCb2FyZC5hbGxTaGlwc0FyZVN1bmsoKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJlbW92ZUV4aXN0aW5nTWFya3MoKTtcbiAgICAgICAgICAgIFBsYXllcihldmVudC50YXJnZXQuZGF0YXNldC5jb29yZCk7XG4gICAgICAgICAgICBDb21wdXRlcigpO1xuICAgICAgICAgICAgcmVuZGVyR2FtZUJvYXJkKCk7XG4gICAgICAgICAgICByZW5kZXJTaGlwcygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHBsYXllckdhbWVCb2FyZC5hbGxTaGlwc0FyZVN1bmsoKSB8fFxuICAgICAgICAgICAgY29tcHV0ZXJHYW1lQm9hcmQuYWxsU2hpcHNBcmVTdW5rKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBwbGF5ZXJHYW1lQm9hcmQuYWxsU2hpcHNBcmVTdW5rXG4gICAgICAgICAgICAgICAgPyBhbm5vdW5jZVdpbm5lcihcIllvdVwiKVxuICAgICAgICAgICAgICAgIDogYW5ub3VuY2VXaW5uZXIoXCJUaGUgY29tcHV0ZXJcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5yZW5kZXJHYW1lQm9hcmQoKTtcbnJlbmRlclNoaXBzKCk7XG5wbGF5R2FtZSgpO1xuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxuZXhwb3J0IGNvbnN0IEdhbWVCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBtb3ZlcyA9IHsgaGl0czogW10sIG1pc3NlczogW10gfTtcbiAgICBjb25zdCBzaGlwcyA9IFNoaXAoKTtcbiAgICBjb25zdCBjb29yZHNPZlNoaXBzID0ge307XG4gICAgY29uc3QgYWxwaGFOdW1iZXJpY0NvbnZlcnNpb24gPSB7XG4gICAgICAgIEE6IDEsXG4gICAgICAgIEI6IDIsXG4gICAgICAgIEM6IDMsXG4gICAgICAgIEQ6IDQsXG4gICAgICAgIEU6IDUsXG4gICAgICAgIEY6IDYsXG4gICAgICAgIEc6IDcsXG4gICAgICAgIEg6IDgsXG4gICAgICAgIEk6IDksXG4gICAgICAgIEo6IDEwLFxuICAgIH07XG4gICAgZnVuY3Rpb24gY29udmVydE51bWJlclRvQWxwaGEobnVtKSB7XG4gICAgICAgIGZvciAobGV0IGFscGhhIGluIGFscGhhTnVtYmVyaWNDb252ZXJzaW9uKSB7XG4gICAgICAgICAgICBpZiAoYWxwaGFOdW1iZXJpY0NvbnZlcnNpb25bYWxwaGFdID09PSBudW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxwaGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgY29vcmRzID0gKCkgPT4ge1xuICAgICAgICBsZXQgYWxsQ29vcmRzID0gW107XG4gICAgICAgIGxldCBhbHBoYSA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxwaGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgMTE7IGorKykge1xuICAgICAgICAgICAgICAgIGFsbENvb3Jkcy5wdXNoKGFscGhhW2ldICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWxsQ29vcmRzO1xuICAgIH07XG4gICAgY29uc3QgcGxhY2VTaGlwcyA9IChzaGlwVHlwZSwgc3RhcnRDb29yZCwgYXhpcyA9IFwiaG9yaXpvbnRhbFwiKSA9PiB7XG4gICAgICAgIGNvb3Jkc09mU2hpcHNbc2hpcFR5cGVdID0gW3N0YXJ0Q29vcmRdO1xuICAgICAgICBpZiAoc2hpcHNbc2hpcFR5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcHNbc2hpcFR5cGVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF4aXMgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0Q29vcmQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRDb29yZFswXSArIChOdW1iZXIucGFyc2VJbnQoc3RhcnRDb29yZFsxXSkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRzT2ZTaGlwc1tzaGlwVHlwZV0ucHVzaChzdGFydENvb3JkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGF4aXMgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgICAgICBzdGFydENvb3JkID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnZlcnROdW1iZXJUb0FscGhhKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlci5wYXJzZUludChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxwaGFOdW1iZXJpY0NvbnZlcnNpb25bc3RhcnRDb29yZFswXV0gKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSArIHN0YXJ0Q29vcmQuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvb3Jkc09mU2hpcHNbc2hpcFR5cGVdLnB1c2goc3RhcnRDb29yZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb29yZHNPZlNoaXBzO1xuICAgIH07XG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChhdENvb3JkKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uT2ZTaGlwcyA9IHBsYWNlU2hpcHMoKTtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBpbiBwb3NpdGlvbk9mU2hpcHMpIHtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbk9mU2hpcHNbc2hpcF0uaW5jbHVkZXMoYXRDb29yZCkpIHtcbiAgICAgICAgICAgICAgICBzaGlwc1tzaGlwXS5oaXQoKTtcbiAgICAgICAgICAgICAgICBtb3Zlcy5oaXRzLnB1c2goYXRDb29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtb3Zlcy5oaXRzLmluY2x1ZGVzKGF0Q29vcmQpKSB7XG4gICAgICAgICAgICBtb3Zlcy5taXNzZXMucHVzaChhdENvb3JkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtb3ZlcztcbiAgICB9O1xuICAgIGNvbnN0IGFsbFNoaXBzQXJlU3VuayA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFsbFNoaXBzQXJlU3VuayA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IHNoaXAgaW4gc2hpcHMpIHtcbiAgICAgICAgICAgIGlmIChzaGlwc1tzaGlwXS5pc1N1bmsoKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGFsbFNoaXBzQXJlU3VuayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBhbGxTaGlwc0FyZVN1bms7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFsbFNoaXBzQXJlU3VuaztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29vcmRzLFxuICAgICAgICBzaGlwcyxcbiAgICAgICAgbW92ZXMsXG4gICAgICAgIGNvb3Jkc09mU2hpcHMsXG4gICAgICAgIHBsYWNlU2hpcHMsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGFsbFNoaXBzQXJlU3VuayxcbiAgICB9O1xufTtcbiIsImltcG9ydCB7IHBsYXllckdhbWVCb2FyZCwgY29tcHV0ZXJHYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lXCI7XG5cbmV4cG9ydCBjb25zdCBQbGF5ZXIgPSAoYXRDb29yZCkgPT4ge1xuICAgIHJldHVybiBjb21wdXRlckdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGF0Q29vcmQpO1xufTtcblxuZXhwb3J0IGNvbnN0IENvbXB1dGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGFsbFBvc3NpYmxlTW92ZXMgPSBjb21wdXRlckdhbWVCb2FyZC5jb29yZHMoKTtcbiAgICBjb25zdCBjb21wdXRlck1vdmUgPVxuICAgICAgICBhbGxQb3NzaWJsZU1vdmVzW35+KE1hdGgucmFuZG9tKCkgKiBhbGxQb3NzaWJsZU1vdmVzLmxlbmd0aCldO1xuICAgIGFsbFBvc3NpYmxlTW92ZXMuc3BsaWNlKFxuICAgICAgICBhbGxQb3NzaWJsZU1vdmVzLmZpbmRJbmRleCgoY29vcmQpID0+IGNvb3JkID09PSBjb21wdXRlck1vdmUpLFxuICAgICAgICAxXG4gICAgKTtcbiAgICByZXR1cm4gcGxheWVyR2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soY29tcHV0ZXJNb3ZlKTtcbn07XG4iLCJleHBvcnQgY29uc3QgU2hpcCA9ICgpID0+IHtcbiAgICBjb25zdCBkZXN0cm95ZXIgPSB7XG4gICAgICAgIGxlbmd0aDogMixcbiAgICAgICAgaGl0czogMCxcbiAgICAgICAgaGl0KCkge1xuICAgICAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRzKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgY29uc3Qgc3VibWFyaW5lID0ge1xuICAgICAgICBsZW5ndGg6IDMsXG4gICAgICAgIGhpdHM6IDAsXG4gICAgICAgIGhpdCgpIHtcbiAgICAgICAgICAgIHRoaXMuaGl0cysrO1xuICAgICAgICB9LFxuICAgICAgICBpc1N1bmsoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IHRoaXMuaGl0cykgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IGNydWlzZXIgPSB7XG4gICAgICAgIGxlbmd0aDogMyxcbiAgICAgICAgaGl0czogMCxcbiAgICAgICAgaGl0KCkge1xuICAgICAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRzKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSB7XG4gICAgICAgIGxlbmd0aDogNCxcbiAgICAgICAgaGl0czogMCxcbiAgICAgICAgaGl0KCkge1xuICAgICAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRzKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgY2FycmllciA9IHtcbiAgICAgICAgbGVuZ3RoOiA1LFxuICAgICAgICBoaXRzOiAwLFxuICAgICAgICBoaXQoKSB7XG4gICAgICAgICAgICB0aGlzLmhpdHMrKztcbiAgICAgICAgfSxcbiAgICAgICAgaXNTdW5rKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLmhpdHMpIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiB7IGRlc3Ryb3llciwgc3VibWFyaW5lLCBjcnVpc2VyLCBiYXR0bGVzaGlwLCBjYXJyaWVyIH07XG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICAgIHBhZGRpbmc6IDAgMTUwcHg7XG4gICAgZ2FwOiA1MHB4O1xufVxuaDEge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbn1cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wbGF5ZXJHYW1lQm9hcmQsXG4uY29tcHV0ZXJHYW1lQm9hcmQge1xuICAgIGhlaWdodDogMzMwcHg7XG4gICAgd2lkdGg6IDMzMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZDogMWZyIC8gcmVwZWF0KDEwLCAxZnIpO1xufVxuLnBsYXllckdhbWVCb2FyZCA+IGRpdixcbi5jb21wdXRlckdhbWVCb2FyZCA+IGRpdiB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgICBoZWlnaHQ6IDMzcHg7XG4gICAgd2lkdGg6IDMzcHg7XG4gICAgbWFyZ2luOiAwO1xufVxuLnBsYXllckdhbWVCb2FyZCA+IGRpdjpudGgtY2hpbGQoMTBuICsgMSksXG4uY29tcHV0ZXJHYW1lQm9hcmQgPiBkaXY6bnRoLWNoaWxkKDEwbiArIDEpIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XG59XG4ucGxheWVyR2FtZUJvYXJkID4gZGl2Om50aC1jaGlsZCgtbiArIDEwKSxcbi5jb21wdXRlckdhbWVCb2FyZCA+IGRpdjpudGgtY2hpbGQoLW4gKyAxMCkge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xufVxuLnBsYXllcl9yb3dzLFxuLmNvbXB1dGVyX3Jvd3MsXG4ucGxheWVyX2NvbHVtbnMsXG4uY29tcHV0ZXJfY29sdW1ucyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLnBsYXllcl9yb3dzIHtcbiAgICBsZWZ0OiAxMDVweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDE4cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGxheWVyX2NvbHVtbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdG9wOiAtMjVweDtcbiAgICBsZWZ0OiAxNDhweDtcbiAgICBnYXA6IDI1cHg7XG59XG4uY29tcHV0ZXJfcm93cyB7XG4gICAgbGVmdDogNTU1cHg7XG4gICAgdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxOHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbXB1dGVyX2NvbHVtbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdG9wOiAtMjVweDtcbiAgICBsZWZ0OiA1OTdweDtcbiAgICBnYXA6IDI1cHg7XG59XG4uY29udGFpbmVyIC5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuLmNvbnRhaW5lciBkaXYuYS1taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbi5jb250YWluZXIgZGl2LmEtaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4uYW5ub3VuY2Utd2lubmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwODE0ODM7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5hbm5vdW5jZS13aW5uZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICAgIHdpZHRoOiBtaW4oMTVjaCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0FBQy9CO0FBQ0E7O0lBRUksNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7QUFDYjtBQUNBOztJQUVJLDJCQUEyQjtBQUMvQjtBQUNBOztJQUVJLDBCQUEwQjtBQUM5QjtBQUNBOzs7O0lBSUksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxhQUFhO0lBQ2IsU0FBUztJQUNULHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsV0FBVztJQUNYLFNBQVM7QUFDYjtBQUNBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxhQUFhO0lBQ2IsU0FBUztJQUNULHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsV0FBVztJQUNYLFNBQVM7QUFDYjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZiw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBwYWRkaW5nOiAwIDE1MHB4O1xcbiAgICBnYXA6IDUwcHg7XFxufVxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxufVxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucGxheWVyR2FtZUJvYXJkLFxcbi5jb21wdXRlckdhbWVCb2FyZCB7XFxuICAgIGhlaWdodDogMzMwcHg7XFxuICAgIHdpZHRoOiAzMzBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogMWZyIC8gcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG4ucGxheWVyR2FtZUJvYXJkID4gZGl2LFxcbi5jb21wdXRlckdhbWVCb2FyZCA+IGRpdiB7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcbiAgICBoZWlnaHQ6IDMzcHg7XFxuICAgIHdpZHRoOiAzM3B4O1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5wbGF5ZXJHYW1lQm9hcmQgPiBkaXY6bnRoLWNoaWxkKDEwbiArIDEpLFxcbi5jb21wdXRlckdhbWVCb2FyZCA+IGRpdjpudGgtY2hpbGQoMTBuICsgMSkge1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XFxufVxcbi5wbGF5ZXJHYW1lQm9hcmQgPiBkaXY6bnRoLWNoaWxkKC1uICsgMTApLFxcbi5jb21wdXRlckdhbWVCb2FyZCA+IGRpdjpudGgtY2hpbGQoLW4gKyAxMCkge1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcXG59XFxuLnBsYXllcl9yb3dzLFxcbi5jb21wdXRlcl9yb3dzLFxcbi5wbGF5ZXJfY29sdW1ucyxcXG4uY29tcHV0ZXJfY29sdW1ucyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcbi5wbGF5ZXJfcm93cyB7XFxuICAgIGxlZnQ6IDEwNXB4O1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMThweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ucGxheWVyX2NvbHVtbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0b3A6IC0yNXB4O1xcbiAgICBsZWZ0OiAxNDhweDtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG4uY29tcHV0ZXJfcm93cyB7XFxuICAgIGxlZnQ6IDU1NXB4O1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMThweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uY29tcHV0ZXJfY29sdW1ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRvcDogLTI1cHg7XFxuICAgIGxlZnQ6IDU5N3B4O1xcbiAgICBnYXA6IDI1cHg7XFxufVxcbi5jb250YWluZXIgLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG4uY29udGFpbmVyIGRpdi5hLW1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuLmNvbnRhaW5lciBkaXYuYS1oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbi5hbm5vdW5jZS13aW5uZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDgxNDgzO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG4uYW5ub3VuY2Utd2lubmVyIGgxIHtcXG4gICAgZm9udC1zaXplOiA2cmVtO1xcbiAgICBmb250LWZhbWlseTogXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIFRpbWVzLCBzZXJpZjtcXG4gICAgd2lkdGg6IG1pbigxNWNoKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZ2FtZS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJHYW1lQm9hcmQiLCJQbGF5ZXIiLCJDb21wdXRlciIsIlNoaXAiLCJwbGF5ZXJHYW1lQm9hcmQiLCJjb21wdXRlckdhbWVCb2FyZCIsInBsYWNlU2hpcHMiLCJyZW5kZXJHYW1lQm9hcmQiLCJwbGF5ZXJQbGF5R3JvdW5kIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29tcHV0ZXJQbGF5R3JvdW5kIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJjb29yZHMiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImNvb3JkIiwidmFsdWUiLCJzcXVhcmUiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwibW92ZXMiLCJoaXRzIiwiaW5jbHVkZXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJtaXNzZXMiLCJhcHBlbmRDaGlsZCIsImVyciIsImUiLCJmIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsInJlbmRlclNoaXBzIiwicGxheWVyU3F1YXJlcyIsIl90b0NvbnN1bWFibGVBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb21wdXRlclNxdWFyZXMiLCJzaGlwIiwiY29vcmRzT2ZTaGlwcyIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJkYXRhc2V0IiwiX2l0ZXJhdG9yNCIsIl9zdGVwNCIsInBsYXlHYW1lIiwicmVtb3ZlRXhpc3RpbmdNYXJrcyIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImFubm91bmNlV2lubmVyIiwid2lubmVyIiwid2lubmVyVGV4dCIsInRleHRDb250ZW50IiwicGFyZW50RWxlbWVudCIsInN0eWxlIiwiY3NzVGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsIm5vZGVOYW1lIiwiYWxsU2hpcHNBcmVTdW5rIiwic2hpcHMiLCJhbHBoYU51bWJlcmljQ29udmVyc2lvbiIsIkEiLCJCIiwiQyIsIkQiLCJFIiwiRiIsIkciLCJIIiwiSSIsIkoiLCJjb252ZXJ0TnVtYmVyVG9BbHBoYSIsIm51bSIsImFscGhhIiwiYWxsQ29vcmRzIiwiaSIsImxlbmd0aCIsImoiLCJwdXNoIiwic2hpcFR5cGUiLCJzdGFydENvb3JkIiwiYXhpcyIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsIk51bWJlciIsInBhcnNlSW50Iiwic2xpY2UiLCJyZWNlaXZlQXR0YWNrIiwiYXRDb29yZCIsInBvc2l0aW9uT2ZTaGlwcyIsImhpdCIsImlzU3VuayIsImFsbFBvc3NpYmxlTW92ZXMiLCJjb21wdXRlck1vdmUiLCJNYXRoIiwicmFuZG9tIiwic3BsaWNlIiwiZmluZEluZGV4IiwiZGVzdHJveWVyIiwic3VibWFyaW5lIiwiY3J1aXNlciIsImJhdHRsZXNoaXAiLCJjYXJyaWVyIl0sInNvdXJjZVJvb3QiOiIifQ==