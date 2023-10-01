const http = require('http'); //Importando um módulo global, aqui poderia importar um arquivo local utilizando "./" ou "/"

// function rqListener(req, res) { //função para manipular as requisições e as respostas (servidor). Esta função agora será executada para cada solicitação que chegar ao nosso servidor, que será iniciada quando createServer for chamado
// }
// http.createServer(rqListener); //método para criação de um servidor node

//Porém a forma que o node.js usa intensamente é:
// http.createServer(function(req, res) { //Essa é uma arquitetura orientada a eventos
// });

//Outro porém é, pode ser melhorado com uma arrow function
const server = http.createServer((req, res) => { 
    // console.log(req);
    console.log(req.url, req.method, req.headers); //verificando as informações mais importantes, neste caso, a url, método e os cabeçalhos da requisição
    //No terminal:
    /** / GET {   // A barra sozinha quer dizer a URL, GET é o method e abaixo dele os headers (cabeçalhos)
        host: 'localhost:3000',
        connection: 'keep-alive'...
    */    
    //process.exit(); // Sai do loop de eventos e o programa é encerrado, devolvendo o terminal após uma requisição

    //Trabalhando com a resposta ao cliente
    res.setHeader('Content-Type', 'text/html'); //configurando um cabeçalho, possível ver o mesmo no inspecionar, rede, requests
    //Escrevendo o html que será devolvido como resposta ao cliente
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end(); //método para informar que a escrita da resposta foi encerrada
});

server.listen(3000); //O Listen inicia um processo em que o nodejs não sai imediatamente do nosso script, mas onde o nodejs mantém essa execução para escutar solicitações recebidas. Possui argumentos opcionais, aqui usa-se a porta na qual o servidor estará ouvindo

//Executando o arquivo dessa forma ele ficará em um loop de execução, escutando as solicitações. Se acessar no navegador o localhost:3000 enquanto este arquivo estiver rodando, diversas informações aparecem na saída do terminal como se fosse uma requisição para o servidor

//Aqui foi criado um servidor funcional em node.js