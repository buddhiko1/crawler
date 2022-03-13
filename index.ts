import { DbSaver } from "./common/db";
import { FileSaver } from "./common/file";
import { Crawler } from "./common/crawler"
import { DB_CONF, FILE_CONF, CRAWLER_CONF, WEBSITE } from "./dhammapada/config"

async function run() {
  const dbSaver = new DbSaver(DB_CONF);
  const fileSaver = new FileSaver(FILE_CONF)
  const crawler = new Crawler(CRAWLER_CONF, fileSaver);
  crawler.crawl(WEBSITE)
}
run().catch(console.dir);