var app = require('express')();
var express = require('express');
var io = require('socket.io')(http);
var http = require('http').Server(app);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.use(express.static(__dirname));
io.on('connection', function (socket) {

  console.log('User connected');

  socket.on('disconnect', function () {
    console.log('User disconnected');
  });

});

io.listen(app.listen(3000));
console.log("Listening for users on port 3000");
