import { DefaultItem } from "./defaultItem";

class Sulfuras extends DefaultItem {
  constructor(name: string, sellIn: number, _quality: number) {
    super(name, sellIn, 80);
    this.UPDATE_QUALITY_BY = 0;
    this.UPDATE_SELLIN_DATE_BY = 0;
  }

  updateQuality() {
    return this.quality;
  }
}

export { Sulfuras };
