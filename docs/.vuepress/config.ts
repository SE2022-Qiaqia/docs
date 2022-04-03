import { DefaultThemeOptions, defineUserConfig } from "vuepress";
import { mermaidPlugin } from "./plugins/mermaid";
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
    // TODO 解决引入mermaid插件后打包问题
    // 很奇怪，可以预览，但是打包的时候会因为mermaid使用d3是通过require引入的，所以打包的时候会报错；
    // 降低mermaid版本可以解决该问题，但是又会出现"Component mermaid  is missing template or render function."这样的错误，
    // 暂时不知道如何解决，先搁置了。
    [mermaidPlugin],
  ],
  themeConfig: {
    navbar: navbar,
    sidebar: sidebar,
    logo: '/images/hero.jpg',
  },
});