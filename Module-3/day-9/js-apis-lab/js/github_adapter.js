function getGists(accessToken,successCallback) {
  /*
  $.ajax({
  url: "https://api.github.com/gists",
  method: "GET",
  headers: {
        "Authorization":`token ${accessToken}`
    },
  success: function(data) {
    successCallback(data)
  }
})
*/
fetch("https://api.github.com/gists",{
  method: "GET",
  headers: {
    "Authorization":`token ${accessToken}`
  }})
  .then(function (response){
    return response.json()
  })
  .then(function (gists) {
    successCallback(gists)
  })
}
