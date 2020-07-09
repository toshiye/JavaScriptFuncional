
function exec(fn, a, b){
    return fn(a, b)
}

const somarNotTerminal = (x, y) => console.log(x + y)
const subtrairNotTerminal = (w, z) => console.log(w - z)
const subtrair = (w, z) => w - z

exec(somarNotTerminal, 56, 38)
exec(subtrairNotTerminal, 182, 27)

const r = exec(subtrair, 50, 25)
console.log(r)


const cb = () => console.log('Exec...')
setInterval(cb, 1000)
//setInterval(() => console.log('Exec2...'), 1000)
/* setInterval(function(){
    console.log('Exec3...')
}, 1000) */