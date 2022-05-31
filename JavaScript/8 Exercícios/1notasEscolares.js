//Transformar notas numéricas em notas alfabéticas

/*
* 90+ = A
* ente 80-89 = B
* entre 70-79 = C
* 60-69 = D
* -60 = F*/

function nota(number){
    if(number>=90){
        console.log("Nota A")
    }
    else if(number<90 && number>=80){
        console.log("Nota B")
    }
    else if(number<80 && number>=70){
        console.log("Nota C")
    }
    else if(number<70 && number>=60){
        console.log("Nota D")
    }
    else{
        console.log("Nota F")
    }
}
nota(69.9)

// Outra forma
console.log("OUTRA FORMA DE FAZER")


function getScore(score){
    let scoreA= score>=90&&score<=100
    let scoreB= score>=80&&score<90
    let scoreC= score>=70&&score<80
    let scoreD= score>=60&&score<70
    let scoreF= score<60&&score>=0
    let scoreFinal;

    if(scoreA){
        scoreFinal="Nota A"
    }else if (scoreB){
        scoreFinal= "Nota B"  
    }else if (scoreC){
        scoreFinal= "Nota C"  
    }else if (scoreD){
        scoreFinal= "Nota D"  
    }else if(scoreF){
        scoreFinal="Nota F"
    } else{
        console.log("Nota não aceita")
    }

    return scoreFinal
}

console.log(getScore(55))
console.log(getScore(10))
console.log(getScore(50))
console.log(getScore(65))
console.log(getScore(75))
console.log(getScore(85))
console.log(getScore(95))
