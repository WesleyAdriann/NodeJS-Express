const express = require('express');
const morgan = require('morgan');
const app = express();

const routes = require('./routes');
const routesApi = require('./routes-api');

app.set('appName', 'Meu primeiro servidor');
app.set('views' , __dirname + '/views');
 
app.set('view engine', 'ejs');

app.use(morgan('dev'));

//Rotas
app.use(routes);
app.use('/api', routesApi);

app.get('*', (req, res) => {
    res.end('404 - Pagina não encontrada');
})

//Define a porta 3000
app.listen(3000, () => {
    console.log("Servidor na porta 3000");
    console.log('Nome do App:', app.get('appName'));
});