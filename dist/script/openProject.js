"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.open = void 0;
var shell = require('shelljs');
var open = function (path) {
    shell.exec("\n    code " + path + "\n    ");
};
exports.open = open;
