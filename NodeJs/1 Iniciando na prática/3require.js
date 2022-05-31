// usa require para chamar módulos para dentro do js

//módulos nativos

const path = require('path')
console.log(path.basename(__filename))


//módulos externos - linkando outro arquivo a esse
const moduloCriado = require('./4module')
console.log(moduloCriado)