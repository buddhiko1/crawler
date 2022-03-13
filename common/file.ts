import fs from "fs";
import { ISaver, IFileSaverConf, IPage } from "./interfaces";

export class FileSaver implements ISaver {
  private _conf: IFileSaverConf;

  constructor(conf: IFileSaverConf) {
    if (!fs.existsSync(conf.dir)) {
      fs.mkdirSync(conf.dir, { recursive: true });
    }
    this._conf = conf;
  }

  save(pages: IPage[]) {
    for (let page of pages) {
      const filePath = `${this._conf.dir}/${page.title}`;
      fs.writeFileSync(filePath, page.content, "utf-8");
      console.log(`${page.title} file was created`);
    }
  }
}
