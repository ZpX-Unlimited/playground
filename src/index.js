const express = require('express');
const path = require('path');
const app = express();

const basePath = path.join(__dirname, 'models');

const checkAuth = function (req, res, next) {

  req.authStatus = true;

  if(req.authStatus) {
    
    console.log('Esta logado pode continuar');
    next();
  } else {

    console.log('Não esta logado, faça o login para continuar');
    next();
  }
}

app.use(checkAuth);

app.get('/produtos', (req, res) => {

  res.sendFile(`${basePath}/produtos.html`);
})

app.get('/', (req, res) => {

  res.sendFile(`${basePath}/home.html`);
  
} );

const PORT = 3000;

app.listen(PORT, (err) => {
  
  if(err){
    throw new Error (`Falha ao conectar com o servidor: ${err}`);
  }
  console.log(`Servidor esta aberto na porta: ${PORT}`);
});