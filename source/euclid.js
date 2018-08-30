'use strict';


const isValid = (val) => !(typeof +val !== 'number' || !isFinite(+val));

function gcd(a, b) {
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

}

const euclid = (...array) => {
    if (array.length === 0) {
        return undefined;
    }
    return array.reduce((gcdTotal, curr) => gcd(gcdTotal, curr), 0);
};

