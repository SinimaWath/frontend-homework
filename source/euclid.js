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
    let tmp = 0;
    while (a) {
        tmp = b % a;
        b = a;
        a = tmp;
    }
    return b;

};

const euclid = (...array) => {
    if (array.length === 0) {
        return undefined;
    }
    return array.reduce((gcdTotal, curr) => gcd(gcdTotal, curr), 0);
};

