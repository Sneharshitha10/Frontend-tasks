import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {ordered , restocked } from './iceCreamSlice'

export const IcecreamView = () => {
    const [value , setValue] = React.useState(1)
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
    const dispatch = useDispatch()
    return(
        <div>
            <h2> Number of icecreams - {numOfIcecreams} </h2>
            <button onClick = {() => dispatch(ordered())}> Order icecream </button>
            <input type = 'number' value = {value} onChange = {e => setValue(parseInt(e.target.value))} />
            <button onClick = {() => dispatch(restocked(value))}> Restock icecream </button>
        </div>
    )
}

