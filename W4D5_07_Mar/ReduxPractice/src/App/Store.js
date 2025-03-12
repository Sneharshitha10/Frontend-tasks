const configureStore = require('@reduxjs/toolkit').configureStore
//const reduxLogger = require('redux-logger')
const cakeReducer = require('../Features/Cake/cakeSlice')
const iceCreamReducer = require('../Features/IceCream/iceCreamSlice')
const userReducer = require('../Features/user/userSlice')


//const logger = reduxLogger.createLogger

const store = configureStore({
    reducer : {
        cake : cakeReducer,
        icecream : iceCreamReducer,
        user : userReducer,
    },
    //middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), 
})

module.exports = store

