import {createSlice,PayloadAction} from '@reduxjs/toolkit'

interface AuthSlice{
    user:string | null,
    password:string| null,
    isLoggedIn:boolean
}

const initialState : AuthSlice={
    user: null,
    password: null,
    isLoggedIn: false
}

const authslice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:
            (state,action:PayloadAction<{user:string,password:string}>)=>{
                state.user = action.payload.user,
                state.password = action.payload.password,
                state.isLoggedIn = false
            }
        
    }
})

export const {login} = authslice.actions;
export const authReducer =  authslice.reducer;