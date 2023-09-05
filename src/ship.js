const Ship = () => {
    const destroyer = {
        length: 2,
        hits: 0,
        hit() {
            this.hits++;
        },
        isSunk() {
            if (this.length === this.hits) return true;

            return false;
        },
    };
    const submarine = {
        length: 3,
        hits: 0,
        hit() {
            this.hits++;
        },
        isSunk() {
            if (this.length === this.hits) return true;

            return false;
        },
    };
    const cruiser = {
        length: 3,
        hits: 0,
        hit() {
            this.hits++;
        },
        isSunk() {
            if (this.length === this.hits) return true;
            return false;
        },
    };
    const battleship = {
        length: 4,
        hits: 0,
        hit() {
            this.hits++;
        },
        isSunk() {
            if (this.length === this.hits) return true;

            return false;
        },
    };
    const carrier = {
        length: 5,
        hits: 0,
        hit() {
            this.hits++;
        },
        isSunk() {
            if (this.length === this.hits) return true;

            return false;
        },
    };

    return { destroyer, submarine, cruiser, battleship, carrier };
};
const ships = Ship();
module.exports = ships;
