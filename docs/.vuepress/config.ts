import { DefaultThemeOptions, defineUserConfig } from "vuepress";
import { mermaidPlugin } from "./plugins/mermaid";
import { navbar } from "./config/navbar";
import { sidebar } from "./config/sidebar";

const base = '/docs/';

export default defineUserConfig<DefaultThemeOptions>({
  base,
  title: '2022SE Qiaqia',
  description: '2022软工小组',
  head: [
    // 这里需要手动加上base，暂时没找到有没有比较好的做法
    ['link', { rel: 'icon', href: `${base}images/hero.jpg` }],
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
    [mermaidPlugin],
  ],
  themeConfig: {
    navbar: navbar,
    sidebar: sidebar,
    logo: '/images/hero.jpg',
  },
  bundler: '@vuepress/vite',
  bundlerConfig: {
    viteOptions: {
      configFile: 'vite.config.ts',
    },
  },
});