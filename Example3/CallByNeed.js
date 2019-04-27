function fib (n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
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

function f (a, b, c, d, e, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
   if (a() < 2) return b() + b();
   if (a() < 4) return c() + c();
   if (a() < 6) return d() + d();
   if (a() < 7) return e() + g();
   if (a() < 8) return g() + h();
   if (a() < 10) return i() + j() + k();
   if (a() < 12) return l() + m() + n();
   if (a() < 14) return o() + p() + q();
   return r() + s() + t();
}

var lazyA = function () { return 0; }
var lazyB = function () { return fib(40); }
var needyA = mkNeedy(lazyA);
var needyB = mkNeedy(lazyB);
var needyC = mkNeedy(lazyB);
var needyD = mkNeedy(lazyB);
var needyE = mkNeedy(lazyB);
var needyG = mkNeedy(lazyB);
var needyH = mkNeedy(lazyB);
var needyI = mkNeedy(lazyB);
var needyJ = mkNeedy(lazyB);
var needyK = mkNeedy(lazyB);
var needyL = mkNeedy(lazyB);
var needyM = mkNeedy(lazyB);
var needyN = mkNeedy(lazyB);
var needyO = mkNeedy(lazyB);
var needyP = mkNeedy(lazyB);
var needyQ = mkNeedy(lazyB);
var needyR = mkNeedy(lazyB);
var needyS = mkNeedy(lazyB);
var needyT = mkNeedy(lazyB);
console.log(f(needyA, needyB, needyC, needyD, needyE, needyG, needyH,
                      needyI, needyJ, needyK, needyL, needyM, needyN,
                      needyO, needyP, needyQ, needyR, needyS, needyT));

var lazyA = function () { return 2; }
var needyA = mkNeedy(lazyA);
var needyB = mkNeedy(lazyB);
var needyC = mkNeedy(lazyB);
var needyD = mkNeedy(lazyB);
var needyE = mkNeedy(lazyB);
var needyG = mkNeedy(lazyB);
var needyH = mkNeedy(lazyB);
var needyI = mkNeedy(lazyB);
var needyJ = mkNeedy(lazyB);
var needyK = mkNeedy(lazyB);
var needyL = mkNeedy(lazyB);
var needyM = mkNeedy(lazyB);
var needyN = mkNeedy(lazyB);
var needyO = mkNeedy(lazyB);
var needyP = mkNeedy(lazyB);
var needyQ = mkNeedy(lazyB);
var needyR = mkNeedy(lazyB);
var needyS = mkNeedy(lazyB);
var needyT = mkNeedy(lazyB);
console.log(f(needyA, needyB, needyC, needyD, needyE, needyG, needyH,
                      needyI, needyJ, needyK, needyL, needyM, needyN,
                      needyO, needyP, needyQ, needyR, needyS, needyT));

var lazyA = function () { return 4; }
var needyA = mkNeedy(lazyA);
var needyB = mkNeedy(lazyB);
var needyC = mkNeedy(lazyB);
var needyD = mkNeedy(lazyB);
var needyE = mkNeedy(lazyB);
var needyG = mkNeedy(lazyB);
var needyH = mkNeedy(lazyB);
var needyI = mkNeedy(lazyB);
var needyJ = mkNeedy(lazyB);
var needyK = mkNeedy(lazyB);
var needyL = mkNeedy(lazyB);
var needyM = mkNeedy(lazyB);
var needyN = mkNeedy(lazyB);
var needyO = mkNeedy(lazyB);
var needyP = mkNeedy(lazyB);
var needyQ = mkNeedy(lazyB);
var needyR = mkNeedy(lazyB);
var needyS = mkNeedy(lazyB);
var needyT = mkNeedy(lazyB);
console.log(f(needyA, needyB, needyC, needyD, needyE, needyG, needyH,
                      needyI, needyJ, needyK, needyL, needyM, needyN,
                      needyO, needyP, needyQ, needyR, needyS, needyT));

var lazyA = function () { return 6; }
var needyA = mkNeedy(lazyA);
var needyB = mkNeedy(lazyB);
var needyC = mkNeedy(lazyB);
var needyD = mkNeedy(lazyB);
var needyE = mkNeedy(lazyB);
var needyG = mkNeedy(lazyB);
var needyH = mkNeedy(lazyB);
var needyI = mkNeedy(lazyB);
var needyJ = mkNeedy(lazyB);
var needyK = mkNeedy(lazyB);
var needyL = mkNeedy(lazyB);
var needyM = mkNeedy(lazyB);
var needyN = mkNeedy(lazyB);
var needyO = mkNeedy(lazyB);
var needyP = mkNeedy(lazyB);
var needyQ = mkNeedy(lazyB);
var needyR = mkNeedy(lazyB);
var needyS = mkNeedy(lazyB);
var needyT = mkNeedy(lazyB);
console.log(f(needyA, needyB, needyC, needyD, needyE, needyG, needyH,
                      needyI, needyJ, needyK, needyL, needyM, needyN,
                      needyO, needyP, needyQ, needyR, needyS, needyT));

var lazyA = function () { return 8; }
var needyA = mkNeedy(lazyA);
var needyB = mkNeedy(lazyB);
var needyC = mkNeedy(lazyB);
var needyD = mkNeedy(lazyB);
var needyE = mkNeedy(lazyB);
var needyG = mkNeedy(lazyB);
var needyH = mkNeedy(lazyB);
var needyI = mkNeedy(lazyB);
var needyJ = mkNeedy(lazyB);
var needyK = mkNeedy(lazyB);
var needyL = mkNeedy(lazyB);
var needyM = mkNeedy(lazyB);
var needyN = mkNeedy(lazyB);
var needyO = mkNeedy(lazyB);
var needyP = mkNeedy(lazyB);
var needyQ = mkNeedy(lazyB);
var needyR = mkNeedy(lazyB);
var needyS = mkNeedy(lazyB);
var needyT = mkNeedy(lazyB);
console.log(f(needyA, needyB, needyC, needyD, needyE, needyG, needyH,
                      needyI, needyJ, needyK, needyL, needyM, needyN,
                      needyO, needyP, needyQ, needyR, needyS, needyT));

var lazyA = function () { return 10; }
var needyA = mkNeedy(lazyA);
var needyB = mkNeedy(lazyB);
var needyC = mkNeedy(lazyB);
var needyD = mkNeedy(lazyB);
var needyE = mkNeedy(lazyB);
var needyG = mkNeedy(lazyB);
var needyH = mkNeedy(lazyB);
var needyI = mkNeedy(lazyB);
var needyJ = mkNeedy(lazyB);
var needyK = mkNeedy(lazyB);
var needyL = mkNeedy(lazyB);
var needyM = mkNeedy(lazyB);
var needyN = mkNeedy(lazyB);
var needyO = mkNeedy(lazyB);
var needyP = mkNeedy(lazyB);
var needyQ = mkNeedy(lazyB);
var needyR = mkNeedy(lazyB);
var needyS = mkNeedy(lazyB);
var needyT = mkNeedy(lazyB);
console.log(f(needyA, needyB, needyC, needyD, needyE, needyG, needyH,
                      needyI, needyJ, needyK, needyL, needyM, needyN,
                      needyO, needyP, needyQ, needyR, needyS, needyT));

var lazyA = function () { return 12; }
var needyA = mkNeedy(lazyA);
var needyB = mkNeedy(lazyB);
var needyC = mkNeedy(lazyB);
var needyD = mkNeedy(lazyB);
var needyE = mkNeedy(lazyB);
var needyG = mkNeedy(lazyB);
var needyH = mkNeedy(lazyB);
var needyI = mkNeedy(lazyB);
var needyJ = mkNeedy(lazyB);
var needyK = mkNeedy(lazyB);
var needyL = mkNeedy(lazyB);
var needyM = mkNeedy(lazyB);
var needyN = mkNeedy(lazyB);
var needyO = mkNeedy(lazyB);
var needyP = mkNeedy(lazyB);
var needyQ = mkNeedy(lazyB);
var needyR = mkNeedy(lazyB);
var needyS = mkNeedy(lazyB);
var needyT = mkNeedy(lazyB);
console.log(f(needyA, needyB, needyC, needyD, needyE, needyG, needyH,
                      needyI, needyJ, needyK, needyL, needyM, needyN,
                      needyO, needyP, needyQ, needyR, needyS, needyT));

var lazyA = function () { return 14; }
var needyA = mkNeedy(lazyA);
var needyB = mkNeedy(lazyB);
var needyC = mkNeedy(lazyB);
var needyD = mkNeedy(lazyB);
var needyE = mkNeedy(lazyB);
var needyG = mkNeedy(lazyB);
var needyH = mkNeedy(lazyB);
var needyI = mkNeedy(lazyB);
var needyJ = mkNeedy(lazyB);
var needyK = mkNeedy(lazyB);
var needyL = mkNeedy(lazyB);
var needyM = mkNeedy(lazyB);
var needyN = mkNeedy(lazyB);
var needyO = mkNeedy(lazyB);
var needyP = mkNeedy(lazyB);
var needyQ = mkNeedy(lazyB);
var needyR = mkNeedy(lazyB);
var needyS = mkNeedy(lazyB);
var needyT = mkNeedy(lazyB);
console.log(f(needyA, needyB, needyC, needyD, needyE, needyG, needyH,
                      needyI, needyJ, needyK, needyL, needyM, needyN,
                      needyO, needyP, needyQ, needyR, needyS, needyT));
