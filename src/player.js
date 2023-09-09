import { playerGameBoard, computerGameBoard } from "./game";
import { GameBoard } from "./gameBoard";

const Player = (atCoord) => computerGameBoard.receiveAttack(atCoord);

const Computer = (possibleMoves) => {
    const computerMove =
        possibleMoves[~~(Math.random() * possibleMoves.length)];
    const moveIndex = possibleMoves.findIndex(
        (coord) => coord === computerMove
    );
    possibleMoves.splice(moveIndex, 1);
    playerGameBoard.receiveAttack(computerMove);
};
const placeComputerShips = (shipType) => {
    const axises = ["vertical", "horizontal"];
    const possibleCoords = computerGameBoard.coords();

    while (true) {
        const shipPlacementAxis = axises[~~(Math.random() * axises.length)];
        const startingCoord =
            possibleCoords[~~(Math.random() * possibleCoords.length)];
        if (
            computerGameBoard.isPlacementValid(
                shipType,
                startingCoord,
                shipPlacementAxis,
                computerGameBoard
            )
        ) {
            computerGameBoard.placeShips(
                shipType,
                startingCoord,
                shipPlacementAxis
            );
            return;
        }
    }
};

export { Computer, Player, placeComputerShips };
