console.log("am I in this file?")

const accessToken = "0c5b601faaea24bb7eaf424f1bc6970bcded8dbd"

function getUser(dataReceivedFunction) {
  $.ajax({
    url: `https://api.github.com/user?access_token=${accessToken}`,
    method: "GET",
    success: dataReceivedFunction
  });
}

function getReposForAuthenticatedUser(dataReceivedFunction) {
  $.ajax({
    url: `https://api.github.com/user/repos?access_token=${accessToken}`,
    method: "GET",
    success: dataReceivedFunction
  });
}
