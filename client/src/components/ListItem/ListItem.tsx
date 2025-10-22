import { ToDo } from "../../models/todo-item"
import classes from "./ListItem.module.scss"

export const ListItem = (props: {todo: ToDo}) => {
    return (
        <a 
            className={`${classes.link} ${props.todo.isDone ? classes.done : classes.notDone}`} 
            target="_blank"
            rel="noreferrer"
            href={`/list/${props.todo.id}`}
        >{props.todo.text}</a>
    )
}