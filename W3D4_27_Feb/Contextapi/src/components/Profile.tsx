import React from 'react'
import UserContext from '../Context/UserContext'
import { useContext } from 'react'

function Profile()
{
    const {user} = useContext(UserContext)
    if(!user) return <h1> Not Logged in</h1>
    return(
        <div> Profile : {user} 
          <h1> More component</h1>
        </div>


    )
}

export default Profile