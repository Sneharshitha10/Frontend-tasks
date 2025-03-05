import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ErrorB from './ErrorB'
import ErrorBoundary from './ErrorBoundary'
//import LifeCycleA from './LifeCycleA'
//import Form from './Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       { /* <Form /> */ }
       { /* <LifeCycleA /> */ }
       <ErrorBoundary>
          <ErrorB name="Sneha"></ErrorB>
       </ErrorBoundary>
       <ErrorBoundary>
          <ErrorB name="Karthik"></ErrorB>
       </ErrorBoundary>
       <ErrorBoundary>
          <ErrorB name="joker"></ErrorB>
       </ErrorBoundary>
    </>
  )
}

export default App
