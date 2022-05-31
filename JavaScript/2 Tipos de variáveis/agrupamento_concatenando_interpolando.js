// agrupamento

const name = "Romeu"
let age, isHuman
age = 32
isHuman = true

console.log(name, age, isHuman)

//concatenando valores escrita de texto + variáveis 

console.log('O '+name+' tem '+age+' anos. É humano? '+isHuman)

//Interpolando valores com tamplate literals or tamplate string
//Deve-se utilizar as crases nessa situção pois levará uma função dentro da string
console.log(`O ${name} tem ${age} anos. Ele é Humano? ${isHuman}`)
