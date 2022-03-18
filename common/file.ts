import fs from "fs";
import { IFsConf, IPage, ISaverService } from "./interfaces";


export class FsSaver implements ISaverService {
  private _conf: IFsConf;

  constructor(conf: IFsConf) {
    if (!fs.existsSync(conf.dir)) {
      fs.mkdirSync(conf.dir, { recursive: true });
    }
    this._conf = conf;
  }

  async save(pages: IPage[]): Promise<void> {
    for (let page of pages) {
      const filePath = `${this._conf.dir}/${this._conf.title(page.url)}`;
      fs.writeFileSync(filePath, page.content, "utf-8");
      console.log(`${this._conf.title(page.url)} file was created`);
    }
  }
}
