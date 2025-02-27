import { useContext } from "react";
import { ProfileContext } from "./App";

const ProfileComponent = () : JSX.Element => {
    const user = useContext(ProfileContext)
    return(
        <div className="container-fluid">
            <h1> Name : {user.name} </h1>
            <h1> Age : {user.age}</h1>
            <h1> Designation : {user.designation} </h1>
        </div>
    )
}

export default ProfileComponent