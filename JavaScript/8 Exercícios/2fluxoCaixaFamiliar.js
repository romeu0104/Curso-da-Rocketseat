let entradasSaidas={
    receitas:[50,25,36],
    despesas:[35,5000]
}
//console.log(entradasSaidas.receitas[8])

function soma(array){
    total=0;
    for(let valor of array){
        total+=valor
    }
    return total
}

soma(entradasSaidas.receitas)
let entradas=total
soma(entradasSaidas.despesas)
let saidas=total
console.log(entradas)
console.log(saidas)

function balanço(entradas,saidas){
    saldo=0;
    saldo= entradas-saidas
    return saldo
}
balanço(entradas,saidas)
console.log(saldo)
if (saldo>=0){
    console.log(`Saldo positivo de R$ ${saldo}`)
}else {
    console.log(`Saldo negativo de R$ ${saldo}`)
}