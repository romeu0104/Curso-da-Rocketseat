//For in
// Criar um loop para pegar cada propriedade de um objeto

let person ={
    name: "Romeu",
    age: 32,
    weight: 97.5
}

for(let proprety in person){
    console.log(proprety)
    console.log(person[proprety])
}