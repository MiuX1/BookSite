// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Header from '../src/components/Header/Header';
// import { useNavigate } from 'react-router-dom'; // For redirecting the user after login
// import axios from 'axios'; // For making API calls

// const defaultTheme = createTheme({
//   palette: {
//     secondary: {
//       main: '#BF5A36',
//     },
//   },
// });

// export default function Login() {
//   const navigate = useNavigate(); // For navigation after login
//   const [errorMessage, setErrorMessage] = React.useState(""); // To store error messages

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const email = data.get('email');
//     const password = data.get('password');

//     // Simple validation for empty fields
//     if (!email || !password) {
//       setErrorMessage("Please fill out both fields.");
//       return;
//     }

//     // Email format validation (using regular expression)
//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!emailPattern.test(email)) {
//       setErrorMessage("Invalid email format.");
//       return;
//     }

//     try {
//       // Sending login data to backend
//       const response = await axios.post('http://localhost:8000/api/v1/users/login', { email, password });

//       // Storing the received tokens (Access and Refresh Tokens) in localStorage
//       localStorage.setItem('accessToken', response.data.accessToken);
//       localStorage.setItem('refreshToken', response.data.refreshToken);

//       const token = localStorage.getItem("accessToken");

//       console.log("Token from login page localStorage:", token);
//       // Redirect to the profile page or another page after successful login
//     //  navigate('/profile'); // Redirects to the profile page

//     } catch (error) {
//       console.error('Error during login:', error);

//       // Handle user not registered scenario
//       if (error.response && error.response.status === 404) {
//         setErrorMessage("User not registered. Please sign up.");
//       } 
//       // Handle incorrect password
//       else if (error.response && error.response.status === 401) {
//         setErrorMessage("Invalid password. Please try again.");
//       }
//       else {
//         // General error message for other cases
//         setErrorMessage("An error occurred. Please try again.");
//       }
//     }
//   };

//   return (
//     <>
//       <Header sx={{ boxShadow: 10 }} />
//       <ThemeProvider theme={defaultTheme}>
//         <Grid container component="main" sx={{ height: '100vh' }}>
//           <CssBaseline />
//           <Grid
//             item
//             xs={false}
//             sm={4}
//             md={7}
//             sx={{
//               backgroundColor: 'secondary.main',
//               backgroundSize: 'cover',
//             }}
//           />
//           <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//             <Box
//               sx={{
//                 my: 8,
//                 mx: 4,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//               }}
//             >
//               <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                 <LockOutlinedIcon />
//               </Avatar>
//               <Typography component="h1" variant="h5">
//                 Sign in
//               </Typography>
//               <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   autoFocus
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="current-password"
//                 />
//                 <FormControlLabel
//                   control={<Checkbox value="remember" color="primary" />}
//                   label="Remember me"
//                 />
                
//                 {/* Display error message if there's any */}
//                 {errorMessage && (
//                   <Typography color="error" variant="body2" align="center" sx={{ mt: 2 }}>
//                     {errorMessage}
//                   </Typography>
//                 )}

//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{ mt: 3, mb: 2, bgcolor: 'secondary.main' }}
//                 >
//                   Sign In
//                 </Button>
//                 <Grid container>
//                   <Grid item xs>
//                     <Link href="/" variant="body2">
//                       Forgot password?
//                     </Link>
//                   </Grid>
//                   <Grid item>
//                     <Link href="/register" variant="body2">
//                       {"Don't have an account? Sign Up"}
//                     </Link>
//                   </Grid>
//                 </Grid>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </ThemeProvider>
//     </>
//   );
// }


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../src/components/Header/Header';
import { useNavigate } from 'react-router-dom'; // For redirecting the user after login
import axios from 'axios'; // For making API calls

const defaultTheme = createTheme({
  palette: {
    secondary: {
      main: '#BF5A36',
    },
  },
});

export default function Login() {
  const navigate = useNavigate(); // For navigation after login
  const [errorMessage, setErrorMessage] = React.useState(""); // To store error messages

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    // Simple validation for empty fields
    if (!email || !password) {
      setErrorMessage("Please fill out both fields.");
      return;
    }

    // Email format validation (using regular expression)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setErrorMessage("Invalid email format.");
      return;
    }

    try {
      // Sending login data to backend
      const response = await axios.post('http://localhost:8000/api/v1/users/login', { email, password });

      // Log the response for debugging
      console.log("Login response:", response);

      // Check if tokens are in the response data
      if (response.data && response.data.data && response.data.data.accessToken && response.data.data.refreshToken) {
        // Proceed with storing the tokens
        localStorage.setItem('accessToken', response.data.data.accessToken);
        localStorage.setItem('refreshToken', response.data.data.refreshToken);
        
        console.log("Access Token stored:", localStorage.getItem('accessToken'));
        console.log("Refresh Token stored:", localStorage.getItem('refreshToken'));
        
        // Navigate to profile page
        navigate('/profile');
      } else {
        // Handle the error if tokens are not received
        setErrorMessage("Login failed. Tokens not received.");
        console.error("Error: Tokens were not received in the response.");
      }
      

    } catch (error) {
      console.error('Error during login:', error);

      if (response.status === 200) {
        // Store the sellerId in localStorage after successful login
        localStorage.setItem('sellerId', response.data.sellerId); // Adjust according to your response structure
        // Optionally, redirect the user to the selling page
      }
      // Handle user not registered scenario
      if (error.response && error.response.status === 404) {
        setErrorMessage("User not registered. Please sign up.");
      } 
      // Handle incorrect password
      else if (error.response && error.response.status === 401) {
        setErrorMessage("Invalid password. Please try again.");
      }
      // Handle token-related issues
      else if (error.response && error.response.status === 500) {
        setErrorMessage("Internal server error. Please try again later.");
      }
      else {
        // General error message for other cases
        setErrorMessage("An error occurred. Please try again.");
      }
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
                Sign in
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                
                {/* Display error message if there's any */}
                {errorMessage && (
                  <Typography color="error" variant="body2" align="center" sx={{ mt: 2 }}>
                    {errorMessage}
                  </Typography>
                )}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: 'secondary.main' }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/register" variant="body2">
                      {"Don't have an account? Sign Up"}
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
