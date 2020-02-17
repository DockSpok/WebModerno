// Aula 22
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// Pra variar o JS aceita outros tipos como booleanos
isAtivo = 1
// Verificando.. usar dupla negação para saber o 
// valor booleano atual da variável...
console.log('isAtivo recebeu valor 1 e é: ' + !!isAtivo)
isAtivo = 0 
console.log('isAtivo recebeu valor 0 e é: ' + !!isAtivo)

console.log('Verdadeiro: '+ !! 3)
console.log('Verdadeiro: '+ !! '  ')
console.log('Verdadeiro: '+ !! [])
console.log('Verdadeiro: '+ !! {})
console.log('Verdadeiro: '+ !! Infinity)
console.log('Verdadeiro: '+ !! (isAtivo = true))
console.log('Verdadeiro: '+ !! (isAtivo = true) + ' ::Pega o valor atribuído e nao o resultado de uma verificação...')
console.log('Falso: '+ !! (isAtivo = false) + ' ::Pega o valor atribuído e nao o resultado de uma verificação...')

console.log('Os falsos:')
console.log('NaN: '+ !! NaN)
console.log('undefined: '+ !! undefined)
console.log('null: '+ !!null)
console.log('String vazia: '+ !!'')

// Exemplo prático de uso
nome = ''
console.log(nome || 'Desconhecido')
nome = 'Mauro'
console.log(nome || 'Desconhecido')