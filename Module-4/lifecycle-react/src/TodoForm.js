import React, { Component } from 'react'
// controlled component

class TodoForm extends Component{
  state = {
    item: ""
  }

  handleItemChange(e){
    console.log("Item text changed")
    this.setState({item: e.target.value})
  }

  sendSubmit(e){
    e.preventDefault()
    const newItem = this.state.item
    this.props.handleSubmit(newItem)
    e.target[0].value = ''
  }


  render(){
    console.log("rendering", this.state)
    return (
      <form onSubmit={this.sendSubmit.bind(this)} className='form'>
        <div className='form-container'>
          <input onChange={this.handleItemChange.bind(this)} id='todo-text' type='text' className='form-input' placeholder='Add item' />
        </div>
        <button type='submit' className='btn'>+</button>
      </form>
    )
  }
}

export default TodoForm
