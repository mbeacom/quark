var _qrt = require("quark/quark_runtime.js");
var quark = require('quark').quark;
exports.quark = quark;
var quark_delegate_md = require('../quark_delegate_md/index.js');
exports.quark_delegate_md = quark_delegate_md;



// CLASS Message
function Message() {
    this.__init_fields__();
}
exports.Message = Message;

function Message__init_fields__() {}
Message.prototype.__init_fields__ = Message__init_fields__;
Message.quark_delegate_Message_ref = quark_delegate_md.Root.quark_delegate_Message_md;
function Message_encode() {
    return "ENCODED";
}
Message.prototype.encode = Message_encode;

function Message__getClass() {
    return "quark_delegate.Message";
}
Message.prototype._getClass = Message__getClass;

function Message__getField(name) {
    return null;
}
Message.prototype._getField = Message__getField;

function Message__setField(name, value) {}
Message.prototype._setField = Message__setField;

// CLASS Ping

function Ping() {
    Ping.super_.call(this);
}
exports.Ping = Ping;
_qrt.util.inherits(Ping, Message);

function Ping__init_fields__() {
    Message.prototype.__init_fields__.call(this);
}
Ping.prototype.__init_fields__ = Ping__init_fields__;
Ping.quark_delegate_Ping_ref = quark_delegate_md.Root.quark_delegate_Ping_md;
function Ping__getClass() {
    return "quark_delegate.Ping";
}
Ping.prototype._getClass = Ping__getClass;

function Ping__getField(name) {
    return null;
}
Ping.prototype._getField = Ping__getField;

function Ping__setField(name, value) {}
Ping.prototype._setField = Ping__setField;

// CLASS Pong

function Pong() {
    Pong.super_.call(this);
}
exports.Pong = Pong;
_qrt.util.inherits(Pong, Message);

function Pong__init_fields__() {
    Message.prototype.__init_fields__.call(this);
}
Pong.prototype.__init_fields__ = Pong__init_fields__;
Pong.quark_delegate_Pong_ref = quark_delegate_md.Root.quark_delegate_Pong_md;
function Pong_toString() {
    return "PONG";
}
Pong.prototype.toString = Pong_toString;

function Pong__getClass() {
    return "quark_delegate.Pong";
}
Pong.prototype._getClass = Pong__getClass;

function Pong__getField(name) {
    return null;
}
Pong.prototype._getField = Pong__getField;

function Pong__setField(name, value) {}
Pong.prototype._setField = Pong__setField;

// CLASS Test
function Test() {
    this.__init_fields__();
}
exports.Test = Test;

function Test__init_fields__() {}
Test.prototype.__init_fields__ = Test__init_fields__;
Test.quark_delegate_Test_ref = quark_delegate_md.Root.quark_delegate_Test_md;
Test.quark_List_quark_Object__ref = quark_delegate_md.Root.quark_List_quark_Object__md;
function Test_bar(name, args, options) {
    _qrt.print(args);
    return null;
}
Test.prototype.bar = Test_bar;

function Test_foo(foo, bar, baz) {
    (this).bar("foo", [foo, bar, baz], []);
}
Test.prototype.foo = Test_foo;

function Test_rpc(name, msg, options) {
    _qrt.print((msg).encode());
    if (_qrt.equals((name), ("hello"))) {
        return new Pong();
    } else {
        return null;
    }
}
Test.prototype.rpc = Test_rpc;

function Test_hello(ping) {
    return this.rpc("hello", ping, []);
}
Test.prototype.hello = Test_hello;

function Test__getClass() {
    return "quark_delegate.Test";
}
Test.prototype._getClass = Test__getClass;

function Test__getField(name) {
    return null;
}
Test.prototype._getField = Test__getField;

function Test__setField(name, value) {}
Test.prototype._setField = Test__setField;
exports.call_main = function () { main(process.argv.slice(1)); }
function main(args) {
    var t = new Test();
    (t).foo("one", "two", 3);
    _qrt.print(((t).hello(new Ping())).toString());
}
exports.main = main;
