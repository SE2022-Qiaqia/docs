import { defineClientAppEnhance } from '@vuepress/client'
import mermaid from './mermaid'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('Mermaid', mermaid);
})