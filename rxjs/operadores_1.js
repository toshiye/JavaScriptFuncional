 //Os dois tipos... 

 // 1. Operadores de Criação
 const {of, from} = require('rxjs') 
 
// 2. Operadores Encadeáveis (Pipeables Op.) 
const {last, map} = require('rxjs/operators')

from([1, 2, 'Sara', false, 'ultimo'])
    .pipe(
        last(),
        map(v => v[0]),
        map(v => `A letra encontrada foi: ${v}`)
    )
    .subscribe(function(valor) {
        console.log(valor)
    })

/* of(1, 2, 'Sara', false, 'ultimo')
    .pipe(
        last(),
        map(v => v[0]),
        map(v => `A letra encontrada foi: ${v}`)
    )
    .subscribe(function(valor) {
        console.log(valor)
    }) */