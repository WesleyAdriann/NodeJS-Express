const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end("ola");
})

app.listen(3000, () => {
    console.log("Servidor na porta 3000");
});