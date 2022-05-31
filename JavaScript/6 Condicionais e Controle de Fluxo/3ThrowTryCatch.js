//Vamos rodar um bloco de código, caso de erro, vamos lançar (throw) tenatar (try) rodar a função, capturar (catch) o erro para q a aplicação continue seguindo o fluxo.

//throw

function sayMyName (name="") {
    if (name===""){
        throw "É preciso nome"
    }
    console.log("Só aparece se não tiver erro ou se a função try rodou corretamente")//não vai aparecer pois a função foi lançada
}
/*sayMyName()
aqui eu somente rodei a função e deu erro na aplicação*/


//Try.....Catch
//é uma forma de cpturar os erros

try {// como houve erro, tento ess bloco de código
    sayMyName()// se eu colocar algum valor aqui que seja aceitável para a função ele vai voltar a rodar em casacata sem pular o console.log dentro da função
} catch(e){//se não der certo a tentativa capturo o erro 
    console.log(e)
}

console.log("Após a função de erro")// aqui mostra q após a função de erro ele continua a rodar a aplicação