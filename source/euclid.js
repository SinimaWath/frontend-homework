'use strict';

const euclid = (...array) => {
    if (array.length === 0) {
        return undefined;
    }
    return array.reduce((gcd, curr) => {
        if (typeof(curr) !== 'number') {
            return undefined;
        }
        gcd = Math.abs(gcd);
        curr = Math.abs(curr);
        while (gcd !== 0 && curr !== 0) {
            if (gcd > curr) {
                gcd = gcd % curr;
            }
            else {
                curr = curr % gcd;
            }
        }
        return (gcd + curr);
    }, 0);
};