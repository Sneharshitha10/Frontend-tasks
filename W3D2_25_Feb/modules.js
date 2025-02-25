"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Myclass = exports.x = void 0;
exports.fun = fun;
exports.x = "Sneha";
function fun() {
    console.log("hello function");
}
var Myclass = /** @class */ (function () {
    function Myclass(a, b) {
        var _this = this;
        this.add = function () { return _this.a + _this.b; };
        this.a = a;
        this.b = b;
    }
    return Myclass;
}());
exports.Myclass = Myclass;
