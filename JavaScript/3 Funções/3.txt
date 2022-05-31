//Function expression or function anonymous
// Parametros (parameters) são os valores que eu colocar no parênteses da função, posteriormente quando chamar a função e atribuir argumentos eles serão atribuidos a esse parametros dentro da função
// na variável abaixo o sum significa somar em inglês
const sum = function(number1, number2){
    console.log(number1+number2)
}

sum(2,2) //arguments - argumentos

//Nesse exemplo anterior dentro da fuction temos um console.log que imprime o valor, ou seja, ao excutálo dentro de um string por interpolação ele irá imprimir o valor antes de terminar de ler a string, quando terminar será impresso undefined pois n existe o retorno de valor dentro da função.
// aqui vou demonstar o erro

/* Vou deixar comentado para não atrapalhar a maneira correta
let number1 = 15
let number2 = 20

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1,number2)}`)*/

// Constuindo outra função para n precisar alterar a primeira e adicionando o return

const sum2 = function(number1, number2) {
    let total = number1+number2 // nunca deixar essa palavra criada sem um palavra chave, pois após rodar a função essa palavra total passaria a existir no escopo principal com o valor da função rodada substituindo por exemplo se antes eu tivesse dito q total = 0 gerando assim erros
    return total
}
let number1 = 15
let number2 = 20
console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum2(number1,number2)}`)

// como a função já está montada n preciso nescessariamente atribuir valores para o number1 e 2 através de variáveis

console.log(`A soma de 5 mais 5 é ${sum2(5,5)}`)