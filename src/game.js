import { GameBoard } from "./gameBoard";
import { Player, Computer, placeComputerShips } from "./player";
import { Ship } from "./ship";

import "./style.css";

export let playerGameBoard = GameBoard();
export let computerGameBoard = GameBoard();
const allPossibleMoves = playerGameBoard.coords();

const placeShips = () => {
    const placeShips = document.querySelector(".place-ships");
    const grid = placeShips.querySelector(".grid");
    const ships = placeShips.querySelectorAll(".ships >  div");
    const playerPlayGround = document.querySelector(".playerGameBoard");
    const gridOfPlayer = playerPlayGround.children;
    let shipType = "";
    let start = "";
    let axis = "";
    let squareNum = null;
    let squareNumWhileDragging = null;

    for (let coord of playerGameBoard.coords()) {
        const square = document.createElement("div");
        square.setAttribute("data-coord", coord);
        grid.appendChild(square);
    }
    ships.forEach((ship) =>
        ship.addEventListener("dblclick", (event) => {
            ship.classList.toggle("vertical");
        })
    );
    ships.forEach((ship) => {
        ship.querySelectorAll("div[data-num]").forEach((child) => {
            child.addEventListener("mouseover", () => {
                const dataNum = child.getAttribute("data-num");
                shipType = ship.getAttribute("id");
                squareNum = dataNum;
                axis = ship.classList[0];
            });
        });
    });
    ships.forEach((ship) =>
        ship.addEventListener("dragstart", () => {
            squareNumWhileDragging = squareNum;
        })
    );
    grid.childNodes.forEach((child) =>
        child.addEventListener("dragover", (event) => {
            event.preventDefault();
        })
    );
    grid.childNodes.forEach((child) =>
        child.addEventListener("drop", (event) => {
            start = event.target.dataset.coord;
            const ship = document.getElementById(shipType);
            if (axis === undefined) {
                start = start[0] + (+start.slice(1) - squareNumWhileDragging);
                axis = "horizontal";
            } else {
                const alpha =
                    playerGameBoard.alphaNumbericConversion[start[0]] -
                    squareNumWhileDragging;
                start =
                    playerGameBoard.convertNumberToAlpha(alpha) +
                    start.slice(1);
            }

            if (
                playerGameBoard.isPlacementValid(
                    shipType,
                    start,
                    axis,
                    playerGameBoard
                )
            ) {
                playerGameBoard.placeShips(shipType, start, axis);
                placeComputerShips(shipType);
                renderShips(grid.childNodes);
                renderShips(gridOfPlayer);
                ship.parentElement.removeChild(ship);
                hideShipsPlacementPage();
            }
        })
    );
};
const hideShipsPlacementPage = () => {
    const placeShips = document.querySelector(".place-ships");
    const ships = placeShips.querySelector(".ships");
    const grid = placeShips.querySelector(".grid");

    if (!ships.firstElementChild) {
        placeShips.style.visibility = "hidden";
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }
    }
};
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
const renderShips = (squares) => {
    for (let ship in playerGameBoard.coordsOfShips) {
        for (let square of squares) {
            if (
                playerGameBoard.coordsOfShips[ship].includes(
                    square.dataset.coord
                )
            ) {
                square.classList.add("ship");
            }
        }
    }
};
const removeExistingMarks = () => {
    const playerPlayGround = document.querySelector(".playerGameBoard");
    const computerPlayGround = document.querySelector(".computerGameBoard");
    while (playerPlayGround.firstChild || computerPlayGround.firstChild) {
        playerPlayGround.removeChild(playerPlayGround.firstChild);
        computerPlayGround.removeChild(computerPlayGround.firstChild);
    }
};
const playGame = () => {
    const computerPlayGround = document.querySelector(".computerGameBoard");
    const placeShips = document.querySelector(".place-ships");
    const grid = placeShips.querySelector(".grid");
    const playerPlayGround = document.querySelector(".playerGameBoard");
    const gridOfPlayer = playerPlayGround.children;
    const announceWinner = (winner) => {
        const winnerText = document.querySelector(".announce-winner h1");
        winnerText.textContent = winner;
        winnerText.parentElement.parentElement.style.cssText =
            "visibility: visible";
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
            Computer(allPossibleMoves);
            renderGameBoard();
            renderShips(grid.childNodes);
            renderShips(gridOfPlayer);
        }
        if (
            playerGameBoard.allShipsAreSunk() ||
            computerGameBoard.allShipsAreSunk()
        ) {
            playerGameBoard.allShipsAreSunk()
                ? announceWinner("Computer")
                : announceWinner("You");
        }
    });
};
const restartGame = () => {
    const restartBtn = document.querySelector(".announce-winner button");
    const renderShipModels = () => {
        const placeShips = document.querySelector(".place-ships");
        const modelShip = placeShips.querySelector(".ships");
        for (const ship in playerGameBoard.ships) {
            const container = document.createElement("div");
            container.setAttribute("id", ship);
            container.setAttribute("draggable", "true");
            for (let i = 0; i < playerGameBoard.ships[ship].length; i++) {
                const div = document.createElement("div");
                div.setAttribute("data-num", i);
                container.appendChild(div);
            }
            modelShip.appendChild(container);
        }

        placeShips.style.visibility = "visible";
    };
    restartBtn.addEventListener("click", () => {
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
