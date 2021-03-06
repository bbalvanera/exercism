"use strict";
class Sieve {
    constructor(seed = 2) {
        this.primes = [];
        if (seed < 2)
            return;
        let sieve = new Array(seed + 1).fill(1);
        for (let i = 2; Math.pow(i, 2) < seed; i++) {
            if (sieve[i]) {
                for (let j = Math.pow(i, 2); j <= seed; j += i) {
                    sieve[j] = 0;
                }
            }
        }
        this.primes = sieve.filter(value => value > 1);
    }
}
module.exports = Sieve;
