import React, { useState } from 'react';
import { Container, Typography, Box, Card, CardContent, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const FullCart = () => {
  // State for the full cart books
  const [cartBooks, setCartBooks] = useState([
    { id: 1, title: '1984', author: 'George Orwell', price: '$14.00', status: 'Shipped' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: '$12.49', status: 'Processing' },
    { id: 3, title: 'Brave New World', author: 'Aldous Huxley', price: '$15.00', status: 'Processing' },
    { id: 4, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: '$10.99', status: 'Shipped' },
    { id: 5, title: 'Moby Dick', author: 'Herman Melville', price: '$8.50', status: 'Processing' },
    { id: 6, title: 'War and Peace', author: 'Leo Tolstoy', price: '$22.00', status: 'Shipped' },
    { id: 7, title: 'Pride and Prejudice', author: 'Jane Austen', price: '$9.99', status: 'Processing' }
  ]);

  // Function to handle deleting a book from the cart
  const handleDelete = (id) => {
    const updatedBooks = cartBooks.filter(book => book.id !== id); // Filter out the book with the given id
    setCartBooks(updatedBooks); // Update the state with the new list
  };

  return (
    <Container>
      <Box sx={{ backgroundColor: '#fff', padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5">Your Cart</Typography>
        {cartBooks.map(book => (
          <Card key={book.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <CardContent>
              <Typography variant="body1">{book.title}</Typography>
              <Typography variant="body2">{book.author}</Typography>
              <Typography variant="body2">{book.price}</Typography>
              <Typography variant="body2">Status: {book.status}</Typography>
            </CardContent>
            <IconButton aria-label="delete" onClick={() => handleDelete(book.id)}>
              <DeleteIcon />
            </IconButton>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default FullCart;
