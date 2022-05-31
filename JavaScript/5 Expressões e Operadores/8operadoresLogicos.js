//Operadores lógicos

// 2 Valores booleanos quando verificados resultará em verdadeiro ou falso

let pão = true
let queijo = false

// And &&
console.log(`Esse café tem pão e queijo? ${pão&&queijo}`)

// Or ||
let leite = false
let café = true
console.log(`Esse café tem café OU leite? ${café||leite}`)

//Not !
//aqui podemos mudar o valor, se algo é verdadeiro vira falso e vice versa

console.log(`Tem Leite? `+leite)
leite = !leite
console.log(`Buscou o leite? `+leite)
