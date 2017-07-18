import React, { Component } from 'react'
import './App.css'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

class App extends Component {
  state = {
    items: ["Dishes", "Tacos", "Laundry"]
  }

  handleSubmit(event){
    event.preventDefault()
    console.log("submit item", this)
    const newItem = event.target[0].value
    this.setState({items: [...this.state.items, newItem]})
  }

  render () {
    console.log("rendering items")
    return (
      <div>
        <div className='header'>
          <marquee>
            <h1>Tony's TO DO List</h1>
          </marquee>
        </div>
        <div className='main'>
          <div className='list'>
            <TodoList items={this.state.items}/>
          </div>
          <TodoForm  handleSubmit={this.handleSubmit.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default App
