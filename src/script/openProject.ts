var shell = require('shelljs')

export const open= (path:string)=>{

    shell.exec(`
    code ${path}
    `)


}