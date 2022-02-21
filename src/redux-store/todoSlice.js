import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice(
    {
        name:'todo',
        initialState:{
            todos:[{
                id:'asd',
                text:'hey'
            }],
        },
        reducers:{
            addTodo(state,action){
                console.log(state.todos)
                console.log(action)
                state.todos.push({
                    id:new Date().toString().trim(),
                    text:action.payload                })
            },
            removeTodo(){},
        }
}
)

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;