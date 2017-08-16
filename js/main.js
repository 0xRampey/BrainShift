import io from 'socket.io-client';
import 'aframe';
import './crawling-cursor.js';

const socket = io(); // Registering client socket
var extras= require('aframe-extras');
extras.registerAll();
