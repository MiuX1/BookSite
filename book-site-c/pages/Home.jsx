import React from 'react';
import { Container, Box, Button, Typography, Paper, Grid } from '@mui/material';
import books from '../src/data/home-paper.json';
import buttonNames from '../src/data/home-button.json';

function FullHeightLayout() {
  return (
    <Box sx={{
      bgcolor: 'red',
      marginX:'10%',
      marginY:'3%',
      height:'100vh'
      }}>
    {/* <Box
      sx={{
        bgcolor: 'gray',
        maxHeight: '100%',
        maxWidth:'100%',
        marginY:'3%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    > */}
      <Box
        sx={{
          bgcolor: 'black',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent:'center',
          padding: '5%',
          borderRadius: 3,
          width: '100%', 
          height:'70%' //to control teh hero section height
        }}
      >
        <Typography variant='h6' component='h1' color='wheat' marginBottom={4}>
          Hero text here
        </Typography>
        
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '50%',
            marginBottom: 4,
            gap:1
          }}
        >
          <Button sx={{ bgcolor: 'whitesmoke', padding: 2, width: '70%' }}>Buy</Button>
          <Button sx={{ bgcolor: 'whitesmoke', width: '70%', padding: 2 }}>Sell</Button>
        </Box>
        </Box>

      {/* </Box> */}
      <Box
        sx={{
          bgcolor: 'green',
          height: 400,
          marginY: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%', // Make sure the box is responsive
        }}
      >
        <Box
          sx={{
            bgcolor: 'blueviolet',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center', // Center items when wrapping
            gap: 1,
            width: '100%',
          }}
        >
          {buttonNames.map((btn, index) => (
            <Button
              key={index}
              sx={{
                bgcolor: 'whitesmoke',
                flexBasis: 'calc(50% - 8px)', // Make buttons take up 50% of the container width with some gap
                marginBottom: 1,
                padding: 2,
              }}
            >
              {btn.name}
            </Button>
          ))}
        </Box>
        <Grid container spacing={2} sx={{ marginY: 2, height: '100%' }}>
          {books.map((book, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Paper
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: 2,
                }}
              >
                <Box component='img' src={book.img} alt={book.name} sx={{ height: '80%', width: '100%', borderRadius: 1 }} />
                <Typography variant='h6' component='h1' fontWeight={700} marginTop={2}>
                  {book.name}
                </Typography>
                <Typography variant='subtitle1' fontWeight={400}>
                  {book.author}
                </Typography>
                <Typography variant='h5' fontWeight={700} paddingBottom={0.5}>
                  {book.price}
                </Typography>
                <Button sx={{ border: 'solid', height: 'auto', width: 'auto', padding: 0 }}>Buy now</Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
    
  );
}

export default FullHeightLayout;