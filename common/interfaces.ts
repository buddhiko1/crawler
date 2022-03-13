import { IDhammapadaPage } from "../dhammapada/interfaces";

export type IPage = IDhammapadaPage;

export interface ISaver {
  save(pages: IPage[]): void;
}

export interface IDbSaverConf {
  uri: string;
  db: string;
  collection: string;
}

export interface IFileSaverConf {
  dir: string
}

export interface ICrawlerConf {
  headless: boolean;
  slowMo: number; // slow down by ms
}

export interface IWebsite {
  urlPrefix: string,
  urlSuffixes: string[],
  extractPageTitle(url: string): string;
}