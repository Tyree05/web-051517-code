import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createStore from './lib/createStore'

function reducer(action, state = {todos: []}){
  switch (action.name) {
    case 'ADD_TODO':
      return {todos: state.todos.concat({text: action.payload.text})}
    default:
      return state
  }
}

const store = createStore(reducer)
store.dispatch({name: 'INIT'})

export function render(){
  ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}
