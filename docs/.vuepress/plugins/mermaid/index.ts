import { Plugin } from "vuepress";
import { path } from "@vuepress/utils";
import { htmlEscape } from "@vuepress/shared";

const markdownItPlugin: markdownit.PluginSimple = (md) => {
  const originalFence = md.renderer.rules.fence.bind(md.renderer.rules);
  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    if (tokens[idx].info === "mermaid") {
      return `<Mermaid code="${htmlEscape(tokens[idx].content)}" />`;
    }
    return originalFence(tokens, idx, options, env, slf);
  };
};

export const mermaidPlugin: Plugin = {
  name: 'mermaid',
  extendsMarkdown: (md, app) => {
    md.use(markdownItPlugin);
  },
  clientAppEnhanceFiles: path.resolve(__dirname, './enhance.ts'),
};