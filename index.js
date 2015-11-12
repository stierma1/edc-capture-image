"use strict"

var Worker = require("basic-distributed-computation").Worker;
var camera = require('camera-usb');

class Capture extends Worker {
  constructor(parent){
    super("capture-image", parent);
  }

  work(req, inputKey, outputKey){
    if(outputKey){
      req.body[outputKey] = camera.capture();
    } else {
      req.body = camera.capture();
    }
    req.next();
  }
}

module.exports = Capture;
