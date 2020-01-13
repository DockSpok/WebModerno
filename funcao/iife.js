/* Aula 85
   IIFE = Immediately Invoked Function Expression
   ou, Função Auto Invocada
   Serve para isolar a função do escopo global.
   Funciona assim: logo que o script é lido 
   a função dentro dos parênteses é executada imediatamente.
*/

(function(){
  console.log('Será executado na hora')
  console.log('fugindo do escopo mais abrangente')
})()

