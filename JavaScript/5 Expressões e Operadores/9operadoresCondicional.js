//Operadores condicionais

//Dependendo da condição recebemos valores diferentes

//Condition ? value1(se sim):value2(se não)

//Exemplos

//Café da manhã
let pao=true
let queijo=false

const niceBreakfast = pao&&queijo ? "Café com pão e queijo": "Ou n tem pão ou n tem queijo"

console.log(`O que temos para o café? ${niceBreakfast}`)

const ingredientePao = pao?"Temos pão":"Não temos pão"
const ingredienteQueijo=queijo ? "Temos queijo":"não temos queijo"
console.log(`Temos pão para o café? ${ingredientePao}. E queijo? ${ingredienteQueijo}`)

//Maior que 18

const person = {
    name: "Romeu",
    emprego: "Aprendiz de Dev",
    age: 32
}
const maiorIdade = person.age>=18?"Sim, sou de maior":"Não sou de maior"
console.log(`Qual seu nome? ${person.name}.Trabalha com o que? ${person.emprego}. É maior de idade? ${maiorIdade}. Quantos anos? ${person.age}`)