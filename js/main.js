/**
 * 页面交互:移动端菜单开合、导航滚动高亮。
 */
(function () {
  'use strict';

  /* ---------- 移动端汉堡菜单 ---------- */
  var sidebar = document.getElementById('profile');
  var toggle = document.getElementById('menuToggle');

  if (toggle && sidebar) {
    toggle.addEventListener('click', function () {
      var open = sidebar.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // 点击导航链接后自动收起移动端菜单
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      sidebar.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- 滚动时高亮当前板块对应的导航项 ---------- */
  var sections = ['projects', 'about', 'contact'].map(function (id) {
    return document.getElementById(id);
  }).filter(Boolean);

  function setActive(id) {
    navLinks.forEach(function (link) {
      var match = link.getAttribute('href') === '#' + id;
      link.classList.toggle('active', match);
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-30% 0px -60% 0px' });

    sections.forEach(function (s) { observer.observe(s); });
  }

  // 页面顶部时默认高亮"个人简介"
  setActive('profile');
})();
