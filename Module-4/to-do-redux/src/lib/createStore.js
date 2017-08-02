import { render } from '../index.js'
function createStore(reducer){
  let state;
  function dispatch(action){
    console.log('action is', action)

    state = reducer(action, state)
    console.log('state is now', state)
    render()
  }
  function getState(){
    return state
  }
  return {dispatch, getState}
}

export default createStore;
