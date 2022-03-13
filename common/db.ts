import { MongoClient } from "mongodb";
import { ISaver, IDbSaverConf, IPage } from "./interfaces"

export class DbSaver implements ISaver {
  private _conf: IDbSaverConf;
  private _client: MongoClient;

  constructor(conf: IDbSaverConf) {
    this._conf = conf;
    this._client = new MongoClient(this._conf.uri);
  }

  async save(pages: IPage[]) {
    await this._connect();
    const db = this._client.db(this._conf.db);
    const collection = db.collection(this._conf.collection);
    for (let page of pages) {
      const result = await collection.insertOne(page);
      console.log(`${page.title} was inserted`);
    }
    await this._close();
  }

  private async _connect() {
    await this._client.connect();
  }

  private async _close() {
    await this._client.close();
  }
}
