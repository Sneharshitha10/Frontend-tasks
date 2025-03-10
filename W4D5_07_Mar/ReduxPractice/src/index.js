const store = require('./App/Store')
//to dispatch the cake actions we need to import from cakeslice.js
const cakeActions = require('./Features/Cake/cakeSlice').cakeActions
const iceCreamActions = require('./Features/IceCream/iceCreamSlice').iceCreamActions

//log the initial state
console.log('initial state',store.getState())

//subscribe to updates in the store
const unsubscribe = store.subscribe(() => {
    console.log('updated state',store.getState()) 
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.restocked(2))

unsubscribe()