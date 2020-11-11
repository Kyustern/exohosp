import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { remove, pull } from 'lodash'

import { Todo } from '../../types'
import { UpdateTodoAction } from '../../types'

interface SliceType {
    todoArray: Todo[]
}

const initialState = {
    todoArray: [
        {
            title: "faire une ui responsive",
            body: "et faire un truc pas trop moche",
            creationTimeStamp: 1605005547918,
            doneTimeStamp: 1605033043726
        },
        {
            title: "Un todo modifié mais pas fini",
            body: "sample text sample text sample text sample text sample text sample text sample text sample text ",
            creationTimeStamp: 1605005547918,
            modificationTimeStamp: 1605033043726
        },
        {
            title: "Un todo modifié et fini",
            body: "et faire un truc pas trop moche",
            creationTimeStamp: 1605005547918,
            modificationTimeStamp: 1605033043726,
            doneTimeStamp: 1605033213920

        },
        {
            title: "un todo fini",
            body: "sample text sample text sample text sample text sample text sample text sample text sample text ",
            creationTimeStamp: 1605005547918,
            doneTimeStamp: 1605033213920
        }
    ],
    brouillon: undefined
} as SliceType


// const getMaxIndex = (arrLength: number): number => {
//     if (arrLength === 0 || arrLength < 0) {
//         return 0
//     } else {
//         return arrLength - 1
//     }
// }

// const removeWithIndex = (arr: any, index: number) => {
//     pull(arr, arr[index])
// }

export const todoSlice = createSlice({

    initialState,

    name: "todos",

    reducers: {
        //CREATE
        createTodo: (state, { payload }: PayloadAction<Todo>) => {
            state.todoArray.push(payload)
            console.log(state);

        },
        //UPDATE
        updateTodo: (state, { payload }: PayloadAction<UpdateTodoAction>) => {
            const { id, todo } = payload
            console.log("payload", payload)

            state.todoArray[id] = todo

        },
        //DELETE
        deleteTodo: (state, { payload }: PayloadAction<number>) => {
            
            // removeWithIndex(state.todoArray, payload)

            state.todoArray = state.todoArray.filter((e, index) => {
                return e === state.todoArray[index]
            })

            // state.todoArray = [
            //     ...state.todoArray.splice(0, payload),
            //     ...state.todoArray.splice(payload, getMaxIndex(state.todoArray.length))
            // ]            

        },

    }
})

export const todosReducer = todoSlice.reducer

export const { createTodo, deleteTodo, updateTodo } = todoSlice.actions