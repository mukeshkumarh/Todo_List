import React from 'react'
import {AppBar,Box,Toolbar,Typography} from '@mui/material'
import { Link } from 'react-router-dom'
import '../../stayle/Header.css';
export default function Header() {
  return (
   <>
<Box>
  <AppBar component={'nav'}>
    <Toolbar>
      <Typography variant='h6' component='div' sx={{flexGrow:1}}>AJkart</Typography>
      <Box sx={{display: {xs:"none",sm:'block'}}}>
        <ul className='naveigation-menu'>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/menu'}>Menu</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
          
        </ul>
      </Box>
    </Toolbar>
  </AppBar>
</Box>
   </>
  )
}
