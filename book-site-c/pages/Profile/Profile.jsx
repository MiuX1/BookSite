import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Add axios for making API calls
import {
  Container,
  Box,
  Grid,
  Paper,
  Avatar,
  Typography,
  Button,
  Divider,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import { Email, Phone, Delete, AddCircleOutline } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const Profile = () => {
  const [editOpen, setEditOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: '',
    bio: '',
    location: '',
    email: '',
    phone: '',
  });
  const [bookListed, setBookListed] = useState([]);

  // Fetch user profile and books listed when the component mounts
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Assuming the token is stored in cookies
        // const token = document.cookie.split('=')[1]; // Retrieve the token from cookies
        // const response = await axios.get('http://localhost:8000/api/v1/profile/userprofile', {
        //   headers: { Authorization: `Bearer ${token}` }, // Add the token to the Authorization header
        //   withCredentials: true, // Ensure cookies are sent with the request
        // });
        const token = localStorage.getItem('accessToken'); // or get it from cookies if needed
const response = await axios.get('http://localhost:8000/api/v1/profile/userprofile', {
  headers: { Authorization: `Bearer ${token}` },
});

        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error.response || error.message);
      }
    };

    // const fetchBooksListed = async () => {
    //   try {
    //     const token = document.cookie.split('=')[1]; // Retrieve the token from cookies
    //     const response = await axios.get('http://localhost:8000/api/v1/profile/listedbooks', {
    //       headers: { Authorization: `Bearer ${token}` }, // Add the token to the Authorization header
    //       withCredentials: true, // Ensure cookies are sent with the request
    //     });
    //     setBookListed(response.data);
    //   } catch (error) {
    //     console.error('Error fetching listed books:', error);
    //   }
    // };

    fetchUserProfile();
    // fetchBooksListed();
  }, []);

  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);

  const handleProfileChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleProfileSave = async () => {
    try {
      // Retrieve the accessToken from localStorage (since it's stored there during login)
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        console.error('No access token found');
        return;
      }
  
      const response = await axios.put('http://localhost:8000/api/v1/profile/updateprofile', profileData, {
        headers: { Authorization: `Bearer ${accessToken}` }, // Add the token from localStorage to the Authorization header
        withCredentials: true, // Ensure cookies are sent with the request if needed
      });
      
      setProfileData(response.data);  // Set the profile data from the response
      handleEditClose();  // Close the edit form/modal
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };
  

  const handleRemoveBookListed = async (id) => {
    try {
      const token = document.cookie.split('=')[1]; // Retrieve the token from cookies
      await axios.delete(`http://localhost:8000/api/v1/profile/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` }, // Add the token to the Authorization header
        withCredentials: true, // Ensure cookies are sent with the request
      });
      setBookListed(bookListed.filter(book => book.id !== id)); // Remove from local state
    } catch (error) {
      console.error('Error removing book:', error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 2, bgcolor: '#f4f6f9', p: 3 }}>
        <Grid container spacing={4}>
          {/* Left Panel */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <Avatar
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                sx={{ width: 120, height: 120, margin: '0 auto' }}
              />
              <Typography variant="h6" sx={{ mt: 2 }}>
                {profileData.fullName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {profileData.bio}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {profileData.location}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6">Contact Information</Typography>
              <Typography variant="body1">
                <Email sx={{ verticalAlign: 'middle', mr: 1 }} /> {profileData.email}
              </Typography>
              <Typography variant="body1">
                <Phone sx={{ verticalAlign: 'middle', mr: 1 }} /> {profileData.phone}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Button variant="contained" color="secondary" sx={{ mt: 2 }} onClick={handleEditOpen}>
                Edit Profile
              </Button>
            </Paper>
          </Grid>

          {/* Right Panel - Main Content */}
          <Grid item xs={12} md={8}>
            {/* Add to wishlist Section */}
            <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Cart
              </Typography>
              {/* Add the list of books in the user's cart here */}
            </Paper>

            {/* Book Listed Section */}
            <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Book Listed
              </Typography>
              <Grid container spacing={2}>
                {bookListed.map(book => (
                  <Grid item xs={12} sm={6} key={book.id}>
                    <Card sx={{ display: 'flex', alignItems: 'center' }}>
                      <CardMedia
                        component="img"
                        sx={{ width: 100 }}
                        image={book.image}
                        alt={book.title}
                      />
                      <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography variant="subtitle1">{book.title}</Typography>
                        <Typography variant="body2" color="text.secondary">{book.author}</Typography>
                        <Typography variant="body2" color="text.secondary">{book.price}</Typography>
                        <Typography variant="body2" color="text.secondary">Status: {book.status}</Typography>
                      </CardContent>
                      <IconButton onClick={() => handleRemoveBookListed(book.id)}>
                        <Delete color="error" />
                      </IconButton>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>

            {/* List a Book Section */}
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center', mb: 2 }}>
              <Button
                component={NavLink} to="/Selling"
                variant="contained" color="primary" startIcon={<AddCircleOutline />} fullWidth>
                List a Book
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Edit Profile Dialog */}
      <Dialog open={editOpen} onClose={handleEditClose}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="fullName"
            label="Full Name"
            type="text"
            fullWidth
            variant="outlined"
            value={profileData.fullName}
            onChange={handleProfileChange}
          />
          <TextField
            margin="dense"
            name="bio"
            label="Bio"
            type="text"
            fullWidth
            variant="outlined"
            value={profileData.bio}
            onChange={handleProfileChange}
          />
          <TextField
            margin="dense"
            name="location"
            label="Location"
            type="text"
            fullWidth
            variant="outlined"
            value={profileData.location}
            onChange={handleProfileChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={profileData.email}
            onChange={handleProfileChange}
          />
          <TextField
            margin="dense"
            name="phone"
            label="Phone"
            type="text"
            fullWidth
            variant="outlined"
            value={profileData.phone}
            onChange={handleProfileChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose}>Cancel</Button>
          <Button onClick={handleProfileSave} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Profile;



//working wala 
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Add axios for making API calls
// import {
//   Container,
//   Box,
//   Grid,
//   Paper,
//   Avatar,
//   Typography,
//   Divider,
//   Button,
// } from '@mui/material';
// import { Email, Phone } from '@mui/icons-material';

// const Profile = () => {
//   const [profileData, setProfileData] = useState({
//     fullName: '',
//     bio: '',
//     location: '',
//     email: '',
//     phone: '',
//   });

//   useEffect(() => {
//     // Ensure the token exists before making the API request
//     const token = localStorage.getItem("accessToken");
//    // const token = localStorage.getItem("accessToken");
// console.log("Token from localStorage:", token); // Check if it's valid
//     if (token) {
//       axios.get("http://localhost:8000/api/v1/profile/userprofile", {
//         headers: {
//           "Authorization": `Bearer ${token}`,
//         }
//       })
//         .then(response => {
//           setProfileData(response.data);
//           console.log("Data from backend:", response.data);
//         })
//         .catch(error => {
//           console.error("Error fetching data:", error);
//         });
//     } else {
//       console.error("No token found in localStorage.");
//     }
//   }, []); // Empty dependency array ensures this runs only on mount

//   return (
//     <Container maxWidth="lg">
//       <Box sx={{ mt: 4, mb: 2, bgcolor: '#f4f6f9', p: 3 }}>
//         <Grid container spacing={4}>
//           {/* Left Panel */}
//           <Grid item xs={12} md={4}>
//             <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
//               <Avatar
//                 src="https://bootdey.com/img/Content/avatar/avatar7.png"
//                 sx={{ width: 120, height: 120, margin: '0 auto' }}
//               />
//               <Typography variant="h6" sx={{ mt: 2 }}>
//                 {profileData.fullName}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {profileData.bio}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {profileData.location}
//               </Typography>
//               <Divider sx={{ my: 2 }} />
//               <Typography variant="h6">Contact Information</Typography>
//               <Typography variant="body1">
//                 <Email sx={{ verticalAlign: 'middle', mr: 1 }} /> {profileData.email}
//               </Typography>
//               <Typography variant="body1">
//                 <Phone sx={{ verticalAlign: 'middle', mr: 1 }} /> {profileData.phone}
//               </Typography>
//               <Divider sx={{ my: 2 }} />
//             </Paper>
//           </Grid>

//           {/* Right Panel - Empty for now */}
//           <Grid item xs={12} md={8}>
//             {/* Additional sections can be added here later */}
//           </Grid>
//         </Grid>
//       </Box>
//     </Container>
//   );
// };

// export default Profile;

