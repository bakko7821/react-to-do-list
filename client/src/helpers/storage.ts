import { ToDoState } from "../feature/ToDoList"
import { RootState } from "../store"

export const saveToLocalStorage = (state: RootState) => {
    try {
        const appState = JSON.stringify(state)
        localStorage.setItem('appState', appState)
    } catch (error: unknown) {
        console.warn(error)
    }
}

export const loadFromLocalStorage = (): { todoList: ToDoState } | undefined => {
  try {
    const appState = localStorage.getItem('appState')
    if (!appState) return undefined
    return JSON.parse(appState)
  } catch (error: unknown) {
    console.warn(error)
    return undefined
  }
}
