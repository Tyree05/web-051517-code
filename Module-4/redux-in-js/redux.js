store.dispatch({})

function createStore(reducer){
  let state;
  function dispatch(action){
    state = reducer(action, state)
    render()
  }
  function getState(){
    return state
  }
  return {dispatch, getState}
}


function incrementer(action, state = {count: 0}){
  switch (action.name) {
    case 'increment':
        return {count: state.count + 1}
      break;
    default:
      return state
  }
}


function render(){

}
