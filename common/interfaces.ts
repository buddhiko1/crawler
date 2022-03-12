export interface IDbConf {
  url: string;
  db: string;
  collection: string;
}

export interface IDhammapadaDoc {
  title: string;
  content: string;
}

export type IDbDoc = IDhammapadaDoc