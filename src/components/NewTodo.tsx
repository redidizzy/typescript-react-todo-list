import { useContext } from "react"
import { useRef } from "react"
import TodosContext from "../store/todos-context"

import classes from "./NewTodo.module.css"

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null)
  const { addTodo } = useContext(TodosContext)
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredText = todoTextInputRef.current!.value

    if (enteredText.trim().length === 0) {
      return
    }

    addTodo(enteredText)

    todoTextInputRef.current!.value = ""
  }
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add todo</button>
    </form>
  )
}

export default NewTodo
