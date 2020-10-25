---
published: true
title: Sooty MusCAT Detector with ML5.js
layout: post
---
## When Life Gives You Lockdown... make things!
- Still under COVID-19 lockdown restrictions, so I coded a project that uses machine learning and image processing.
- Implements both [p5.js](https://p5js.org/) and [ml5.js](https://ml5js.org/) Javascript libraries.
- The program locates any objects that are in the [COCO-SSD image dataset](https://cocodataset.org/#explore) using an [object dectection model based on Google's Tensorflow](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd)... with a focus on trying to locate our cat *Sooty* in each given image.
- There is a great tutorial by [Daniel Shiffman](https://shiffman.net/) on how to implement this over at his [Coding Train YouTube Channel](https://www.youtube.com/watch?v=QEzRxnuaZCk).

## The Program
<!--Added additional 25 pixels to both width and height to remove iframe scrolling -->
<iframe 
width="825" height="625"
frameborder="0" 
src="https://raw.githack.com/mvpoirier/Javascript/master/sootyDetector/index.html">
</iframe>

## How it Works in a Nutshell...
**index.html - import p5.js and ml5.js libraries**
```html
    <head>
        <meta charset="utf-8" />
        <!-- Load p5.js and ml5.js libraries from UNPKG content delivery network -->
        <script src="https://unpkg.com/p5@1.1.9/lib/p5.min.js"></script>
        <script src="https://unpkg.com/ml5@0.5.0/dist/ml5.min.js"></script>
    </head>
```

**sketch.js - preload images, initiate ml5 object detector with COCO-SSD dataset**
```javascript
    function preload() {
        // Load all sooty#.jpg images from 1 to NUM
        for (let i = 0; i < NUM; i++){
            img[i] = loadImage('sooty'  + (i + 1) + '.jpg');
        }

        // Initiate COCO-SSD object detector through ml5.js framework
        detector = ml5.objectDetector('cocossd');
    }
```

**sketch.js - if the object detected is a 'cat' draw a rectangle and label as Sooty!**
```javascript
    for (let i = 0; i < results.length; i++){
        let object = results[i];
        
        if (object.label == "cat"){
            stroke(0, 255, 0);
            strokeWeight(2);
            noFill();
            rect(object.x, object.y, object.width, object.height);
            
            noStroke();
            fill(0,255,0);
            textSize(14);
            text("Sooty! " + round(object.confidence*100, 0) + "%", object.x + 10, object.y + 24);
            foundSooty = true;
        }
    }
```

## What's next?
- Add video capture feed with webcam
- Look at detecting human gestures with other aspects of Machine Learning and COCO
- Implement a physics demo with matter.js framework