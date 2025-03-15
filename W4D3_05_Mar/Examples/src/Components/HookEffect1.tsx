import { useEffect } from "react"
import { useState } from "react"

function HookEffect1()
{
    const [count , setCount] = useState(0)

    useEffect(() => {
        document.title = `you clicked ${count} times`
    })
    return(
        <div>
            <button onClick={() => setCount(count + 1)}> Click {count} times</button>
        </div>
    )
}

export default HookEffect1