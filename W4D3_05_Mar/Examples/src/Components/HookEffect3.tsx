import { useEffect } from "react"
import { useState } from "react"

function HookEffect3()
{
    const [x , setX] = useState(0)
    const [y , setY] = useState(0)

    const logMousePosition = e => {
        console.log("mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("useEffect called")
        window.addEventListener('mousemove' , logMousePosition)

        return() => {
            console.log("component unmounting code")
            window.removeEventListener('mousemove' , logMousePosition)
        }
    } , [])
    return(
        <div>
              Hooks X - {x}   Y - {y}
        </div>
    )
}

export default HookEffect3