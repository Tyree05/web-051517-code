function handleResponse(data) {
  let newUser = new User(data)
  $("#repos").html(newUser.greeting())
}

function handleRepoResponse(data) {
  console.dir(data)
}

getUser(handleResponse)

getReposForAuthenticatedUser(handleRepoResponse)
