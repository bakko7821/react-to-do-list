export interface ToDo {
    id: number,
    text: string
    isDone: boolean
}

export interface ToDoProps {
    todos: ToDo[]
}