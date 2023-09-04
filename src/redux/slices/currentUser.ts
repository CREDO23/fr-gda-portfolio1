import {PayloadAction, createSlice} from '@reduxjs/toolkit'

const initialState : {user : IUser |  null , accessToken : string | null} = {
    user : null,
    accessToken : null,
}


const currentUserSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        setUser : (state , action : PayloadAction<{user : IUser, accessToken : string}>) => {
            state.user = action.payload.user
            state.accessToken = action.payload.accessToken
        },
        removeUser : (state) => {
            state.user = null
            state.accessToken = null
            localStorage.removeItem('user')
            localStorage.removeItem('accessToken')
        }
    }
})

export default currentUserSlice.reducer

export const {setUser, removeUser} = currentUserSlice.actions