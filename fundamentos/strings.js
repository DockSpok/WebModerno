// Aula 20 
const escola = "Cod3r"
const listaCsv = "Ana,Beatriz,Cláudia"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // Não gera erro por não encontrar nada.
console.log(escola.charCodeAt(3)) // ASCII = 51
console.log(escola.indexOf('d')) // 2 = índice
console.log(escola.substring(2)) // Do índice 2 (inclusive) ao final.
console.log(escola.substring(2,4)) // Do índice 2 (inclusive) ao 3 (4, excluído).
console.log('Escola: '.concat(escola).concat('!'))
console.log('Escola: ' + escola + '!') // Mesmo resultado de .concat
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e')) // Regex: d = dígitos (no cas, encontra o 3)
console.log(listaCsv.split(',')) // Gera um Array
console.log(listaCsv.split(/,/)) // Pode usar Regex ... mesmo resultado.. Gera um Array
