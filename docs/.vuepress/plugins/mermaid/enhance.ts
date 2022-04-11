import { defineClientAppEnhance } from '@vuepress/client';
import { h } from 'vue';
import mermaid from './mermaid'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('Mermaid', (props) => h(mermaid, props));
});