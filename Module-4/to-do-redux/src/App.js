import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {text: ''}
  }

  handleOnChange(event){
    this.setState({text: event.target.value})
  }

  handleOnSubmit(event){
    event.preventDefault()
    this.props.store.dispatch({name: 'ADD_TODO', payload: {text: this.state.text}})
    this.setState({text: ""})
  }

  render() {
    let todos = this.props.store.getState().todos.map(function(todo){
      return <li> {todo.text}</li>
    })
    return (
      <div className="App">
      <form onSubmit={this.handleOnSubmit.bind(this)}>
        <label> Todo </label>
        <input type="text" value={this.state.text} onChange={this.handleOnChange.bind(this)}/>
        <input type="submit" />
      </form>

        <ul>{todos}</ul>
      </div>
    );
  }
}

export default App;
