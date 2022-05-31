//Array

let animals = [
    "Lion",
    "Monkey",
    "Cat"
]

//Para acesar valores dentro do array utiliza a posição numérica dele dentro da lista, onde o primeiro valor será a posição 0. Para acessar esse valor será da seguinte forma variável[posição]

console.log(animals[0])
console.log(`O ${animals[0]} é o rei da selva, já o ${animals[1]} vive empoleirado em árvores, sem dúvidas o ${animals[2]} é o mais preguiçoso`)

//Para saber o total de itens do array acessar através da propriedade abaixo
console.log( `O total de itens da lista é ${animals.length}`)

//Posso criar um objeto dentro do array
//Não é recomendado misturar os tipos de dados dentro de um array, pois pode complicar futuramente, recomenda-se cria um array para apenas objetos e outro apenas para strings por exemplo, mas para efeitos didáticos foi feito dessa forma

let farm = [
    "Cavalo",
    "Galinha",
    {
        animal: "Cachorro",
        age: 2,
        name: "Bingo"
    }

]

//Para acesar esse object no array será variável[posição].propriedade

console.log(`Na minha fazenda eu tenho 1 ${farm[0]}, 10 ${farm[1]} e 1 ${farm[2].animal} de nome ${farm[2].name} com idade de ${farm[2].age} anos`)