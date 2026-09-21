/**
 * 读取 data/projects.js 中的 window.PROJECTS,
 * 渲染右侧"项目作品"区块。新增项目只需修改数据文件。
 */
(function () {
  'use strict';

  var container = document.getElementById('projectList');
  if (!container || !window.PROJECTS) return;

  // 按完成时间倒序(新→旧)
  var projects = window.PROJECTS.slice().sort(function (a, b) {
    return (b.date || '').localeCompare(a.date || '');
  });

  function formatDate(date) {
    if (!date) return '';
    var parts = date.split('-');
    return parts.length === 2 ? parts[0] + ' 年 ' + parseInt(parts[1], 10) + ' 月' : date;
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
  }

  var html = projects.map(function (p, i) {
    var num = String(i + 1).padStart(2, '0');
    var category = p.category
      ? '<span class="project-category">' + escapeHtml(p.category) + '</span>'
      : '';
    var tech = (p.tech || []).map(function (t) {
      return '<li>' + escapeHtml(t) + '</li>';
    }).join('');

    var media = p.image
      ? '<img src="' + escapeHtml(p.image) + '" alt="' + escapeHtml(p.name) + ' 项目配图" loading="lazy" ' +
        'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';">' +
        '<span class="placeholder" style="display:none;">配图待补充</span>'
      : '<span class="placeholder" style="display:flex;">配图待补充</span>';

    return (
      '<article class="project">' +
        '<div class="project-media"><div class="project-figure">' + media + '</div></div>' +
        '<div class="project-body">' +
          '<span class="project-index">PROJECT ' + num + '</span>' +
          '<h3 class="project-title">' + escapeHtml(p.name) + category + '</h3>' +
          '<p class="project-date">完成时间:' + escapeHtml(formatDate(p.date)) + '</p>' +
          '<p class="project-summary">' + escapeHtml(p.summary) + '</p>' +
          '<ul class="project-tech">' + tech + '</ul>' +
        '</div>' +
      '</article>'
    );
  }).join('');

  container.innerHTML = html;
})();
