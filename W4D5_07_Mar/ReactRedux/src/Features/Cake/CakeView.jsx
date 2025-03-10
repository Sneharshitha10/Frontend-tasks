import React from 'react'
import {useSelector , useDispatch} from 'react-redux'

export const CakeView = () => {
    const numOfCakes = useSelector((state) => state.Cake.numOfCakes)
    
    return(
        <div>
            <h2> Number of cakes - {numOfCakes} </h2>
            <button> Order cake </button>
            <button> Restock cake </button>
        </div>
    )
}