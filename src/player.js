import { playerGameBoard, computerGameBoard } from "./game";

export const Player = (atCoord) => {
    return playerGameBoard.receiveAttack(atCoord);
};

export const Computer = () => {
    const allPossibleMoves = [...gameBoard.coords()];
    const computerMove =
        allPossibleMoves[~~(Math.random() * allPossibleMoves.length)];
    allPossibleMoves.splice(
        allPossibleMoves.findIndex((coord) => coord === computerMove),
        1
    );
    return computerGameBoard.receiveAttack(computerMove);
};
