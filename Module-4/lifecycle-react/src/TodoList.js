import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({items, deleteItem}) => {
  return (
    <div>
      {items.map((item, index) => <TodoItem handleDelete={deleteItem} key={index} item={item} />)}
    </div>
  )
}

export default TodoList
