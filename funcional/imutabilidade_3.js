const pessoa = {
    nome: 'Sara',
    altura: '0.90',
    cidade: 'São Paulo',
    end: {
        rua: 'Feliz'
    }
}

// Atribuição por referência
const outraPessoa = pessoa

// Passagem por referência
function alteraPessoa(pessoa){
    const novaPessoa = {...pessoa}
    novaPessoa.nome = 'Sarinha'
    novaPessoa.cidade = 'Elói Mendes'
    novaPessoa.end.rua = 'Minha Rua'
    return novaPessoa

}
const novaPessoa = alteraPessoa(pessoa)
console.log(pessoa)
console.log(novaPessoa)

let a = 3
let b = a // atribuição por valor(copia!)

a++
b--

console.log(a, b)