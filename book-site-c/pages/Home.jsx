import React, { useState } from 'react';
import { Container, Box, Button, Typography, Paper, Grid } from '@mui/material';
import books from '../src/data/home-paper.json';
import buttonNames from '../src/data/home-button.json';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Filtered books based on selected category
  const filteredBooks = selectedCategory
    ? books.filter((book) => book.category === selectedCategory)
    : books;

  return (
    <Box
      sx={{
        bgcolor: 'white',
        margin: '3%',
        borderRadius: 2,
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), 
          url('../src/media/heroimg.jpg') 
          center/cover no-repeat`,
          padding: '5%',
          borderRadius: 2,
          width: '100%',
          height: '70%',
          boxShadow: 15,
          '@media (max-width: 600px)': {
            height: 'auto',
            padding: '10%',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginY: '5%',
            textAlign: 'center',
            '@media (max-width: 600px)': {
              marginY: '2%',
            },
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            color="#bf5a36"
            marginBottom={4}
            fontWeight={700}
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            }}
          >
            Discover the Stories You Love
          </Typography>
          <Typography
            variant="h6"
            component="h1"
            color="whitesmoke"
            fontWeight={300}
            sx={{
              paddingBottom: { xs: 4, md: 0 },
              width: { xs: '80%', sm: '70%', md: '60%' },
              fontSize: { xs: '1rem', sm: '1.25rem' },
            }}
          >
            Explore a world of second-hand books at Booksite. Dive into pages filled with imagination and knowledge, waiting to be rediscovered. Start your journey today.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '50%',
            marginBottom: 4,
            gap: 1,
            '& > *': {
              fontSize: 18,
              fontWeight: 900,
            },
            '@media (max-width: 600px)': {
              width: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            },
          }}
        >
          <Button
            sx={{
              bgcolor: 'whitesmoke',
              padding: 2,
              width: '70%',
              '&:hover': {
                backgroundColor: '#1b77d2',
                color: 'whitesmoke',
              },
            }}
          >
            Buy
          </Button>
          <Button
            sx={{
              bgcolor: 'whitesmoke',
              width: '70%',
              padding: 2,
              '&:hover': {
                backgroundColor: '#1b77d2',
                color: 'whitesmoke',
              },
            }}
          >
            Sell
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          borderRadius: 2,
          height: 'auto',
          marginY: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
            width: '100%',
          }}
        >
          {buttonNames.map((btn, index) => (
            <Button
              key={index}
              onClick={() => handleCategorySelect(btn.name)}
              sx={{
                bgcolor: '#1b77d2',
                flexGrow: '1',
                padding: 2,
                boxShadow: 2,
                borderRadius: 2,
                color: 'white',
                '&:hover': {
                  color: '#1b77d2',
                },
              }}
            >
              {btn.name}
            </Button>
          ))}
        </Box>
        <Grid container spacing={2} sx={{ marginY: 2, height: '100%' }}>
          {filteredBooks.map((book, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
              <Paper
                sx={{
                  boxShadow: 10,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: 2,
                  '& > *': {
                    paddingBottom: 1,
                  },
                }}
              >
                <Box
                  component="img"
                  src={book.img}
                  alt={book.name}
                  sx={{
                    height: '80%',
                    width: '100%',
                    padding: 0,
                    borderRadius: 1,
                  }}
                />
                <Typography variant="h6" component="h1" fontWeight={700} marginTop={2}>
                  {book.name}
                </Typography>
                <Typography variant="subtitle1" fontWeight={400}>
                  {book.author}
                </Typography>
                <Typography variant="h5" fontWeight={700} paddingBottom={0.5}>
                  {book.price}
                </Typography>
                <Button
                  sx={{
                    backgroundColor: '#1b77d2',
                    color: 'whitesmoke',
                    border: 'solid',
                    height: 'auto',
                    width: 'auto',
                    paddingY: 1,
                    '&:hover': {
                      color: '#1b77d2',
                    },
                  }}
                >
                  Buy now
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
