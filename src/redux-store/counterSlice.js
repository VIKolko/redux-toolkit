import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice(
    {
        name:'counter',
        initialState:{
            counter:0
        },
        reducers:{
            increase(state){
                state.counter+=1
            },
            decrease(state){
                state.counter-=1
            }
        }
    }
)

export const{increase,decrease}=counterSlice.actions;
export default counterSlice.reducer;