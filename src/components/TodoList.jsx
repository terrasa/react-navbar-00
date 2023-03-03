import { TodoItem } from './TodoItem'

export function TodoList ({ todos, toggleTodo }) {
  return (
    <>
      <ul>
        {todos.map((item) => (
          <TodoItem key={item.id} item={item} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  )
}
