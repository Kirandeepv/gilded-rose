import { Item } from "../gilded-rose";
import { DefaultItem } from "../models/defaultItem";
import { AgedBrie } from "../models/aged-brie";
import { Backstage } from "../models/backstage";
import { Sulfuras } from "../models/sulfuras";
import { Conjured } from "../models/conjured";

class Service {
  constructor() {}

  /* This function will take Item as input and based on the name instantiate the correct item type
   * Once the item is instantiated, we then update quality as per the item requirements
   */
  processData(item: Item) {
    let processedItem;

    switch (item.name) {
      // TODO: Use enum instead of hard-coded names here
      case "Aged Brie":
        processedItem = new AgedBrie(item.name, item.sellIn, item.quality);
        return processedItem.updateItemForDay();
      case "Backstage passes to a TAFKAL80ETC concert":
        processedItem = new Backstage(item.name, item.sellIn, item.quality);
        return processedItem.updateItemForDay();
      case "Sulfuras, Hand of Ragnaros":
        processedItem = new Sulfuras(item.name, item.sellIn, item.quality);
        return processedItem.updateItemForDay();
      case "Conjured Mana Cake":
        processedItem = new Conjured(item.name, item.sellIn, item.quality);
        return processedItem.updateItemForDay();
      default:
        processedItem = new DefaultItem(item.name, item.sellIn, item.quality);
        return processedItem.updateItemForDay();
    }
  }
}

export { Service };
