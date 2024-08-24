import React, { useState } from 'react';
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

const Profile = () => {
  const [editOpen, setEditOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    bio: 'Avid Reader & Book Reviewer',
    location: 'Bay Area, San Francisco, CA',
    email: 'fip@jukmuh.al',
    phone: '(239) 816-9029',
  });

  const [orders, setOrders] = useState([
    { id: 1, title: '1984', author: 'George Orwell', price: '$14.00', image: 'https://via.placeholder.com/150', status: 'Shipped' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: '$12.49', image: 'https://via.placeholder.com/150', status: 'Processing' },
  ]);

  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);

  const handleProfileChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleProfileSave = () => {
    handleEditClose();
  };

  const handleRemoveOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {/* Left Panel */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <Avatar
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                sx={{ width: 120, height: 120, margin: '0 auto' }}
              />
              <Typography variant="h6" sx={{ mt: 2 }}>
                {profileData.name}
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
            {/* Orders Section */}
            <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Orders
              </Typography>
              <Grid container spacing={2}>
                {orders.map(order => (
                  <Grid item xs={12} sm={6} key={order.id}>
                    <Card sx={{ display: 'flex', alignItems: 'center' }}>
                      <CardMedia
                        component="img"
                        sx={{ width: 100 }}
                        image={order.image}
                        alt={order.title}
                      />
                      <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography variant="subtitle1">{order.title}</Typography>
                        <Typography variant="body2" color="text.secondary">{order.author}</Typography>
                        <Typography variant="body2" color="text.secondary">{order.price}</Typography>
                        <Typography variant="body2" color="text.secondary">Status: {order.status}</Typography>
                      </CardContent>
                      <IconButton onClick={() => handleRemoveOrder(order.id)}>
                        <Delete color="error" />
                      </IconButton>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>

          
            {/* Add to Cart Section */}
            <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Cart
              </Typography>
              {/* Add the list of books in the user's cart here */}
            </Paper>


              {/* Books Added Section */}
              <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Books Listed
              </Typography>
              {/* Add the list of books the user has added here */}
            </Paper>


            {/* List a Book Section */}
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <Button variant="contained" color="primary" startIcon={<AddCircleOutline />} fullWidth>
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
            name="name"
            label="Full Name"
            type="text"
            fullWidth
            variant="outlined"
            value={profileData.name}
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
