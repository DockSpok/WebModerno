// Aula 85
// A diferença entre o Call e o Apply é a forma como passamos parâmetros na chamada.
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,

    getPreco 
}

global.preco = 20.0
global.desc = 0.1

console.log(getPreco()) // Chamada global resulta em 18
console.log(produto.getPreco()) // Chamada pelo obj resulta em 3900.65

const carro = {
    preco: 49990, desc: 0.20
}

console.log(getPreco.call(carro)) // Chamada fornecendo o obj como contexto de execução.
console.log(getPreco.apply(carro)) // Chamada fornecendo o obj como contexto de execução.

// Diferem apenas na forma de passar os parâmetros, no caso do apply são passados em um array.
console.log(getPreco.call(carro, 0.17, 'US$')) // Chamada fornecendo o obj como contexto de execução.
console.log(getPreco.apply(carro, [0.17, 'EU$'])) // Chamada fornecendo o obj como contexto de execução.
