import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

//initialstate
const initialState =  {
    loading : false,
    users : [],
    error : ''
}


//aync logic using the create async thunk function
//generates pending , fulfilled and rejected action types
/* export const fetchUsers = createAsyncThunk('user/fetchUsers', async() => {
    return axios
    .get('https://jsonplaceholder.typicode.com/users') */
    /* .then(response => response.data.map(user => user.id)) */
    /* .then((response) => response.data)
})  */

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        return response.data
    } catch (error) {
        throw error 
    }
})


const userSlice = createSlice({
    name : 'user',
    initialState,
    extraReducers : builder => {
        builder.addCase(fetchUsers.pending , (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled , (state , action)  => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected , (state , action)  => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer
