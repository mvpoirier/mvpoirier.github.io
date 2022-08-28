---
layout: page
title: Blog
permalink: /blog/
published: true
---

## Mike's __Mostly Outdated__ Collection of Blog Posts

<div class="posts">
  {% for post in site.posts %}
  <article class="post">

    <div markdown = "0">
    <h2 style=background-color:Gainsboro;>{{ post.date | date: "%B %e, %Y" }} - {{ post.title }}</h2>
    </div>
    
    <div class="entry">
      {{ post.excerpt }}
    </div>

    <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
  </article>
  {% endfor %}
</div>

End of Blog Posts
