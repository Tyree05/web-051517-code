import React from 'react'

class TodoItem extends React.Component {
  componentWillUnmount () {
    console.log('make an api call or something')
  }
  render () {
    return (
      <p>
        <span>{this.props.item}</span>
        <i onClick={() => { this.props.handleDelete(this.props.item) }} className='glyphicon glyphicon-remove' />
      </p>
    )
  }
}

export default TodoItem
