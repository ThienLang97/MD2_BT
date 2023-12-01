import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:"product",
    initialState:{
        products:[]
    },
    reducers:{}
   
},
)
// tạo reducer
const productReducer = productSlice.reducer;
const store = configureStore({
    reducer:{
        abc:productReducer
    }
})
export default store