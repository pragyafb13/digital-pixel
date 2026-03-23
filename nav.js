/* ═══════════════════════════════════════════════
   DGTL PIXEL — SHARED NAV + FOOTER + THEME
   ═══════════════════════════════════════════════ */
(function () {
  /* ── Theme ── */
  var saved = localStorage.getItem('dp-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);

  window.dpToggleTheme = function () {
    var cur = document.documentElement.getAttribute('data-theme');
    var next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('dp-theme', next);
    var btn = document.querySelector('.theme-toggle');
    if (btn) btn.innerHTML = next === 'dark' ? '🌙' : '☀️';
    /* update mobile menu bg if open */
    var links = document.querySelector('#dp-nav .nav-links');
    if (links && links.style.display === 'flex' && links.style.position === 'absolute') {
      links.style.background = next === 'light' ? 'rgba(255,255,255,0.98)' : 'rgba(5,5,15,0.98)';
    }
  };

  /* ── Current page ── */
  var page = window.location.pathname.split('/').pop() || 'index.html';
  function active(p) { return page === p ? ' class="active"' : ''; }

  /* ── Nav HTML ── */
  var navHTML = '<div id="cursor-glow"></div>\n<nav id="dp-nav">\n  <div class="nav-inner">\n    <a href="index.html" class="logo">\n      <div class="logo-icon"><svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ng1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#7C3AED"/><stop offset="1" stop-color="#06B6D4"/></linearGradient></defs><rect width="40" height="40" rx="10" fill="url(#ng1)" opacity="0.15"/><rect x="6" y="6" width="28" height="28" rx="7" stroke="url(#ng1)" stroke-width="1.5" fill="none"/><rect x="11" y="11" width="18" height="18" rx="4" stroke="url(#ng1)" stroke-width="1.5" fill="none"/><circle cx="20" cy="20" r="4" fill="url(#ng1)"/></svg></div>\n      <div class="logo-text"><span>DGTL</span><span> Pixel</span></div>\n    </a>\n    <ul class="nav-links">\n      <li>\n        <a href="advertisers.html"' + active('advertisers.html') + '>Advertisers <svg viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></a>\n        <div class="dp-dropdown">\n          <a href="digital-publishing.html"><span class="dd-icon">📢</span> Digital Publishing</a>\n          <a href="white-label.html"><span class="dd-icon">🏷️</span> White Label</a>\n          <a href="campaign-management.html"><span class="dd-icon">📊</span> Campaign Management</a>\n          <a href="signup.html?role=advertiser"><span class="dd-icon">✍️</span> Sign Up</a>\n        </div>\n      </li>\n      <li>\n        <a href="publishers.html"' + active('publishers.html') + '>Publishers <svg viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></a>\n        <div class="dp-dropdown">\n          <a href="mobile-apps.html"><span class="dd-icon">📱</span> Mobile Apps</a>\n          <a href="news-media.html"><span class="dd-icon">📰</span> News &amp; Media</a>\n          <a href="signup.html?role=publisher"><span class="dd-icon">✍️</span> Sign Up</a>\n        </div>\n      </li>\n      <li>\n        <a href="influencers.html"' + active('influencers.html') + '>Influencers <svg viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></a>\n        <div class="dp-dropdown">\n          <a href="creator-network.html"><span class="dd-icon">⭐</span> Creator Network</a>\n          <a href="signup.html?role=influencer"><span class="dd-icon">✍️</span> Sign Up</a>\n        </div>\n      </li>\n      <li>\n        <a href="blog.html"' + (page==='blog.html'||page==='case-studies.html'?' class="active"':'') + '>News <svg viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></a>\n        <div class="dp-dropdown">\n          <a href="blog.html"><span class="dd-icon">📝</span> Blogs</a>\n          <a href="case-studies.html"><span class="dd-icon">🎙️</span> Case Studies</a>\n        </div>\n      </li>\n    </ul>\n    <div class="nav-cta">\n      <button class="theme-toggle" onclick="dpToggleTheme()" title="Toggle theme">' + (saved === 'dark' ? '🌙' : '☀️') + '</button>\n      <a href="login.html" class="btn-ghost">Login</a>\n      <a href="signup.html" class="btn-primary"><span>Get Started</span></a>\n    </div>\n    <div class="dp-hamburger" id="dp-hamburger"><span></span><span></span><span></span></div>\n  </div>\n</nav>';

  /* ── Footer HTML ── */
  var footerHTML = '<footer id="dp-footer">\n  <div class="footer-inner">\n    <div class="footer-top reveal">\n      <div class="footer-brand">\n        <a href="index.html" class="logo">\n          <div class="logo-icon"><svg viewBox="0 0 40 40" fill="none"><defs><linearGradient id="fg1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#7C3AED"/><stop offset="1" stop-color="#06B6D4"/></linearGradient></defs><rect width="40" height="40" rx="10" fill="url(#fg1)" opacity="0.15"/><rect x="6" y="6" width="28" height="28" rx="7" stroke="url(#fg1)" stroke-width="1.5" fill="none"/><rect x="11" y="11" width="18" height="18" rx="4" stroke="url(#fg1)" stroke-width="1.5" fill="none"/><circle cx="20" cy="20" r="4" fill="url(#fg1)"/></svg></div>\n          <div class="logo-text"><span>DGTL</span><span> Pixel</span></div>\n        </a>\n        <div class="footer-tagline">Results You Can <span class="hl">Measure.</span><br>Growth You Can <span class="hl">Trust.</span></div>\n        <p>HQ: 100 Innovation Boulevard, Suite 2400<br>New York, NY 10001, United States<br><br>APAC: 71 Robinson Road, #14-01<br>Singapore 068895</p>\n        <div class="socials" style="margin-top:20px">\n          <a href="#" class="social-btn" title="LinkedIn">in</a>\n          <a href="#" class="social-btn" title="Instagram">ig</a>\n          <a href="#" class="social-btn" title="Twitter">tw</a>\n          <a href="#" class="social-btn" title="YouTube">yt</a>\n        </div>\n      </div>\n      <div class="footer-col">\n        <h5>Company</h5>\n        <ul>\n          <li><a href="about.html">About Us</a></li>\n          <li><a href="privacy.html">Privacy Policy</a></li>\n          <li><a href="terms.html">Terms of Use</a></li>\n          <li><a href="contact.html">Contact Us</a></li>\n          <li><a href="careers.html">Careers</a></li>\n        </ul>\n      </div>\n      <div class="footer-col">\n        <h5>Quick Links</h5>\n        <ul>\n          <li><a href="advertisers.html">Advertisers</a></li>\n          <li><a href="publishers.html">Publishers</a></li>\n          <li><a href="influencers.html">Influencers</a></li>\n          <li><a href="blog.html">Blog</a></li>\n          <li><a href="case-studies.html">Case Studies</a></li>\n        </ul>\n      </div>\n      <div class="footer-col">\n        <h5>Products</h5>\n        <ul>\n          <li><a href="leadup.html">LEADup</a></li>\n          <li><a href="truads.html">TruAds</a></li>\n          <li><a href="inflaura.html">inflaura</a></li>\n        </ul>\n      </div>\n    </div>\n    <div class="footer-wordmark">DGTL Pixel</div>\n    <div class="footer-bottom">\n      <span>&copy; 2026 DGTL Pixel. All rights reserved.</span>\n      <span>Built for ROI. Trusted by Brands &amp; Creators.</span>\n    </div>\n  </div>\n</footer>';

  /* ── Inject ── */
  function inject() {
    var navRoot = document.getElementById('nav-root');
    if (navRoot) { navRoot.outerHTML = navHTML; }
    else { document.body.insertAdjacentHTML('afterbegin', navHTML); }

    var footerRoot = document.getElementById('footer-root');
    if (footerRoot) { footerRoot.outerHTML = footerHTML; }
    else { document.body.insertAdjacentHTML('beforeend', footerHTML); }

    initAll();
  }

  function initAll() {
    /* Navbar scroll */
    var nav = document.getElementById('dp-nav');
    if (nav) {
      window.addEventListener('scroll', function () {
        nav.classList.toggle('scrolled', window.scrollY > 20);
      });
    }

    /* Cursor glow */
    var glow = document.getElementById('cursor-glow');
    if (glow) {
      document.addEventListener('mousemove', function (e) {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
      });
    }

    /* Hamburger */
    document.addEventListener('click', function (e) {
      if (e.target.closest('#dp-hamburger')) {
        var links = document.querySelector('#dp-nav .nav-links');
        if (!links) return;
        var theme = document.documentElement.getAttribute('data-theme');
        var bg = theme === 'light' ? 'rgba(255,255,255,0.98)' : 'rgba(5,5,15,0.98)';
        if (links.style.display === 'flex') {
          links.style.cssText = '';
        } else {
          links.style.cssText = 'display:flex;flex-direction:column;position:absolute;top:72px;left:0;right:0;background:' + bg + ';padding:20px;border-bottom:1px solid var(--border);gap:4px;z-index:999;';
        }
      }
    });

    /* Scroll reveal */
    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            e.target.querySelectorAll('.count-up').forEach(function (el) { dpAnimateCount(el); });
          }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(function (el) { obs.observe(el); });

      /* Stats row special observer */
      var statsObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.count-up').forEach(function (el) { dpAnimateCount(el); });
          }
        });
      }, { threshold: 0.3 });
      document.querySelectorAll('.stats-row').forEach(function (el) { statsObs.observe(el); });
    }
  }

  /* Count-up animation */
  window.dpAnimateCount = function (el) {
    if (el.dataset.done) return;
    el.dataset.done = '1';
    var target = +el.dataset.target;
    var duration = 2000;
    var start = performance.now();
    function update(now) {
      var t = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(eased * target);
      if (t < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
