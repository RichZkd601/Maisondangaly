/* =========================================================
   Maison d'Angaly — interactions
   Vanilla JS, no dependencies. Performance & a11y first.
   ========================================================= */
(function () {
  'use strict';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- Preloader + hero intro ---------- */
  function launch() {
    var pre = $('#preloader');
    var hero = $('#hero');
    if (hero) hero.classList.add('ready');
    if (pre) {
      setTimeout(function () { pre.classList.add('done'); }, reduceMotion ? 0 : 650);
    }
  }
  window.addEventListener('load', launch);
  // Safety: don't trap users if load is slow
  setTimeout(launch, 2600);

  /* ---------- Year ---------- */
  var y = $('#year'); if (y) y.textContent = new Date().getFullYear();

  /* ---------- Blur-up image loading ---------- */
  $$('.media img').forEach(function (img) {
    if (img.complete && img.naturalWidth) { img.classList.add('is-loaded'); }
    else { img.addEventListener('load', function () { img.classList.add('is-loaded'); }); }
  });

  /* ---------- Header scrolled state + scroll progress ---------- */
  var header = $('#header');
  var bar = $('#progressBar');
  var ticking = false;
  function onScroll() {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (header) header.classList.toggle('scrolled', st > 60);
    if (bar) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (st / h) * 100 : 0) + '%';
    }
    updateParallax(st);
    updateSteps(st);
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });

  /* ---------- Reveal on scroll ---------- */
  var revealEls = $$('[data-reveal], .reveal-img');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Count-up stats ---------- */
  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    if (reduceMotion) { el.textContent = target + suffix; return; }
    var start = null, dur = 1400;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { countUp(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    $$('.stat__num').forEach(function (el) { cio.observe(el); });
  } else {
    $$('.stat__num').forEach(function (el) { el.textContent = el.getAttribute('data-count') + (el.getAttribute('data-suffix') || ''); });
  }

  /* ---------- Parallax ---------- */
  var parallaxEls = $$('[data-parallax]');
  function updateParallax(st) {
    if (reduceMotion) return;
    var vh = window.innerHeight;
    parallaxEls.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > vh + 200) return;
      var speed = parseFloat(el.getAttribute('data-parallax')) || 0.1;
      var center = rect.top + rect.height / 2 - vh / 2;
      el.style.transform = 'translate3d(0,' + (-center * speed) + 'px,0)';
    });
  }

  /* ---------- Pinned steps progress + counter ---------- */
  var stepsWrap = $('.steps');
  var stepNum = $('#stepNum');
  var stepsProgress = $('#stepsProgress');
  var steps = $$('.step');
  function updateSteps(st) {
    if (!stepsWrap) return;
    var rect = stepsWrap.getBoundingClientRect();
    var vh = window.innerHeight;
    var total = rect.height - vh;
    var passed = Math.min(Math.max(-rect.top, 0), total);
    var p = total > 0 ? passed / total : 0;
    if (stepsProgress) stepsProgress.style.height = (p * 100) + '%';
    if (stepNum) {
      var idx = Math.min(steps.length, Math.floor(p * steps.length) + (p > 0 ? 0 : 0) + 1);
      idx = Math.max(1, Math.min(steps.length, idx));
      stepNum.textContent = ('0' + idx).slice(-2);
    }
  }

  /* ---------- Mobile menu ---------- */
  var burger = $('#burger');
  var menu = $('#mobileMenu');
  function setMenu(open) {
    if (!menu) return;
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', String(!open));
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (burger) {
    burger.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
    $$('#mobileMenu a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  }

  /* ---------- Custom cursor + magnetic buttons (desktop only) ---------- */
  var fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  if (fine && !reduceMotion) {
    var cursor = $('#cursor');
    var cx = 0, cy = 0, tx = 0, ty = 0;
    document.addEventListener('mousemove', function (e) { tx = e.clientX; ty = e.clientY; cursor.style.opacity = 1; });
    (function loop() {
      cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18;
      if (cursor) cursor.style.transform = 'translate(' + cx + 'px,' + cy + 'px) translate(-50%,-50%)';
      requestAnimationFrame(loop);
    })();
    $$('a, button, [data-magnetic]').forEach(function (el) {
      el.addEventListener('mouseenter', function () { cursor.classList.add('is-active'); });
      el.addEventListener('mouseleave', function () { cursor.classList.remove('is-active'); });
    });
    $$('[data-magnetic]').forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var mx = e.clientX - (r.left + r.width / 2);
        var my = e.clientY - (r.top + r.height / 2);
        el.style.transform = 'translate(' + mx * 0.25 + 'px,' + my * 0.35 + 'px)';
      });
      el.addEventListener('mouseleave', function () { el.style.transform = ''; });
    });
  }

  /* ---------- Smooth anchor focus (a11y) ---------- */
  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length > 1) {
        var t = document.querySelector(id);
        if (t) { setTimeout(function () { t.setAttribute('tabindex', '-1'); t.focus({ preventScroll: true }); }, 600); }
      }
    });
  });

  // Initial paint
  onScroll();
})();
