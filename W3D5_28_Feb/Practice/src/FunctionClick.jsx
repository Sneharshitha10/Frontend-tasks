import React, { Component } from 'react'


//functional component
/* function FunctionClick()
{
    function clickHandler()
    {
        console.log("Button clicked");
    }
    return(
        <div>
           <button onClick = {clickHandler}> Click </button>
        </div>
    )
} */

//classcomponent
class FunctionClick extends Component
{
    clickHandler()
    {
        console.log("Button clicked")
    }
    render()
    {
        return(
            <div>
                <button onClick={this.clickHandler}> Click me </button>
            </div>
        )
    }
}    

export default FunctionClick