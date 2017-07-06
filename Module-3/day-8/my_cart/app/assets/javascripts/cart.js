class Cart {
  constructor(data) {
    this.userEmail = data.user_email
    this.items = []
    data.items.forEach(itemJSON => {
      this.items.push(new Item(itemJSON))
    })
  }
/*
<p>
  <strong>User email:</strong>
  <span id="email"></span>
</p>

  <strong>Items</strong>
<ul id="items">

    </ul>
    */
  render(){
    let outputHTML = "<p><strong>User email:</strong>"
    outputHTML += this.userEmail
    outputHTML += "</p>"
    outputHTML += "<strong>Items</strong>"
    outputHTML += "<ul id='items'>"
    this.items.forEach(function(item) {
      outputHTML+=item.render()
      // ^this render <li>${item.name} - ${item.price}</li>
    })
    outputHTML += "</ul>"
    return outputHTML
  }
}
