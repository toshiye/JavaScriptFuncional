/* Uma função pura é uma função em que o valor de retorno é determinado APENAS por seus valores de entrada, sem efeitos colaterai observáveis */

// impura
function gerarNUmeroAleatorio(min, max){
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min
}
console.log(gerarNUmeroAleatorio(1, 10000))
console.log(gerarNUmeroAleatorio(1, 10000))
console.log(gerarNUmeroAleatorio(1, 10000))
console.log(gerarNUmeroAleatorio(1, 10000))
console.log(gerarNUmeroAleatorio(1, 10000))