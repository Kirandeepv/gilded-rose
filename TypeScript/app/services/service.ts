import { Item } from "../gilded-rose";
import { DefaultItem } from "../models/defaultItem";
import { AgedBrie } from "../models/aged-brie";
import { Backstage } from "../models/backstage";
import { Sulfuras } from "../models/sulfuras";
import { Conjured } from "../models/conjured";

class Service {
  constructor() {}

  processData(item: Item) {
    let processedItem;

    switch (item.name) {
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
