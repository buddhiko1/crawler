import Puppeteer from "puppeteer";

import { IPage, ISaver, ICrawlerConf, IWebsite } from "./interfaces";

export class Crawler {
  constructor(private _conf: ICrawlerConf, private _saver: ISaver) {}

  async crawl(website: IWebsite) {
    const browser = await Puppeteer.launch(this._conf);
    try {
      let result: IPage[] = [];
      const page = await browser.newPage();
      for (let urlSuffix of website.urlSuffixes) {
        const url = `${website.urlPrefix}/${urlSuffix}`;
        await page.goto(url);
        let content = await page.content();
        result.push({
          title: website.extractPageTitle(url),
          content,
        });
      }
      this._saver.save(result);
    } catch (e) {
      console.error(e);
    } finally {
      await browser.close();
    }
  }
}
