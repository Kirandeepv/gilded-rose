import { DefaultItem } from "./defaultItem";

class Backstage extends DefaultItem {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
    this.UPDATE_QUALITY_BY = this.findUpdateQualityBy();
  }

  findUpdateQualityBy = () => {
    let updateQualityBy: number;

    if (this.sellIn <= 0) {
      updateQualityBy = this.quality;
    } else if (this.sellIn <= 5) {
      updateQualityBy = -3;
    } else if (this.sellIn <= 10) {
      updateQualityBy = -2;
    } else {
      updateQualityBy = -1;
    }
    return updateQualityBy;
  };
}

export { Backstage };
