// Aula ## várias formas de criar objetos em JS
// Forma mais simples de declarar um objeto:
const prod1 = {}
prod1.nome = 'Telefone'
// o atributo nome foi criado dinamicamente
// 'objeto é uma coleção de pares chave-valor'
prod1.preco = 4895.90
prod1['Desconto Legal'] = 0.40 // funciona mas devo evitar

console.log(prod1)

// Outra forma de criar objetos
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.99
}

console.log(prod2)

// Objetos declarados dentro de objetos.
const prod3 = {
    nome: 'Maquina',
    preco: 88.45,
    componente: {
        nome: 'Engrenagem',
        preco: 65.65
    }
}

console.log(prod3)
console.log(prod3.componente)
