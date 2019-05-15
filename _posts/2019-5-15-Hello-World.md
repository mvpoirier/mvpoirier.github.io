---
layout: post
title: 'Hello World: Jekyll, GitHub Pages, and Prose.io'
published: true
---

## Purpose
To share information with students and colleagues relating to what I'm working on in education, relating to **physics**, **computer science**, and **robotics**.

### How This Site Works:
This is my first blog post using [Jekyll](https://github.com/barryclark/jekyll-now), running on [GitHub Pages](https://mvpoirier.github.io/).

The code is hosted on my personal GitHub repository @ <http://github.com/mvpoirier/>, and edited using [prose.io](https://prose.io).

### Reminder to Myself:
To add more posts: go into /_posts/ and update the Hello World markdown file. For more instructions head over to the [Jekyll Now repository](https://github.com/barryclark/jekyll-now).

### Testing with Code Blocks in Markdown
The syntax highlighting was modified on the default Jekyll Now installation for proper line numbers using the [minimal-mistakes Jekyll theme](https://github.com/mmistakes/minimal-mistakes/tree/master/_sass/minimal-mistakes), by importing both the variables and syntax style sheets, then importing them appropriately in the base style.css sheet.

To add code blocks, use triple _backticks_ to start syntax highlighting, as shared and described [here](https://frankindev.com/2017/03/18/syntax-highlight-with-rouge-in-jekyll/):

```java
public static void main (String[] args){
  System.out.println("Hello World!");
}
```

{% highlight python linenos %}
x = 5
for i in range(3):
	print("bacon!")
{% endhighlight %}

## What's Next?
-Begin adding sections for education, physics, and computer science
-Consider the best way to host resources (Google Drive, Dropbox, Github, Wix)
-Provide a better layout (more width) for readability
