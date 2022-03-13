import { IDbSaverConf, IFileSaverConf, ICrawlerConf, IWebsite } from "../common/interfaces";

export const DB_CONF: IDbSaverConf = {
  uri: "mongodb://root:123456@localhost:27017?retryWrites=true",
  db: "crawler",
  collection: "dhammapada",
};

export const FILE_CONF: IFileSaverConf = {
  dir: `${__dirname}/html`
}

export const CRAWLER_CONF: ICrawlerConf = {
  headless: true,
  slowMo: 250,
}

export const WEBSITE: IWebsite = {
  urlPrefix: "http://buddhism.lib.ntu.edu.tw/BDLM/lesson/pali/reading",
  urlSuffixes: Array.from(Array(3).keys()).map((x) => `gatha${x + 355}.htm`),
  extractPageTitle(url: string): string {
    const regexp = /([^\/]+)htm/g;
    let matchedArray = url.match(regexp);
    return matchedArray
      ? `${matchedArray[0].split(".")[0]}.html`
      : <never>matchedArray;
  },
};

export const CHUNK_SIZE: number = 3