import { useState } from "react"
import HookEffect3 from "./HookEffect3"

function HookEffect4()
{
    const [display , setDisplay] = useState(true)
    return(
        <div>
            <button onClick = { () => setDisplay(!display)}> Toogle Display </button>
            {display && <HookEffect3 /> }
        </div>
    )
}

export default HookEffect4