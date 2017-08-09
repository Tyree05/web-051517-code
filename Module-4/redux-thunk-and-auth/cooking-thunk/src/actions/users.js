export default function fetchUsers(){
  // return { type: 'FETCHING_USERS'}
  // let users;

  // return { type: 'FETCHING_USERS', payload: users}

  return function (dispatch, getState){
    console.log(getState())
    dispatch({type: 'FETCHING_USERS'})
    fetch('https://jsonplaceholder.typicode.com/users').
    then((response) => { return response.json() }).
    then((json) => {  dispatch({type: 'ADDING_USERS', payload: {users: json}}) })
  }
}
