import { computerGameBoard } from "./game";
import { Ship } from "./ship";

export const GameBoard = () => {
    const moves = { hits: [], misses: [] };
    const ships = Ship();
    const coordsOfShips = {};
    const alphaNumbericConversion = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        I: 9,
        J: 10,
    };
    function convertNumberToAlpha(num) {
        for (let alpha in alphaNumbericConversion) {
            if (alphaNumbericConversion[alpha] === num) {
                return alpha;
            }
        }
    }
    const coords = () => {
        let allCoords = [];
        let alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        for (let i = 0; i < alpha.length; i++) {
            for (let j = 1; j < 11; j++) {
                allCoords.push(alpha[i] + j);
            }
        }

        return allCoords;
    };
    const placeShips = (shipType, startCoord, axis) => {
        coordsOfShips[shipType] = [startCoord];
        if (ships[shipType] !== undefined) {
            for (let i = 1; i < ships[shipType].length; i++) {
                if (axis === "horizontal") {
                    startCoord = startCoord[0] + (+startCoord[1] + 1);
                    coordsOfShips[shipType].push(startCoord);
                } else if (axis === "vertical") {
                    startCoord =
                        convertNumberToAlpha(
                            +alphaNumbericConversion[startCoord[0]] + 1
                        ) + startCoord.slice(1);
                    coordsOfShips[shipType].push(startCoord);
                }
            }
        }
        return coordsOfShips;
    };
    const isPlacementValid = (shipType, startCoord, axis, gameBoard) => {
        const alpha = gameBoard.alphaNumbericConversion[startCoord[0]];
        const coords = [startCoord];

        if (
            (axis === "horizontal" &&
                +startCoord.slice(1) +
                    (ships[shipType].length > 11 ||
                        +startCoord.slice(1) < 1)) ||
            (axis === "vertical" &&
                (+alpha + ships[shipType].length > 11 || +alpha < 1))
        ) {
            return false;
        }

        for (let i = 1; i < ships[shipType].length; i++) {
            if (axis === "horizontal") {
                startCoord = startCoord[0] + (+startCoord[1] + 1);
                coords.push(startCoord);
            } else if (axis === "vertical") {
                startCoord =
                    convertNumberToAlpha(
                        +alphaNumbericConversion[startCoord[0]] + 1
                    ) + startCoord.slice(1);
                coords.push(startCoord);
            }
        }

        for (const coord of coords) {
            for (const ship in coordsOfShips) {
                if (coordsOfShips[ship].includes(coord)) {
                    return false;
                }
            }
        }
        return true;
    };

    const receiveAttack = (atCoord) => {
        for (let ship in coordsOfShips) {
            if (coordsOfShips[ship].includes(atCoord)) {
                ships[ship].hit();
                moves.hits.push(atCoord);
            }
        }
        if (!moves.hits.includes(atCoord)) {
            moves.misses.push(atCoord);
        }

        return moves;
    };
    const allShipsAreSunk = () => {
        let allShipsAreSunk = true;
        for (let ship in ships) {
            if (ships[ship].isSunk() == false) {
                allShipsAreSunk = false;
                return allShipsAreSunk;
            }
        }
        return allShipsAreSunk;
    };

    return {
        alphaNumbericConversion,
        convertNumberToAlpha,
        coords,
        ships,
        moves,
        coordsOfShips,
        placeShips,
        isPlacementValid,
        receiveAttack,
        allShipsAreSunk,
    };
};
