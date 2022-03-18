import { crawl } from "./dhammapada"

const saveToDb = true
crawl(saveToDb).catch(console.dir);
