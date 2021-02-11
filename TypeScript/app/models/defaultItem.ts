import { Item } from "../gilded-rose";

class DefaultItem {
  // Basic Item properties
  name: string;
  sellIn: number;
  quality: number;

  // Default constants
  UPDATE_QUALITY_BY: number;
  UPDATE_SELLIN_DATE_BY: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.UPDATE_QUALITY_BY = 1;
    this.UPDATE_SELLIN_DATE_BY = 1;
  }

  updateQuality() {
    let updatedQuality = this.quality - this.UPDATE_QUALITY_BY;

    // Make sure we respect the maximum and minimum values for quality
    updatedQuality =
      updatedQuality > 50 ? 50 : updatedQuality === 0 ? 0 : updatedQuality;

    return updatedQuality;
  }

  private updateSellInDate(): number {
    return this.sellIn - this.UPDATE_SELLIN_DATE_BY;
  }

  public updateItemForDay() {
    return <Item>{
      name: this.name,
      quality: this.updateQuality(),
      sellIn: this.updateSellInDate(),
    };
  }
}

export { DefaultItem };
