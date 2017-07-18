import React from 'react'

const TodoItem = (props) => {
  return (
    <p>
      <input type='checkbox' className='checkboxes' />
      <i className='glyphicon glyphicon-star' />
      <span>{props.item}</span>
      <i className='glyphicon glyphicon-remove' />
    </p>
  )
}

export default TodoItem
