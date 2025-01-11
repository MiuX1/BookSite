import React, { useState } from 'react';
import {
  Typography, Box, Link, TextField, Button, IconButton, Grid,
  FormControlLabel, Radio, RadioGroup, MenuItem
} from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import axios from 'axios';

const Selling = () => {
  const [formValues, setFormValues] = useState({
    bookTitle: '',
    author: '',
    year: '',
    ISBN: '',
    bookType: '',
    bookCondition: 'good',
    pictures: [],
    quantityAvailable: '',
    price: '',
    additionalInfo: '',
    sellerName: '',
    address: '',
    sellerEmail: '',
    sellerPhoneNumber: '',
    pinCode: '',
  });

  const [errors, setErrors] = useState({});
  const buttonNames = ['Fiction', 'Non-Fiction', 'Biography', 'Comics', 'Science'];

  // Handle form value changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  // Handle multiple file uploads
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const maxFileSize = 1.5 * 1024 * 1024; // 1.5MB
    const allowedTypes = ['image/jpeg', 'image/png'];

    const validFiles = files.filter((file) => {
      if (file.size > maxFileSize) {
        alert(`File "${file.name}" exceeds the size limit of 1.5MB.`);
        return false;
      }
      if (!allowedTypes.includes(file.type)) {
        alert(`File "${file.name}" is not a valid type (JPEG/PNG only).`);
        return false;
      }
      return true;
    });

    setFormValues((prevValues) => ({ ...prevValues, pictures: validFiles }));
  };

  // Validate fields before submission
  const validateFields = () => {
    const newErrors = {};
    const requiredFields = [
      'bookTitle', 'author', 'year', 'price', 'sellerName', 'address', 'sellerEmail', 'pinCode'
    ];

    requiredFields.forEach((field) => {
      if (!formValues[field]) newErrors[field] = `${field.replace(/([A-Z])/g, ' $1')} is required`;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    const formData = new FormData();
    Object.entries(formValues).forEach(([key, value]) => {
      if (key === 'pictures' && value.length > 0) {
        value.forEach((file) => formData.append('pictures', file));
      } else {
        formData.append(key, value);
      }
    });



  try {
    const response = await axios.post('http://localhost:8000/api/v1/selling/bookselling', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  
    console.log('Response status:', response.status); // Move this line here
  
    if (response.status === 200 || response.status === 201) {
      alert('Book listed for sale successfully!');
    } else {
      alert('Error listing the book.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error while uploading book details.');
  }};
 

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
        borderRadius: 2,
        maxWidth: '80%',
        padding: { xs: '4%', sm: '4%', md: '2%' },
        width: '100%',
      }}
    >
      <Box sx={{ bgcolor: '#4caf50', width: '100%', padding: '1%', textAlign: 'center', mb: 2 }}>
        <Typography variant="h6" component="h1" color="#fff">
          Become a Seller
        </Typography>
        <Link href="/" target="_blank" color="inherit" underline="hover">
          Learn how it works?
        </Link>
      </Box>

      <Grid container spacing={2}>
        {[
          { label: 'Book Title', name: 'bookTitle' },
          { label: 'Author', name: 'author' },
          { label: 'Year', name: 'year' },
          { label: 'ISBN', name: 'ISBN' },
          { label: 'Quantity Available (Stock)', name: 'quantityAvailable', type: 'number' },
          { label: 'Price', name: 'price', type: 'number' },
          { label: 'Your Name', name: 'sellerName' },
          { label: 'Your Address', name: 'address' },
          { label: 'Your Email', name: 'sellerEmail' },
          { label: 'Your Phone Number', name: 'sellerPhoneNumber', type: 'number' },
          { label: 'Pin Code', name: 'pinCode', type: 'number' },
        ].map((field, index) => (
          <Grid item xs={12} key={index}>
            <FieldGroup
              label={field.label}
              name={field.name}
              value={formValues[field.name]}
              onChange={handleChange}
              type={field.type || 'text'}
              error={errors[field.name]}
            />
          </Grid>
        ))}

        <Grid item xs={12}>
          <TextField
            select
            label="Category"
            variant="outlined"
            fullWidth
            value={formValues.bookType}
            name="bookType"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {buttonNames.map((btn, index) => (
              <MenuItem key={index} value={btn}>
                {btn}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <Typography>Book Condition</Typography>
          <RadioGroup
            name="bookCondition"
            value={formValues.bookCondition}
            onChange={(e) =>
              setFormValues((prevValues) => ({ ...prevValues, bookCondition: e.target.value }))
            }
            row
          >
            {['good', 'fair', 'bad'].map((condition) => (
              <FormControlLabel key={condition} value={condition} control={<Radio />} label={condition} />
            ))}
          </RadioGroup>
        </Grid>

        <Grid item xs={12}>
          <Typography>Upload Photos</Typography>
          <Typography variant="caption" display="block">
            (Up to 4 images; Max size: 1.5MB each)
          </Typography>
          <IconButton component="label">
            <input type="file" hidden multiple accept="image/jpeg,image/png" onChange={handleFileChange} />
            <AddAPhotoIcon />
          </IconButton>
        </Grid>

        <Grid item xs={12}>
          <Typography>Additional Info</Typography>
          <TextField
            name="additionalInfo"
            multiline
            rows={4}
            value={formValues.additionalInfo}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            List Book
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const FieldGroup = ({ label, name, value, onChange, type = 'text', error }) => (
  <Box>
    <Typography variant="body1">{label}</Typography>
    <TextField
      name={name}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      error={!!error}
      helperText={error || ''}
      type={type}
    />
  </Box>
);

export default Selling;
