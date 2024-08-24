import React from 'react';
import { Box, Container, Grid, Typography, Button, TextField, Divider, IconButton, Paper } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const Product = () => {
  return (
    <Container maxWidth="lg" sx={{ marginY: '2%', paddingY: '1.5%', bgcolor: "#f4f6f9" }}>
      <Grid container spacing={2} 
      justifyContent="center" 
      alignItems="center">
        {/* Left Section - Image */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            margin:'1%'}}>
            <Paper elevation={3} sx={{ width: '100%', height: 0, paddingBottom: '100%', position: 'relative', mb: 2 }}>
              {/* Main Product Image */}
              <img 
                src="/path_to_image" 
                alt="Book Cover" 
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }} 
              />
            </Paper>
            {/* Thumbnails */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
              <Box sx={{ width: 60, height: 60, backgroundColor: '#d1e3f8', borderRadius: 1 }} />
              <Box sx={{ width: 60, height: 60, backgroundColor: '#d1e3f8', borderRadius: 1 }} />
              <Box sx={{ width: 60, height: 60, backgroundColor: '#d1e3f8', borderRadius: 1 }} />
              <Box sx={{ width: 60, height: 60, backgroundColor: '#d1e3f8', borderRadius: 1 }} />
            </Box>
          </Box>
        </Grid>

        {/* Right Section - Book Details */}
        <Grid item xs={12} md={6} sx={{ paddingRight: '5%' }}>
          <Box sx={{ maxWidth: 400}}
          >
            {/* Book Title */}
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#333', mt: 2 }}>
              The Great Gatsby
            </Typography>

            {/* Rating */}
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Rating: ★★★★☆
            </Typography>

            {/* Author */}
            <Typography variant="body1" gutterBottom>
              Author: F. Scott Fitzgerald
            </Typography>

            {/* Year, ISBN, Genre */}
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Year: 1925
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              ISBN: 978-0743273565
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom mb={2}>
              Genre: Fiction
            </Typography>

            {/* Book Condition (Read-only) and Availability */}
            <TextField
              label="Book Condition"
              value="Good"
              InputProps={{
                readOnly: true,
              }}
              sx={{ minWidth: 200, mb: 0 }}
            />

            <Box sx={{ mb: 3 }}>
              <Typography variant="body1">Availability: 5 in stock</Typography>
              <Typography variant="h4" sx={{ mt: 2, color: '#1e88e5' }}>
                $10
              </Typography>
            </Box>

            {/* Quantity, Add to Cart, and Contact Seller */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <IconButton color="primary">
                <Remove />
              </IconButton>
              <Typography variant="body1" sx={{ mx: 2 }}>
                1
              </Typography>
              <IconButton color="primary">
                <Add />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Button variant="contained" color="primary" sx={{ bgcolor: '#1e88e5', '&:hover': { bgcolor: '#1565c0' }, mb: 2 }}>
                Add to cart
              </Button>
              {/* Contact Seller Button */}
              <Button variant="outlined" color="secondary" sx={{ borderColor: '#ff4081', color: '#ff4081', '&:hover': { borderColor: '#f50057', color: '#f50057' } }}>
                Contact Seller
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Description and Reviews */}
      <Box sx={{ mt: 4 }}>
        <Divider />
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={8}>
            <Typography variant="h6" sx={{ color: '#333' }}>Description</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: '#333' }}>Additional Information</Typography>
            {/* Empty for now */}
          </Grid>
        </Grid>
      </Box>

      {/* You may also like */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ mb: 2, color: '#333' }}>
          You may also like
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 1 }}>
              <Box sx={{ width: '100%', height: 150, backgroundColor: '#f0f4f8', mb: 2 }} />
              <Typography variant="body1" sx={{ color: '#333' }}>To Kill a Mockingbird</Typography>
              <Typography variant="body1" sx={{ color: '#1e88e5' }}>$15</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 1 }}>
              <Box sx={{ width: '100%', height: 150, backgroundColor: '#f0f4f8', mb: 2 }} />
              <Typography variant="body1" sx={{ color: '#333' }}>1984 by George Orwell</Typography>
              <Typography variant="body1" sx={{ color: '#1e88e5' }}>$12</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 1 }}>
              <Box sx={{ width: '100%', height: 150, backgroundColor: '#f0f4f8', mb: 2 }} />
              <Typography variant="body1" sx={{ color: '#333' }}>Brave New World</Typography>
              <Typography variant="body1" sx={{ color: '#1e88e5' }}>$18</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 1 }}>
              <Box sx={{ width: '100%', height: 150, backgroundColor: '#f0f4f8', mb: 2 }} />
              <Typography variant="body1" sx={{ color: '#333' }}>Pride and Prejudice</Typography>
              <Typography variant="body1" sx={{ color: '#1e88e5' }}>$14</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Product;
