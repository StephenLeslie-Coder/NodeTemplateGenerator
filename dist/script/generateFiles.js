"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePackage = void 0;
var shell = require('shelljs');
var generatePackage = function (path) {
    shell.exec("\n    cd " + path + " && npm init --yes &&\n    mkdir dist src &&\n    echo 'console.log(\"hello world\")'>>dist/index.js &&\n    echo 'console.log(\"hello world\")' >> src/index.ts &&\n    mkdir src/lib src/util src/test", { silent: true });
};
exports.generatePackage = generatePackage;
