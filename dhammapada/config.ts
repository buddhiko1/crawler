import { IDbConf, IFsConf, ICrawlerConf, IWebsite } from "../common/interfaces";

export const DB_CONF: IDbConf = {
  uri: "mongodb://root:123456@localhost:27017?retryWrites=true",
  db: "crawler",
  collection: "dhammapadaTest",
};

export const FILE_CONF: IFsConf = {
  dir: `${__dirname}/html`,
  title(url: string): string {
    const regexp = /([^\/]+)htm/g;
    let matchedArray = url.match(regexp);
    return matchedArray
      ? `${matchedArray[0].split(".")[0]}.html`
      : <never>matchedArray;
  }
}

export const CRAWLER_CONF: ICrawlerConf = {
  headless: true,
  slowMo: 150,
}

export const WEBSITE: IWebsite = {
  urlPrefix: "http://buddhism.lib.ntu.edu.tw/BDLM/lesson/pali/reading",
  urlSuffixes: Array.from(Array(423).keys()).map((x) => `gatha${x + 1}.htm`),
};

export const CHUNK_SIZE: number = 3