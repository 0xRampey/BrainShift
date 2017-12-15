# BrainShift
A web-based Virtual Reality experiment which allows users to locomote using Electroencephalogram (EEG) brainwaves.
MindWave Mobile EEG headset is used to detect eye blinks alongwith a thresholded concentration
level, to execute locomotion.

## Intent
To promote BCI (Brain Computer Interfacing) experiments, using an open-source and cross-platform WebVR technology like Aframe

## Getting Started

### Prerequisites

You need the [MindWave Mobile](https://store.neurosky.com/pages/mindwave) headset to detect EEG waves. For setting up the headset, please refer to your user manual that came with it.  
You also need node and npm installed to run this setup. Check their documentation for more information.

### Installing

After installing node, 

```
git clone https://github.com/prampey/BrainShift.git
cd BrainShift
npm install 
npm start
```

## Troubleshooting

Make sure that your headset is paired and connected before you start the app. It may take 5-10 seconds for data to start streaming to your app after you make the connection.  
  
The ThinkGear Connector app will multiplex connections to the headset, so if you are unsure if your connection is working correctly, you can use the included "Brainwave Visualizer App" while your Node app is running. If data is streaming correctly to the Brainwave Visualizer, then it should be streaming correctly to your app as well.

## Built With

* [A-Frame](https://aframe.io/) - Mozilla's VR framework
* [Webpack](https://webpack.github.io/) - Dependency Management
* [Crawling cursor](https://github.com/jujunjun110/aframe-crawling-cursor) - A-Frame component
* [node-thinkgear-sockets](https://github.com/afiedler/node-thinkgear-sockets) - Client library to interface with the headset
* [javascript-astar](https://github.com/bgrins/javascript-astar) - Pathfinding algorithm for locomotion

## TODO

- [x] General locomotion
- [ ] Shopping environment for tetraplegics that allows timed gaze input to buy products instead of keyboard/mouse input

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details



