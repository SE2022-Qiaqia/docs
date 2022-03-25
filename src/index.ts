import { createDevApp } from 'vuepress';
import puppeteer from 'puppeteer';

const start = async () => {
    const app = createDevApp({
        host: 'localhost',
        port: 8080,
        source: './docs',
        base: '/docs/'
    });

    await app.init();
    await app.prepare();

    const closeDevServer = await app.dev();

    const browser = await puppeteer.launch();
    const browserPage = await browser.newPage();
    const { host, port, base } = app.options;

    // TODO：确定导出PDF的顺序
    // TODO：添加PDF目录
    // TODO：添加PDF页码、页眉等
    // TODO：合并PDF

    for (const page of app.pages.filter(page => page.path !== '/404.html')) {
        const url = `http://${host}:${port}${base}${page.path.slice(1)}`;
        await browserPage.goto(url, { waitUntil: 'networkidle2' });
        await browserPage.pdf({ path: app.dir.temp(`${page.key}.pdf`), format: 'a4' });
        console.log(`Generated ${page.key}.pdf, 《${page.title}》, ${url}`);
    }

    await closeDevServer();
    await browser.close();
    return new Promise(resolve => { resolve(0); });
};

start();