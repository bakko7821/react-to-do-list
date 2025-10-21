import { useEffect, useState } from "react"
import { ToDo, ToDoProps } from "../models/todo-item"
import { useNavigate, useParams } from "react-router-dom"



export const ItemDescription = (props: ToDoProps) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [todo, setTodo] = useState<ToDo>()

    useEffect (() => {
        const searchTodo = props.todos.find((todo) => String(todo.id) === id)

        if (!searchTodo) navigate("/404")
        
        setTodo(searchTodo)
    }, [props.todos, id, navigate])

    return (
        <div className="container">
            <h1>{todo?.text}</h1>
        </div>
    )
}