// import React, { useState } from 'react';
// import {
//   Typography, Box, Link, TextField, Button, IconButton, MenuItem, Select, Radio, RadioGroup,
//   FormControlLabel, InputLabel, FormControl, Grid
// } from '@mui/material';
// import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

// // import axios from 'axios';  // Import axios for API requests




// const Selling = () => {
//   const [formValues, setFormValues] = useState({
//     bookTitle: '',
//     author: '',
//     year: '',
//     ISBN: '',
//     bookType: '',
//     bookCondition: 'good',
//     picture: null,
//     quantityAvailable: '',
//     price: '',
//     additionalInfo: '',
//     sellerName: '',
//     address: '',
//     sellerEmail: '',
//     sellerPhoneNumber: '',
//     pinCode: '',
//   });

//     // Handle form value changes

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };
//   // Handle file change (image upload)

//   const handleFileChange = (e) => {
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       picture: e.target.files[0],
//     }));
//   };
//   // Handle book condition change

//   const handleConditionChange = (e) => {
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       bookCondition: e.target.value,
//     }));
//   };
//   // Handle form submission (sending data to backend)

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formValues);
//   };
 
//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit}
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         // bgcolor: '#f5f5f5',
//         margin: 'auto',
//         borderRadius: 2,
//         maxWidth: '80%',
//         padding: {xs:'4%', sm:'4%', md:'2%'},
//         // boxShadow: 3,
//         width: '100%',
//       }}
//     >
//       <Box sx={{ bgcolor: '#4caf50', width: '100%', padding: '1%', textAlign: 'center', mb: 2 }}>
//         <Typography variant='h6' component='h1' color="#fff">
//           Become a Seller
//         </Typography>
//         <Link href="/" target="_blank" 
//         color="inherit" underline="hover">
//           Learn how it works?
//         </Link>
//       </Box>

//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <FieldGroup
//             label="Book Title"
//             name="bookTitle"
//             value={formValues.bookTitle}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FieldGroup
//             label="Author"
//             name="author"
//             value={formValues.author}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FieldGroup
//             label="Year"
//             name="year"
//             value={formValues.year}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FieldGroup
//             label="ISBN"
//             name="ISBN"
//             value={formValues.ISBN}
//             onChange={handleChange}
//           />
//         </Grid>

//         <Grid item xs={12}>
//           {/* <FieldGroup      (add the genre dropdown here)
//               label="Book Type"
//               name="Book Type"
//               value={formValues.bookType}
//               onChange={handleChange}
//             />   */}
//         </Grid>

//         <Grid item xs={12}>
//           <Box sx={{ marginY: '1%' }}>
//             <Typography>Book Condition</Typography>
//             <RadioGroup
//               name="bookCondition"
//               value={formValues.bookCondition}
//               onChange={handleConditionChange}
//               row
//             >
//               <FormControlLabel value="good" control={<Radio />} label="Good" />
//               <FormControlLabel value="fair" control={<Radio />} label="Fair" />
//               <FormControlLabel value="bad" control={<Radio />} label="Bad" />
//             </RadioGroup>
//           </Box>
//         </Grid>

//         <Grid item xs={12}>
//           <Box sx={{marginY: '1%'}}>
//             <Typography>Upload Photos</Typography>
//               <Typography variant="caption" display="block">
//                 (up to 4 images; Size: 1.5MB max each)
//               </Typography>
//             <IconButton component="label">
//               <input type="file" 
//               hidden multiple 
//               onChange={handleFileChange}/>
//               <AddAPhotoIcon />
//             </IconButton>
//           </Box>
//         </Grid>

//         <Grid item xs={12}>
//           <FieldGroup
//             label="Quantity Available (Stock)"
//             name="quantityAvailable"
//             type="number"
//             value={formValues.quantityAvailable}
//             onChange={handleChange}
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <FieldGroup
//             label="Price"
//             name="price"
//             value={formValues.price}
//             onChange={handleChange}
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <Box sx={{ marginY: '1%' }}>
//             <Typography>Additional Info</Typography>
//             <TextField
//               name="additionalInfo"
//               multiline
//               rows={4}
//               value={formValues.additionalInfo}
//               onChange={handleChange}
//               variant="outlined"
//               fullWidth
//               sx={{ bgcolor: '#e0e0e0', borderRadius: '4px' }}
//             />
//           </Box>
//         </Grid>

