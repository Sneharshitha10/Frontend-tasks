import React from 'react'
import { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            message : 'sneha'
        }
        console.log("lifecycleA constructor")
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log("lifecycleA getDerivedStateFromProps")
        return null
    }

    componentDidMount()
    {
        console.log("lifecycleA componentDidMount")
    }

    shouldComponentUpdate()
    {
        console.log("lifecycleA shouldcomponentupdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log("lifecycleA getSnapshotbeforeupdate")
        return null
    }

    componentDidUpdate()
    {
        console.log("lifecycleA componentDidUpdate")
    }

    changeState = ()  =>
    {
        this.setState({
            message : 'Sneharshitha'
        })
    }    

    render()
    {
        console.log("lifecycleA render method")
        return(
            <div> 
                <div> Life Cycle A </div>
                <button onClick={this.changeState}> Change State </button>
                <LifeCycleB />
            </div>    
        )
    }
}

export default LifeCycleA