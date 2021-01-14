let basketRepository = {

  quantity: 0,

  add() {
    this.quantity += 1;
    console.log(this.quantity);
  },

  removeOne() {
    this.quantity -= 1;
  },
  
  removeAll() {
    this.quantity = 0;
  },

  get() {
    return this.quantity;
  }
}

export default basketRepository;