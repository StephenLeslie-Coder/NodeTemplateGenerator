#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var fs = __importStar(require("fs"));
var generateFiles_1 = require("../script/generateFiles");
var makeFolder_1 = require("../script/makeFolder");
var openProject_1 = require("../script/openProject");
var program = new commander_1.Command();
var tsConfig = require('../../src/config/tsCon.json');
program.argument('<filename>', 'Name of folder to create').action(function (filename) {
    var path = makeFolder_1.makeFolder(filename);
    generateFiles_1.generatePackage(path);
    fs.writeFileSync(path + "/tsconfig.json", JSON.stringify(tsConfig, null, 4));
    openProject_1.open(path);
});
program.version('1.0.0');
program.parse(process.argv);
