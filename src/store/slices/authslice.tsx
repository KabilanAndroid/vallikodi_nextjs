import {createSlice, PayloadAction} from '@reduxjs/toolkit'
interface AuthSlice{
    user:string|null,
    password:string|null,
    phone:number|null,
    isLoggedIn:boolean
}

const initialState : AuthSlice ={
    user: null,
    password: null,
    phone: null,
    isLoggedIn: false
}

const authslice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        loginSuccess:(state,action:PayloadAction<{user:string,password:string,phone:number}>)=>{
            state.user = action.payload.user;
            state.password = action.payload.password;
            state.phone = action.payload.phone;
            state.isLoggedIn = false;
        }
    }
})

export const {loginSuccess} = authslice.actions;
export default authslice.reducer;