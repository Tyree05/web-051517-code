$("#create").on("click", function(event) {

  let accessToken = $("#token").val()
  let fileName = $("#file_name").val()
  let description = $("#description").val()
  let content = $("#content").val()

  let newGist = {"description": description,
  "public": true,
  "files": {
    fileName: {
      "content": content
    }
  }
}

$.ajax({
  url: "https://api.github.com/gists",
  method: "POST",
  data: JSON.stringify(newGist),
  headers: {
    "Authorization":`token ${accessToken}`
  },
  success: function(data) {
    displayGists()
  }
})
})

function displayGists() {
  let accessToken = $("#token").val()
  $.ajax({
  url: "https://api.github.com/gists",
  method: "GET",
  headers: {
        "Authorization":`token ${accessToken}`
    },
  success: function(data) {
  //  debugger
    data.forEach(function(gist){
      $("#myGists").append(`<li>${gist.description}</li>`)
    })
  //  console.log(data)
  }
});
}
