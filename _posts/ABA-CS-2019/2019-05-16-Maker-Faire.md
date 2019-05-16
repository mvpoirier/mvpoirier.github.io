---
published: false
---
## A New Post About Maker Faire

Enter text in [Markdown](http://daringfireball.net/projects/markdown/). Use the toolbar above, or click the **?** button for formatting help.

Here is the code to my [AcousticAstronomy](https://github.com/mvpoirier/AcousticAstronomy):

void pointillizeAmplitudeEllipse(int max){
  for (int i = 0; i < max; i++){
    int x = int(random(img.width));
    int y = int(random(img.height));
    
    float pointillize = map((amp.analyze()*15), 0.0, 1.0, smallPoint, largePoint);

    color pix = img.get(x, y);
    noStroke();
    fill(pix, 128);
    tint(255, 120);  // Display at half opacity
    
    ellipse(x, y, pointillize, pointillize);
  }
}
