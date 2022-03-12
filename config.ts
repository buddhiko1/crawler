import { IDbConf } from "./common/interfaces";

export const DHAMMAPADA_DB_CONF: IDbConf = {
  url: "mongodb://root:123456@localhost:27017?retryWrites=true&writeConcern=majority",
  db: "crawler",
  collection: "dhammapada",
};