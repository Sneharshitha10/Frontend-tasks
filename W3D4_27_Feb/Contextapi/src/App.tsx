//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import React,{FC,createContext} from 'react';
//import Counter from './Usereducer'; 
  import useIncrement from './Useincrement';

//import Login from './components/Login'
//import Profile from './components/Profile'
//import UserContextProvider from './Context/UserContextProvider'


/* function App() {
  //const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
} */


/* const App : FC = () => {
  return(
    <div className="App">
      <Counter />
    </div>
  )
} */


const App : FC = () => {
  const [count, setIncreasedValue] = useIncrement({ increment : 2, base : 0})
  return(
    <div className="App">
      <h1> Count : {count} </h1>
      <button onClick={() => setIncreasedValue()}> Increase </button>
    </div>
  )
}


export default App
