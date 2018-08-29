'use strict';


const isValid = function (val) {
  return !(typeof +val !== 'number' || isNaN(+val));
};

const gcd = function(a, b) {
    if (!isValid(a) || !isValid(b)){
        return undefined;
    }
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

const euclid = (...array) => {
    if (array.length === 0) {
        return undefined;
    }
    return array.reduce((gcdTotal, curr) => gcd(gcdTotal, curr), 0);
};

