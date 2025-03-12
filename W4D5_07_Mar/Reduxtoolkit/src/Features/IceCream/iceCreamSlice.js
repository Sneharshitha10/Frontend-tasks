
import {createSlice} from '@reduxjs/toolkit'
import {ordered as cakeOrdered} from '../Cake/cakeSlice'

const initialState = {
    numOfIcecreams : 20
}

const iceCreamSlice = createSlice({
    name : 'icecream',
    initialState,
    reducers : {
        ordered : (state , action) => {
            state.numOfIcecreams--
        },
        restocked : (state, action) => {
            state.numOfIcecreams += action.payload
        },
    },
     /* extraReducers : {
        ['cake/ordered'] : (state) => {
            state.numOfIcecreams--
        }
    } */

    extraReducers : (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIcecreams--
        })
    },

})

export default iceCreamSlice.reducer
export const {ordered , restocked } = iceCreamSlice.actions


