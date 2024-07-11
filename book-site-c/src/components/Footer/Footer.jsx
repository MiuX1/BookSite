import { Box, Card, Container, IconButton, Link, Paper, Typography, colors } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {

  const cardStyle = {
    display:'flex', 
    flexDirection:'column', 
     marginRight:2,
    boxShadow: 'none',
    bgcolor:'#BF5A36',
    color:'white'
  }

  const containerStyle = {
    paddingTop:1.5, 
    width:'full', 
    height:'auto',
    position:'fixed',
    bottom:0,
    boxShadow:'5',
    bgcolor:'#BF5A36',
    color:'white'
  }
  const boxStyle = {
    bgcolor:'#BF5A36',
    color:'white'
  }
  const fontStyle = {
    colors:''
  }

  return (
    <>
      <Container maxWidth="false"
      sx={containerStyle}>
      <Box sx={{ 
        display:'flex', 
        justifyContent:'space-around', 
        alignItems:'center'}}>
      {/* below is the company info */}
      <Box flexGrow={0.15}/>
      <Card sx={{
        display:'flex', 
        flexDirection:'column', 
        boxShadow: 'none',
        bgcolor:'#BF5A36',
        color:'white',
        
}} >
        <Box sx={{ '& > *': { marginBottom: 1, 
          marginX: 2  } }}>
            <Typography>company-email@gmail.com</Typography>
            <Typography>+91-0000-000000</Typography>
            <Typography>+91-0000-000000</Typography>
          </Box>
      
        <Box paddingTop={1} sx={{display:'flex', 
          justifyContent:'space-around', alignItems:'center'}}>
          <IconButton color='inherit'>
          <InstagramIcon/>
          </IconButton>

          <IconButton color='inherit'>
          <FacebookIcon/>
          </IconButton>

          <IconButton color='inherit'>
          <XIcon fontSize='small'/>
          </IconButton>

          <IconButton color='inherit'>
          <YouTubeIcon fontSize='large'/>
          </IconButton>
          </Box>
      </Card>
      <Box flexGrow={1}/>
      {/* below is featured books */}
      <Card sx={cardStyle} >
        <Box sx={{ '& > *': { marginBottom: 0, 
          marginX: 0, display:'flex', 
          alignItems:'flex-start'}, paddingBottom:5, 
          marginBottom: 1}}>
            <Typography 
              variant='title1'  
              fontWeight={500}
              marginX={0}
              marginY={1}
            >Collections</Typography> 
            <Link href="#" 
            underline="none"
            color='inherit'>Classics</Link>
            <Link href="#" 
            underline="none"
            color='inherit'>Philosophy</Link>
            <Link href="#" 
            underline="none"
            color='inherit'>Scientific</Link>
          </Box>
      </Card>
      <Box flexGrow={0.15}/>
      {/* below is quick links */}
      <Card sx={cardStyle}>
        <Box sx={{ '& > *': { marginBottom: 0, 
          marginX: 0, display:'flex', 
          alignItems:'flex-start'},paddingBottom:5,marginBottom: 1}}>
            <Typography 
              variant='title1'  
              fontWeight={500}
              marginX={0}
              marginY={1}
            >Quick Links</Typography>
            <Link href="#" 
            underline="none"
            color='inherit'>My Account</Link>
            <Link href="#" 
            underline="none"
            color='inherit'>Profile</Link>
            <Link href="#" 
            underline="none"
            color='inherit'>Marketplace</Link>
          </Box>
      </Card>
      <Box flexGrow={0.25}/>
      </Box>
      </Container>
    </>
  )
}

export default Footer
