import { DbSaver } from "../common/db";
import { FileSaver } from "../common/file";
import { Crawler } from "../common/crawler";
import { chunkArray } from "../common/tools";
import { IWebsite } from "../common/interfaces";
import { DB_CONF, FILE_CONF, CRAWLER_CONF, WEBSITE, CHUNK_SIZE } from "./config";

export async function crawl(saveToDb: boolean) {
  const saver = saveToDb ? new DbSaver(DB_CONF) : new FileSaver(FILE_CONF);
  const crawler = new Crawler(CRAWLER_CONF, saver);
  const urlChunkList = chunkArray<string>(WEBSITE.urlSuffixes, CHUNK_SIZE)
  for (let chunk of urlChunkList) {
    let website: IWebsite = {
      urlPrefix: WEBSITE.urlPrefix,
      urlSuffixes: chunk,
      extractPageTitle: WEBSITE.extractPageTitle
    }
    await crawler.crawl(website);
  }
}
