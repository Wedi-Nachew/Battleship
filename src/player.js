import { playerGameBoard, computerGameBoard } from "./game";

export const Player = (atCoord) => {
    return computerGameBoard.receiveAttack(atCoord);
};

export const Computer = () => {
    const allPossibleMoves = computerGameBoard.coords();
    const computerMove =
        allPossibleMoves[~~(Math.random() * allPossibleMoves.length)];
    allPossibleMoves.splice(
        allPossibleMoves.findIndex((coord) => coord === computerMove),
        1
    );
    return playerGameBoard.receiveAttack(computerMove);
};
