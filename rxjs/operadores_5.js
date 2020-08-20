const {of, Observable} = require('rxjs')

function terminadoCom(parteFinal){
    return function(fonte){
        return Observable.create(subscriber => {
            fonte.subscribe({
                next(valor){
                    if(Array.isArray(valor)){
                        subscriber.next(
                            valor.filter(el => el.endsWith(parteFinal))
                        )
                    }else if(valor.endsWith(parteFinal)){
                        subscriber.next(valor)
                    }
                },
                error(e){
                    subscriber.error(e)
                },
                complete(){
                    subscriber.complete()
                }
            })
        })
    }
}

of('Sara Sassaki', 'Samara Sassaki', 'Heitor Sassaki', 'Zé Ninguém')
    .pipe(terminadoCom('Sassaki'))
    .subscribe(console.log)