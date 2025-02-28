import {ReactNode, useState} from 'react'

interface IProp
{
    increment : number
    base : number
}

const useIncrement = (prop : IProp) => {

    const [count, setCount] = useState(prop.base)

    const setIncreasedValue : any = () => {
        setCount(count + prop.increment)
    }

    return [count as number, setIncreasedValue]
}

export default useIncrement;

