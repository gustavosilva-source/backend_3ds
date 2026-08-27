
const fs = require('fs')
const path = require('node.path')
const chalk = require('chalk').default


try {
    //  resultado  ler arquivo caminho  pasta  arquivo  codificador 
    //const arquivo = fs.readFileSync(path.join(_dinarme, "/README.MD"), "utf-8")
    const arquivo = fs.readFileSync(path.resolve(_dinarme, "/README.MD"), "utf-8")
    console.log(chalk.bgGreen.white(' Arquivo Carregado com sucesso!...'))
    console.log(arquivo)
} catch (erro) {
    console.erro(chalk.bgRed.white('Deu ruim...'))
    console.log(erro.message)
}''