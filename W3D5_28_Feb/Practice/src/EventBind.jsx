import React , {Component} from 'react'

class EventBind extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
             message : "hello",
        }

        //this.clickHandler = this.clickHandler.bind(this)
    }

   /*  clickHandler()
    {
        this.setState({
            message : "How are you"
        })  
        console.log(this);        
    } */

    //arrow function as class property
    clickHandler = () => {
        this.setState({
            message : "How are you"
        })
    }

    render()
    {
        return(
            <div>
               <div>{this.state.message}</div> 
             { /* <button onClick = {this.clickHandler.bind(this)}> Click me </button> */ }
             { /*  <button onClick = {() => this.clickHandler()}> Click me </button> */ }
              <button onClick = {this.clickHandler}> Click me </button>
            </div>
        )
    }
}

export default EventBind

