import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({items}) => {
  return (
    <div>
      {items.map(item => <TodoItem item={item} />)}
    </div>
  )
}

export default TodoList
