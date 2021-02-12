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

    // Represents the number by which quality increases or decreases for a particular item.
    // This can be a positive or negative integer based on whether the quality increases or decreases with time respectively.
    this.UPDATE_QUALITY_BY = -1;

    // Represents the number by which sellIn prop changes.
    // This is kept negative here to indicate that the value decreases with each day
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
