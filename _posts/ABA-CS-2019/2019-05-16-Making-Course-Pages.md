---
published: true
title: Making Course Pages in Jekyll
layout: post
---
## How to Make a Course Blog using Jekyll & Categories

- Develop a separate folder in posts, which will act as a category: ABA-CS-2019  
  
- The course page course/ABA-CS-2019-2020.html uses a post category called ABA-CS-2019 when handeling posts located in subdirectories such as posts/ABA-CS-2019/ as shown written in the [Jekyll Liquid Template Language](https://shopify.github.io/liquid/) and CSS
  
- Finally, setup so that the posts show all content, rather than only an excerpt

- Here is the code:  
  
```html
{% raw %}
    <div class="posts">
      {% for post in site.posts %}
      	{% if post.path contains 'ABA-CS-2019' %}
      		<article class="post">
              	<h1 style = background-color:LightGray;>{{ post.date | date: "%B %e, %Y" }} - {{ post.title }}</h1>
          
            	<div class="entry">
              		{{ post.content }}
            	</div>
     		 </article>
        {% endif %}
      {% endfor %}
    </div>
{% endraw %}
```