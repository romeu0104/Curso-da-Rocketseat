const express = require('express')
const app = express()

app.set("view engine","ejs")// set é um método do módulo express view engine é a ferramenta utilizada para renderizar Html será o ejs

app.get("/", function (req, res){//Criando uma rota o "/" na verdade seria o domínio principal do site
    res.render("pages/index")//quando requisitar (req) o domínio principal a resposta (res) será renderizar o index.ejs
}) 

//exemplo de como seria uma sub página do domínio principal
app.get('/sobre', function(req,res){ //esse '/sobre' seria na verdade um "www.google.com/sobre" por exemplo
    res.render('pages/about')
})

app.listen(8080) //listen é uma função dentro do express q fica ouvindo um porta de local host no caso a 8080

/*       OBS.: para que as páginas sejam renderizadas devem estar dentro da pasta views por padrão*/