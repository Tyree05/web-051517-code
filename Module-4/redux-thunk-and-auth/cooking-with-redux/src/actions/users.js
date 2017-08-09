export default function fetchUsers(){
  return function(dispatch){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json() )
      .then((json) => dispatch({type: 'LOADING_USERS', payload: json}))

  }
}
