import type { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
  {
    text: '团队',
    link: '/team'
  },
  {
    text: '项目',
    children: [
      {
        text: '项目概述',
        link: '/project/overview'
      },
      {
        text: '项目计划',
        link: '/project/plan'
      },
      {
        text: '需求分析',
        link: '/project/requirement-analysis'
      },
      {
        text: '设计文档',
        link: '/project/design-analysis'
      }
    ]
  },
  { text: 'GitHub', link: 'https://github.com/SE2022-Qiaqia' }
];