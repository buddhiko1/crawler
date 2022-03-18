import { DbSaver } from "../common/db";
import { FsSaver } from "../common/file";
import { Crawler } from "../common/crawler";
import { chunkArray } from "../common/tools";
import { DB_CONF, FILE_CONF, CRAWLER_CONF, WEBSITE, CHUNK_SIZE } from "./config";

export async function crawl(saveToDb: boolean) {
  const saver = saveToDb ? new DbSaver(DB_CONF) : new FsSaver(FILE_CONF);
  const crawler = new Crawler(CRAWLER_CONF);
  const urlChunkList = chunkArray<string>(WEBSITE.urlSuffixes, CHUNK_SIZE)
  for (let chunk of urlChunkList) {
    const urls = chunk.map((suffix) => `${WEBSITE.urlPrefix}/${suffix}`)
    let result = await crawler.crawl(urls);
    await saver.save(result)
  }
}
