function fib (n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}


function f (a, b) {
    return a() || b() + b();
}

function mkNeedy (myFun) {
    var value;
    return function () {
        if (value === undefined) {
            value = myFun();
        }
        return value;
    }
}

var lazyA = function () { return 0; };
var lazyB = function () { return fib(40); };
var needyA = mkNeedy(lazyA);
var needyB = mkNeedy(lazyB);

console.log(f(needyA, needyB));
