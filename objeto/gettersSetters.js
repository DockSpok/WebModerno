// Aula 92 

const sequencia = {
    _valor: 1,
    // Interessante que JS não aceita sobrecarga 
    // de nome de método exceto nesse caso
    get valor(){ return this._valor++ },
    set valor(valor) { 
        // Controlando a atribuição.
        if(valor > this._valor){ 
            this._valor = valor 
        }
    }
}

console.log(sequencia.valor, sequencia._valor) // acessa mas não deve ser usado
console.log(sequencia.valor, sequencia.valor) // melhor forma pois respeita a convenção

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)


sequencia.valor = 900 // Controle de atribuição funcionando não permite atribuição de valor menor que o atual.
console.log(sequencia.valor, sequencia.valor) 