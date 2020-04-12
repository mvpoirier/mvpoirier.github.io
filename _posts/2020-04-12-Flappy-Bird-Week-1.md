---
published: true
title: Flappy Bird Week 1 Progress (Quarantine Edition)
layout: post
---
**Overview**
- Based on Daniel Shiffman's [Coding Train YouTube Channel](https://www.youtube.com/user/shiffman/featured), I've been following his [Coding Challenge 31 - Flappy Bird](https://www.youtube.com/watch?v=cXgA1d_E-jY) video tutorial and [CC 31 Github Repository](https://github.com/CodingTrain/Flappy-Bird-Clone) to develop my own Flappy Bird Clone.
- My daily progress can be found at [github.com/mvpoirier](https://github.com/mvpoirier/Javascript/tree/master/flappyBirdClones).

**Key Changes**
- Setup `bird.js` and `sketch.js` and html wrapper for development using my [p5.js template](https://github.com/mvpoirier/Javascript/tree/master/p5-js-template).

- Tweaked the Bird object's gravity and lift values:
```javascript
this.gravity = 0.4;
this.lift = -15;
```

- Modified the Bird's `up()` function so that the bird cannot go off the screen:
```javascript
if (!(this.y < 0 + this.height / 2) && !(this.y > height - this.height / 2)) {
    this.velocity += this.lift;
} else {
    this.velocity = 0;
}
```

- Disabled the user ability to use the spacebar to scroll the browser, *[source](https://stackoverflow.com/questions/8916620/disable-arrow-key-scrolling-in-users-browser)*:
```javascript
window.addEventListener("keydown", function (e) {
    // spacebar = 32
    if ([32].indexOf(e.keyCode) > -1) {
        e.preventDefault(); // prevents default browser behaviour when interacting with p5.js
    }
}, false);
```

<!--Added additional pixels to width and height to remove iframe scrolling -->
<iframe 
width="875" height="700"
frameborder="0" 
src="https://raw.githack.com/mvpoirier/Javascript/master/flappyBirdClones/flappyBird_P5JS/WEEK1/flappybird_mp.html">
</iframe>

**Next Steps**
- Tweak size/scale of the game objects
- Background & parallax motion
- Pipes / obstacles (difficulty levels)
- Scoring