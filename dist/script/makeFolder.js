"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFolder = void 0;
var shell = require('shelljs');
var makeFolder = function (folderName) {
    var path = process.cwd();
    shell.exec("\n    mkdir " + path + "/" + folderName + "\n    ");
    return path + "/" + folderName;
};
exports.makeFolder = makeFolder;
