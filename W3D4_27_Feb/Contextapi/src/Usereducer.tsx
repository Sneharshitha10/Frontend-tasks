import { useReducer } from "react";

interface ICounter
{
    count : number
}

const initialState : ICounter = {count : 0}

function reducer(state : ICounter,action : {type:any})
{
    switch(action.type)
    {
        case 'increment':
            return {count : state.count + 1}
        case 'decrement':
            return {count : state.count - 1}
        default:
            return {count : state.count}
    }
}

const Counter = () => {
    const[state,dispatch] = useReducer(reducer,initialState)

    return(
        <div className="container-fluid">
            <h1> Count : {state.count} </h1>
            <button onClick = {() => dispatch({type : 'increment'})}> Increment </button>
            <button onClick = {() => dispatch({type : 'decrement'})}> Decrement </button>
        </div>
    )
}

export default Counter;