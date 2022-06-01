const {EventEmitter} = require('events') //extraindo do events a função estilo classe EventEmitter
const ev = new EventEmitter() //criando o core para poder emitir eventos



//Ouvindo eventos para executar a função
ev.on("saySomething", (message)=>{
    console.log("Eu ouvi você ",message)
})

//Ouvindo eventos apenas 1 vez
ev.once("saySomething", (message)=>{
    console.log("Só vou ouvir você ",message)
})

//Emitindo eventos

ev.emit("saySomething", "João")
ev.emit("saySomething", "Camila")
ev.emit("saySomething", "Gabriel")

