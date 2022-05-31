console.log(process.argv)

//o argv é um array q adicionando os processos digitados no node, incluindo ele em um array.
// no terminal eu digite: node 5process.js Romeu Rezende - Cada um desse processos digitados são adicionados a um array, então posso fazer:


console.log(`Seu nome é ${process.argv[2]} ${process.argv[3]}`)

//só vai funcionar no terminal digitar todos os valores do array: node 5process Romeu Rezende