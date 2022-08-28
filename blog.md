---
layout: page
title: Blog
permalink: /blog/
published: true
---

Welcome to my __rarely updated__ blog! This is/was a place for me to share long-form writing on education, musings, and code snippets.

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
