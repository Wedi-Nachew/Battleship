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
  computerPlayGround.addEventListener("click", function (event) {
    if (event.target.nodeName === "DIV" && !playerGameBoard.allShipsAreSunk() && !computerGameBoard.allShipsAreSunk()) {
      removeExistingMarks();
      (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)(event.target.dataset.coord);
      (0,_player__WEBPACK_IMPORTED_MODULE_1__.Computer)();
      renderGameBoard();
      renderShips();
    }
    console.log(computerGameBoard.allShipsAreSunk());
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
  var allPossibleMoves = _game__WEBPACK_IMPORTED_MODULE_0__.playerGameBoard.coords();
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,SAAS;AACb;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,UAAU;IACV,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;;IAEI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,2BAA2B;AAC/B;AACA;;IAEI,4BAA4B;IAC5B,6BAA6B;IAC7B,YAAY;IACZ,WAAW;IACX,SAAS;AACb;AACA;;IAEI,2BAA2B;AAC/B;AACA;;IAEI,0BAA0B;AAC9B;AACA;;;;IAII,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,SAAS;IACT,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,UAAU;IACV,WAAW;IACX,SAAS;AACb;AACA;IACI,WAAW;IACX,SAAS;IACT,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,UAAU;IACV,WAAW;IACX,SAAS;AACb;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,qBAAqB;AACzB","sourcesContent":[":root {\n    box-sizing: border-box;\n}\nbody {\n    display: flex;\n    flex-flow: column wrap;\n    padding: 0 150px;\n    gap: 50px;\n}\nh1 {\n    font-size: 2.5rem;\n    text-align: center;\n    font-family: cursive;\n}\n.container {\n    display: flex;\n    gap: 120px;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n.playerGameBoard,\n.computerGameBoard {\n    height: 330px;\n    width: 330px;\n    display: grid;\n    grid: 1fr / repeat(10, 1fr);\n}\n.playerGameBoard > div,\n.computerGameBoard > div {\n    border-right: 1px solid gray;\n    border-bottom: 1px solid gray;\n    height: 33px;\n    width: 33px;\n    margin: 0;\n}\n.playerGameBoard > div:nth-child(10n + 1),\n.computerGameBoard > div:nth-child(10n + 1) {\n    border-left: 1px solid gray;\n}\n.playerGameBoard > div:nth-child(-n + 10),\n.computerGameBoard > div:nth-child(-n + 10) {\n    border-top: 1px solid gray;\n}\n.player_rows,\n.computer_rows,\n.player_columns,\n.computer_columns {\n    position: absolute;\n    font-size: 0.8rem;\n}\n.player_rows {\n    left: 105px;\n    top: 10px;\n    display: flex;\n    gap: 18px;\n    flex-direction: column;\n    text-align: center;\n}\n.player_columns {\n    display: flex;\n    top: -25px;\n    left: 148px;\n    gap: 25px;\n}\n.computer_rows {\n    left: 555px;\n    top: 10px;\n    display: flex;\n    gap: 18px;\n    flex-direction: column;\n    text-align: center;\n}\n.computer_columns {\n    display: flex;\n    top: -25px;\n    left: 597px;\n    gap: 25px;\n}\n.container .ship {\n    background-color: gray;\n}\n.container div.a-miss {\n    background-color: green;\n}\n.container div.a-hit {\n    background-color: red;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuaW1wb3J0IHsgUGxheWVyLCBDb21wdXRlciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZXhwb3J0IGNvbnN0IHBsYXllckdhbWVCb2FyZCA9IEdhbWVCb2FyZCgpO1xuZXhwb3J0IGNvbnN0IGNvbXB1dGVyR2FtZUJvYXJkID0gR2FtZUJvYXJkKCk7XG5wbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwcyhcImRlc3Ryb3llclwiLCBcIkEyXCIsIFwiaG9yaXpvbnRhbFwiKTtcbnBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXBzKFwic3VibWFyaW5lXCIsIFwiRTFcIiwgXCJob3Jpem9udGFsXCIpO1xucGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcHMoXCJjcnVpc2VyXCIsIFwiRjEwXCIsIFwidmVydGljYWxcIik7XG5wbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwcyhcImJhdHRsZXNoaXBcIiwgXCJKMVwiLCBcImhvcml6b250YWxcIik7XG5wbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwcyhcImNhcnJpZXJcIiwgXCJDOFwiLCBcInZlcnRpY2FsXCIpO1xuY29tcHV0ZXJHYW1lQm9hcmQucGxhY2VTaGlwcyhcImRlc3Ryb3llclwiLCBcIkoyXCIsIFwiaG9yaXpvbnRhbFwiKTtcbmNvbXB1dGVyR2FtZUJvYXJkLnBsYWNlU2hpcHMoXCJzdWJtYXJpbmVcIiwgXCJDMTBcIiwgXCJ2ZXJ0aWNhbFwiKTtcbmNvbXB1dGVyR2FtZUJvYXJkLnBsYWNlU2hpcHMoXCJjcnVpc2VyXCIsIFwiRDJcIiwgXCJ2ZXJ0aWNhbFwiKTtcbmNvbXB1dGVyR2FtZUJvYXJkLnBsYWNlU2hpcHMoXCJiYXR0bGVzaGlwXCIsIFwiQTRcIiwgXCJob3Jpem9udGFsXCIpO1xuY29tcHV0ZXJHYW1lQm9hcmQucGxhY2VTaGlwcyhcImNhcnJpZXJcIiwgXCJFNFwiLCBcInZlcnRpY2FsXCIpO1xuXG5jb25zdCByZW5kZXJHYW1lQm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyUGxheUdyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyR2FtZUJvYXJkXCIpO1xuICAgIGNvbnN0IGNvbXB1dGVyUGxheUdyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXJHYW1lQm9hcmRcIik7XG4gICAgZm9yIChsZXQgY29vcmQgb2YgcGxheWVyR2FtZUJvYXJkLmNvb3JkcygpKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvb3JkXCIsIGNvb3JkKTtcbiAgICAgICAgaWYgKHBsYXllckdhbWVCb2FyZC5tb3Zlcy5oaXRzLmluY2x1ZGVzKGNvb3JkKSkge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJhLWhpdFwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJHYW1lQm9hcmQubW92ZXMubWlzc2VzLmluY2x1ZGVzKGNvb3JkKSkge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJhLW1pc3NcIik7XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyUGxheUdyb3VuZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cbiAgICBmb3IgKGxldCBjb29yZCBvZiBjb21wdXRlckdhbWVCb2FyZC5jb29yZHMoKSkge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS1jb29yZFwiLCBjb29yZCk7XG5cbiAgICAgICAgaWYgKGNvbXB1dGVyR2FtZUJvYXJkLm1vdmVzLmhpdHMuaW5jbHVkZXMoY29vcmQpKSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImEtaGl0XCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbXB1dGVyR2FtZUJvYXJkLm1vdmVzLm1pc3Nlcy5pbmNsdWRlcyhjb29yZCkpIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiYS1taXNzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbXB1dGVyUGxheUdyb3VuZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cbn07XG5jb25zdCByZW5kZXJTaGlwcyA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJTcXVhcmVzID0gW1xuICAgICAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllckdhbWVCb2FyZCA+IGRpdlwiKSxcbiAgICBdO1xuICAgIGNvbnN0IGNvbXB1dGVyU3F1YXJlcyA9IFtcbiAgICAgICAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21wdXRlckdhbWVCb2FyZCA+IGRpdlwiKSxcbiAgICBdO1xuXG4gICAgZm9yIChsZXQgc2hpcCBpbiBwbGF5ZXJHYW1lQm9hcmQuY29vcmRzT2ZTaGlwcykge1xuICAgICAgICBmb3IgKGxldCBzcXVhcmUgb2YgcGxheWVyU3F1YXJlcykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHBsYXllckdhbWVCb2FyZC5jb29yZHNPZlNoaXBzW3NoaXBdLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuZGF0YXNldC5jb29yZFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBzaGlwIGluIGNvbXB1dGVyR2FtZUJvYXJkLmNvb3Jkc09mU2hpcHMpIHtcbiAgICAgICAgZm9yIChsZXQgc3F1YXJlIG9mIGNvbXB1dGVyU3F1YXJlcykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGNvbXB1dGVyR2FtZUJvYXJkLmNvb3Jkc09mU2hpcHNbc2hpcF0uaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5kYXRhc2V0LmNvb3JkXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IHBsYXlHYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbXB1dGVyUGxheUdyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXJHYW1lQm9hcmRcIik7XG4gICAgY29uc3QgcmVtb3ZlRXhpc3RpbmdNYXJrcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcGxheWVyUGxheUdyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyR2FtZUJvYXJkXCIpO1xuICAgICAgICBjb25zdCBjb21wdXRlclBsYXlHcm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyR2FtZUJvYXJkXCIpO1xuICAgICAgICB3aGlsZSAocGxheWVyUGxheUdyb3VuZC5maXJzdENoaWxkIHx8IGNvbXB1dGVyUGxheUdyb3VuZC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBwbGF5ZXJQbGF5R3JvdW5kLnJlbW92ZUNoaWxkKHBsYXllclBsYXlHcm91bmQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICBjb21wdXRlclBsYXlHcm91bmQucmVtb3ZlQ2hpbGQoY29tcHV0ZXJQbGF5R3JvdW5kLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbXB1dGVyUGxheUdyb3VuZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5ub2RlTmFtZSA9PT0gXCJESVZcIiAmJlxuICAgICAgICAgICAgIXBsYXllckdhbWVCb2FyZC5hbGxTaGlwc0FyZVN1bmsoKSAmJlxuICAgICAgICAgICAgIWNvbXB1dGVyR2FtZUJvYXJkLmFsbFNoaXBzQXJlU3VuaygpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmVtb3ZlRXhpc3RpbmdNYXJrcygpO1xuICAgICAgICAgICAgUGxheWVyKGV2ZW50LnRhcmdldC5kYXRhc2V0LmNvb3JkKTtcbiAgICAgICAgICAgIENvbXB1dGVyKCk7XG4gICAgICAgICAgICByZW5kZXJHYW1lQm9hcmQoKTtcbiAgICAgICAgICAgIHJlbmRlclNoaXBzKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coY29tcHV0ZXJHYW1lQm9hcmQuYWxsU2hpcHNBcmVTdW5rKCkpO1xuICAgIH0pO1xufTtcbnJlbmRlckdhbWVCb2FyZCgpO1xucmVuZGVyU2hpcHMoKTtcbnBsYXlHYW1lKCk7XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgY29uc3QgR2FtZUJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vdmVzID0geyBoaXRzOiBbXSwgbWlzc2VzOiBbXSB9O1xuICAgIGNvbnN0IHNoaXBzID0gU2hpcCgpO1xuICAgIGNvbnN0IGNvb3Jkc09mU2hpcHMgPSB7fTtcbiAgICBjb25zdCBhbHBoYU51bWJlcmljQ29udmVyc2lvbiA9IHtcbiAgICAgICAgQTogMSxcbiAgICAgICAgQjogMixcbiAgICAgICAgQzogMyxcbiAgICAgICAgRDogNCxcbiAgICAgICAgRTogNSxcbiAgICAgICAgRjogNixcbiAgICAgICAgRzogNyxcbiAgICAgICAgSDogOCxcbiAgICAgICAgSTogOSxcbiAgICAgICAgSjogMTAsXG4gICAgfTtcbiAgICBmdW5jdGlvbiBjb252ZXJ0TnVtYmVyVG9BbHBoYShudW0pIHtcbiAgICAgICAgZm9yIChsZXQgYWxwaGEgaW4gYWxwaGFOdW1iZXJpY0NvbnZlcnNpb24pIHtcbiAgICAgICAgICAgIGlmIChhbHBoYU51bWJlcmljQ29udmVyc2lvblthbHBoYV0gPT09IG51bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbHBoYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBjb29yZHMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBhbGxDb29yZHMgPSBbXTtcbiAgICAgICAgbGV0IGFscGhhID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbHBoYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCAxMTsgaisrKSB7XG4gICAgICAgICAgICAgICAgYWxsQ29vcmRzLnB1c2goYWxwaGFbaV0gKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhbGxDb29yZHM7XG4gICAgfTtcbiAgICBjb25zdCBwbGFjZVNoaXBzID0gKHNoaXBUeXBlLCBzdGFydENvb3JkLCBheGlzID0gXCJob3Jpem9udGFsXCIpID0+IHtcbiAgICAgICAgY29vcmRzT2ZTaGlwc1tzaGlwVHlwZV0gPSBbc3RhcnRDb29yZF07XG4gICAgICAgIGlmIChzaGlwc1tzaGlwVHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwc1tzaGlwVHlwZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYXhpcyA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRDb29yZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydENvb3JkWzBdICsgKE51bWJlci5wYXJzZUludChzdGFydENvb3JkWzFdKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICBjb29yZHNPZlNoaXBzW3NoaXBUeXBlXS5wdXNoKHN0YXJ0Q29vcmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0Q29vcmQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udmVydE51bWJlclRvQWxwaGEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyLnBhcnNlSW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHBoYU51bWJlcmljQ29udmVyc2lvbltzdGFydENvb3JkWzBdXSArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApICsgc3RhcnRDb29yZC5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRzT2ZTaGlwc1tzaGlwVHlwZV0ucHVzaChzdGFydENvb3JkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvb3Jkc09mU2hpcHM7XG4gICAgfTtcbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGF0Q29vcmQpID0+IHtcbiAgICAgICAgY29uc3QgcG9zaXRpb25PZlNoaXBzID0gcGxhY2VTaGlwcygpO1xuICAgICAgICBmb3IgKGxldCBzaGlwIGluIHBvc2l0aW9uT2ZTaGlwcykge1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9uT2ZTaGlwc1tzaGlwXS5pbmNsdWRlcyhhdENvb3JkKSkge1xuICAgICAgICAgICAgICAgIHNoaXBzW3NoaXBdLmhpdCgpO1xuICAgICAgICAgICAgICAgIG1vdmVzLmhpdHMucHVzaChhdENvb3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1vdmVzLmhpdHMuaW5jbHVkZXMoYXRDb29yZCkpIHtcbiAgICAgICAgICAgIG1vdmVzLm1pc3Nlcy5wdXNoKGF0Q29vcmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1vdmVzO1xuICAgIH07XG4gICAgY29uc3QgYWxsU2hpcHNBcmVTdW5rID0gKCkgPT4ge1xuICAgICAgICBsZXQgYWxsU2hpcHNBcmVTdW5rID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBpbiBzaGlwcykge1xuICAgICAgICAgICAgaWYgKHNoaXBzW3NoaXBdLmlzU3VuaygpID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYWxsU2hpcHNBcmVTdW5rID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbFNoaXBzQXJlU3VuaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWxsU2hpcHNBcmVTdW5rO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjb29yZHMsXG4gICAgICAgIHNoaXBzLFxuICAgICAgICBtb3ZlcyxcbiAgICAgICAgY29vcmRzT2ZTaGlwcyxcbiAgICAgICAgcGxhY2VTaGlwcyxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgYWxsU2hpcHNBcmVTdW5rLFxuICAgIH07XG59O1xuIiwiaW1wb3J0IHsgcGxheWVyR2FtZUJvYXJkLCBjb21wdXRlckdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVcIjtcblxuZXhwb3J0IGNvbnN0IFBsYXllciA9IChhdENvb3JkKSA9PiB7XG4gICAgcmV0dXJuIGNvbXB1dGVyR2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soYXRDb29yZCk7XG59O1xuXG5leHBvcnQgY29uc3QgQ29tcHV0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsUG9zc2libGVNb3ZlcyA9IHBsYXllckdhbWVCb2FyZC5jb29yZHMoKTtcbiAgICBjb25zdCBjb21wdXRlck1vdmUgPVxuICAgICAgICBhbGxQb3NzaWJsZU1vdmVzW35+KE1hdGgucmFuZG9tKCkgKiBhbGxQb3NzaWJsZU1vdmVzLmxlbmd0aCldO1xuICAgIGFsbFBvc3NpYmxlTW92ZXMuc3BsaWNlKFxuICAgICAgICBhbGxQb3NzaWJsZU1vdmVzLmZpbmRJbmRleCgoY29vcmQpID0+IGNvb3JkID09PSBjb21wdXRlck1vdmUpLFxuICAgICAgICAxXG4gICAgKTtcbiAgICByZXR1cm4gcGxheWVyR2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soY29tcHV0ZXJNb3ZlKTtcbn07XG4iLCJleHBvcnQgY29uc3QgU2hpcCA9ICgpID0+IHtcbiAgICBjb25zdCBkZXN0cm95ZXIgPSB7XG4gICAgICAgIGxlbmd0aDogMixcbiAgICAgICAgaGl0czogMCxcbiAgICAgICAgaGl0KCkge1xuICAgICAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRzKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgY29uc3Qgc3VibWFyaW5lID0ge1xuICAgICAgICBsZW5ndGg6IDMsXG4gICAgICAgIGhpdHM6IDAsXG4gICAgICAgIGhpdCgpIHtcbiAgICAgICAgICAgIHRoaXMuaGl0cysrO1xuICAgICAgICB9LFxuICAgICAgICBpc1N1bmsoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IHRoaXMuaGl0cykgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IGNydWlzZXIgPSB7XG4gICAgICAgIGxlbmd0aDogMyxcbiAgICAgICAgaGl0czogMCxcbiAgICAgICAgaGl0KCkge1xuICAgICAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRzKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSB7XG4gICAgICAgIGxlbmd0aDogNCxcbiAgICAgICAgaGl0czogMCxcbiAgICAgICAgaGl0KCkge1xuICAgICAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRzKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgY2FycmllciA9IHtcbiAgICAgICAgbGVuZ3RoOiA1LFxuICAgICAgICBoaXRzOiAwLFxuICAgICAgICBoaXQoKSB7XG4gICAgICAgICAgICB0aGlzLmhpdHMrKztcbiAgICAgICAgfSxcbiAgICAgICAgaXNTdW5rKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLmhpdHMpIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiB7IGRlc3Ryb3llciwgc3VibWFyaW5lLCBjcnVpc2VyLCBiYXR0bGVzaGlwLCBjYXJyaWVyIH07XG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICAgIHBhZGRpbmc6IDAgMTUwcHg7XG4gICAgZ2FwOiA1MHB4O1xufVxuaDEge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbn1cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wbGF5ZXJHYW1lQm9hcmQsXG4uY29tcHV0ZXJHYW1lQm9hcmQge1xuICAgIGhlaWdodDogMzMwcHg7XG4gICAgd2lkdGg6IDMzMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZDogMWZyIC8gcmVwZWF0KDEwLCAxZnIpO1xufVxuLnBsYXllckdhbWVCb2FyZCA+IGRpdixcbi5jb21wdXRlckdhbWVCb2FyZCA+IGRpdiB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgICBoZWlnaHQ6IDMzcHg7XG4gICAgd2lkdGg6IDMzcHg7XG4gICAgbWFyZ2luOiAwO1xufVxuLnBsYXllckdhbWVCb2FyZCA+IGRpdjpudGgtY2hpbGQoMTBuICsgMSksXG4uY29tcHV0ZXJHYW1lQm9hcmQgPiBkaXY6bnRoLWNoaWxkKDEwbiArIDEpIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XG59XG4ucGxheWVyR2FtZUJvYXJkID4gZGl2Om50aC1jaGlsZCgtbiArIDEwKSxcbi5jb21wdXRlckdhbWVCb2FyZCA+IGRpdjpudGgtY2hpbGQoLW4gKyAxMCkge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xufVxuLnBsYXllcl9yb3dzLFxuLmNvbXB1dGVyX3Jvd3MsXG4ucGxheWVyX2NvbHVtbnMsXG4uY29tcHV0ZXJfY29sdW1ucyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLnBsYXllcl9yb3dzIHtcbiAgICBsZWZ0OiAxMDVweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDE4cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGxheWVyX2NvbHVtbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdG9wOiAtMjVweDtcbiAgICBsZWZ0OiAxNDhweDtcbiAgICBnYXA6IDI1cHg7XG59XG4uY29tcHV0ZXJfcm93cyB7XG4gICAgbGVmdDogNTU1cHg7XG4gICAgdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxOHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbXB1dGVyX2NvbHVtbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdG9wOiAtMjVweDtcbiAgICBsZWZ0OiA1OTdweDtcbiAgICBnYXA6IDI1cHg7XG59XG4uY29udGFpbmVyIC5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuLmNvbnRhaW5lciBkaXYuYS1taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbi5jb250YWluZXIgZGl2LmEtaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7QUFDQTs7SUFFSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztBQUNiO0FBQ0E7O0lBRUksMkJBQTJCO0FBQy9CO0FBQ0E7O0lBRUksMEJBQTBCO0FBQzlCO0FBQ0E7Ozs7SUFJSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULGFBQWE7SUFDYixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsU0FBUztBQUNiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULGFBQWE7SUFDYixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsU0FBUztBQUNiO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgIHBhZGRpbmc6IDAgMTUwcHg7XFxuICAgIGdhcDogNTBweDtcXG59XFxuaDEge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG59XFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wbGF5ZXJHYW1lQm9hcmQsXFxuLmNvbXB1dGVyR2FtZUJvYXJkIHtcXG4gICAgaGVpZ2h0OiAzMzBweDtcXG4gICAgd2lkdGg6IDMzMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiAxZnIgLyByZXBlYXQoMTAsIDFmcik7XFxufVxcbi5wbGF5ZXJHYW1lQm9hcmQgPiBkaXYsXFxuLmNvbXB1dGVyR2FtZUJvYXJkID4gZGl2IHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XFxuICAgIGhlaWdodDogMzNweDtcXG4gICAgd2lkdGg6IDMzcHg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLnBsYXllckdhbWVCb2FyZCA+IGRpdjpudGgtY2hpbGQoMTBuICsgMSksXFxuLmNvbXB1dGVyR2FtZUJvYXJkID4gZGl2Om50aC1jaGlsZCgxMG4gKyAxKSB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcXG59XFxuLnBsYXllckdhbWVCb2FyZCA+IGRpdjpudGgtY2hpbGQoLW4gKyAxMCksXFxuLmNvbXB1dGVyR2FtZUJvYXJkID4gZGl2Om50aC1jaGlsZCgtbiArIDEwKSB7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xcbn1cXG4ucGxheWVyX3Jvd3MsXFxuLmNvbXB1dGVyX3Jvd3MsXFxuLnBsYXllcl9jb2x1bW5zLFxcbi5jb21wdXRlcl9jb2x1bW5zIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuLnBsYXllcl9yb3dzIHtcXG4gICAgbGVmdDogMTA1cHg7XFxuICAgIHRvcDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxOHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5wbGF5ZXJfY29sdW1ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRvcDogLTI1cHg7XFxuICAgIGxlZnQ6IDE0OHB4O1xcbiAgICBnYXA6IDI1cHg7XFxufVxcbi5jb21wdXRlcl9yb3dzIHtcXG4gICAgbGVmdDogNTU1cHg7XFxuICAgIHRvcDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxOHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jb21wdXRlcl9jb2x1bW5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdG9wOiAtMjVweDtcXG4gICAgbGVmdDogNTk3cHg7XFxuICAgIGdhcDogMjVweDtcXG59XFxuLmNvbnRhaW5lciAuc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcbi5jb250YWluZXIgZGl2LmEtbWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG4uY29udGFpbmVyIGRpdi5hLWhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2dhbWUuanNcIik7XG4iLCIiXSwibmFtZXMiOlsiR2FtZUJvYXJkIiwiUGxheWVyIiwiQ29tcHV0ZXIiLCJTaGlwIiwicGxheWVyR2FtZUJvYXJkIiwiY29tcHV0ZXJHYW1lQm9hcmQiLCJwbGFjZVNoaXBzIiwicmVuZGVyR2FtZUJvYXJkIiwicGxheWVyUGxheUdyb3VuZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbXB1dGVyUGxheUdyb3VuZCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiY29vcmRzIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJjb29yZCIsInZhbHVlIiwic3F1YXJlIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIm1vdmVzIiwiaGl0cyIsImluY2x1ZGVzIiwiY2xhc3NMaXN0IiwiYWRkIiwibWlzc2VzIiwiYXBwZW5kQ2hpbGQiLCJlcnIiLCJlIiwiZiIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJyZW5kZXJTaGlwcyIsInBsYXllclNxdWFyZXMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29tcHV0ZXJTcXVhcmVzIiwic2hpcCIsImNvb3Jkc09mU2hpcHMiLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwiZGF0YXNldCIsIl9pdGVyYXRvcjQiLCJfc3RlcDQiLCJwbGF5R2FtZSIsInJlbW92ZUV4aXN0aW5nTWFya3MiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJub2RlTmFtZSIsImFsbFNoaXBzQXJlU3VuayIsImNvbnNvbGUiLCJsb2ciLCJzaGlwcyIsImFscGhhTnVtYmVyaWNDb252ZXJzaW9uIiwiQSIsIkIiLCJDIiwiRCIsIkUiLCJGIiwiRyIsIkgiLCJJIiwiSiIsImNvbnZlcnROdW1iZXJUb0FscGhhIiwibnVtIiwiYWxwaGEiLCJhbGxDb29yZHMiLCJpIiwibGVuZ3RoIiwiaiIsInB1c2giLCJzaGlwVHlwZSIsInN0YXJ0Q29vcmQiLCJheGlzIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJzbGljZSIsInJlY2VpdmVBdHRhY2siLCJhdENvb3JkIiwicG9zaXRpb25PZlNoaXBzIiwiaGl0IiwiaXNTdW5rIiwiYWxsUG9zc2libGVNb3ZlcyIsImNvbXB1dGVyTW92ZSIsIk1hdGgiLCJyYW5kb20iLCJzcGxpY2UiLCJmaW5kSW5kZXgiLCJkZXN0cm95ZXIiLCJzdWJtYXJpbmUiLCJjcnVpc2VyIiwiYmF0dGxlc2hpcCIsImNhcnJpZXIiXSwic291cmNlUm9vdCI6IiJ9