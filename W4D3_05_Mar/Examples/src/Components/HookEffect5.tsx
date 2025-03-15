import { useEffect } from "react"
import { useState } from "react"

function HookEffect5()
{
    const [count , setCount] = useState(0)

    const tick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick , 1000)

        return() => {
            clearInterval(interval)
        }
    } , [count])

    return(
        <div>
             {count}
        </div>
    )
}

export default HookEffect5