import { useState, useEffect } from "react";

const Counter = () => {
   const [count, setCount] = useState(0)

   /* useEffect(() => {
    console.log("Runs only on first render")
   }, []) */

    /* useEffect(() => {
    console.log("Runs only when count value changes")
   }, [count])  */

   useEffect(() => {
    console.log("Runs on every render")
   }) 

   return (
    <div className="container-fluid">
        <h1> { count }</h1>
        <button type = "button" onClick={() => setCount(count + 1)}> Increment </button>
        <button type = "button" onClick={() => setCount(count - 1)}> Decrement </button>
    </div>
   )
}

export default Counter;