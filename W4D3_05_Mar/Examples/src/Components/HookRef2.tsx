import { useEffect } from "react"
import { useState  , useRef} from "react"


function HookRef2()
{

    const [timer , setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval( () => {
        setTimer(prevTimer => prevTimer + 1)
    } , 1000)

    return() => {
        clearInterval(intervalRef.current)
    };

    } , [] )

    return(
        <div>
             Hook timer  - {timer}
             <button onClick = {() => clearInterval(intervalRef.current)}> Clear Hook Timer</button>
        </div>
    )
}

export default HookRef2