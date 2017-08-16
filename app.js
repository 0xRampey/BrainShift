var app = require('express')();
var express = require('express');
var io = require('socket.io')(http);
var http = require('http').Server(app);
// Setting up library for interfacing with Neurosky
var neurosky = require('./js/neurosky');

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

// Creating connection with Thinkgear
var client = neurosky.createClient({
	appName: 'BrainShift',
	appKey: '0fc4141b4b45c675cc8d3a765b8d71c5bde9390'
});

client.on('data',function(data){

	console.log(data);
});

client.on('connect_error', function(err) {
  console.log("Thinkgear seems to be offline. Please check connection");
});

console.log("Attempting connection with Thinkgear....");
client.connect();

