import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StyledButton from './Components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
           {/* <button> Button </button> */}
           <StyledButton> Styled Button </StyledButton>
      </div> 
    </>
  )
}

export default App
