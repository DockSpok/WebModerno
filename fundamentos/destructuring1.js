// Aula 41 desestruturando objetos
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// No casos, o destructuring busca de 'pessoa' as variáveis nome e idade.
const { nome, idade } = pessoa
console.log(nome, idade)
// Posso mudar o nome da variável...
const { nome: nm, idade: id } = pessoa
console.log(nm, id)
// Para acessar, desestruturar dados aninhados, ter certeza de que o caminho existe.
const { endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)