var shell = require('shelljs')

export const makeFolder= (folderName:string):string=>{
    let path=process.cwd()
    shell.exec(`
    mkdir ${path}/${folderName}
    `
    )
    return `${path}/${folderName}`

}