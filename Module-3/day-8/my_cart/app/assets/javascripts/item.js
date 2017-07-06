class Item {
  constructor(data) {
    this.name = data.name
    this.price = data.price
  }

  render(){
    return `<li>${this.name} - ${this.price}</li>`
  }
}
