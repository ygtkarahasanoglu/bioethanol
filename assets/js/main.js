(function () {
  var STORAGE_KEY = 'bitenol-lang';

  function applyLang(lang) {
    var els = document.querySelectorAll('[data-tr][data-en]');
    els.forEach(function (el) {
      el.innerHTML = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-tr');
    });
    document.body.classList.toggle('lang-en', lang === 'en');
    document.documentElement.setAttribute('lang', lang);
    document.getElementById('langToggle').setAttribute('aria-pressed', lang === 'en');
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function currentLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'tr' || saved === 'en') return saved;
    } catch (e) {}
    return 'tr';
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(currentLang());

    var toggle = document.getElementById('langToggle');
    toggle.addEventListener('click', function () {
      var next = document.body.classList.contains('lang-en') ? 'tr' : 'en';
      applyLang(next);
    });

    var navToggle = document.getElementById('navToggle');
    var mainNav = document.getElementById('mainNav');
    navToggle.addEventListener('click', function () {
      var open = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open);
    });
    mainNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealEls.length) {
      // Opt in to the hidden/animated state only now that we can guarantee
      // JS will reveal it — content was visible by default until this point.
      document.body.classList.add('js-reveal-ready');
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0, rootMargin: '0px 0px 80px 0px' });
      revealEls.forEach(function (el) { io.observe(el); });
      // Safety net: never let content stay invisible for long, whatever happens.
      window.setTimeout(function () {
        revealEls.forEach(function (el) { el.classList.add('in-view'); });
      }, 2500);
    }
    // No IntersectionObserver support (or no .reveal elements): do nothing —
    // sections are already fully visible by default (see CSS).
  });
})();
