import { Outlet , useSearchParams} from "react-router-dom"

export const Users = () => {
    const [searchParams , setSearchParams] = useSearchParams()

    const showActiveUsers = searchParams.get('filter') === 'active'

    return(
        <div>
            <h2> user 1 </h2>
            <h2> user 2 </h2>
            <h2> user 3 </h2>
            <Outlet />
            <div>
                <button onClick = {() => setSearchParams({filter : 'active'})}> Active users</button>
                <button onClick = {() => setSearchParams({})}> Reset filter</button>
            </div>
            {
                showActiveUsers ? <h2> Showing active users </h2> : <h2> Showing all users</h2>
            }
        </div>
    )
}