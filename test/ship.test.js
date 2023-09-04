const ships = require("../src/ship");
let hit = 0;
const mockHit = jest.fn(() => hit++);
console.log(hit);
mockHit.mockReturnValueOnce(1).mockReturnValueOnce(2).mockReturnValueOnce(3);
console.log(mockHit(), mockHit(), mockHit());
test("destroyer", () => {
    expect(ships.destroyer.length).toBe(2);
    expect(ships.destroyer.hits).toBe(0);
    expect(ships.destroyer.isSunk()).toBeFalsy;
});
test("submarine", () => {
    expect(ships.submarine.length).toBe(3);
    expect(ships.submarine.hits).toBe(0);
    expect(ships.submarine.isSunk()).toBeFalsy;
});
test("cruiser", () => {
    expect(ships.cruiser.length).toBe(3);
    expect(ships.cruiser.hits).toBe(0);
    expect(ships.cruiser.isSunk()).toBeFalsy;
});
test("battleship", () => {
    expect(ships.battleship.length).toBe(4);
    expect(ships.battleship.hits).toBe(0);
    expect(ships.battleship.isSunk()).toBeFalsy;
});
test("carrier", () => {
    expect(ships.carrier.length).toBe(5);
    expect(ships.carrier.hits).toBe(0);
    expect(ships.carrier.isSunk()).toBeFalsy;
});
