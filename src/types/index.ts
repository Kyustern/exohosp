export interface Todo {
    // id: number | undefined
    title: string
    body: string
    creationTimeStamp: number
    doneTimeStamp: number | undefined
    modificationTimeStamp: number | undefined
}

export type UpdateTodoAction = {
    id: number
    todo: Todo
}