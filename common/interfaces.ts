export interface IPage {
  url: string,
  content: string,
}

export interface IDbConf {
  uri: string;
  db: string;
  collection: string;
}

export interface IFsConf {
  dir: string,
  title (url: string): string,
}

export interface ISaverService {
  save(pages: IPage[]): Promise<void>;
}

export interface ICrawlerConf {
  headless: boolean;
  slowMo: number; // slow down by ms
}

export interface ICrawService {
  crawl(urls: string[]): Promise<IPage[]>;
}

export interface IWebsite {
  urlPrefix: string,
  urlSuffixes: string[]
}