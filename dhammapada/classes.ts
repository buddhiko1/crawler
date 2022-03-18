import { IPage, IPageFormatter } from "../common/interfaces";

class Formatter implements IPageFormatter {
  constructor() { }
  format(page: IPage): IPage {
    return {
      url: page.url,
      content: page.content.replace(/\n/g, '')
    }
  }
}