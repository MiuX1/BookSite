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
    <>
    <h1 className="bg-slate-900 text-8xl text-white text-center">Tailwind checking</h1>
      

     

    </>
  )
}

export default Home
