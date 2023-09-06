function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import { GameBoard } from "./gameBoard";
import { Player, Computer } from "./player";
import { ships } from "./ship";
import "./style.css";
export var playerGameBoard = GameBoard();
export var computerGameBoard = GameBoard();
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
      var playerSquare = document.createElement("div");
      playerSquare.setAttribute("data-coord", coord);
      playerPlayGround.appendChild(playerSquare);
      if (computerGameBoard.moves.hits.includes(coord)) {
        playerSquare.className = "a-hit";
      } else if (computerGameBoard.moves.hits.includes(coord)) {
        playerSquare.className = "a-miss";
      }
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
      var computerSquare = document.createElement("div");
      computerSquare.setAttribute("data-coord", _coord);
      computerPlayGround.appendChild(computerSquare);
      if (playerGameBoard.moves.hits.includes(_coord)) {
        computerSquare.className = "a-hit";
      } else if (playerGameBoard.moves.hits.includes(_coord)) {
        computerSquare.className = "a-miss";
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};
var renderShips = function renderShips() {
  var playerSquares = _toConsumableArray(document.querySelectorAll(".playerGameBoard > div"));
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
};
renderGameBoard();
renderShips();