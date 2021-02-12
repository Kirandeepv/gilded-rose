import { DefaultItem } from "./defaultItem";

class Backstage extends DefaultItem {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
    this.UPDATE_QUALITY_BY = this.findUpdateQualityBy();
  }

  /* "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
   * Quality increases by 2 when there are 10 days or less
   * increases by 3 when there are 5 days or less
   * Quality drops to 0 after the concert
   */
  findUpdateQualityBy = () => {
    let updateQualityBy: number;

    if (this.sellIn <= 0) {
      // updatedQuality = this.quality + this.UPDATE_QUALITY_BY;
      // We assign -(quality) to UPDATE_QUALITY_BY because quality drops to 0 after sellIn date passes
      updateQualityBy = -this.quality;
    } else if (this.sellIn <= 5) {
      updateQualityBy = 3;
    } else if (this.sellIn <= 10) {
      updateQualityBy = 2;
    } else {
      updateQualityBy = 1;
    }
    return updateQualityBy;
  };
}

export { Backstage };
