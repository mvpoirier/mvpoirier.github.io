---
layout: page
title: Blog
permalink: /blog/
published: true
---

<div class="posts">
  {% for post in site.posts %}
  <article class="post">

    <h2 style=background-color:Gainsboro;>{{ post.date | date: "%B %e, %Y" }} - {{ post.title }}</h2>
    
    <div style=background-color:Gainsboro;> 
    	## {{ post.date | date: "%B %e, %Y" }} - {{ post.title }}
    </div>
    
    <div class="entry">
      {{ post.excerpt }}
    </div>

    <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
  </article>
  {% endfor %}
</div>

End of Blog Posts
