import gameBoard from "../src/gameBoard";

test("coords", () => {
    expect(gameBoard.coords()[0]).toBe("A1");
    expect(gameBoard.coords()).toHaveLength(100);
    expect(gameBoard.coords()).toContain("E10");
    expect(gameBoard.coords()).not.toContain("1A");
    expect(gameBoard.coords(99)).toContain("J10");
});
test("place ships horizontally", () => {
    expect(
        gameBoard.placeShips("destroyer", "A1", "horizontal")["destroyer"]
    ).toEqual(["A1", "A2"]);
    expect(
        gameBoard.placeShips("submarine", "C5", "horizontal")["submarine"]
    ).toEqual(["C5", "C6", "C7"]);
    expect(
        gameBoard.placeShips("cruiser", "D7", "horizontal")["cruiser"]
    ).toEqual(["D7", "D8", "D9"]);
    expect(
        gameBoard.placeShips("battleship", "H3", "horizontal")["battleship"]
    ).toEqual(["H3", "H4", "H5", "H6"]);
    expect(
        gameBoard.placeShips("carrier", "J2", "horizontal")["carrier"]
    ).toEqual(["J2", "J3", "J4", "J5", "J6"]);
});
test("place ships vertically", () => {
    expect(
        gameBoard.placeShips("destroyer", "A1", "vertical")["destroyer"]
    ).toEqual(["A1", "B1"]);
    expect(
        gameBoard.placeShips("submarine", "C5", "vertical")["submarine"]
    ).toEqual(["C5", "D5", "E5"]);
    expect(
        gameBoard.placeShips("cruiser", "D7", "vertical")["cruiser"]
    ).toEqual(["D7", "E7", "F7"]);
    expect(
        gameBoard.placeShips("battleship", "G3", "vertical")["battleship"]
    ).toEqual(["G3", "H3", "I3", "J3"]);
    expect(
        gameBoard.placeShips("carrier", "F10", "vertical")["carrier"]
    ).toEqual(["F10", "G10", "H10", "I10", "J10"]);
});
test("receiveAttack", () => {
    const mockCallBack = () => {
        const mockShipPositions = {
            destroyer: ["A4", "A5"],
            submarine: ["J7", "J8", "J9"],
            cruiser: ["A1", "A2", "A3"],
            battleship: ["B8", "C8", "D8", "E8"],
            carrier: ["E10", "F10", "G10", "H10", "I10"],
        };
        return mockShipPositions;
    };
    expect(gameBoard.receiveAttack("A4", mockCallBack)["hits"]).toContain("A4");
    expect(gameBoard.receiveAttack("J3", mockCallBack)["hits"]).not.toContain(
        "J3"
    );
    expect(gameBoard.receiveAttack("F1", mockCallBack)["misses"]).toContain(
        "F1"
    );
    expect(
        gameBoard.receiveAttack("I10", mockCallBack)["misses"]
    ).not.toContain("I10");
});
test("all ships are sunk", () => {
    const mockShips = {
        destroyer: {
            length: 2,
            hits: 2,
            hit() {
                this.hits++;
            },
            isSunk() {
                if (this.length === this.hits) {
                    return true;
                }
                return false;
            },
        },
        submarine: {
            length: 3,
            hits: 3,
            hit() {
                this.hits++;
            },
            isSunk() {
                if (this.length === this.hits) {
                    return true;
                }
                return false;
            },
        },
        cruiser: {
            length: 3,
            hits: 3,
            hit() {
                this.hits++;
            },
            isSunk() {
                if (this.length === this.hits) {
                    return true;
                }
                return false;
            },
        },
        battleship: {
            length: 4,
            hits: 4,
            hit() {
                this.hits++;
            },
            isSunk() {
                if (this.length === this.hits) {
                    return true;
                }
                return false;
            },
        },
        carrier: {
            length: 5,
            hits: 5,
            hit() {
                this.hits++;
            },
            isSunk() {
                if (this.length === this.hits) {
                    return true;
                }
                return false;
            },
        },
    };

    expect(gameBoard.allShipsAreSunk(mockShips)).toBe(true);
});
