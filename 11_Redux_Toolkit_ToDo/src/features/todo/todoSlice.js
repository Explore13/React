import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    // While creating reducers, we always get state and action (If value comes then we access the value using action) parameters
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos.map((todo) => {
        todo.id === action.payload ? text: action.payload
      });
    },

  },
});

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions
export default todoSlice.reducer