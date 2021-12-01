const express = require('express');

const app = express();

app.get('/', function (req, res){res.send ('Hola Dai');});

app.listen(3000);
//localhost:3000
