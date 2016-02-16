var _qrt = require("builtin/quark_runtime.js");

// CLASS Overload

function Overload(name) {
    this.__init_fields__();
    (this).name = name;
}
exports.Overload = Overload;

function Overload__init_fields__() {
    this.name = null;
}
Overload.prototype.__init_fields__ = Overload__init_fields__;

function Overload___add__(o) {
    return o;
}
Overload.prototype.__add__ = Overload___add__;

function Overload___mul__(o) {
    return this;
}
Overload.prototype.__mul__ = Overload___mul__;

function Overload_test() {
    var o1 = new Overload("one");
    var o2 = new Overload("two");
    var o3 = (o1).__add__(o2);
    _qrt.print((o3).name);
    o3 = (o1).__mul__(o2);
    _qrt.print((o3).name);
    if ((o3) === (o1)) {
        _qrt.print("YAY!");
    }
}
Overload.prototype.test = Overload_test;

function Overload__getClass() {
    return "Overload";
}
Overload.prototype._getClass = Overload__getClass;

function Overload__getField(name) {
    if ((name) === ("name")) {
        return (this).name;
    }
    return null;
}
Overload.prototype._getField = Overload__getField;

function Overload__setField(name, value) {
    if ((name) === ("name")) {
        (this).name = value;
    }
}
Overload.prototype._setField = Overload__setField;

function main() {
    var o = new Overload("test");
    (o).test();
}
exports.main = main;