import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

class App extends Component {
  state = {
    items: []
  }

  //initial mounting
  componentDidMount(){
    const apiURL = 'http://api.icndb.com/jokes/random'
    fetch(apiURL)
      .then( res => res.json() )
      .then( jsonData =>
        {
        console.log(jsonData);
        const items = [jsonData.value.joke]
        this.setState({ items })
      })
  }
  handleSubmit(newItem){
    this.setState({items: [...this.state.items, newItem]})
  }

  handleDelete(clickedItem){
    console.log("deleting")
    const items = this.state.items.filter(item => item !== clickedItem)
    this.setState({items})
  }
  render () {
    console.log("rendering items")
    return (
      <div>
        <div className='header'>
          <marquee>
            <h1>Chuck Norris Quotes</h1>
          </marquee>
        </div>
        <div className='main'>
          <div className='list'>
            <TodoList deleteItem={this.handleDelete.bind(this)} items={this.state.items}/>
          </div>
          <TodoForm  handleSubmit={this.handleSubmit.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default App
