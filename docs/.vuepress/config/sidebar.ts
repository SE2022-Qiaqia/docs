import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/': [
    {
      text: '团队',
      collapsible: true,
      children: [
        '/team',
      ]
    },
    {
      text: '项目',
      collapsible: true,
      children: [
        '/project/overview',
        '/project/plan',
        '/project/requirement-analysis',
        '/project/design-analysis',
        '/project/detailed-design',
        '/project/test-plan',
        '/project/open-api',
      ]
    },
    {
      text: '会议记录',
      collapsible: true,
      children: [
        '/meeting/2022-03-26',
        '/meeting/2022-04-02',
        '/meeting/2022-04-18',
      ]
    }
  ],
  '/test': [
    {
      text: 'Markdown测试',
      collapsible: true,
      children: [
        '/test/mermaid',
      ]
    }
  ]
};