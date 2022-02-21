import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux-store/todoSlice";

const Todo = () => {
    const [state,setState] = useState('');
    const dispatch = useDispatch();

    const todos = useSelector(state=>state.todoSlice.todos)
    console.log(todos)
    return (
        <div style={{ background: 'azure' }}>
            <label>
                <input onChange={(e)=>setState(e.target.value)}></input>
            </label>
            <button onClick={()=>dispatch(addTodo(state))}> add Todo</button>

            <ul>
                {todos.map(el=><li key={el.id}>{el.text}</li>)}
            </ul>
        </div>
    )
}

export default Todo;