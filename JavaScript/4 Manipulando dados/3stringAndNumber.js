// Convertendo string and Numbers

let string = "123"
console.log(Number(string))
let number = 123
console.log(String(number))


//Contar quantas letras tem uma palavra

let word = "Liquidificador"
console.log(word.length)

//Para achar quantos dígitos tem um número deve-se transformar o número em string, pois number n aceita a propriedade length

let num=12345
console.log(String(num).length)

// trocar a quantidade de casas decimais de um número e trocar ponto por vírgula

let numeroQuebrado = 456564.12211354577

console.log(numeroQuebrado.toFixed(2).replace(".",",")) // na função replace vc diz o que vc quer trocar pelo que, nessa ordem, porém virgula não faz parte da biblioteca para números então o sistema o transforma em string

//Mesmo só mudando as casas decimais e o transforma em string, se fosse o caso poderiamos adicionar aqui varias outros métodos referentes a string, mas vou voltar a variável para numero.
numeroQuebrado = numeroQuebrado.toFixed(2)
console.log(typeof numeroQuebrado)
console.log(numeroQuebrado)

numeroQuebrado= Number(numeroQuebrado)
console.log(typeof numeroQuebrado)
console.log(numeroQuebrado)

// mudar letras maúsculas para minúsculas e vice-versa

let phrase = "Programar é muito bom e da hora, mas nem tudo é amor"

console.log(phrase.toUpperCase())//Todas maiúsculas
console.log(phrase.toLowerCase())//Todas minúsculas

//Verificar se a string contém uma palavra específica

console.log(phrase.includes("programar"))//aqui ele procura exatamente como escreveu (case sensive), então para evitar erros deve-se transformar todas em maiúsculas e minúscolas para evitar erros

console.log(phrase.toLowerCase().includes("programar"))

//Separa um texto que contém espaços em um novo array onde cada texto é uma posição do array. Depois transformar o array em um texto substituindo os espaços por _

let myArray = phrase.split(" ")// split retira do texto o termo colocado e separa cada pedaço da string que sobrou em arrays
console.log(myArray)

let pharseWithUnderscor=myArray.join("_")// o join junta os array colocando entre cada um o termo selecionado
console.log(pharseWithUnderscor)