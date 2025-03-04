import React , {Component} from 'react'

class UserGreeting extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            //isLoggedIn : false
            isLoggedIn : true
        }
    }
    render()
    {
        //using if-else 
        /* if(this.state.isLoggedIn)
        {
            return (
                <div> Welcome Sneha </div>
            )
        }
        else
        {
            return(
                <div> Welcom Guest </div>
            )
        } */

        //element variables
        /* let message
        if(this.state.isLoggedIn)
        {    
            message = <div> Welcome Sneha </div>
        }    
        else 
        {
            message = <div> Welcome Guest </div> 
        }      
        return <div> {message} </div>   */
        
        //ternery operator can be used inside jsx
        /* return(
            this.state.isLoggedIn ? 
            <div>Welcome Sneha</div> : <div> Welcome guest</div>
        ) */

        //short-circuit returns value or nothing
        return this.state.isLoggedIn && <div> Welcome Sneha </div>


        /* return(
            <div>
                <div> Welcome Sneha </div>
                <div> Welcome guest </div>
            </div>
        ) */
    }
}

export default UserGreeting