## Blog - collection of blog posts

Enter text in [Markdown](http://daringfireball.net/projects/markdown/). Use the toolbar above, or click the **?** button for formatting help.

<h1 style=background-color:SlateBlue;color:White; align="center">Blog</h1>

<div class="posts">
  {% for post in site.posts %}
  <article class="post">

    <h2 style=background-color:Gainsboro;>{{ post.date | date: "%B %e, %Y" }} - {{ post.title }}</h2>
    
    <div class="entry">
      {{ post.excerpt }}
    </div>

    <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
  </article>
  {% endfor %}
</div>

Test 1, 2, 3, 4
