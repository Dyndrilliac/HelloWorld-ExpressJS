const hostname = '127.0.0.1';
const port = 3000;
const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send('Hello World!\n')
});

server.listen(port, hostname, () => {
    console.log(`\nServer running at http://${hostname}:${port}/\n`);
});