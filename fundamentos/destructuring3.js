// Aula 43
// a função abaixo usa destructuring na definição dos parâmetros apenas definindo valores default
function rand({ min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// o objeto a seguir vai ser passado como parametro na chamada da função anterior e será desestruturado
const objeto = {max: 50, min: 40}
console.log(rand(objeto))

// As formas abaixo não funcionam porque não se pode desestruturar objetos vazios
// TypeError: Cannot destructure property `min` of 'undefined' or 'null'.
console.log(rand({}))
console.log(rand())