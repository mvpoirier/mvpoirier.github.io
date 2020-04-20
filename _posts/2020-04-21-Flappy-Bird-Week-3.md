---
published: true
title: Flappy Bird Clone > Week 3 Progress
layout: post
---
## Current State
<!--Added additional pixels to width and height to remove iframe scrolling -->
<iframe 
width="475" height="625"
frameborder="0" 
src="https://raw.githack.com/mvpoirier/Javascript/master/flappyBirdClones/WEEK3/index.html">
</iframe>
Source: https://github.com/mvpoirier/Javascript/tree/master/flappyBirdClones

## Key Changes
- Back to one player game
- Introductory splash screen
- Sound effects: Annoying on pupose! :-)
- Keeps track of current and highscore (with indicators)
- Tweaked visual cues and transitions

**pipe.js - Colour Transition (x-axis)**
```javascript
    show() {
        //draw the top and bottom of the rectangle (with spacing)
        fill(255 * (this.x / width), 255 * (this.x / width), 255 * (this.x / width));
        rect(this.x, 0, this.w, this.top);
        rect(this.x, this.bottom, this.w, height - this.bottom);
    }
```

**bird.js - Colour Transition (y-axis)**
```javascript
    show() {
        //change colour of bird based on vertical location
        fill((255 * (this.y / height)), 0, 255 - (255 * (this.y / height)));
        ellipse(this.x, this.y, this.width, this.height);
    }
```

**sketch.js - New Record After 1st Round**
```javascript
function showScores() {
    fill(255);
    rect(235, 0, width - 235, 65);

    textSize(32);
    fill(0, 0, 255);
    text('current: ' + score, 242, 25);

    //determine if there is new highscore
    if (score > maxScore) {
        maxScore = score;

        if (!firstPlayThrough) {
            bellSound.play();
            textSize(20);
            fill(255, 0, 0);
            text("New Record!", 160, 275);
        }
    }

    if (!firstPlayThrough) {
        textSize(32);
        fill(255, 0, 0);
        text('record: ' + maxScore, 251, 60);
    }
}
```

## What Could Be Next?
- Difficulty settings (toggle or progressively more challenging)
- Local multiplayer
- Network multiplayer: [socket.io](https://socket.io/)
- Update from geometric shapes to graphics (icons)