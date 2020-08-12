let data = [ 
    { rank: 1, item: { userName: 'Rafaela', score: 600 } },
    { rank: 2, item: { userName: 'Carla', score: 410 } },
    { rank: 2, item: { userName: 'Yuri', score: 410 } },
    { rank: 3, item: { userName: 'Jompas', score: 300 } },
    { rank: 4, item: { userName: 'Jonas', score: 266 } },
    { rank: 4, item: { userName: 'Tereza', score: 266 } }
]
  
  let result = [...new Set(data.map(x => x.rank))].map( x => {
      return{
          rank: x,
          item : {
              userName : data.filter(d => d.rank == x).map( u => u.item.userName),
              score: data.find(d => d.rank == x).item.score
          }
      }
  })
  
  console.log(result)

  /* var variavel = [
    {estado: 'São Paulo', cidade: 'Campinas'}, 
    {estado: 'São Paulo', cidade: 'Santos'}, 
    {estado: 'São Paulo', cidade: 'Sorocaba'}, 
    {estado: 'Bahia', cidade: 'Salvador'}, 
    {estado: 'Bahia', cidade: 'Ilhéus'}, 
    {estado: 'Rio Grande do Sul', cidade: 'Porto Alegre'}
    ];
var saida = [];

for (var i = 0; i < variavel.length; i++) {
    var cidadeIgual = false;
    for (var j = 0; j < i; j++) {
        if (saida[j] && variavel[i].estado == saida[j].estado) {
            saida[j].cidades.push({
                nome: variavel[i].cidade
            })
            cidadeIgual = true;
            break;
        }
    }
    
    if (!cidadeIgual) {
        saida.push({
            estado: variavel[i].estado,
            cidades: [{
                nome: variavel[i].cidade
            }]
        })
    }
}

console.log(saida) */