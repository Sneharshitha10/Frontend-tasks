import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Message from './Message'
//import Counter from './Counter'
import Greet from './Greet'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      {/* <Message /> */}
      {/* <Counter /> */}
      <Greet name = "Sneha" heroName = "Elsa"/>
    </>
  )
}

export default App
