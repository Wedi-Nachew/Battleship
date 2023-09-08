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
const placeComputerShips = (shipType, possibleCoords) => {
    for (let ship in computerGameBoard.coordsOfShips) {
        for (let coord of computerGameBoard.coordsOfShips[ship]) {
            if (possibleCoords.includes(coord)) {
                const coordIndex = possibleCoords.findIndex(
                    (item) => item === coord
                );
                possibleCoords.splice(coordIndex, 1);
            }
        }
    }
    const axises = ["vertical", "horizontal"];
    const shipPlacementAxis = axises[~~(Math.random() * axises.length)];
    const startingCoord =
        possibleCoords[~~(Math.random() * possibleCoords.length)];

    computerGameBoard.placeShips(shipType, startingCoord, shipPlacementAxis);
};

export { Computer, Player, placeComputerShips };
