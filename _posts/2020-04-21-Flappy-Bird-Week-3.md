---
published: true
title: Flappy Bird Clone > Week 3 Progress
layout: post
---
## Key Changes
- Back to one player game
- Splash screen
- 

**pipe.js Class**
```javascript
    show() {
        if (!this.highlight) {
            fill(255);
        } else {
            fill(255, 0, 0);
        }

        rect(this.x, 0, this.w, this.top); //top rectangle
        rect(this.x, this.bottom, this.w, height - this.bottom); //bottom rectangle
    }

    update() {
        this.x = this.x + this.speed;
    }

    hit(bird) {
        if ((bird.y < this.top || bird.y > this.top + this.spacing) && bird.x >= this.x && bird.x <= this.x + this.w) {
            this.highlight = true;
            return true;
        } else {
            return false;
        }
    }
```

**Current State** 
<!--Added additional pixels to width and height to remove iframe scrolling -->
<iframe 
width="475" height="625"
frameborder="0" 
src="https://raw.githack.com/mvpoirier/Javascript/master/flappyBirdClones/WEEK3/index.html">
</iframe>

## What Could Be Next?
- Difficulty settings (toggle or progressively more challenging)
- Local multiplayer
- Network multiplayer: [socket.io](https://socket.io/)