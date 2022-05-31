//If .... Else

let temperature = 37

if(temperature>=40){
    console.log("Febre Muito alta")
} else if (temperature>=37 && temperature<40){
    console.log("Febre alta")
} else{
    console.log("Saudável")
}

//É recomendável sempre transformar as condionais em varáveis q tenham relevância

let veryHighTemperature = temperature>=40
let hightemperature= temperature>=37 && temperature<40 // Outra forma de escrever esse trecho seria: temperature>=37

if(veryHighTemperature){
    console.log("Febre Muito alta. ALERTA")
} else if (hightemperature){
    console.log("Febre alta. CAUTELA")
} else{
    console.log("Saudável. DE BOA")
}