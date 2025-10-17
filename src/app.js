//Creating server with the Express Library
//Also using sqlite3 e sqlite
import express from 'express';
import path from 'path';
import router from './routes.js';

const app = express();
const port = 3000;
app.use(express.static(path.resolve('../public')));
app.use(express.json({ limit: '1mb' }));
app.listen(port, () => console.log("This happens when the server is listening. The port defined is " + port + " and you can acess it by typing: http://localhost:3000/ on the browser."));

app.use(router);





















//METODO ANTIGO SEM routes.js:
//import { createTable, insertPessoa, selectPessoas, selectPessoaPorId, deletePessoaPorId, updatePessoa } from './Controller/Pessoa.js';
//createTable();
/* //GET
app.get('/api', (req, res) => res.send('Server is working! This is the /api endpoint!'));
//GET
app.get('/pessoas/id', async (request, response) => {
    let pessoa = await selectPessoaPorId(request.body.id);
    response.json({ pessoa });
})
//ALL
app.all('/pessoas', async (request, response) => {
    let pessoas = await selectPessoas()
    response.json({ pessoas });
})
//POST
app.post('/', (request, response) => {
    //request: guarda todos os dados que estão sendo enviado pelo Cliente
    //response: tudo que será devolvido para o Cliente
    insertPessoa(request.body); //insertPessoa teria que retornar o ID
    response.json({
        statusCode: 200,
        status: "success",
        lat: request.body.lat,
        lng: request.body.lng,
        timestamp: request.body.timestamp
    });
});
//UPDATE
app.put('/pessoas/id', async (request, response) => {
    if (request.body && !request.body.id) {
        response.json({
            statusCode: 400,
            msg: "Voce precisa informar um id!"
        })
    } else {
        let pessoa = await updatePessoa(request.body);
        response.json({
            statusCode: 200,
            pessoa: pessoa
        });
    }
});
//DELETE
app.delete('/pessoas/id', async (request, response) => {
    let pessoa = await deletePessoaPorId(request.body.id);
    response.json(pessoa);
}) */