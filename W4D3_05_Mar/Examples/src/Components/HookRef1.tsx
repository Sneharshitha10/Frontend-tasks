import { useEffect  , useRef} from "react"

function HookRef1()
{
    const inputRef = useRef(null)

    useEffect(() => {
      inputRef.current.focus()
    } , [])
    return(
        <div>
            <input ref={inputRef} type = "text" />
        </div>
    )
}

export default HookRef1