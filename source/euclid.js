'use strict';
function euclid(){
    if (arguments.length === 0) {
        return undefined;
    }
    if (arguments.length === 1){
        return arguments[0]
    }
    let gcd = 0;
    let euclidFunc = function (a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (a !== 0 && b !== 0){
            if (a > b) {
                a = a % b;
            }
            else{
                b = b % a;
            }
        }
        return (a + b)
    };

    for (let i = 1; i < arguments.length; i++){
           gcd = euclidFunc(arguments[i], arguments[i-1]);
    }
    return gcd;
}
