import Puppeteer from "puppeteer";
import { ICrawService, ICrawlerConf, IPage } from "./interfaces";

export class Crawler implements ICrawService {
  constructor(private _conf: ICrawlerConf) {}

  async crawl(urls: string[]): Promise<IPage[]> {
    const browser = await Puppeteer.launch(this._conf);
    let result: IPage[] = [];
    const crawler = await browser.newPage();
    for (let url of urls) {
      await crawler.goto(url);
      let content = await crawler.content();
      content = content.replace(/\n/g, "");
      let page: IPage = {
        url,
        content,
      };
      result.push(page);
    }
    await browser.close();
    return result;
  }
}
