import { configureStore } from '@reduxjs/toolkit'
//const reduxLogger = require('redux-logger')
import cakeReducer from '../Features/Cake/cakeSlice'
import iceCreamReducer from '../Features/IceCream/iceCreamSlice'
import userReducer from '../Features/users/userSlice'


//const logger = reduxLogger.createLogger

const store = configureStore({
    reducer : {
        cake : cakeReducer,
        icecream : iceCreamReducer,
        user : userReducer,
    },
    //middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), 
})

export default store

