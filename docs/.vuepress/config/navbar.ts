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
      },
      {
        text: '详细设计',
        link: '/project/detailed-design'
      },
      {
        text: '测试计划',
        link: '/project/test-plan'
      },
      {
        text: 'API接口定义',
        link: '/project/open-api'
      }
    ]
  },
  { text: 'GitHub', link: 'https://github.com/SE2022-Qiaqia' }
];