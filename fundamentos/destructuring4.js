// Aula 44
// Apenas usando array 
function rand([min = 0, max = 1000]){
    // A seguir, se min > max, criar o array [max,min] e 
    // em seguida desestruturando para inveter as posições, o que ocorre ao atribuir 
    // o array anterior ao novo [min,max].
    if(min > max) [min,max] = [max,min] 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// Passando um array para a função, que vai decidir que 50 é o max
console.log(rand([50,40]))
console.log(rand([992])) // apenas o primeiro parametro
console.log(rand([, 10])) // apenas o segundo parametro
console.log(rand([])) // nenhum parametro rand Assume valores default

// Não se pode iterar undefined
console.log(rand()) // TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))
