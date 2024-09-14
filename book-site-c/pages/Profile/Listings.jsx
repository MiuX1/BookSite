import React, { useState } from 'react';
import { Container, Typography, Box, Button, Card, CardContent, CardActions, Avatar, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Profile = () => {
  // State for the listed books
  const [books, setBooks] = useState([
    { id: 1, title: '1984', author: 'George Orwell', price: '$14.00', status: 'Shipped' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: '$12.49', status: 'Processing' }
  ]);

  // Function to remove a book from the listing
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
     

      {/* Profile Information */}
      <Container>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fff',
            padding: '20px',
            marginBottom: '20px'
          }}
        >
          <Avatar alt="John Doe" src="/avatar.jpg" sx={{ width: 80, height: 80 }} />
          <Box ml={3}>
            <Typography variant="h6">John Doe</Typography>
            <Typography variant="body2">Avid Reader & Book Reviewer</Typography>
            <Typography variant="body2">Bay Area, San Francisco, CA</Typography>
          </Box>
        </Box>

        {/* Book Listings */}
        <Box
          sx={{
            backgroundColor: '#fff',
            padding: '20px',
            marginTop: '20px'
          }}
        >
          <Typography variant="h5">Books Listed</Typography>
          {books.map(book => (
            <Card
              key={book.id}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px'
              }}
            >
              <CardContent>
                <Typography variant="body1">{book.title}</Typography>
                <Typography variant="body2">{book.author}</Typography>
                <Typography variant="body2">{book.price}</Typography>
                <Typography variant="body2">Status: {book.status}</Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="delete" onClick={() => removeBook(book.id)}>
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
          <Button variant="contained" color="primary" fullWidth>
            + List a Book
          </Button>
        </Box>
      </Container>

      
    </Box>
  );
};

export default Profile;
