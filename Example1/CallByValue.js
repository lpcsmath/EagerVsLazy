function fib (n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}

function f (a, b) {
    return a || b + b;
}

console.log(f(3, fib(40)));
