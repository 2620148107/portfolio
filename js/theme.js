/**
 * 明暗主题切换:
 * - 本脚本在 <head> 中同步加载,渲染前即应用上次保存的主题,避免刷新闪烁;
 * - 点击右上角按钮切换主题,并用 localStorage 持久化用户选择。
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'theme';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  // 读取上次选择(默认浅色);localStorage 不可用时静默降级
  var saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch (e) { /* 忽略 */ }
  applyTheme(saved === 'dark' ? 'dark' : 'light');

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('themeToggle');
    if (!btn) {
      return;
    }

    function syncLabel() {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      btn.setAttribute('aria-label', isDark ? '切换到浅色主题' : '切换到深色主题');
    }

    syncLabel();

    btn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) { /* 忽略 */ }
      syncLabel();
    });
  });
})();
