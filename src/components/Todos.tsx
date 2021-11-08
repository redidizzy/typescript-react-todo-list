import React from "react"
import { useContext } from "react"
import TodosContext from "../store/todos-context"
import Todo from "./Todo"

import classes from "./Todos.module.css"

const Todos: React.FC = () => {
  const { items, removeTodo } = useContext(TodosContext)
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <Todo
          key={item.id}
          text={item.text}
          onRemoveTodo={removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  )
}

export default Todos
