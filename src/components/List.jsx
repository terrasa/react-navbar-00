import React, { useState, useRef, useEffect } from 'react'
import { TodoList } from './TodoList'

const KEY = 'todoApp.todos'

export default function List () {
  const [todos, setTodos] = useState([])
  const [itemOrder, setItemOrder] = useState(1)

  const inputTodoRef = (useRef())

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find((todo) => todo.id === id)
    todo.completed = !todo.completed
    setTodos(newTodos)
  }

  const handleTodoAdd = () => {
    const task = inputTodoRef.current.value
    const id = Date.now()
    if (task === '') return
    setItemOrder(itemOrder + 1)
    setTodos(
      [...todos, { id, itemOrder, task, completed: false }]
    )
    inputTodoRef.current.value = null
  }

  const handleTodoRemove = () => {
    const newTodos = [...todos]
    const todo = newTodos.filter((item) => !item.completed)
    setTodos(todo)
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY))
    storedTodos && setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos))
    console.log(localStorage, localStorage.KEY)
  }, [todos])

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={inputTodoRef} type='text' placeholder='Nueva tarea' />
      <button onClick={handleTodoAdd}>Añadir</button>
      <button onClick={handleTodoRemove}>Borrar</button>
      <div>Quedan {todos.filter((item) => !item.completed).length} tareas por finalizar</div>
      {/* <div>{`Quedan ${todos.filter((item) => !item.completed).length} tareas por finalizar`}</div> */}
    </>
  )
}
