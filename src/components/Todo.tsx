import classes from "./Todo.module.css"

const Todo: React.FC<{ text: string; onRemoveTodo: () => void }> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  )
}

export default Todo
