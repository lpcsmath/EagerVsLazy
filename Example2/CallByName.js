function fib (n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}


function f (a, b) {
    return a() || b() + b();
}
var lazyA = function () { return 0; }
var lazyB = function () { return fib(40); }
console.log(f(lazyA, lazyB));
