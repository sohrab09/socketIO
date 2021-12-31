const express = require("express");
const app = express();
const port = 3000;
const http = require("http");
const expressServer = http.createServer(app);

// Socket Server Connection

const { Server } = require("socket.io");
const io = new Server(expressServer);

io.on("connection", function (socket) {
  console.log("New user connected");

  // * Send data from server to client

  /* 

  // ? "send" is a pre-defined event handler
  
        setTimeout(function() {
            socket.send("Hello from server");
        }, 5000); 
    */

  /*
        setInterval(function() {
            let time = new Date();
            let t = time.getTime();
            socket.send(t);
        }, 1000);
    */

  /* 
        socket.on('disconnect', function() {
            console.log('User disconnected');
        }); 
    */

  // Creating Custom Events

  /*
          setInterval(function() {
              let time = new Date();
              let t = time.getTime();
              socket.emit("myTime", t);
          }, 100);
    */

          // Broadcast to all clients

          io.on("connection", function(socket) {
              io.sockets.emit("MyBroadcast", "Hello from server");
          });
          

});

// Index.html file connection

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// Server calling

expressServer.listen(port, () => {
  console.log(`Express Server listening at http://localhost:${port}`);
});
