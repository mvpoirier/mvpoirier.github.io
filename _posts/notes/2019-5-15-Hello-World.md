---
layout: post
title: Hello World! Blogging with Jekyll.
published: true
---

The purpose of this website is to share information with students and colleagues relating to education, physics, and computer science.

### How This Site Works:
This is my first blog post using [Jekyll](https://github.com/barryclark/jekyll-now), running on [GitHub Pages](https://mvpoirier.github.io/).

The code is hosted on my personal GitHub repository @ <http://github.com/mvpoirier/>, and edited using [prose.io](https://prose.io).

### Reminder to Myself:
To add more posts: go into /_posts/ and update the Hello World markdown file. For more instructions, check out the [Jekyll Now](https://github.com/barryclark/jekyll-now) GitHub repository.

### Testing with Code Blocks in Markdown
The syntax highlighting was modified on the default Jekyll Now installation for proper line numbers using the [minimal-mistakes Jekyll theme](https://github.com/mmistakes/minimal-mistakes/tree/master/_sass/minimal-mistakes), by importing both the variables and syntax style sheets, then importing them appropriately in the base style.css sheet.

To add code blocks, use triple _backticks_ to start syntax highlighting, as shared and described [here](https://frankindev.com/2017/03/18/syntax-highlight-with-rouge-in-jekyll/):

**Example 1: Using _triple backticks_ method**
```java
public static void main (String[] args){
  System.out.println("Hello World!");
}
```
  
**Example 2: Using the _highlight_ method**
{% highlight python linenos %}
x = 5
for i in range(3):
	print("bacon!")
{% endhighlight %}
  
### What's Next?
- Begin adding sections for education, physics, and computer science  
- Consider the best way to host resources (Google Drive, Dropbox, Github, Wix)  
- Provide a better layout (more width) for readability

### Inline Syntax Highligting Test
This is some java code {% highlight java %} System.out.println("Test"); {% endhighlight %}{: .inlined } that is inline (hopefully). Try that again with the code tag <code>Test();</code>. Going to try one more time with regular backticks `System.out.println("Test");` maybe that works.