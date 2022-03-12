import { MongoDb } from "./common/db";
import { IDhammapadaDoc } from "./common/interfaces";
import { DHAMMAPADA_DB_CONF } from "./config";

async function run() {
  const db = new MongoDb(DHAMMAPADA_DB_CONF);
  try {
    await db.connect();
    const doc: IDhammapadaDoc = {
      title: "title 1",
      content: "html string",
    };
    const result = await db.insertOne(doc);
  } finally {
    await db.close();
  }
}
run().catch(console.dir);