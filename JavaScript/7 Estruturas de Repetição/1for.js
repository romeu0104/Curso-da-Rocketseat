/*
                For - Estipula parâmetros de repetição*/


//i=0 - primeiro termo é o valor de onde vai começar a repetição
//i<10 - segundo termo é até onde vai
//i++ - terceiro termo q define oq acontece quando termina o loop nesse caso é para acrescentar

for (let i=0; i<10; i++){
    console.log(i)
}

console.log("USANDO BREAK")
for(let n=10; n>0; n--){
    if (n===5){
        break //Break para a aplicação
    }
    console.log(n)
}

console.log("USANDO CONTINUE")
for(let j=1;j<=10;j++){
    if(j===7){
        continue //continue - pula a execução do momento
    }
    console.log(j)
}