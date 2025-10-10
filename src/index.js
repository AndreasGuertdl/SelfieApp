//Creating server with the Express Library

import { openDb } from './configdb.js';
import express from 'express';

//A linha abaixo é de quando não estava trabalhando com módulos
//Ao adicionar "type":"module" em package.json 'require' não funciona mais:
//const express = require('express');

const app = express();
const port = 3000;
app.use(express.static('../public'));
app.use(express.json({ limit: '1mb' }));
app.listen(port, () => console.log("This happens when the server is listening. The port defined is " + port + " and you can acess it by typing: http://localhost:3000/ on the browser."));

openDb();

//GET
app.get('/api', (req, res) => res.send('Server is working!'));

//POST
app.post('/api', (request, response) => {
    //request: guarda todos os dados que estão sendo enviado pelo Cliente
    //response: tudo que será devolvido para o Cliente
    console.log("I got a request!");
    console.log(request.body);
    const data = request.body;
    response.json({
        status: "success",
        lat: data.lat,
        lng: data.lng
    });
});