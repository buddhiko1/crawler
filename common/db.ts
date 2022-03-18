import { MongoClient } from "mongodb";
import { IDbConf, IPage, ISaverService } from "./interfaces";

export class DbSaver implements ISaverService {
  private _conf: IDbConf;
  private _client: MongoClient;

  constructor(conf: IDbConf) {
    this._conf = conf;
    this._client = new MongoClient(this._conf.uri);
  }

  async save(pages: IPage[]): Promise<void> {
    await this._connect();
    const db = this._client.db(this._conf.db);
    const collection = db.collection(this._conf.collection);
    for (let page of pages) {
      await collection.insertOne(page);
      console.log(`${page.url} was inserted`);
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
