---
published: true
layout: post
title: LaTeX & ChatGPT for DP Physics FE2025
---
Starting in August 2023 our DP Year 1 students will be introduced to the new DP Physics curriculum with the First Exams starting in May 2025 (FE2025). With the change in curriculum, now seems to be a great time to learn to how to use **[LaTeX](https://www.latex-project.org/get/)** to support student learning and teaching.

### Potential Uses of LaTeX in the Classroom
- Provides consistent display of equations, formulas, diagrams, and graphical information
- Teachers can display DP Physics equations and derviations correctly during classroom lessons
- Can be used for writing DP Physics Extended Essays, Internal Assessments, and Lab Reports

### LaTeX Resources
- [The LaTeX Project](https://www.latex-project.org/get/)
- [Mathcha Equation Editor](https://www.mathcha.io)
- [Overleaf LaTeX Editor](https://www.overleaf.com/project)
- [LaTeX Table Generator](https://www.tablesgenerator.com/)
- [LaTeX YouTube Tutorial Playlist by Dr. Trefor Bazett](https://youtube.com/playlist?list=PLHXZ9OQGMqxcWWkx2DMnQmj5os2X5ZR73) (Highly Recommended)

### 1. Using ChatGPT for LaTeX Code Generation with Overleaf
Unsure how to begin for writing a specific equation in LaTeX, or need a head start? No problem: just ask [ChatGPT](https://chat.openai.com/chat)! After a short series of questions, the increasingly popular AI Chatbot can help provide a scaffold for writing more complicated LaTeX code.
  
Here's an example I made using the ChatGPT code generated with the popular online LaTeX editor [Overleaf](https://www.overleaf.com/project):

<iframe src="https://drive.google.com/file/d/12X0Y7cuawFceaNP-BkE5EVV53xjChXgI/preview" frameBorder="0" width="100%" height="100%" style="min-height:400px"></iframe>
*Source code can be found [here](https://www.overleaf.com/read/xkhpyjdpctws)*

### 2. Generating LaTeX Equations and Graphs with Mathcha
Using the online editor [Mathcha](https://www.mathcha.io) each equation, graph, or diagram can be easily exported as a transparent SVG or PNG file, or into LaTeX source code, which can then be copy/pasted into presentations, documents, websites, or other editors:

<iframe frameBorder="0" width="100%" height="100%" style="min-height:400px" src="https://www.mathcha.io/editor/nZeKei7QSeWt1d2xDviJmPMzPUdx3yZMTYvvep?embedded=true" ></iframe>
*Source code can be found [here](https://www.mathcha.io/editor/nZeKei7QSeWt1d2xDviJmPMzPUdx3yZMTYvvep)*

### 3. Using MathJax with Markdown for LaTeX Code Display in Jekyll

One way to use LaTeX in Markdown, is to import the package [MathJax](https://www.mathjax.org/) into to your webite. To do so for [Jekyll](https://jekyllrb.com/), add the [following code](https://talk.jekyllrb.com/t/how-to-use-latex-on-jekyll/4119/3) to **_\_layouts/post.html_**: 
  
```html
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
```
  
  
Adding LaTeX to a Markdown document requires you to use the MathJax delimiters, rather than `$` or `$$` to start and end each formula as follows:
- For centered formulae, use `\\[` and `\\]`.
- For inline formulae, use `\\(` and `\\)`.
  
  
Centered Equation: `\\[ x = {-b \pm \sqrt{b^2-4ac} \over 2a} \\]`  
\\[ x = {-b \pm \sqrt{b^2-4ac} \over 2a} \\]
  
We can also write equations like \\( ax^2 + \sqrt{bx} + c = 0 \\) inline, with the code `\\( ax^2 + \sqrt{bx} + c = 0 \\)`.
  
  
Here's one more example using the `\begin{equation}` syntax:
\begin{equation}
  \int_0^\infty \frac{x^3}{e^x-1}\,dx = \frac{\pi^4}{15}
\end{equation}
```
\begin{equation}
  \int_0^\infty \frac{x^3}{e^x-1}\,dx = \frac{\pi^4}{15}
\end{equation}
```
  
  
If you're keen to learn more about the differences between \\(\LaTeX\\) and MathJax, you can read the [MathJax documentation here](https://docs.mathjax.org/en/latest/index.html).  
  
That's all for now,  
\\( M = i^{k_e} \\)
