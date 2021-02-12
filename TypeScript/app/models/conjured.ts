import { DefaultItem } from "./defaultItem";

class Conjured extends DefaultItem {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);

    // For conjured items, the quality decreases twice as fast as normal items
    // Existing quality is 1, (1 * 2 = 2), hence multiply by 2
    this.UPDATE_QUALITY_BY = -2;
  }
}

export { Conjured };
