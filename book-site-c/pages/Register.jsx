// import React, { useState } from 'react';
// import {
//   Avatar,
//   Button,
//   CssBaseline,
//   TextField,
//   FormControlLabel,
//   Checkbox,
//   Link,
//   Grid,
//   Box,
//   Typography,
//   Paper,
// } from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import axios from 'axios';
// import Header from '../src/components/Header/Header'


// const defaultTheme = createTheme({
//   palette: {
//     secondary: {
//       main: '#BF5A36',
//     },
//   },
// });

// export default function Register() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [bio, setBio] = useState('');
//   const [location, setLocation] = useState('');
//   const [isSeller, setIsSeller] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//   //   try {
//   //     await axios.post('http://localhost:8000/api/v1/users/register', {
//   //       username,
//   //       email,
//   //       password,
//   //       name,
//   //       phone,
//   //       bio,
//   //       location,
//   //       isSeller,
//   //     });

//   //     window.location.href = '/login';
//   //   } catch (err) {
//   //     setError('Error registering user');
//   //   }
//    };

//   return (
//     <>    <Header sx={{ boxShadow: 10 }} />
//     <ThemeProvider theme={defaultTheme}>
//       <Grid container component="main" sx={{ height: '100vh' }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundColor: 'secondary.main',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Register
//             </Typography>

//             {error && (
//               <Typography color="error" variant="body2" sx={{ mt: 1 }}>
//                 {error}
//               </Typography>
//             )}

//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="username"
//                 label="Username"
//                 name="username"
//                 autoComplete="username"
//                 autoFocus
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="new-password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="name"
//                 label="Name"
//                 name="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="phone"
//                 label="Phone"
//                 name="phone"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//               <TextField
//                 margin="normal"
//                 fullWidth
//                 id="bio"
//                 label="Bio (optional)"
//                 name="bio"
//                 value={bio}
//                 onChange={(e) => setBio(e.target.value)}
//               />
//               <TextField
//                 margin="normal"
//                 fullWidth
//                 id="location"
//                 label="Location (optional)"
//                 name="location"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//               />
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={isSeller}
//                     onChange={(e) => setIsSeller(e.target.checked)}
//                     name="isSeller"
//                     color="secondary"
//                   />
//                 }
//                 label="Are you a seller?"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2, bgcolor: 'secondary.main' }}
//               >
//                 Register
//               </Button>
//               <Grid container justifyContent="center">
//                 <Grid item>
//                   <Link href="/login" variant="body2" sx={{ color: 'secondary.main' }}>
//                     {"Already have an account? Login here"}
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//     </>

//   );
// }



import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Paper,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Header from '../src/components/Header/Header';

const defaultTheme = createTheme({
  palette: {
    secondary: {
      main: '#BF5A36',
    },
  },
});

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setfullName] = useState('');
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [isSeller, setIsSeller] = useState(false);
  const [avatar, setAvatar] = useState(null); // State for avatar
  const [error, setError] = useState('');

  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0]); // Update avatar state with the selected file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('fullName', fullName);
    formData.append('phone', phone);
    formData.append('bio', bio);
    formData.append('location', location);
    formData.append('isSeller', isSeller);
    formData.append('avatar', avatar);

    try {
      await axios.post('http://localhost:8000/api/v1/users/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      window.location.href = '/profile';
    } catch (err) {
      setError('Error registering user');
    }
  };

  return (
    <>
      <Header sx={{ boxShadow: 10 }} />
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundColor: 'secondary.main',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Register
              </Typography>

              {error && (
                <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                  {error}
                </Typography>
              )}

              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
  margin="normal"
  required
  fullWidth
  id="fullName"
  label="Full Name" // Updated for better readability
  name="fullName"
  value={fullName}
  onChange={(e) => setfullName(e.target.value)} // Fixed camelCase
/>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  id="bio"
                  label="Bio (optional)"
                  name="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  id="location"
                  label="Location (optional)"
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isSeller}
                      onChange={(e) => setIsSeller(e.target.checked)}
                      name="isSeller"
                      color="secondary"
                    />
                  }
                  label="Are you a seller?"
                />
                <Button
                  variant="contained"
                  component="label"
                  sx={{ mt: 2, mb: 2, bgcolor: 'secondary.main' }}
                >
                  Upload Profile Image
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleAvatarChange}
                  />
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: 'secondary.main' }}
                >
                  Register
                </Button>
                <Grid container justifyContent="center">
                  <Grid item>
                    <Link href="/login" variant="body2" sx={{ color: 'secondary.main' }}>
                      {"Already have an account? Login here"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
