import { UserContext , ChannelContext } from "../../App"

function ComponentF()
{
    return(
        <div>
           <UserContext.Consumer>
             {
                user => {
                    return(
                        <ChannelContext.Consumer>
                            {
                                channel => {
                                    return <div> User context value is  {user} , channel context value is {channel} </div>
                                }
                            }
                        </ChannelContext.Consumer>
                    )
                    
                }
             }
       
           </UserContext.Consumer>
        </div>
    )
}

export default ComponentF