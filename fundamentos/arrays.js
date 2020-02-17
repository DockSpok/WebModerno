const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

// push e pop inserem ou retiram o última posição
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
// Deletando um (ou mais) elemento(s) o JS marca como <Empty item>
delete valores[0]
console.log(valores)

console.log(typeof valores)

// O length nesse caso é o total com um monte de posições vazias...
valores[100] = null
console.log(valores.length)
console.log(valores)