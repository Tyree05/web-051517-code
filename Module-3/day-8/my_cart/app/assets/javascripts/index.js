$(document).ready(function(){
    $("#new_cart_item").on("submit", function(event) {
        event.preventDefault()
        $.ajax({
            url: "http://localhost:3000/cart_items.json",
      data: $(this).serialize(),
      method: "POST",
      success: function callback(data,status,response) {
          renderItems(data.items)
      }
    });
    })
})

function renderItems(itemsArray){
    let list = $("ul").first()
    $(list).html("")
    itemsArray.forEach(item => {
        $(list).append(`<li>${item.name} - ${item.price}</li>`)
    })
}
