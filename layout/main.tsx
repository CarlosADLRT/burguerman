import React from 'react'
import ResponsiveAppBar from "./ResponsiveAppBar";
import MainSection from '../components/MainSection'
import { Box } from '@mui/material';
const Main = () => {
  return (<>
  <ResponsiveAppBar/>
  <Box sx={{
    height:'100vh',
    padding:"50px"
  }}>
    <MainSection></MainSection>
  </Box>
  
  </>
  )
}

export default Main;