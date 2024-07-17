import React from 'react';
import { Container, Box, Button, Typography, Paper, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function FullHeightLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is mobile

  const buttonNames = ['Hot Genre', 'Best Sellers', 'New Releases', 'Gay Romance', 
    'Hot Genre', 'Best Sellers', 'New Releases', 'Gay Romance'];

  const cardTexts = ['Card 1', 'Card 2', 'Card 3', 'Card 4']; // Array for card texts

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
          <Button sx={{ bgcolor: 'whitesmoke', width: '70%', padding: 2 }}>
            Buy
          </Button>
          <Button sx={{ bgcolor: 'whitesmoke', width: '70%', padding: 2 }}>
            Sell
          </Button>
        </Box>
      </Box>
      <Box sx={{ bgcolor: 'green', height: 'auto', marginY: 2, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ bgcolor: 'blueviolet', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 1 }}>
          {buttonNames.map((name, index) => (
            <Button key={index} sx={{ bgcolor: 'whitesmoke', width: '100%', padding: 2, marginBottom: isMobile ? 1 : 0 }}>
              {name}
            </Button>
          ))}
        </Box>
        <Box sx={{ marginTop: 2, display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 2 }}>
          {cardTexts.map((text, index) => (
            <Paper key={index} sx={{ height: '100%', width: isMobile ? '100%' : '10%', padding: 2 }}>
              <Typography>{text}</Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default FullHeightLayout;
