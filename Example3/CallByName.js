function fib (n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}

function f (a, b, c, d, e, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
   if (a() < 2) return b() + b();
   if (a() < 4) return c() + c();
   if (a() < 6) return d() + d();
   if (a() < 7) return e() + f();
   if (a() < 8) return g() + h();
   if (a() < 10) return i() + j() + k();
   if (a() < 12) return l() + m() + n();
   if (a() < 14) return o() + p() + q();
   return r() + s() + t();
}

var lazyA = function () { return 0; }
var lazyB = function () { return fib(40); }
console.log(f(lazyA, lazyB, lazyB, lazyB, lazyB, lazyB, lazyB,
                     lazyB, lazyB, lazyB, lazyB, lazyB, lazyB,
                     lazyB, lazyB, lazyB, lazyB, lazyB, lazyB));
