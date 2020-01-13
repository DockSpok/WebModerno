// Aula 37 objetos e classes são funções

console.log(typeof Object) // Object é uma função
console.log(typeof new Object) // ... que uma vez instanciada, cria um objeto.

const Cliente = function() {} // da mesma forma que antes do ES6
console.log(typeof Cliente) 
console.log(typeof new Cliente) 

// Também no caso de classe o JS faz apenas uma sintaxe suggar
// Desde o ES6 pode ser declarada assim:

class Produto {}
console.log(typeof Produto) // é uma função
console.log(typeof new Produto) // é uma função
