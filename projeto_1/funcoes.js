const fs = require('fs')
const path = require('path')
const { resolve } = require('path')
const { rejects } = require('assert')

function lerDiretorio(caminho){
    return new Promise((resolve, reject) => {
        try{
            let arquivos = fs.readdirSync(caminho)
            arquivos = arquivos.map(arquivo => path.join(caminho, arquivo))
            resolve(arquivos)
        } catch(e) {
            reject(e)
        }
    })
}

function elementosTerminadosCom(array, padrao){
    return array.filter(el => el.endsWith(padrao))
}

module.exports = {
    lerDiretorio,
    elementosTerminadosCom
}