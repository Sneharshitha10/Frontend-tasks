import React from 'react';
//import PropTypes from 'prop-types'

interface User
{
    firstName : string,
    lastName : string
}

//Functional component using props
/* const Homepage = (userData : User) => {
    const {firstName, lastName} = userData

    return (
        <div className='container-fluid'>
            <h1> Welcome {firstName} {lastName} </h1>
        </div>
    )
} */

//Class component using props
class Homepage extends React.Component<User>
{
    render() : React.ReactNode
    {
        const {firstName, lastName} = this.props

        return(
            <div className='container-fluid'>
                <h1> Welcome {firstName} {lastName} </h1>
            </div>
        )
    }
} 

//prop validation    
/* class Homepage extends React.Component<User>
{
    static propTypes = {
        firstName : PropTypes.string,
        lastName : PropTypes.string
    }
    render() : React.ReactNode
    {
        const {firstName, lastName} = this.props
    
        return(
            <div className='container-fluid'>
                <h1> Welcome {firstName} {lastName} </h1>
            </div>
        )
    }
}     */



export default Homepage;