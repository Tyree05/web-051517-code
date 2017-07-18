import React from 'react'

const TodoForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className='form'>
      <div className='form-container'>
        <input id='todo-text' type='text' className='form-input' placeholder='Add item' />
      </div>
      <button type='submit' className='btn'>+</button>
    </form>
  )
}

export default TodoForm
