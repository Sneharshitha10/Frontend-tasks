import { useNavigate } from "react-router-dom"

export const OrderSummary = () => {

    const navigate = useNavigate()

    return (
        <div>
           <div> Order confirmed ! </div>
           <button onClick = {() => navigate(-1)}> Go back </button>
        </div>
    )
}