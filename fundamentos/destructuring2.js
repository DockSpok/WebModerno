// Aula 42 desestruturando arrays

const[a] = [10]
console.log(a)

const [n1, n2, n3, n4, n5, n6 = 0] = [10,7,9,8]
console.log(n1,n3,n5,n6)

// O mesmo que...
const [n1, ,n3, ,n5, n6 = 0] = [10,7,9,8]
console.log(n1,n3,n5,n6)

// obs: também funciona para arrays aninhados