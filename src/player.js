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

export { Computer, Player };
