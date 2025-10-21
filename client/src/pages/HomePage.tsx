import { ListItem } from "../components/ListItem/ListItem"
import { ToDo, ToDoProps } from "../models/todo-item"

export const HomePage = (props: ToDoProps) => {
    return (
        <div className="container">
            {
                props.todos.map((todo: ToDo, index: number) => {
                    return <ListItem todo={todo} key={index}/>
                })
            }
        </div>
    )
}