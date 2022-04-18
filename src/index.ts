import { createDevApp, resolveDevUserConfig, resolveUserConfigConventionalPath, transformUserConfigToPlugin, allowTs } from 'vuepress';
import puppeteer from 'puppeteer';
import { path } from "@vuepress/utils";
import fs from 'fs';

async function createDevAppFromSource(sourcePath: string) {
  allowTs();

  const appConfig = { source: path.resolve(sourcePath) };
  const userConfigPath = resolveUserConfigConventionalPath(appConfig.source);
  const { userConfig } = await resolveDevUserConfig(userConfigPath);

  const app = createDevApp({
    ...appConfig,
    ...userConfig,
  });

  app.use(transformUserConfigToPlugin(app, userConfig));

  return app;
}

const start = async () => {

  const app = await createDevAppFromSource("./docs");

  await app.init();
  await app.prepare();

  const closeDevServer = await app.dev();

  const browser = await puppeteer.launch();
  const browserPage = await browser.newPage();
  const { port, base } = app.options;
  const host = app.options.host === '0.0.0.0' ? 'localhost' : app.options.host;

  // TODO：确定导出PDF的顺序
  const sidebarItems = resolveSidebarItems(app.options.themeConfig.sidebar);
  console.log(sidebarItems);


  // TODO：添加PDF目录
  // TODO：添加PDF页码、页眉等
  // TODO：合并PDF

  const pdfOutputDir = app.dir.temp("pdf");
  if (!fs.existsSync(pdfOutputDir)) fs.mkdirSync(pdfOutputDir);

  for (const page of app.pages.filter(page => page.path !== '/404.html')) {
    const url = `http://${host}:${port}${base}${page.path.slice(1)}`;
    await browserPage.goto(url, { waitUntil: 'networkidle2' });
    await browserPage.pdf({ path: app.dir.temp('pdf', `${page.key}.pdf`), format: 'a4' });
    console.log(`Generated ${page.key}.pdf, 《${page.title}》, ${url}`);
  }

  await closeDevServer();
  await browser.close();
  return new Promise(resolve => { resolve(0); });
};

start();