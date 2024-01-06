const express = require('express');
const app = express();
const PORT = 3000;

app.get('/produtos', (req, res) => {

  res.sendFile(`${__dirname}/models/produtos.html`);
})

app.get('/', (req, res) => {

  res.sendFile(`${__dirname}/models/home.html`);
  
} );

app.listen(PORT, (err) => {
  
  if(err){
    throw new Error (`Falha ao conectar com o servidor: ${err}`);
  }
  console.log(`Servidor esta aberto na porta: ${PORT}`);
});