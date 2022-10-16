class Menu {
  #price1 = 10;
  #price2 = 20;
  constructor(val1, val2) {
    this.val1 = val1;
    this.val2 = val2;
  }
  calcTotal() {
    return this.val1 * this.#price1 + this.val2 * this.#price2;
  }

  get total() {
    return this.calcTotal();
  }
}

const item1 = new Menu(2, 0);
const item2 = new Menu(2, 4);
const item3 = new Menu(3, 2);
console.log(item1.total);
console.log(item2.total);
console.log(item3.total);
