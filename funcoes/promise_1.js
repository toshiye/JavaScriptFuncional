let a = 1
console.log(a)

/* p.then(function(valor){
    console.log(valor)
}) */

const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve){
    resolve(['Sara', 'Samara', 'Gabriel', 'Heitor'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    //.then(v => console.log(v))
    .then(console.log)