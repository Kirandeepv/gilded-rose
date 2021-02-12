import { expect } from "chai";
import { Item, GildedRose } from "../app/gilded-rose";

describe("Gilded Rose", function () {
  describe("Default scenario", function () {
    let gildedRose: GildedRose;

    it("decreases quality by 1", function () {
      gildedRose = new GildedRose([new Item("Default item", 1, 2)]);
      // Called first time
      const items1 = gildedRose.updateQuality();
      expect(items1[0].quality).to.equal(1);

      // Called second time
      const items2 = gildedRose.updateQuality();
      expect(items2[0].quality).to.equal(0);
    });
  });
});

describe("Aged Brie scenario", function () {
  let gildedRose: GildedRose;

  describe("when sellIn date has not passed", function () {
    it("increases quality by 1", function () {
      gildedRose = new GildedRose([new Item("Aged Brie", 2, 0)]);
      const items1 = gildedRose.updateQuality();
      expect(items1[0].quality).to.equal(1);
    });
  });

  describe("when sellIn date has passed", function () {
    gildedRose = new GildedRose([new Item("Aged Brie", 0, 0)]);
    it("increases quality by 2", function () {
      const items1 = gildedRose.updateQuality();
      expect(items1[0].quality).to.equal(2);
    });
  });
});

describe("Conjured scenario", function () {
  let gildedRose: GildedRose;
  beforeEach(function () {
    gildedRose = new GildedRose([new Item("Conjured Mana Cake", 3, 6)]);
  });

  it("decreases quality twice as fast", function () {
    // Called first time
    const items1 = gildedRose.updateQuality();
    expect(items1[0].quality).to.equal(4);

    // Called second time
    const items2 = gildedRose.updateQuality();
    expect(items2[0].quality).to.equal(2);
  });
});

describe("Backstage scenario", function () {
  it("increases in quality with days", function () {
    let gildedRose: GildedRose;
    gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    ]);

    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });

  // Check the upper bound
  describe("when updated quality is more than 50", function () {
    it("does not increase quality", function () {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(50);
    });
  });
});
