//Escopo é um bloco que se cria dentro do código utilizando {}

// a variável var será lida fora do escopo mais seu valor n será apresentado isso é chamado de hoosting

console.log("Exite x antes do escopo?", x) //Resultado apresentado será indefinido quando utilizar var

{
    var x = 0
}

console.log("Existe x após o escopo?", x) //Resultado será apresentado 

//const e let são locais e só funcionam no escopo onde foram criadas

{
    let y = 0
    console.log ("Existe y?", y)
}
// se eu fizeler um consle.log aqui fora dará erro, porém no exemplo abaixo, ao não se atribuir uma palavra chave ao z e colocar outro valor dentro do escopo, esse valor será atualizado

let z = 1;
console.log("Valor de z antes do escopo", z)

{
    z = 5
    console.log("valor de z dentro do escopo", z)
}
console.log("valor de z após o escopo", z)

