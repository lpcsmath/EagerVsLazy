function Stream(h, tailF) {
    var _tail;
    this.head = function () {
        return h;
    };
    this.tail = function () {
        if (typeof _tail === 'undefined') {
            _tail = tailF();
        }
        return _tail;
    };
}

var StreamMap = function(f, s) {
    if (s === null) return null;
    return new Stream(f(s.head()), function() {
        return StreamMap(f, s.tail());
    });
};

var StreamForEach = function (f, s) {
    if (s !== null) {
        f(s.head());
        StreamForEach(f, s.tail());
    }
};

var StreamTake = function (n, s) {
    if (n === 0) return null;
    return new Stream(s.head(), function() { return StreamTake(n-1, s.tail()); });
};

var StreamToList = function (s) {
    var list = [];
    function push(x) { list.push(x); }
    StreamForEach(push, s);
    return list;
};

var ListToStream = function (l) {
    var l2s = function (i, l) {
        if (i < l.length) {
            return new Stream(l[i], function () {
                return l2s(i+1, l);
            })
        }
        return null;
    };
    return l2s(0,l);
};

var AddStreams = function (s1, s2) {
    return new Stream(s1.head() + s2.head(), function () {
        return AddStreams(s1.tail(), s2.tail());
    })
};

var from = function (n) {
    return new Stream(n, function () {
        return from(n + 1);
    });
};

var nats = from(0);

var println = function (x) {
    console.log(x);
};

println(StreamToList(StreamTake(5, nats)));

// StreamForEach(println, StreamTake(10, nats));
//
// var double = function (x) { return x + x; };
//
// StreamForEach(println, StreamTake(10, StreamMap(double, nats)));
//
// var fib = new Stream(0, function () {
//     return new Stream(1, function () {
//         return AddStreams(fib, fib.tail());
//     })
// });
//
// StreamForEach(println, StreamTake(10, fib));
//
// var ones = new Stream(1, function() {return ones;});
// var nats = new Stream(0, function() {return AddStreams(ones,nats);});
//
// StreamForEach(println, StreamTake(10, nats));
//
// StreamForEach(println, ListToStream([1,2,3,4,5,6,7]));
