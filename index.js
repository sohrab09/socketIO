const express = require('express');
const app = express();
const port = 5000;
const http = require('http');
const expressServer = http.createServer(app);




const {Server} = require('socket.io');
const io = new Server(expressServer);





app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});





expressServer.listen(port, () =>{
    console.log(`Express Server listening at http://localhost:${port}`)
});