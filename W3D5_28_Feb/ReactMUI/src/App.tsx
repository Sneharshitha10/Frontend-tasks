
import './App.css'
//import { MuiButton } from './components/MuiButton'
//import { MuiTypography } from './components/MuiTypography'

/* import { createTheme , colors, ThemeProvider } from '@mui/material'
import { MuiResponsiveness } from './components/MuiResponsiveness'  */

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DragDrop from './components/DragDrop'


/* const theme = createTheme({
  status : {
    danger : '#e53e3e',
  },
  palette : {
    secondary : {
      main : colors.orange[500],
    },
    neutral : {
      main : colors.grey[500],
      darker : colors.grey[700],
    }
  }
})  

function App() {

  return (
    <>
      <ThemeProvider theme = {theme}>
      <div>
          <MuiTypography /> 
          <MuiButton />  
         <MuiResponsiveness /> 
      </div>
      </ThemeProvider> 
    </>
  )
}    */


function App()
{
   return(
    <DndProvider backend={HTML5Backend}>
       <div className='App'> 
        <DragDrop />
       </div>
    </DndProvider>   
   )
}

export default App
