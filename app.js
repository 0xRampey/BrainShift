var app = require('express')();
var express = require('express');
var io = require('socket.io')(http);
var http = require('http').Server(app);
// Setting up library for interfacing with Neurosky
var thinkgear = require('node-thinkgear-sockets');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.use(express.static(__dirname));
var client_socket;
io.on('connection', function (socket) {

  console.log('User connected');
  client_socket=socket;
  socket.on('disconnect', function () {
    console.log('User disconnected');
  });

});

io.listen(app.listen(3000));
console.log("Listening for users on port 3000");

// Creating connection with Thinkgear
var client = thinkgear.createClient();

client.on('blink_data',function(data){

	console.log(data);
	
	var blinkStrength=data["blinkStrength"];


		if (blinkStrength>60)
		{
			var blinkDetected=true;
			client.on('data', function(data) {
				if(blinkDetected)
				{
				if(data.eSense.attention>60)
				{
					console.log("Found a focused blink!");
					client_socket.emit("Blink detected");
				}
			}
			});
			
		}

});

console.log("Attempting connection with Thinkgear....");
client.connect();

