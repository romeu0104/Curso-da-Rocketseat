let subject = "create video"

function createThink(){
    subject = "study"
    return subject
}

console.log(subject)
createThink()
console.log(subject)
//Quando eu não crio um parametro para a função ela me sobrescreverá o valor anterior pois estará jogando a propriedade da variável criada como argumento dentro da função

let hello = "cavalo"

function teste(hello){ //quando coloco o argumento, por mais que tenha o mesmo nome a função não sobrescreve o valor pois tratam-se de coisas diferentes, neste caso eu não estou jogando a propriedade da variável dentro da função, estou utilizando apenas um parâmetro que por coincidência tem o mesmo nome
    hello = "galinha"
    return hello
}
console.log(hello)
console.log(teste(2+2+"jaozinhodabirosca"))// ele só vai me retornar galinha quando eu rodar a função e unica e exclusivamente assim, independente do que eu usar como argumento pois na função eu digo que o valor de hello é galinha e peço o retorno desse valor
console.log(teste(hello)) // quando eu coloco o hello como argumento estou utilizando um argumento qualquer, o programa lê como outra coisa diferente da variável
console.log(hello)//após rodar a função ele não sobrescreve pois o parâmetro e argumento é diferente da variável para o programa