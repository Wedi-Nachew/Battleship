function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import { GameBoard } from "./gameBoard";
import { Player, Computer, placeComputerShips } from "./player";
import { Ship } from "./ship";
import "./style.css";
export var playerGameBoard = GameBoard();
export var computerGameBoard = GameBoard();
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
        placeComputerShips(shipType);
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
      Player(event.target.dataset.coord);
      Computer(allPossibleMoves);
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
    playerGameBoard = GameBoard();
    computerGameBoard = GameBoard();
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