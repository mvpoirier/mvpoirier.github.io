---
published: true
layout: post
title: LaTeX & ChatGPT for DP Physics FE2025
---
Starting in August 2023 our DP Year 1 students will be introduced to the new DP Physics curriculum with the First Exams starting in May 2025 (FE2025). It's long overdue, but with the change in curriculum, now seems to be a great time to finally learn to how to code, implement, and use **[LaTeX](https://www.latex-project.org/get/)** to support student learning and teaching.

### Potential Uses of LaTeX in the Classroom
- Provides consistent display of equations, formulas, diagrams, and graphical information
- Teachers can display DP Physics equations and derviations correctly during classroom lessons
- Can be used for writing DP Physics Extended Essays, Internal Assessments, and Lab Reports

### LaTeX Resources
- [The LaTeX Project](https://www.latex-project.org/get/)
- [Mathcha Equation Editor](https://www.mathcha.io)
- [Overleaf LaTeX Editor](https://www.overleaf.com/project)
- [LaTeX YouTube Tutorial Playlist by Dr. Trefor Bazett](https://youtube.com/playlist?list=PLHXZ9OQGMqxcWWkx2DMnQmj5os2X5ZR73) (Highly Recommended)

### 1. Using ChatGPT for LaTeX Code Generation with Overleaf
Unsure how to begin for writing a specific equation in LaTeX, or need a head start? No problem: just ask [ChatGPT](https://chat.openai.com/chat)! After a short series of questions, the increasingly popular AI Chatbot can help provide a scaffold for writing more complicated LaTeX code. Here's an example I made using the ChatGPT code generated with [Overleaf](https://www.overleaf.com/project):

<iframe src="https://drive.google.com/file/d/12X0Y7cuawFceaNP-BkE5EVV53xjChXgI/preview" frameBorder="0" width="100%" height="100%" style="min-height:400px"></iframe>
*Source code can be found [here](https://www.overleaf.com/read/xkhpyjdpctws)*

### 2. Generating LaTeX Equations and Graphs with Mathcha
Each equation, graph, or diagram can be easily exported as a transparent SVG or PNG file, or into LaTeX source code, which can then be copy/pasted into presentations, documents, or other editors. Here's an example I made using [Mathcha](https://www.mathcha.io):

<iframe frameBorder="0" width="100%" height="100%" style="min-height:400px" src="https://www.mathcha.io/editor/nZeKei7QSeWt1d2xDviJmPMzPUdx3yZMTYvvep?embedded=true" ></iframe>
*Source code can be found [here](https://www.mathcha.io/editor/nZeKei7QSeWt1d2xDviJmPMzPUdx3yZMTYvvep)*

### 3. Using MathJax with Markdown for LaTeX Code Display in Jekyll

One way to use LaTeX in Markdown, is that you need to import the package [MathJax](https://www.mathjax.org/) to to your webite. To do so, add the [following](https://talk.jekyllrb.com/t/how-to-use-latex-on-jekyll/4119/3) to **_\_layouts/post.html_**:  
```html
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
```

Adding mathematical formulae to a markdown document simply requires you to use the MathJax delimiters to start and end each formula as follows:
- For centered formulae, use `\\[` and `\\]`.
- For inline formulae, use `\\(` and `\\)`.
    
Centered:  
`\\[ x = {-b \pm \sqrt{b^2-4ac} \over 2a} \\]`  
\\[ x = {-b \pm \sqrt{b^2-4ac} \over 2a} \\]

Or we can write this equatoin inline, where the code is `\\( ax^2 + \sqrt{bx} + c = 0 \\)` \\( ax^2 + \sqrt{bx} + c = 0 \\) which can be useful, too.

Finally, if you subsitute `$` or `$$` symbols with `\\[` and `\\]`, then you can import equations directly from \\( \LaTeX\␣ \\) to your website:
\\[\displaystyle \begin{aligned}
E & =E=\Delta mc^{2}\\
\therefore c & =\sqrt{\frac{E}{m}}
\end{aligned}\\]
```
\\[ \displaystyle \begin{aligned}
E & =E=\Delta mc^{2}\\
\therefore c & =\sqrt{\frac{E}{m}}
\end{aligned} \\]
```
  
That's all for now,  
Mike
