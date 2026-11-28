/* mvpoirier.github.io: email link, hero wave, Sims & Sketches player */
(function () {
  // Email link built at runtime so the address is not in the page text
  var u = 'y02oki9hp', d = 'mozmail.com';
  document.querySelectorAll('a.mail').forEach(function (a) { a.href = 'mailto:' + u + '@' + d; });

  // Hero wave: two travelling waves and their standing-wave sum
  var cv = document.getElementById('wave');
  if (cv) {
    var ctx = cv.getContext('2d');
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var t = 0, w = 0, h = 0;
    var size = function () {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    var tok = function (n) { return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); };
    var line = function (fn, color, width, alpha) {
      ctx.beginPath();
      for (var x = 0; x <= w; x += 3) { var y = h * 0.55 + fn(x); if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y); }
      ctx.globalAlpha = alpha; ctx.strokeStyle = color; ctx.lineWidth = width; ctx.stroke(); ctx.globalAlpha = 1;
    };
    var draw = function () {
      ctx.clearRect(0, 0, w, h);
      var k = 2 * Math.PI / 260, om = 0.9, A = Math.min(22, h * 0.18);
      var a = function (x) { return A * Math.sin(k * x - om * t); };
      var b = function (x) { return A * Math.sin(k * x + om * t); };
      line(a, tok('--accent'), 1.5, 0.35); line(b, tok('--accent'), 1.5, 0.35);
      line(function (x) { return a(x) + b(x); }, tok('--spark'), 2.5, 0.9);
    };
    size(); draw();
    window.addEventListener('resize', function () { size(); draw(); });
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    if (mq.addEventListener) mq.addEventListener('change', draw);
    if (!reduce) (function loop() { t += 0.016; draw(); requestAnimationFrame(loop); })();
  }

  // Sims & Sketches: play a tile in the player instead of leaving the page
  var player = document.getElementById('player');
  if (player) {
    var frame = document.getElementById('player-frame');
    var title = document.getElementById('player-title');
    var full = document.getElementById('player-full');
    document.querySelectorAll('a.tile').forEach(function (a) {
      a.addEventListener('click', function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        var name = a.querySelector('h3').textContent;
        title.textContent = name;
        frame.title = name;
        frame.src = a.getAttribute('href');
        full.href = a.getAttribute('href');
        player.hidden = false;
        player.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
    document.getElementById('player-close').addEventListener('click', function () {
      player.hidden = true; frame.src = 'about:blank';
    });
  }
})();