//         <Grid item xs={12}>
//           <FieldGroup
//             label="Your Name"
//             name="sellerName"
//             value={formValues.sellerName}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FieldGroup
//             label="Your Address"
//             name="address"
//             value={formValues.address}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FieldGroup
//             label="Your Email"
//             name="sellerEmail"
//             value={formValues.sellerEmail}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FieldGroup
//           type='number'
//             label="Your Phone Number"
//             name="sellerPhoneNumber"
//             value={formValues.sellerPhoneNumber}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FieldGroup
//           type='number'
//             label="Pin Code"
//             name="pinCode"
//             value={formValues.pinCode}
//             onChange={handleChange}
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <Box sx={{ 
//             display:'flex',
//             justifyContent:'center',
//             marginY: '1%' }}>
//             <Button type="submit" variant="contained" color="primary" 
//             sx={{
//               width:{sm:'50%',md:'30%'},
//             }}
//             >
//               List Book
//             </Button>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// const FieldGroup = ({ label, name, value, onChange, type = "text" }) => (
//   <Box sx={{ marginY: '1%' }}>
//     <Typography variant="body1" sx={{ mb: 0.5 }}>
//       {label}
//     </Typography>
//     <TextField
//       name={name}
//       value={value}
//       onChange={onChange}
//       variant="outlined"
//       fullWidth
//       sx={{ bgcolor: '#e0e0e0', borderRadius: '4px' }}
//       type={type}
//     />
//   </Box>
// );

// export default Selling;





// import React, { useState } from 'react';
// import {
//   Typography, Box, Link, TextField, Button, IconButton, Grid,
//   FormControlLabel, Radio, RadioGroup
// } from '@mui/material';
// import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
// // import axios from 'axios';  // Import axios for API requests

// const Selling = () => {
//   const [formValues, setFormValues] = useState({
//     bookTitle: '',
//     author: '',
//     year: '',
//     ISBN: '',
//     bookType: '',
//     bookCondition: 'good',
//     picture: null,
//     quantityAvailable: '',
//     price: '',
//     additionalInfo: '',
//     sellerName: '',
//     address: '',
//     sellerEmail: '',
//     sellerPhoneNumber: '',
//     pinCode: '',
//   });

//   // Handle form value changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

//   // Handle file change (image upload)
//   const handleFileChange = (e) => {
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       picture: e.target.files[0],  // Only single image is being handled
//     }));
//   };

//   // Handle book condition change
//   const handleConditionChange = (e) => {
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       bookCondition: e.target.value,
//     }));
//   };

//   // Handle form submission (sending data to backend)
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('title', formValues.bookTitle);
//     formData.append('author', formValues.author);
//     formData.append('year', formValues.year);
//     formData.append('ISBN', formValues.ISBN);
//     formData.append('bookType', formValues.bookType);
//     formData.append('bookCondition', formValues.bookCondition);
//     formData.append('quantityAvailable', formValues.quantityAvailable);
//     formData.append('price', formValues.price);
//     formData.append('additionalInfo', formValues.additionalInfo);
//     formData.append('sellerName', formValues.sellerName);
//     formData.append('address', formValues.address);
//     formData.append('sellerEmail', formValues.sellerEmail);
//     formData.append('sellerPhoneNumber', formValues.sellerPhoneNumber);
//     formData.append('pinCode', formValues.pinCode);

//  // Validate file size or type if needed
//  if (formValues.picture) {
//   const file = formValues.picture;
//   const maxFileSize = 1.5 * 1024 * 1024; // 1.5MB
//   const allowedTypes = ['image/jpeg', 'image/png'];

//   if (file.size > maxFileSize) {
//     alert("File size exceeds the limit of 1.5MB");
//     return;
//   }

//   if (!allowedTypes.includes(file.type)) {
//     alert("Invalid file type. Only JPEG and PNG are allowed.");
//     return;
//   }

//   formData.append('images', formValues.picture);
// }

// try {
//   const response = await axios.post('http://localhost:8000/api/v1/selling/bookselling', formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   });

//   if (response.status === 200) {
//     alert('Book listed for sale successfully');
//   } else {
//     alert('Error listing the book');
//   }
// } catch (error) {
//   console.error('Error:', error);
//   alert('Error while uploading book details');
// }
// };

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit}
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         margin: 'auto',
//         borderRadius: 2,
//         maxWidth: '80%',
//         padding: { xs: '4%', sm: '4%', md: '2%' },
//         width: '100%',
//       }}
//     >
//       <Box sx={{ bgcolor: '#4caf50', width: '100%', padding: '1%', textAlign: 'center', mb: 2 }}>
//         <Typography variant='h6' component='h1' color="#fff">
//           Become a Seller
//         </Typography>
//         <Link href="/" target="_blank" color="inherit" underline="hover">
//           Learn how it works?
//         </Link>
//       </Box>

//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <FieldGroup
//             label="Book Title"
//             name="bookTitle"
//             value={formValues.bookTitle}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FieldGroup
//             label="Author"
//             name="author"
//             value={formValues.author}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FieldGroup
//             label="Year"
//             name="year"
//             value={formValues.year}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FieldGroup
//             label="ISBN"
//             name="ISBN"
//             value={formValues.ISBN}
//             onChange={handleChange}
//           />
//         </Grid>

//         <Grid item xs={12}>
//           {/* <FieldGroup                  (replace this with drop down list, comtaining the genres)
//             label="Book Type"
//             name="bookType"
//             value={formValues.bookType}
//             onChange={handleChange}
//           /> */}
//         </Grid>

//         <Grid item xs={12}>
//           <Box sx={{ marginY: '1%' }}>
//             <Typography>Book Condition</Typography>
//             <RadioGroup
//               name="bookCondition"
//               value={formValues.bookCondition}
//               onChange={handleConditionChange}
//               row
//             >
//               <FormControlLabel value="good" control={<Radio />} label="Good" />
//               <FormControlLabel value="fair" control={<Radio />} label="Fair" />
//               <FormControlLabel value="bad" control={<Radio />} label="Bad" />
//             </RadioGroup>
//           </Box>
//         </Grid>

//         <Grid item xs={12}>
//           <Box sx={{ marginY: '1%' }}>
//             <Typography>Upload Photos</Typography>
//             <Typography variant="caption" display="block">
//               (up to 4 images; Size: 1.5MB max each)
//             </Typography>
//             <IconButton component="label">
//               <input type="file" hidden multiple onChange={handleFileChange} />
//               <AddAPhotoIcon />
//             </IconButton>
//           </Box>
//         </Grid>

//         <Grid item xs={12}>
//           <FieldGroup
//             label="Quantity Available (Stock)"
//             name="quantityAvailable"
//             type="number"
//             value={formValues.quantityAvailable}
//             onChange={handleChange}
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <FieldGroup
//             label="Price"
//             name="price"
//             value={formValues.price}
//             onChange={handleChange}
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <Box sx={{ marginY: '1%' }}>
//             <Typography>Additional Info</Typography>
//             <TextField
//               name="additionalInfo"
//               multiline
//               rows={4}
//               value={formValues.additionalInfo}
//               onChange={handleChange}
//               variant="outlined"
//               fullWidth
//               sx={{ bgcolor: '#e0e0e0', borderRadius: '4px' }}
//             />
//           </Box>
//         </Grid>

//         <Grid item xs={12}>
//           <FieldGroup
//             label="Your Name"
//             name="sellerName"
//             value={formValues.sellerName}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FieldGroup
//             label="Your Address"
//             name="address"
//             value={formValues.address}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FieldGroup
//             label="Your Email"
//             name="sellerEmail"
//             value={formValues.sellerEmail}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FieldGroup
//             type="number"
//             label="Your Phone Number"
//             name="sellerPhoneNumber"
//             value={formValues.sellerPhoneNumber}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FieldGroup
//             type="number"
//             label="Pin Code"
//             name="pinCode"
//             value={formValues.pinCode}
//             onChange={handleChange}
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <Box sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             marginY: '1%'
//           }}>
//             <Button type="submit" variant="contained" color="primary"
//               sx={{
//                 width: { sm: '50%', md: '30%' },
//               }}
//             >
//               List Book
//             </Button>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// // FieldGroup component to handle common text field rendering
// const FieldGroup = ({ label, name, value, onChange, type = "text" }) => (
//   <Box sx={{ marginY: '1%' }}>
//     <Typography variant="body1" sx={{ mb: 0.5 }}>
//       {label}
//     </Typography>
//     <TextField
//       name={name}
//       value={value}
//       onChange={onChange}
//       variant="outlined"
//       fullWidth
//       sx={{ bgcolor: '#e0e0e0', borderRadius: '4px' }}
//       type={type}
//     />
//   </Box>
// );

// export default Selling;


import React, { useState } from 'react';
import {
  Typography, Box, Link, TextField, Button, IconButton, Grid,
  FormControlLabel, Radio, RadioGroup, MenuItem
} from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
// import axios from 'axios';  // Uncomment if using axios for API requests

const Selling = () => {
  const [formValues, setFormValues] = useState({
    bookTitle: '',
    author: '',
    year: '',
    ISBN: '',
    bookType: '',
    bookCondition: 'good',
    picture: null,
    quantityAvailable: '',
    price: '',
    additionalInfo: '',
    sellerName: '',
    address: '',
    sellerEmail: '',
    sellerPhoneNumber: '',
    pinCode: '',
  });

  const buttonNames = [
    { name: 'Fiction' },
    { name: 'Non-Fiction' },
    { name: 'Biography' },
    { name: 'Comics' },
    { name: 'Science' },
  ];

  // Handle form value changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Handle file change (image upload)
  const handleFileChange = (e) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      picture: e.target.files[0], // Only single image is being handled
    }));
  };

  // Handle book condition change
  const handleConditionChange = (e) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      bookCondition: e.target.value,
    }));
  };

  // Handle form submission (sending data to backend)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', formValues.bookTitle);
    formData.append('author', formValues.author);
    formData.append('year', formValues.year);
    formData.append('ISBN', formValues.ISBN);
    formData.append('bookType', formValues.bookType);
    formData.append('bookCondition', formValues.bookCondition);
    formData.append('quantityAvailable', formValues.quantityAvailable);
    formData.append('price', formValues.price);
    formData.append('additionalInfo', formValues.additionalInfo);
    formData.append('sellerName', formValues.sellerName);
    formData.append('address', formValues.address);
    formData.append('sellerEmail', formValues.sellerEmail);
    formData.append('sellerPhoneNumber', formValues.sellerPhoneNumber);
    formData.append('pinCode', formValues.pinCode);

    // Validate file size or type if needed
    if (formValues.picture) {
      const file = formValues.picture;
      const maxFileSize = 1.5 * 1024 * 1024; // 1.5MB
      const allowedTypes = ['image/jpeg', 'image/png'];

      if (file.size > maxFileSize) {
        alert('File size exceeds the limit of 1.5MB');
        return;
      }

      if (!allowedTypes.includes(file.type)) {
        alert('Invalid file type. Only JPEG and PNG are allowed.');
        return;
      }

      formData.append('images', formValues.picture);
    }

    try {
      const response = await axios.post('http://localhost:8000/api/v1/selling/bookselling', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('Book listed for sale successfully');
      } else {
        alert('Error listing the book');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error while uploading book details');
    }
  };

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
        <Grid item xs={12}>
          <FieldGroup
            label="Book Title"
            name="bookTitle"
            value={formValues.bookTitle}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FieldGroup
            label="Author"
            name="author"
            value={formValues.author}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FieldGroup
            label="Year"
            name="year"
            value={formValues.year}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FieldGroup
            label="ISBN"
            name="ISBN"
            value={formValues.ISBN}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            select
            label="Category"
            variant="outlined"
            sx={{ minWidth: 240 }}
            value={formValues.bookType}
            name="bookType"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {buttonNames.map((btn, index) => (
              <MenuItem key={index} value={btn.name}>
                {btn.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ marginY: '1%' }}>
            <Typography>Book Condition</Typography>
            <RadioGroup
              name="bookCondition"
              value={formValues.bookCondition}
              onChange={handleConditionChange}
              row
            >
              <FormControlLabel value="good" control={<Radio />} label="Good" />
              <FormControlLabel value="fair" control={<Radio />} label="Fair" />
              <FormControlLabel value="bad" control={<Radio />} label="Bad" />
            </RadioGroup>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ marginY: '1%' }}>
            <Typography>Upload Photos</Typography>
            <Typography variant="caption" display="block">
              (up to 4 images; Size: 1.5MB max each)
            </Typography>
            <IconButton component="label">
              <input type="file" hidden multiple onChange={handleFileChange} />
              <AddAPhotoIcon />
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <FieldGroup
            label="Quantity Available (Stock)"
            name="quantityAvailable"
            type="number"
            value={formValues.quantityAvailable}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <FieldGroup
            label="Price"
            name="price"
            value={formValues.price}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ marginY: '1%' }}>
            <Typography>Additional Info</Typography>
            <TextField
              name="additionalInfo"
              multiline
              rows={4}
              value={formValues.additionalInfo}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              sx={{ bgcolor: '#e0e0e0', borderRadius: '4px' }}
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <FieldGroup
            label="Your Name"
            name="sellerName"
            value={formValues.sellerName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FieldGroup
            label="Your Address"
            name="address"
            value={formValues.address}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FieldGroup
            label="Your Email"
            name="sellerEmail"
            value={formValues.sellerEmail}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FieldGroup
            type="number"
            label="Your Phone Number"
            name="sellerPhoneNumber"
            value={formValues.sellerPhoneNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FieldGroup
            type="number"
            label="Pin Code"
            name="pinCode"
            value={formValues.pinCode}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginY: '1%' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: { sm: '50%', md: '30%' } }}
            >
              List Book
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

// FieldGroup component to handle common text field rendering
const FieldGroup = ({ label, name, value, onChange, type = 'text' }) => (
  <Box sx={{ marginY: '1%' }}>
    <Typography variant="body1" sx={{ mb: 0.5 }}>
      {label}
    </Typography>
    <TextField
      name={name}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      sx={{ bgcolor: '#e0e0e0', borderRadius: '4px' }}
      type={type}
    />
  </Box>
);

export default Selling;

