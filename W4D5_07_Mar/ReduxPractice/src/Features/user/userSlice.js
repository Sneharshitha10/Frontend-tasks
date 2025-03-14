const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')


//initialstate
const initialState =  {
    loading : false,
    users : [],
    error : ''
}

//generates pending , fulfilled and rejected action types
const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data.map(user => user.id))
})

const userSlice = createSlice({
    name : 'user',
    initialState,
    extraReducers : builder => {
        builder.addCase(fetchUsers.pending , state => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled , state => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected , state => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers