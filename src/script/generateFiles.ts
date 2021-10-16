var shell = require('shelljs')

export const generatePackage = (path:string)=>{
    shell.exec(`
    cd ${path} && npm init --yes &&
    mkdir dist src &&
    echo 'console.log("hello world")'>>dist/index.js &&
    echo 'console.log("hello world")' >> src/index.ts &&
    mkdir src/lib src/util src/test`,{silent:true})

}