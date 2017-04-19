import 'aframe';
// Some weird bug where I can't seem to import js files from the same folder as main.js
import './crawling-cursor.js';
var extras= require('aframe-extras');
extras.registerAll();
// Component for drawing path curves
