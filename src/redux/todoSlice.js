import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    counter: 0,
  },
  reducers: {
    pushTodo: (state, action) => {
      state.counter++
      state.todos.push({id: state.counter, name: action.payload})
    },
    deleteTodo: (state, action) => {
      state.todos.splice(state.todos.findIndex((todo) => todo.id === action.payload), 1)
    }
  },
})

// Action creators are generated for each case reducer function
export const { pushTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer