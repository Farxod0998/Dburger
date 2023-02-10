const db = {
  crazy: {
    name: 'Crazy',
    price: 31000,
    count: 0,
    get totalSumm() {
      return this.price * this.count
    }
  },
  light: {
    name: 'Light',
    price: 26000,
    count: 0,
    get totalSumm() {
      return this.price * this.count
    }
  },
  cheeseburger: {
    name: 'CheeseBurger',
    price: 29000,
    count: 0,
    get totalSumm() {
      return this.price * this.count
    }
  },
  dburger: {
    name: 'dBurger',
    price: 24000,
    count: 0,
    get totalSumm() {
      return this.price * this.count
    }
  }
}


