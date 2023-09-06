import { GameBoard } from "./gameBoard";
import { Player, Computer } from "./player";
import { ships } from "./ship";

import "./style.css";

export const playerGameBoard = GameBoard();
export const computerGameBoard = GameBoard();
playerGameBoard.placeShips("destroyer", "A2", "horizontal");
playerGameBoard.placeShips("submarine", "H7", "horizontal");
playerGameBoard.placeShips("cruiser", "F10", "vertical");
playerGameBoard.placeShips("battleship", "J1", "horizontal");
playerGameBoard.placeShips("carrier", "C8", "vertical");
computerGameBoard.placeShips("destroyer", "J2", "horizontal");
computerGameBoard.placeShips("submarine", "C6", "vertical");
computerGameBoard.placeShips("cruiser", "D2", "vertical");
computerGameBoard.placeShips("battleship", "A4", "horizontal");
computerGameBoard.placeShips("carrier", "E2", "vertical");
const renderGameBoard = () => {
    const playerPlayGround = document.querySelector(".playerGameBoard");
    const computerPlayGround = document.querySelector(".computerGameBoard");
    for (let coord of playerGameBoard.coords()) {
        const playerSquare = document.createElement("div");
        playerSquare.setAttribute("data-coord", coord);
        playerPlayGround.appendChild(playerSquare);
        if (computerGameBoard.moves.hits.includes(coord)) {
            playerSquare.className = "a-hit";
        } else if (computerGameBoard.moves.hits.includes(coord)) {
            playerSquare.className = "a-miss";
        }
    }
    for (let coord of computerGameBoard.coords()) {
        const computerSquare = document.createElement("div");
        computerSquare.setAttribute("data-coord", coord);
        computerPlayGround.appendChild(computerSquare);
        if (playerGameBoard.moves.hits.includes(coord)) {
            computerSquare.className = "a-hit";
        } else if (playerGameBoard.moves.hits.includes(coord)) {
            computerSquare.className = "a-miss";
        }
    }
};

renderGameBoard();
