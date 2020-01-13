// Aula 61  for in

const notas = [6,7,9,8,7]

// É similar ao foreach do C#
// lembrar que let torna a avariável 'i' circunscrita ao escopo desse for
for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

// lembrar que let torna a avariável 'atributo' circunscrita ao escopo desse for
for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}