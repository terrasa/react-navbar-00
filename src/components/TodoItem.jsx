import React from 'react'

export function TodoItem ({ item, toggleTodo }) {
  const { id, itemOrder, task, completed } = item
  const textCompleted = completed ? 'Finalizada' : 'Pendiente'
  const handleChange = () => {
    toggleTodo(id)
  }
  return (
    <>
      <li>
        {`${id} - ${itemOrder} - ${task}`}
        <input type='checkbox' checked={completed} onChange={handleChange} />
        {`${textCompleted}`}
      </li>
    </>
  )
}
