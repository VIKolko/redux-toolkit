import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {increase,decrease} from '../redux-store/counterSlice'

const Counter = () =>{
    const dispatch = useDispatch();

    const count=useSelector(state=>state.counterSlice.counter);
    return(
        <div style={{background:'lightblue', marginTop:'50px'}}>
            <h3>{count}</h3>
            <button onClick={()=>dispatch(increase())}>inc</button>
            <button onClick={()=>dispatch(decrease())}>dec</button>

        </div>
    )
}

export default Counter;