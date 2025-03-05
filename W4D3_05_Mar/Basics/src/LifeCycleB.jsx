import React from 'react'
import { Component } from 'react';

class LifeCycleB extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            message : 'sneha'
        }
        console.log("lifecycleB constructor")
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log("lifecycleB getDerivedStateFromProps")
        return null
    }

    componentDidMount()
    {
        console.log("lifecycleB componentDidMount")
    }

    shouldComponentUpdate()
    {
        console.log("lifecycleB shouldcomponentupdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log("lifecycleB getSnapshotbeforeupdate")
        return null
    }

    componentDidUpdate()
    {
        console.log("lifecycleB componentDidUpdate")
    }

    render()
    {
        console.log("lifecycleB render method")
        return(
            <div> Life Cycle B</div>
        )
    }
}

export default LifeCycleB