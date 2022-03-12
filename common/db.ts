import { MongoClient } from "mongodb";
import { IDbConf, IDbDoc } from "./interfaces"

export class MongoDb {
  private _conf: IDbConf;
  private _client: MongoClient;

  constructor(conf: IDbConf) {
    this._conf = conf
    this._client = new MongoClient(this._conf.url);    
  }
  
  async connect() {
    await this._client.connect();
  }

  async insertOne(doc: IDbDoc) {
    const db = client.db(this._conf.db);    
    const collection = db.collection(this._conf.collection);
    const result = await collection.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  }

  async close() {
    await this._client.close()
  }
}


const uri =
  "mongodb://root:123456@localhost:27017?retryWrites=true&writeConcern=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db("dhammapada");
    const haiku = database.collection("html");
    // create a document to insert
    const doc = {
      title: "Record of a Shriveled Datum",
      content: "No bytes, no problem. Just insert a document, in MongoDB",
    };
    const result = await haiku.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
