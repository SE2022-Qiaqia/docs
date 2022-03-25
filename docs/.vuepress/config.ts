import { DefaultThemeOptions, defineUserConfig } from "vuepress";
import { navbar } from "./config/navbar";
import { sidebar } from "./config/sidebar";

export default defineUserConfig<DefaultThemeOptions>({
    base: '/docs/',
    title: '2022SE Qiaqia',
    description: '2022软工小组',
    head: [
        ['link', { rel: 'icon', href: '/images/hero.jpg' }],
    ],
    plugins: [
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: 'Search',
                    },
                },
            },
        ],
    ],
    themeConfig: {
        navbar: navbar,
        sidebar: sidebar,
        logo: '/images/hero.jpg',
    },
});