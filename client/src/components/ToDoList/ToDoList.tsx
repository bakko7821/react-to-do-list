import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import "./ToDoList.scss"
import { ToDo } from "../../models/todo-item"


export const ToDoList = (props: { todos?: ToDo[], updateToDo: Function, deleteToDo: Function}) => {
    const todos = props.todos ?? []

    const checkedList = () => {
        return todos
                    .filter((todo) => !todo.isDone)
                    .map((todo, index) => {
                    return (
                        <ToDoListItem 
                            toDoItem={todo} 
                            key={index} 
                            updateToDo={props.updateToDo} 
                            deleteToDo={props.deleteToDo} />
                    )
                })
    }

    const unCheckedList = () => {
        return todos
                    .filter((todo) => todo.isDone)
                    .map((todo, index) => {
                    return (
                        <ToDoListItem 
                            toDoItem={todo} 
                            key={index} 
                            updateToDo={props.updateToDo} 
                            deleteToDo={props.deleteToDo} />
                    )
                })
    }

    return (
        <div className="todo-container">
            <ul className="todo-list failed">
                {checkedList()}
            </ul>
            <ul className="todo-list completed">
                {unCheckedList()}
            </ul>
        </div>
    )
}