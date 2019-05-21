---
published: true
title: Making Course Pages in Jekyll
layout: post
---
- Develop a separate folder in posts, which will act as a category: 2019-ABA-CS  
  
- The course page `pages/2019-ABA-CS.html` uses a `post category` when handeling posts located in subdirectories, such as `posts/2019-ABA-CS/`
  
- The posts displayed are setup to show all content, `post.content`, rather than only an excerpt.

- Here is the code, written in the [Jekyll Liquid Template Language](https://shopify.github.io/liquid/) and CSS. Because this is written in the liquid template format, the code must be wrapped in `% raw %` and `% endraw %` liquid tags, enclosed in `{ }`, as discussed here: <https://github.com/jekyll/jekyll/issues/6430>:  
  
{% raw %}
```html
<div class="posts">
  {% for post in site.posts %}
  {% if post.path contains '2019-ABA-CS' %}
  <article class="post">
    <h1 style = background-color:LightGray;>{{ post.date | date: "%B %e, %Y" }} - {{ post.title }}</h1>
    <div class="entry">
      {{ post.content }}
    </div>
  </article>
  {% endif %}
  {% endfor %}
</div>
```
{% endraw %}
