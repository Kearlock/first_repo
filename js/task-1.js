const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  getTotalPrice() {
    let totalPrice = 0;
    for (let potion of this.potions) {
      totalPrice += potion.price;
    }
    return totalPrice;
  },
};
console.log(atTheOldToad.getTotalPrice());
console.log("======================================");
