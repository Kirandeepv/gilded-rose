import { DefaultItem } from "./defaultItem";

class AgedBrie extends DefaultItem {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
    this.UPDATE_QUALITY_BY = sellIn <= 0 ? -2 : -1;
  }
}

export { AgedBrie };
