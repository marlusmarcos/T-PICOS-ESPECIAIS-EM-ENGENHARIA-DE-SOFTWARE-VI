
import { Button, ThemeProvider, CssBaseline } from '@mui/material'
import { useState } from 'react'
import theme from './theme';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DriveIcon from '@mui/icons-material/DriveEta';
import IconButton from '@mui/material/IconButton';
import NewNavBar from './componentes/NavBar/NavBar';



function App() {

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <NewNavBar/>  
      
    </ThemeProvider>
  )
}

export default App
