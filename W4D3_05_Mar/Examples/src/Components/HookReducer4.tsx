import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

function HookReducer4()
{

    const [loading , setLoading] = useState(true)
    const [post , setPost] = useState({})
    const [error , setError] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
             .then((response) => {
                setLoading(false)
                setPost(response.data)
                setError('')
             })
             .catch(error => {
                setLoading(false)
                setPost({})
                setError('Something went wrong')
             })
    } , [])
    
    return(
        <div>
              {loading ? 'Loading' : post.title}
              {error ? error : null}
        </div>
    )
}

export default HookReducer4