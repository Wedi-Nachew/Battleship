import { Player } from "../src/player";
import { Computer } from "../src/player";

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

test("human player", () => {
    expect(Player("C7", mockCallBack).misses).toContain("C7");
    expect(Player("I10", mockCallBack).hits).toContain("I10");
});
console.log(Computer(mockCallBack));
console.log(Computer(mockCallBack));
console.log(Computer(mockCallBack));
// test.only("computer", () => {
//     console.log(Computer(mockCallBack));
// });
