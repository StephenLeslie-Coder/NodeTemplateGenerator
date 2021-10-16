#!/usr/bin/env node
import { Command } from 'commander';
import * as fs from "fs"
import { generatePackage } from '../script/generateFiles';
import { makeFolder } from '../script/makeFolder';
import { open } from '../script/openProject';
const program = new Command();
const tsConfig= require('../../src/config/tsCon.json')

program.argument('<filename>','Name of folder to create').action(filename=>{
    
    
    let path = makeFolder(filename)
    generatePackage(path)
    fs.writeFileSync(`${path}/tsconfig.json`,JSON.stringify(tsConfig,null,4))
    open(path)
     
    
})
program.version('1.0.0')
program.parse(process.argv)