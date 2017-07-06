/*
 1) Grab cart data
 2) Extract out user_email, put name in user_email
 3) Extract our items, for each item put in unordered list

 */


$.get("/carts/1.json",function(data) {
  let cart = new Cart(data)
  $("#cart").html(cart.render())
})
/*
$.get("/carts/1.json",renderCart)
*/

$("#new_cart_item").on("submit",function(event){
  event.preventDefault()

  $.post("/cart_items.json",$(this).serialize(),function(data){
    let cart = new Cart(data)
    $("#cart").html(cart.render())
  })
  /*
  $.post("/cart_items.json",$(this).serialize(),renderCart)
  */
})
