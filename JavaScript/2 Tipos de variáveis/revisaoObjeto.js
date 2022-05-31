//Object com várias propriedade, deve-se utilizar : ao invés de = pois está dentro do escopo
// Não esquecer da vírgula após cada valor

const person = {
    name: "Romeu",
    age: 32,
    weight: 97.5,
    isAdmin: true
}

//Para escolher apenas uma propriedade desta variável devese fazer colocar variável.propriedade

console.log(person.name)

console.log(`${person.name} tem ${person.age} anos e pesa ${person.weight} quilos. Ele é admin? ${person.isAdmin}`)