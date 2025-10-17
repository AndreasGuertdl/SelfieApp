import { openDb } from "../configdb.js";

export async function createTable() {
    openDb().then((db) => {
        db.exec('CREATE TABLE IF NOT EXISTS Pessoa (id INTEGER PRIMARY KEY, latitude FLOAT, longitude FLOAT, time TIMESTAMP)');
    });
}

export async function selectPessoas(req, res) {
    openDb().then((db) => {
        db.all('SELECT * FROM Pessoa').then(pessoas => res.json(pessoas));
    })
}

export async function selectPessoa(req, res) {
    let id = req.body.id;
    openDb().then((db) => {
        db.get('SELECT * FROM Pessoa WHERE id=?', [id]).then(pessoa => res.json(pessoa));
    })
}

export async function insertPessoa(req, res) {
    let pessoa = req.body;
    openDb().then((db) => {
        db.run('INSERT INTO Pessoa (latitude, longitude, time) VALUES (?, ?, ?)', [pessoa.lat, pessoa.lng, pessoa.timestamp]);
    });
    res.json({
        "StatusCode": 200
    })
}

export async function updatePessoa(req, res) {
    let pessoa = req.body;
    openDb().then((db) => {
        db.get('UPDATE Pessoa SET latitude=?, longitude=?, time=? WHERE id=?', [pessoa.lat, pessoa.lng, pessoa.timestamp, pessoa.id]);
    })
    res.json({
        "StatusCode": 200
    }).catch(error=>[
        
    ])
}

export async function deletePessoa(req, res) {
    let id = req.body.id;
    openDb().then((db) => {
        db.get('DELETE FROM Pessoa WHERE id=?', [id]);
    })
    res.json({
        "StatusCode": 200
    })
}