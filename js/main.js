import io from 'socket.io-client';
import 'aframe';
import './crawling-cursor.js';

const socket = io(); // Registering client socket
    socket.on("Blink detected", function()
    {   
        //Move camera on registering blinkDetect event
        moveToDestination(15);
    });

var extras= require('aframe-extras');
extras.registerAll();
