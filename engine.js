/* jshint node: true */

"use strict";

class CalcByIndex {
    constructor() {
        this.data = [];
    }

    add(index, total) {
        if (!this.data[index]) { this.data[index] = 0; }

        this.data[index] += total;

        return this.data[index];
    }

    result() {
        let winnerIndex = Object.keys(this.data)[0];

        if (winnerIndex === undefined) {
            return false;
        }

        for (let key in this.data) {
            if (this.data[key] > this.data[winnerIndex]) {
                winnerIndex = key;
            }
        }

        return winnerIndex;
    }
}

module.exports = CalcByIndex;
