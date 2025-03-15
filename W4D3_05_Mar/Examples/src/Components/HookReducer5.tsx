import axios from "axios"
import { useEffect , useReducer } from "react"

const initialState = {
    loading : true,
    post : [],
    error : ''
}

const reducer = (state , action) => {
      switch(action.type){
        case 'FETCH_SUCCESSFUL' : return {
            loading : false,
            post : action.payload,
            error : ''
        }
        case 'FETCH_FAILURE' : return {
            loading : false,
            post : [],
            error : 'Something went wrong'
        }
        default : return state
      }
}

function HookReducer5()
{
    const [state , dispatch] = useReducer(reducer , initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
             .then((response) => {
                dispatch({type : 'FETCH_SUCCESSFUL' , payload  : response.data})
             })
             .catch(error => {
                dispatch({type : 'FETCH_FAILURE'})
             })
    } , [])

    return(
        <div>
            
            {state.loading ? 'Loading' : state.post.title}
              {state.error ? state.error : null}

        </div>
    )
}

export default HookReducer5