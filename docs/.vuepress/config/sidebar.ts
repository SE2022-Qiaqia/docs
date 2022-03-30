import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = [
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
            '/project/ReqAnay/RA',
        ]
    },
    {
        text: '会议记录',
        collapsible: true,
        children: [
            '/meeting/2022-03-26',
        ]
    }
];