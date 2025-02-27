//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import {FC,createContext} from 'react';
//import ProfileComponent from './Context';
import UncontrolledComponent from './controlled';
//import Homepage from './Homepage';
//import Counter from './Counter';
//import Greet from './Events';
//import Page from './RenderingList';
//import Counter from './Effect'

/* const App : FC = () => {
  return(
    <div className='container-fluid'>
      <Homepage firstName = {"Sneharshitha"} lastName = {"Varma"} />
    </div>
  )
} */


/* const App : FC = () => {
  return(
    <div className='container-fluid'>
      <Counter />
    </div>
  )
}  */


/* const App : FC = () => {
  return(
    <div className='container-fluid'>
      <Greet />
    </div>
  )
} */


/* const App : FC = () => {
  return(
    <div className='container-fluid'>
      <Page />
    </div>
  )
}   */

/* const App : FC = () => {
  return(
    <div className='container-fluid'>
      <Counter/>
    </div>
  )
}   */


//parent component to Context component
/* const user = {
  name : "Sneharshitha",
  age : 22,
  designation : "developer"
}

export const ProfileContext = createContext(user)

const App : FC = () => {
  return(
    <div className='App'>
      <ProfileContext.Provider value={user}>
        <ProfileComponent/>
      </ProfileContext.Provider>
    </div>
  )
} */


const App : FC = () => {
  return(
    <div className='container-fluid'>
      <UncontrolledComponent/>
    </div>
  )
} 




export default App;
