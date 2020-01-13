// Aula 17 Tipos numéricos
const peso1 = 1.0
const peso2 = Number('2.5')
console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const muitasCasasDecimais = 8.65666656
console.log(muitasCasasDecimais.toFixed(2))
// Demonstrando que toFixed não altera o valor, só retornou formatado.
muitasCasasDecimais.toString()
console.log(muitasCasasDecimais) 

// Convertendo em binário
console.log(muitasCasasDecimais.toString(2)) 
console.log(typeof muitasCasasDecimais) 

// Aula 18 Alguns cuidados com números em JS
console.log(7/0) // Infinity
console.log("10.7" / 2) // Tipagem dinâmica = 5.35
console.log("10" + 2) // Com o '+' o 'mundo da String' ganha e concatena como 102 e não 12
console.log("não funciona" * 2) // NaN
console.log(0.1 + 0.7) // Não é 0.9 por causa da I3E especificação num. usada no ECMA
