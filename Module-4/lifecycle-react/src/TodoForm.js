import React, { Component } from 'react'
// controlled component

class TodoForm extends Component{
  state = {
    item: "",
    done: false
  }

handleItemChange(e){
  const item = e.target.value
  // console.log("changing text", item)
  this.setState({ item })
}
handleCheckBox(e){
  // console.log("check box changed", this.state.done)
  this.state.done ? this.setState({ done: false }) : this.setState({ done: true})
}

sendSubmit(e){
  e.preventDefault()
  const newItem = this.state.item
  this.props.handleSubmit(newItem)
}

  render(){
    // console.log("rendering", this.state)
    return (
      <form onSubmit={this.sendSubmit.bind(this)} className='form'>
        <div className='form-container'>
          <input onChange={this.handleItemChange.bind(this)} id='todo-text' type='text' className='form-input' placeholder='Add item' />
          <input onChange={this.handleCheckBox.bind(this)} id='todo-done' type='checkbox'  />
        </div>
        <button type='submit' className='btn'>+</button>
      </form>
    )
  }
}

export default TodoForm
