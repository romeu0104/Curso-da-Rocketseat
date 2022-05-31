//                          process.stdout.write("Teste \n\n\n") 
//stdout seria a saída padrão, adicionando o write ele funciona como o console.log, escrevendo na tela, caso apareça muito rápido e suma, deve-se acrescentar \n ao final para deixar uma nova linha ou quantas linhas quiser

const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido e o que eu poderia melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = (index=0) =>{
    process.stdout.write("\n" + questions[index]+" >")
}

ask()

// através do process.standin vou criar o campo de entrada da minha aplicação onde o "on" significa q o programa irá ficar "ouvindo" enquanto estou colocando os dados (data) e a função data irá rodar todas as vezes que forem inseridos dados
/* comentando o item feito para  continuar o exercício
process.stdin.on("data", data=>{
    process.stdout.write(data.toString()+'\n') // vai rescrever os dados que eu coloquei
    process.exit() //fechar a função após inserir os dados
})*/

const answers = []

process.stdin.on("data", data=>{
    answers.push(data.toString())// adicionando as resposta ao array
    if(answers.length<questions.length){
        ask(answers.length) //aqui estou rodando a função de perguntas novamente atribuindo o index para pular p próxima pergunta
    }else{
        console.log(answers)
        process.exit()
    }
})

// o processo pode também "ouvir" (.on) e eventos, então quando a aplicação acima ele irá chamar a função de volta (callback) abaixo

process.on("exit", ()=>{ // ao "ouvir o evento exit irá chamar a função"
    console.log(`
    Revisando!
    

    O que vc aprendeu hoje?
    ${answers[0]}


    O que me deixou aborrecido e o que eu poderia melhorar?
    ${answers[1]}


    O que me deixou feliz hoje?
    ${answers[2]}


    Quantas pessoas ajudei hoje?
    ${answers[3]}
    `)
} )