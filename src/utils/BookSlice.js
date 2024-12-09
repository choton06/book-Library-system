
import { createSlice } from "@reduxjs/toolkit";

const BookSlice = createSlice(
    {
        name:"book",
        initialState:{
            items: []
        },
        reducers:{
            AddItem: (state,action) =>{
    
                state.items.push(action.payload);

            }
        }
    }
);


export const {AddItem} = BookSlice.actions;

export default BookSlice.reducer;