// Switch funciona basicamente como If Else, vai pulando de caso em caso e para caso tenha um break

//Exemplo

function calculate (number1, operator, number2){
    let result

    switch (operator) {
        case "+":
            result = number1+number2
            break;
        case "-":
            result = number1-number2
            break;
        case "*":
            result = number1*number2
            break
        case "/":
            result = number1/number2
            break;
        default:
            console.log("não implementado")
            break;
    }
    return result
}

let resultado = calculate(5,"/",2)
console.log(resultado)