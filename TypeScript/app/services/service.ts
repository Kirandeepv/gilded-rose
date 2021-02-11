import { Item } from "../gilded-rose";
import { DefaultItem } from "../models/defaultItem";

class Service {
  constructor() {}

  processData(item: Item) {
    let processedItem;

    switch (item.name) {
      default:
        processedItem = new DefaultItem(item.name, item.sellIn, item.quality);
        return processedItem.updateItemForDay();
    }
  }
}

export { Service };
