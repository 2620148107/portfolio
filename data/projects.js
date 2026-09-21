/**
 * 项目数据:后期新增项目只需在此数组末尾追加一条记录,
 * 并将配图放入 images/projects/ 目录即可,无需改动其他代码。
 *
 * 字段说明:
 * - name      项目名称
 * - category  业务分类标签(如 AI 项目、数据可视化)
 * - date      完成时间(用于排序与展示)
 * - tech      技术栈列表
 * - summary   简短介绍
 * - image     配图路径;留空或图片加载失败时自动显示占位块
 */
window.PROJECTS = [
  {
    name: '课语通',
    category: 'AI 项目',
    date: '2026-07',
    tech: ['Python', 'FastAPI', 'RAG', '向量检索', '大语言模型 API', 'Streamlit'],
    summary: '“课语通”是一个基于大语言模型的课程问答助手。用户上传课程资料后,系统能够建立知识索引,根据课程内容回答问题,并提供引用出处和知识点小测,帮助学生快速复习和整理课程重点。',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1280&q=70'
  },
  {
    name: '城市脉搏',
    category: '数据可视化',
    date: '2026-03',
    tech: ['TypeScript', 'HTML/CSS', 'Canvas', 'SVG', 'ECharts'],
    summary: '“城市脉搏”是一个城市实时交通与天气数据可视化大屏,用于集中展示交通、天气和城市运行信息。项目通过多数据源轮询聚合数据,并结合 SVG 图表、Canvas 粒子地图和响应式布局实现大屏可视化展示。',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1280&q=70'
  },
  {
    name: '拾光集市',
    category: 'Web 开发',
    date: '2025-09',
    tech: ['Java', 'Spring Boot', 'MySQL', 'TypeScript', 'Vue'],
    summary: '“拾光集市”是一个面向校园场景的二手交易平台,提供商品发布、关键词检索、站内私信和信用评分等功能。从需求梳理、界面设计到主要接口开发均独立完成,上线测试后累计注册用户超过 300 人。',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1280&q=70'
  },
  {
    name: '轻记账',
    category: '小程序应用',
    date: '2025-04',
    tech: ['TypeScript', '微信小程序', '微信云开发', 'ECharts'],
    summary: '“轻记账”是一款面向日常生活场景的极简记账微信小程序,重点解决快速记录和查看个人收支的问题。项目支持语音快捷记账、月度收支统计和预算提醒,并使用微信云开发完成数据存储与后端能力。',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1280&q=70'
  }
];
