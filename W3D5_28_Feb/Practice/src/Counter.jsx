import React , {Component} from 'react'

class Counter extends Component
{
    constructor(props)
    {
        super(props)
        this.state = { count : 0}
    }

    increment()
    {
        //this.state.count = this.state.count + 1    //do not modify directly
        /* this.setState(
            {
            count : this.state.count + 1             //first parameter 
        },
        () => {                                                 
            console.log('callback value' , this.state.count)             //second parameter
        }) */

        this.setState(prevState => ({
            count : prevState.count + 1
        }))
        console.log(this.state.count)
    }

    incrementFive()
    {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render()
    {
        return(
            <div>
                <div> Count - { this.state.count} </div>
                <button onClick={() => this.incrementFive()}> Increment </button>
            </div>
        )
    }
}

export default Counter