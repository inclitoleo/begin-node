const express = require("express");
const calculadora = require("./oldfiles/soma.js");
const app = express();
const port = 4000;

app.get("/", function(req,res){
    res.send(`Soma: ${calculadora.soma(10,10)}`);
});

app.get("/blog", function(req,res){
    res.send('Bem vindo ao meu sistema');
});


//parametro opcional
app.get("/tkd/:id?", function(req,res){

    var id = '';

    if (req.params.id) {
         id = req.params.id;
    }

    res.send('Conheça o Taekwondo ' + id);
});

//query params
app.get("/pommse", function(req,res){
    var params = req.query['tipo'];
    res.send(params);
});

//Parametro obrigatório
app.get("/nome/:nome/:sobrenome",function(req,res){
    
    let nome = req.params.nome;
    let sobrenome = req.params.sobrenome;
    let nomecompleto = nome +" "+sobrenome;

    res.send("Meu nome é: " + nomecompleto);
});

app.listen(port, function(error) {
    if (error) {
        console.log('Erro ao iniciar o servidor');
    }else {
        console.log('Tudo certo, servidor iniciado!');
    }
});
