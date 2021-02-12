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

    // These constants will hold the default value by which quality and sellIn are to be updated each day for an item
    // Since for default items, quality decreases as sellIn day approaches, we use negation here
    this.UPDATE_QUALITY_BY = -1;
    this.UPDATE_SELLIN_DATE_BY = -1;
  }

  /* Method that updates the quality of the item
   * This relies on this.UPDATE_QUALITY_BY which may be overridden in child classes per requirements
   */
  updateQuality() {
    let updatedQuality = this.quality + this.UPDATE_QUALITY_BY;

    // Make sure we respect the maximum and minimum values for quality
    updatedQuality =
      updatedQuality > 50 ? 50 : updatedQuality === 0 ? 0 : updatedQuality;

    return updatedQuality;
  }

  private updateSellInDate(): number {
    return this.sellIn + this.UPDATE_SELLIN_DATE_BY;
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
