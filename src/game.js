import { GameBoard } from "./gameBoard";
import { Player, Computer } from "./player";
import { Ship } from "./ship";

import "./style.css";

export const playerGameBoard = GameBoard();
export const computerGameBoard = GameBoard();
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

const renderGameBoard = () => {
    const playerPlayGround = document.querySelector(".playerGameBoard");
    const computerPlayGround = document.querySelector(".computerGameBoard");
    for (let coord of playerGameBoard.coords()) {
        const square = document.createElement("div");
        square.setAttribute("data-coord", coord);
        if (playerGameBoard.moves.hits.includes(coord)) {
            square.classList.add("a-hit");
        } else if (playerGameBoard.moves.misses.includes(coord)) {
            square.classList.add("a-miss");
        }
        playerPlayGround.appendChild(square);
    }
    for (let coord of computerGameBoard.coords()) {
        const square = document.createElement("div");
        square.setAttribute("data-coord", coord);

        if (computerGameBoard.moves.hits.includes(coord)) {
            square.classList.add("a-hit");
        } else if (computerGameBoard.moves.misses.includes(coord)) {
            square.classList.add("a-miss");
        }
        computerPlayGround.appendChild(square);
    }
};
const renderShips = () => {
    const playerSquares = [
        ...document.querySelectorAll(".playerGameBoard > div"),
    ];
    const computerSquares = [
        ...document.querySelectorAll(".computerGameBoard > div"),
    ];

    for (let ship in playerGameBoard.coordsOfShips) {
        for (let square of playerSquares) {
            if (
                playerGameBoard.coordsOfShips[ship].includes(
                    square.dataset.coord
                )
            ) {
                square.classList.add("ship");
            }
        }
    }
    for (let ship in computerGameBoard.coordsOfShips) {
        for (let square of computerSquares) {
            if (
                computerGameBoard.coordsOfShips[ship].includes(
                    square.dataset.coord
                )
            ) {
                square.classList.add("ship");
            }
        }
    }
};
const playGame = () => {
    const computerPlayGround = document.querySelector(".computerGameBoard");
    const removeExistingMarks = () => {
        const playerPlayGround = document.querySelector(".playerGameBoard");
        const computerPlayGround = document.querySelector(".computerGameBoard");
        while (playerPlayGround.firstChild || computerPlayGround.firstChild) {
            playerPlayGround.removeChild(playerPlayGround.firstChild);
            computerPlayGround.removeChild(computerPlayGround.firstChild);
        }
    };
    const announceWinner = (winner) => {
        const winnerText = document.querySelector(".announce-winner h1");
        winnerText.textContent = winner + " Wons!";
        winnerText.parentElement.style.cssText = "visibility: visible";
    };

    computerPlayGround.addEventListener("click", (event) => {
        if (
            event.target.nodeName === "DIV" &&
            !computerGameBoard.moves.hits.includes(
                event.target.dataset.coord
            ) &&
            !computerGameBoard.moves.misses.includes(
                event.target.dataset.coord
            ) &&
            !playerGameBoard.allShipsAreSunk() &&
            !computerGameBoard.allShipsAreSunk()
        ) {
            removeExistingMarks();
            Player(event.target.dataset.coord);
            Computer();
            renderGameBoard();
            renderShips();
        }
        if (
            playerGameBoard.allShipsAreSunk() ||
            computerGameBoard.allShipsAreSunk()
        ) {
            playerGameBoard.allShipsAreSunk
                ? announceWinner("You")
                : announceWinner("The computer");
        }
    });
};
renderGameBoard();
renderShips();
playGame();
