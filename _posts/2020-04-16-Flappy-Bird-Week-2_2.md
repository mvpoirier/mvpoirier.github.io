---
published: true
title: Flappy Bird Clone > Week 2.2 Progress
layout: post
---
**Key Changes**
- Added two players... but will return to one player.
- Infinite pipes and hit detection.

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
**Player 1** = Spacebar  
**Player 2** = Left Shift Key  
<!--Added additional pixels to width and height to remove iframe scrolling -->
<iframe 
width="475" height="625"
frameborder="0" 
src="https://raw.githack.com/mvpoirier/Javascript/master/flappyBirdClones/flappyBird_P5JS/WEEK2_2/index.html">
</iframe>

**Next Steps**
- Scoring
- Pause Game on Game Over