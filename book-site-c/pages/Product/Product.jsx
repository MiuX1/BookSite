import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, Button, TextField, Divider, IconButton, Paper } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { useParams } from 'react-router-dom'; // Import useParams
import booksData from '../../src/data/home-paper.json'; // Import the JSON file

const Product = () => {
  const { productId } = useParams(); // Get the dynamic productId from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log('Product ID from URL:', productId);
    // Fetch the product using the dynamic productId
    const foundProduct = booksData.find((item) => item.id === parseInt(productId));
    setProduct(foundProduct);
  }, [productId]);

  if (!product) {
    return <Typography variant="h6">Loading product...</Typography>;
  }

  return (
    <Container maxWidth="lg" sx={{ marginY: '2%', paddingY: '1.5%', bgcolor: '#f4f6f9' }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {/* Left Section - Image */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '1%' }}>
            <Paper elevation={3} sx={{ width: '100%', height: 0, paddingBottom: '100%', position: 'relative', mb: 2 }}>
              <img
                src={product.img}
                alt={product.name}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Paper>
          </Box>
        </Grid>

        {/* Right Section - Book Details */}
        <Grid item xs={12} md={6} sx={{ paddingRight: '5%' }}>
          <Box sx={{ maxWidth: 400 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#333', mt: 2 }}>
              {product.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Author: {product.author}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Year: {product.year}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              ISBN: {product.ISBN}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Genre: {product.bookType}
            </Typography>
            <TextField
              label="Book Condition"
              value={product.bookCondition}
              InputProps={{
                readOnly: true,
              }}
              sx={{ minWidth: 200, mb: 0 }}
            />
            <Box sx={{ mb: 3 }}>
              <Typography variant="body1">Availability: {product.quantityAvailable} in stock</Typography>
              <Typography variant="h4" sx={{ mt: 2, color: '#1e88e5' }}>
                {product.price}
              </Typography>
            </Box>
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
              <Button
                variant="contained"
                color="primary"
                sx={{ bgcolor: '#1e88e5', '&:hover': { bgcolor: '#1565c0' }, mb: 2 }}
              >
                Add to wishlist
              </Button>
              <Box sx={{ mt: 4, p: 2, border: '1px solid #e0e0e0', borderRadius: 1 }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333' }}>
                  Seller Information
                </Typography>
                <Grid container spacing={2}>
                  {Object.entries({
                    'Seller Name': product.sellerName,
                    'Seller Address': product.address,
                    'Seller Email': product.sellerEmail,
                    'Seller Phone Number': product.sellerPhoneNumber,
                    'Pin Code': product.pinCode,
                  }).map(([label, value], index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <TextField
                        fullWidth
                        label={label}
                        value={value}
                        InputProps={{
                          readOnly: true,
                        }}
                        variant="outlined"
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Product;
