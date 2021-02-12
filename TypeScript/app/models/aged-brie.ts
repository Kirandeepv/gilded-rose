import { DefaultItem } from "./defaultItem";

class AgedBrie extends DefaultItem {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
    // "Aged Brie" actually increases in Quality the older it gets
    // Hence, we use positive number here
    this.UPDATE_QUALITY_BY = sellIn <= 0 ? 2 : 1;
  }
}

export { AgedBrie };
