const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg')

const app = express();
const port = 5000;
let client = null

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// COORS Light. Skip CORS for local backend server, as this server should not be exposed to any other clients.
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

function sendError(res, message) {
    res.status(400).send({
        success: false,
        errorMessage: message
    });
}

app.post('/api/connect', (req, res) => {
    let credentials;
    try {
        credentials = req.body.credentials
        // Quick way to validate all fields are present.
        const {username, host, database, password, port} = req.body.credentials
    } catch (ex) {
        sendError(res, "Invalid database credentials.")
    }
    client = new Client({
        user: credentials.username,
        host: credentials.host,
        database: credentials.database,
        password: credentials.password,
        port: credentials.port
    })
    client.connect()
        .then((success) => {
            res.send({
                success: true
            })
        })
        .catch((failure) => {
            sendError(res, "Unable to connect: " + failure.toString())
        });
});

app.post('/api/query', (req, res) => {
    const sql = req.body.sql
    client
        .query(sql)
        .then(success => {
            res.send({
                success: true,
                rows: success.rows
            })
        })
        .catch(e => {
            sendError(res, e.toString())
        })
});

app.listen(port, () => console.log(`Ready for SQL! ${port}`));