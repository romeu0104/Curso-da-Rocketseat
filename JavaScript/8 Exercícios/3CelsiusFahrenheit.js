// Criar função q recebe string e transfora Celsius em Fahrenheit e vice versa

//Fazendo sozinho
/*
function conversao (tipo,temp){
    let celcius=0;
    let fahrenheit=0;
    if(tipo==="celcius"){
        fahrenheit=temp*(9/5)+32
        console.log(`${fahrenheit} farenhaits`)
    }
    else if(tipo==="fahrenheit"){
        celcius=(temp-32)*(5/9)
        console.log(`${celcius} celcius`)
    }
}
conversao("fahrenheit", 95)
*/

//Resolução professor

function transformDegree (degree){
    const celciusExiste= degree.toUpperCase().includes('C');
    const fahrenfaitExiste= degree.toUpperCase().includes('F');
    //Caminho de erro
    if(!celciusExiste&&!fahrenfaitExiste){
        throw new Error("Grau não identificado")
    }

    //Caminho ideal F para C
    let updateDegree = Number(degree.toUpperCase().replace("F",""))
    let formula = (fahrenheit) => (fahrenheit-32)*5/9
    let degreeSign="C"

    //Caminho alternativo C para F
    if(celciusExiste){
        updateDegree = Number(degree.toUpperCase().replace("C",""))
        formula = (celcius) => celcius*9/5+32
        degreeSign="F" 
    }

    return formula(updateDegree) + degreeSign
}
try {
    console.log(transformDegree("50F"))
    console.log(transformDegree("10c"))
    console.log(transformDegree("50z"))
    
   
} catch (error) {
    console.log(error)
}