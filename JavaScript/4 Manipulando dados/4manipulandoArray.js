// Criar array com construtor

let myArray = new Array("a","b","c","d",3,function () {return "alo"})
console.log(myArray)

//contar elementos de array

console.log(myArray.length)
console.log (myArray [5] ()) //isso foi só um exemplo de manipulação

//Transformar uma cadeia de caracteres (string) em array

let word = "Programção"
console.log(Array.from(word))




//Manipulando o array

let techs = ["html", "css", "js"]
console.log(techs)
//Adicionar 1 item no final
techs.push("nodejs")
console.log(techs)
//Adicionar 1 item no inicio
techs.unshift("sql")
console.log(techs)
//Remover do final
techs.pop()
console.log(techs)
//Remover do inicio
techs.shift()
console.log(techs)
//Pegar somente alguns elementos do array
console.log(techs.slice(1,3)) //slice irá cortar o array em um menor, o primeiro índice é A PARTIR de onde vc quer cortar, já o segundo índece é até onde você quer cortar sendo que esse índe do array NÃO SERÁ INCLUSO
console.log(techs.slice(0,-1)) //se utlizar valores negativos ele exclui as quantidades de itendos selecionados começando a contar do final para o início

let frutas = ['Banana', 'Laranja', 'Limao', 'Maçã', 'Manga'];

//Achar a posição de um elemento no array
let index = frutas.indexOf("Limao") //aqui eu disse que a posição 2 (limao) do array recebe o valor index, no explo a seguir no primeiro termo ao invés de utilizar o número da posição, também poderia utilar o index p definir a partir de qual elemento será feita a remoção 
console.log(index)

//remover 1 ou mais elementos do array
frutas.splice(2,2)//Splice irá remover os elementos do array, o primeiro indíce será o primeiro elemento a ser removido e o segundo será a quantidade de elementos (contando com o elemento selecionado) subsequentes serão removidos
console.log(frutas)


