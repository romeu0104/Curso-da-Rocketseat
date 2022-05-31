//1. Criar variável weight
//let weight

//2. Que tipo de variável é essa?
//console.log(typeof weight) //Undefined

//3. Declare uma variável e atribua valores para cada um dos dados

/*
let name="Romeu"
let age=32
let stars=4.95
let isSubscribed=true
*/

//4. A variável student abaixo é de que tipo de dado
/*let student = {}
console.log(typeof student)//Object
*/

//4.1 Atribua a ela as mesmas propriedades e valores do exercício 3

let student = {
    name: "Romeu",
    age: 32,
    weight: 96.95,
    isSubscribed: true
}
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} Kg`)


//5. Declare uma variável array de nome students e deixe vazio
let students = []
//6. Use o objeto criado da questão 4 para reatribuir um valor na variável students

students = [student]
console.log(students)


//7. Coloque no console.log o valor da posição 0 do array
console.log(students[0])
//8. Crie um novo student e coloque na posição 1
let student1 = {
    name: "Dayane",
    age: 32,
    weight: 65,
    inSubscribed: false
}

//tenho das formas de atribuir esse novo estudante, nessa primeira reatribuindo tudo
/*
students = [
    student,
    student1
]
console.log(students)*/

//E a segunda maneira e atrubuir diretamente na posição

students[1] = student1
console.log(students)

//9. Sem rodar o código abaixo responda qual a resposta do cod abaixo e pq?

// A resposta do código será undefined, pois a variável var é global e sofre o hoosting, ele é elevada acima do código dizendo que já foi criada, mas seu valor só será lido por códigos abaixo da sua linha
console.log(a)
var a = 1