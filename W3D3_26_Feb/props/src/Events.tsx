import React from 'react';
//function component
//1 way
/* function Greet()
{
    const handleBtnPress = (event : React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
          alert("Welcome to react !!")
    }

    return (
        <div className="container-fluid">
            <h2> Press the button </h2>
            <button onClick = {handleBtnPress}> Greet Me!</button>
        </div>
    )
}  */

//2 way
/* function Greet()
{

    return (
        <div className="container-fluid">
            <h2> Press the button </h2>
            <button onClick = {() => alert("Welcom to react !!")}> Greet Me!</button>
        </div>
    )
}  */


//class component

class Greet extends React.Component
{
    handleBtnPress = (event : React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
          alert("Welcome to react !!")
    }
    
    render() : React.ReactNode
    {
       return (
           <div className="container-fluid">
               <h2> Press the button </h2>
               <button onClick = {this.handleBtnPress}> Greet Me!</button>
            </div>
        )
    }    
    
}

export default Greet