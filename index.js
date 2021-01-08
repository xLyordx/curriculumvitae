// const http = require('http');

// const server = http.createServer((req, res) => {
//         res.status = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Its Works');

//     }

// );

// server.listen(8082, () => {
//     console.log("Server It's Working")
// });

const path = require('path');

const express = require('express');
const app = express();

app.use(express.static(path.join('', 'bin')));

app.get('*', (req, res) => {
    res.sendFile(path.join('', 'bin/index.html'))
});

app.get('/', (req, res) => {
    res.send("Hellow World");
});

app.listen(8080, () => {
    console.log("Server It's Working")
});