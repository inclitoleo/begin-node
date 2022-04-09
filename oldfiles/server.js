const http = require('http');
const calculadora = require('./soma.js');
const port = 9090;

var  html = '<h3>Soma: ' + calculadora.soma(10,20) + 
            '<br>Multiplicar: ' + calculadora.multi(5,9) + '</h3>';

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type','text/html');
    res.end(`${html}`);
});

server.listen(port, () => {
    console.log('Servidor rodando agora...');
});