/*

    Operadores Unarios
    *typeof
    *delete*/

console.log(typeof "Romeu") //me mostra que tipo de dado é esse, nesse caso retornará string

let person = {
    name: "Romeu",
    age: 32
}
delete person.age //vai deletar a propriedade definida de um objeto

console.log(person)//só mostrará a propriedade name do objeto pois age foi deletada