import {useParams} from 'react-router-dom'

export const UserDetails = () => {
    const params = useParams()
    const userId = params.userId
    return(
        <div>
            Details about user {userId}
        </div>
    )
}