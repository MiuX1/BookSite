import React from 'react';
import { Container, Box, Button, Typography, Paper, Grid } from '@mui/material';
import books from '../src/data/home-paper.json';
import buttonNames from '../src/data/home-button.json';

function FullHeightLayout() {
  return (
    <Container sx={{ bgcolor: 'gray', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          bgcolor: 'black',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '5%',
          paddingY: '18%',
          borderRadius: 3,
          height: '70%',
        }}
      >
        <Typography variant='h6' component='h1' color='wheat' marginBottom={20}>
          Hero text here
        </Typography>
        <Box
          sx={{
            height: '25%',
            width: '40%',
            bottom: '20%',
            display: 'flex',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Button sx={{ bgcolor: 'whitesmoke', padding: 2, width: '70%' }}>Buy</Button>
          <Button sx={{ bgcolor: 'whitesmoke', width: '70%', padding: 2 }}>Sell</Button>
        </Box>
      </Box>
      <Box sx={{ bgcolor: 'green', height: 400, marginY: 2, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ bgcolor: 'blueviolet', display: 'flex', justifyContent: 'space-between', gap: 1 }}>
          {buttonNames.map((btn, index) => (
            <Button key={index} sx={{ bgcolor: 'whitesmoke', width: '70%', padding: 2 }}>
              {btn.name}
            </Button>
          ))}
        </Box>
        <Grid container spacing={2} sx={{ marginY: 2, flexGrow: 1 }}>
          {books.map((book, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
              <Paper
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: 2,
                  flexGrow: 1,
                }}
              >
                <Box component='img' src='/' sx={{ height: '80%', width: '100%', borderRadius: 1 }} />
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
    </Container>
  );
}

export default FullHeightLayout;
