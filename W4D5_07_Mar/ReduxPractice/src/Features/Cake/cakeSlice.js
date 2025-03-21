const createSlice = require('@reduxjs/toolkit').createSlice

//initialState
const initialState = {
    numOfCakes : 10
}



//accepts obj as arg  ---- 3 properties
const cakeSlice = createSlice({
    name : 'cake',
    initialState : initialState,
    reducers : {
        ordered : (state , action) => {
            state.numOfCakes--
        },
        restocked : (state, action) => {
            state.numOfCakes += action.payload
        },
    }

})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions

