var _Q_util = require("util");
function _Q_toString(value) {
    if (value === null) {
        return "null";
    }
    if (Array.isArray(value)) {
        return "[" + value.map(_Q_toString).join(", ") + "]";
    }
    return value.toString();
}

//
var p1 = require('./p1');
exports.p1 = p1;



function main() {
    p1.p2.a();
    p1.p2.b();
    p1.c();
    p1.d();
}
exports.main = main;
