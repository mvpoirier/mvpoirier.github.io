---
layout: page
title: Blog
permalink: /blog/
published: true
---

Some information about you!

### More Information

A place to include any other types of information that you'd like to include about yourself.

### Contact me

[email@domain.com](mailto:email@domain.com)

<h1 style = background-color:Tomato;color:White; align="center">Blog</h1>

<div class="posts">
  {% for post in site.posts %}
  	{% if post.path contains 'blog' %}
  		<article class="post">
          	<h1 style = background-color:LightGray;>{{ post.date | date: "%B %e, %Y" }} - {{ post.title }}</h1>
      
        	<div class="entry">
          		{{ post.content }}
        	</div>
 		 </article>
    {% endif %}
  {% endfor %}
</div>
