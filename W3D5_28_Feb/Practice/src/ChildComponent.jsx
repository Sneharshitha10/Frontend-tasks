import React from 'react'

function ChildComponent(props)
{
    return(
        <div>
            { /* <button onClick = {props.greetHandler}> Greet Parent </button>    normal  */ }
            <button onClick = {() => props.greetHandler('child')}> Greet Parent </button>   { /* passing parameter */}
        </div>
    )
}

export default ChildComponent