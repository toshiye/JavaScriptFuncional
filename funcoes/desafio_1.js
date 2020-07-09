// somar(3)(4)(5)
/* function somar(a, b, c){
    return  a + b + c
}

console.log(somar(3, 4, 5)) */

function somar(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

const somarAB = somar(3)(4)
console.log(somarAB(13))
console.log(somar(13)(20)(30))


//calcular(3)(7)(fn)
/* function vezes(a = 1, b = 1){
    return a * b
}

function calcular(a, b, fn){
    const soma = a + b
    if(typeof fn === 'function'){
        fn(7, soma)
    }    
}

const resultado = calcular(3, 5, vezes)
console.log(resultado) */

function calcular(x){
    return function(y){
        return function(fn){
            return fn(x, y)
        }
    }
}

function subtrair(a, b){
    return a - b
}

function multiplicar(a, b){
    return a * b
}

const r1 = calcular(10)(5)(subtrair)
console.log(r1)

const r2 = calcular(10)(5)(multiplicar)
console.log(r2)