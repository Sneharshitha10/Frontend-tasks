
//import React from 'react'
import './App.css'
//import HookRef1 from './Components/HookRef1'
import HookRef2 from './Components/HookRef2'
//import HookReducer4 from './Components/HookReducer4'
//import HookReducer5  from './Components/HookReducer5'
//import HookMemo from './Components/HookMemo'

//import HookReducer3 from './Components/HookReducer3'
//import ComponentC from './Components/ContextAPI/ComponentC'
//import HookEffect1 from './Components/HookEffect1'
//import HookState from './Components/HookState'

/* export const UserContext = React.createContext()
export const ChannelContext = React.createContext() */


function App() {

  return (
    <>
       { /* <HookState /> */ }
       { /* <HookEffect7 /> */ }

      { /* only for contextapi
       <div className = "App">
         <UserContext.Provider value={'Sneha'}>
            <ChannelContext.Provider value={'React'}>
                <ComponentC />
            </ChannelContext.Provider>   
          </UserContext.Provider>  
       </div>
       */ }

       { /* <HookReducer5 />  */ }

      { /* <HookMemo /> */ }

      <HookRef2 />


  </>
  )
}

export default App
