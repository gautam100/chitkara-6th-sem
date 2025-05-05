const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server,{
    connectionStateRecovery: {}
});

app.use(express.static("/public")); 

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "public/index.html")); 
});

//In below line, socket variable in parameter is client/user
io.on("connection", (socket) => {
  console.log("a user connected, id is: ", socket.id);
  
  socket.on("chat message", (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});