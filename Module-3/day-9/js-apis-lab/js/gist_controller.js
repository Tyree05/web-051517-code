$("#create").on("click", function(event) {

  let accessToken = $("#token").val()
  accessToken = "bab7c39bd31e6ff755628b91ddc12ab3761d9fd4"
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
/*
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
*/
displayGists()
})

function displayGists() {
  let accessToken = $("#token").val()
  accessToken = "bab7c39bd31e6ff755628b91ddc12ab3761d9fd4"

  getGists(accessToken,(data) => {
    let listOfGists = new ListOfGists(data)
    $("#myGists").html(listOfGists.render())
  })
}
