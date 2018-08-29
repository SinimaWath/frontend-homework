'use strict';

const euclid = (...array) => {
    if (array.length === 0) {
        return undefined;
    }
    return array.reduce((gcd, curr) => {
        if (typeof(+curr) !== 'number' || isNaN(+curr)
            || gcd === undefined) {
            return undefined;
        }
        const gcdOfTwo = function (a, b) {
            a = Math.abs(a);
            b = Math.abs(b);
            while (a !== 0 && b !== 0) {
                if (a > b) {
                    a = a % b;
                }
                else {
                    b = b % a;
                }
            }
            return (a + b);
        };

        return gcdOfTwo(gcd, curr);
    }, 0);
};



console.log(''+euclid('3T', '6', '9'));