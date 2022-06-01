const {inherits} = require("util")
const {EventEmitter}=require("events")

function Character(name){
    this.name=name
}

inherits(Character,EventEmitter) //a função Character herdando funcionalidades do EventEmitter

const chapolin = new Character("Chapolin")
chapolin.on('help', ()=>console.log(`Eu o ${chapolin.name} colorado!`))

chapolin.emit('help')