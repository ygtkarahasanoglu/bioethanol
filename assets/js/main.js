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
  });
})();
