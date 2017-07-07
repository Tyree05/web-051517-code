class Gist {
  constructor(data) {
    this.description = data.description
  }

  render(){
    return `<li>${this.description}</li>`
  }
}
