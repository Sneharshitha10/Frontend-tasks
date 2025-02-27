import React from 'react'; 
import {useState} from 'react';

//state using class component 
/* interface ICounter
{
    counter : number
}

class Counter extends React.Component
{
    state : ICounter = {
        counter : 0
    }

    incrementCounter = () =>{
        this.setState((prevState : ICounter) => ({
            counter : prevState.counter + 1
        }))
    }

    decrementCounter = () =>{
        this.setState((prevState : ICounter) => ({
            counter : prevState.counter - 1
        }))
    }

    render() : React.ReactNode
    {
        return (
            <div className='container-fluid'>
                <h1> {this.state.counter} </h1>
                <button type="button" onClick={this.incrementCounter}> Increment </button>
                <button type="button" onClick={this.decrementCounter}> Decrement </button>
            </div>
        )
    }
}  */



//state using functional component
const Counter = () => {
    const [counter, setCounter] = useState(0)
    return(
        <div className='container-fluid'>
            <h1> {counter} </h1>
            <button type="button" onClick={() => setCounter(prev => prev+1)}> Increment </button>
            <button type="button" onClick={() => setCounter(prev => prev-1)}> Decrement </button>
        </div>
    )
}

export default Counter;



