


let family = [
    {
        geracao: 1,
        name: "Ormezinda",
        filhos: [
            {
                geracao: 2,
                name: "Maria",
                filhos: [
                {
                    geracao: 3,
                    name: "Romeu",
                    filhos:[
                        {
                            geracao: 4,
                            name: "Helena",
                            filhos:[]
                        }
                    ]
                },
                {
                    geracao:3,
                    name: "Alexandra",
                    filhos: [
                        {
                            geracao:4,
                            name: "Jade",
                            filhos: []
                        },
                        {
                            geracao:4,
                            name: "Gabriela",
                            filhos: []
                        }
                    ]
                }
                ]
            },
            {
                geracao:2,
                name: "Irenilda",
                filhos:[
                    {
                    geracao:3,
                    name:"Rafaela",
                    filhos:[
                        {
                         geracao:4,
                         name: "Emily",
                         filhos:[]   
                        },
                        {
                            geracao:4,
                            name: "Isaac",
                            filhos: []
                        }
                    ]
                    }
                ]
            }
        ]
    }
]
//Quantos filhos ormezinda tem?
function totalPrimeiraGeracao(){
    let segundaGeração = []
    for(let geracao of family){
        for(let filhos of geracao.filhos){
        segundaGeração.push(geracao.filhos.length)}
    }
    console.log(`Ormezinda tem ${segundaGeração.length}`)
}

//totalPrimeiraGeracao()



//Quantos filhos uma pessoa tem

function filhosTotal(pessoa){
    let quantFilhos =[];
    let nomeDosFilhos=[];
    for(let primeiraGeracao of family){
        if(primeiraGeracao.name===pessoa){
            quantFilhos.push(primeiraGeracao.filhos.length)
            for(let nome of primeiraGeracao.filhos){
                nomeDosFilhos.push(nome.name)
            }
        }
        for( let segundaGeracao of primeiraGeracao.filhos){
            if(segundaGeracao.name===pessoa){
                quantFilhos.push(segundaGeracao.filhos.length)
                for(let nome of segundaGeracao.filhos){
                    nomeDosFilhos.push(nome.name)
                }
            }
            for(let terceiraGeracao of segundaGeracao.filhos){
                if(terceiraGeracao.name===pessoa){
                    quantFilhos.push(terceiraGeracao.filhos.length)
                    for(let nome of terceiraGeracao.filhos){
                        nomeDosFilhos.push(nome.name)
                    }
                }
                for(let quartaGeracao of terceiraGeracao.filhos){
                    if(quartaGeracao.name===pessoa){
                        quantFilhos.push(quartaGeracao.filhos.length)
                        for( let name of quartaGeracao.filhos){
                            nomeDosFilhos.push(nome.name)
                        }
                    }
                    
                }
            }
        }
    }
    if(quantFilhos===[]){
        console.log(`${pessoa} não tem filhos`)
    } else{
        console.log(`O(a) ${pessoa}, tem ${quantFilhos} filhos de nomes: ${nomeDosFilhos}`)
    }
    
}

filhosTotal("Romeu")