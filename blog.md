---
layout: page
title: Blog
permalink: /blog/
published: true
---

Welcome to my _rarely_ updated blog! A place for me to share posts that are [longer than a tweet](https://twitter.com/mvpoirier) on education, physics, coding projects, random geeky stuff, and anything else worth writing about.
  
<div class="posts">
  {% for post in site.posts %}
  <article class="post">
    
    <div style="background-color:Gainsboro;">
      <h2>{{ post.date | date: "%B %e, %Y" }} - {{ post.title }}</h2>
    </div>
    
    <div class="entry">
      {{ post.excerpt }}
    </div>

    <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
  </article>
  {% endfor %}
</div>
