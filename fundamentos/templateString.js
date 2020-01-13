// Aula 21
const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!' // forma antiga
const templateNovo = // nova forma ES6 usa template: entre ` crases para inserir e ${para interpolar} e \ para escapar
    `
    \n
    Olá
    ${nome}!`
console.log(concatenacao, templateNovo)

console.log(`\n 1 + 1 = ${1 + 1}`)

// A seguir uma função é atribuída a uma variável...
const transformarEmMaiusculas = parametro => parametro.toUpperCase() 

console.log(`Maiúsculas a partir daqui: ${transformarEmMaiusculas('transformando...')}`)