import { Link , Outlet } from "react-router-dom"

export const Products = () => {
    return(
        <div>
            <div>
                <input type = 'search' placeholder = 'search products'  />
            </div> 
            <nav>
                <Link to = 'featured'> Featured </Link>
                <Link to = 'newproducts'> New Products </Link>
            </nav>  
            <Outlet /> 

        </div>
    )
}