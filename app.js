var express = require('express');
var app = express();

app.get('/', function(req, res) {
res.send('Hello Word');
});

app.listen(3000, () =>{
    console.log('Ejemplo app esta escuchando en el puerto 3000');
});