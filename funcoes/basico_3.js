// Arrow function
const felizNatal = () => console.log('Feliz Natal...')
felizNatal()

const saudacao = nome => `Fala ${nome}, tudo bem???`
//"Fala " + nome + ", tudo bem ??"
console.log(saudacao('Sara'))

const somar = (...numeros) => {
    let total = 0
    for(let n of numeros){
        total += n
    }
    return total
}

const subtrair = (a, b) => a - b
console.log(subtrair(4, 1))

//console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5, 6))

const potencia = base => exp => Math.pow(base, exp)    


console.log(potencia(2)(10))

// this
Array.prototype.log = function(){
    console.log(this)
}

Array.prototype.ultimo = function(){
    console.log(this[this.length - 1])
}

Array.prototype.primeiro = function(){
    console.log(this[0])
}

const numeros = [1, 2, 3]
numeros.log()
numeros.ultimo()
numeros.primeiro()