import { useState  , useMemo} from "react"

function HookMemo()
{
    const [counterOne , setCounterOne] = useState(0)
    const [counterTwo , setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }


    /* const isEven = () => {
        let i = 0
        while( i < 2000000000) i++ 
        return counterOne % 2 === 0
    } */

    const isEven = useMemo(() => {
        let i = 0
        while( i < 20000) i++ 
        return counterOne % 2 === 0
    } , [counterOne])

    return(
        <div>
            <div> 
                <button onClick={incrementOne}> Count One - {counterOne} </button>
                <span> {isEven ? 'even' : 'odd'} </span>
            </div>
            <div>
                <button onClick={incrementTwo}> Count Two - {counterTwo} </button>
            </div>
        </div>
    )
}

export default HookMemo