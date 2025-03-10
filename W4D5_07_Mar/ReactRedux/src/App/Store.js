import { configureStore } from '@reduxjs/toolkit'
//const reduxLogger = require('redux-logger')
import cakeReducer from '../Features/Cake/cakeSlice'
import iceCreamReducer from '../Features/IceCream/iceCreamSlice'


//const logger = reduxLogger.createLogger

const store = configureStore({
    reducer : {
        cake : cakeReducer,
        icecream : iceCreamReducer,
    },
    //middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), 
})

export default store

