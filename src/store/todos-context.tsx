import React, { useState } from "react"
import Todo from "../models/todo"

type TodosContextObj = {
  items: Todo[]
  addTodo: (text: string) => void
  removeTodo: (id: string) => void
}
const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
})

export const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (text: string) => {
    setTodos((previous) => [...previous, new Todo(text)])
  }

  const removeTodoHandler = (id: string) => {
    setTodos((previous) => previous.filter((todo) => todo.id !== id))
  }

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  }

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  )
}

export default TodosContext
