import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NameList from './NameList'
//import UserGreeting from './UserGreeting'
//import ParentComponent from './ParentComponent'
//import EventBind from './EventBind'
//import Message from './Message'
//import Counter from './Counter'
//import Greet from './Greet'
//import FunctionClick from './FunctionClick'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      {/* <Message /> */}
      {/* <Counter /> */}
      { /* <Greet name = "Sneha" heroName = "Elsa"/> */ }
      { /* <FunctionClick /> */ }
      { /* <EventBind /> */ }
      { /* <ParentComponent /> */ }
      { /* <UserGreeting /> */ }
       <NameList /> 
    </>
  )
}

export default App
