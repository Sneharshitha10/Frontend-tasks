"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modules_1 = require("./modules");
console.log(modules_1.x);
var modules_2 = require("./modules");
(0, modules_2.fun)();
var modules_3 = require("./modules");
var c = new modules_3.Myclass(10, 20);
console.log(c.add());
