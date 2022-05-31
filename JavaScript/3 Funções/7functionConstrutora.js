/*
com a expressão new ela nos retornará um objeto
dentro da função faz-se um molde desse objeto utilizando a palavra this*/



function Teste(name){
    this.name=name
}
const Toinzim = new Teste("Toinzim")
console.log(Toinzim)
//com essa função contrutora acima estou colocando a propiedade name para o toizim

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " está andando."
    }
}

const romeu = new Person("Romeu")
const joao = new Person("João")

console.log (romeu.walk())
console.log (joao.walk())