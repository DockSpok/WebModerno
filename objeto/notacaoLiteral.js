// Aula 91
const a = 1
const b = 2
const c = 3

const obj1 = {a:a,b:b,c:c} // Notação antiga
const obj2 = {a,b,c} // Notação ES6

console.log(obj1, obj2)

const nomeAtributo = 'nota'
const valorAtributo = 7.85

const obj3 = {}
obj3[nomeAtributo] = valorAtributo
console.log(obj3)

// Que é o mesmo que inicializar o objeto desta forma literal...s
const obj4 = {[nomeAtributo]: valorAtributo}
console.log(obj4)

const obj5 = {
    funcaoAntiga: function(){
        //... usava chave/valor
    },
    funcaoNova(){
        //... melhoria no ES6
    }
}