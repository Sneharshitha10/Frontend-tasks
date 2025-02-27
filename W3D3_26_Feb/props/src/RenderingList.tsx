import {useState} from "react";

interface User
{
    id : number,
    name : string
}

const userDataFromAPI : User[] = [
    {id : 1, name : "Sneha"},
    {id : 2, name : "Karthik"},
    {id : 3, name : "Kanna"}
]

function Page()
{
    const [friends, setFriends] = useState(userDataFromAPI)

    return(
        <div className="container-fluid">
            <ul>
                {
                    friends.map((friend:User) => {
                        return <li key = {friend.id}>{friend.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Page