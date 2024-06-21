import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  IconButton,
  TextField,
  Typography,
  Link,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AuthProvider from './AuthProvider.jsx';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
// @ts-ignore
import logo from '../components/logo/logo.png'; 
import { auth } from '../firebase/firebase.js'; // Import the Firebase auth module
import { signInWithEmailAndPassword } from 'firebase/auth';

const brandColors = {
  primary: '#973131',
  secondary: '#F5E7B2',
  accent: '#F9D689',
  text: '#E0A75E',
  
};

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [error, setError] = useState(''); // State for error message
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // @ts-ignore
    import('..//background/unity chain background pic.png')
      .then((image) => {
        setBackgroundImage(image.default);
      })
      .catch((err) => console.error('Error loading background image:', err));
  }, []);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted'); // Debugging statement
    console.log('Form data:', form); // Debugging statement
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('User signed in:', user); // Debugging statement
        // Redirect to the main app
        navigate('/app/hr');
      })
      .catch((error) => {
        console.error('Error signing in:', error.message);
        // Set error message
        setError('Incorrect email or password');
      });
  };
  
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      p={4}
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <Card 
        sx={{ 
          maxWidth: 448, 
          p: 4, 
          pt: 7, 
          backgroundColor: brandColors.secondary, 
          boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)', // Adding shadow
          borderRadius: 4 // Optional: for rounded corners
        }}
      >
        <Box display="flex" justifyContent="center" mb={2}>
          <img src={logo} alt="logo" style={{ width: '150px' }} />
        </Box>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" mb={1} color={brandColors.primary}>
            Welcome to UNITY CHAIN! 👋🏻
          </Typography>
          <Typography variant="body2" mb={2} >
            Please sign-in to your account and start the adventure
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              margin="normal"
              sx={{ input: { color: brandColors.text } }}
            />
            <TextField
              fullWidth
              label="Password"
              type={isPasswordVisible ? 'text' : 'password'}
              name="password"
              value={form.password}
              onChange={handleChange}
              margin="normal"
              InputProps={{
                endAdornment: (
                  <IconButton onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                    {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
                sx: { color: brandColors.text }
              }}
            />
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={1} mb={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="remember"
                    checked={form.remember}
                    onChange={handleChange}
                    sx={{ color: brandColors.primary }}
                  />
                }
                label="Remember me"
              />
              <Link href="#" variant="body2" sx={{ color: brandColors.primary }}>
                Forgot Password?
              </Link>
            </Box>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: brandColors.primary,
                '&:hover': {
                  backgroundColor: brandColors.accent,
                },
              }}
            >
              Login
            </Button>
            {error && ( // Conditional rendering of error message
              <Typography variant="body2" color="error" align="center" mt={2}>
                {error}
              </Typography>
            )}
          </form>
          <Box textAlign="center" mt={2}>
            <AuthProvider />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
