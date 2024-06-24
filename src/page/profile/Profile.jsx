import React from "react";
import { Container, Grid, Box, Button, TextField, MenuItem, Avatar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

const ProfileContainer = styled(Box)(({ theme }) => ({
  padding: "2rem",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "8px",
  boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  [theme.breakpoints.down('md')]: {
    padding: "1rem",
  },
}));

const AppContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.primary,
  padding: 0,
  margin: 0,
}));

const MainContent = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    padding: "1rem",
  },
}));

const ProfilePage = () => {
  return (
    <AppContainer>
      <MainContent>
        <ProfileContainer>
          <Typography variant="h4" align="center" gutterBottom>
            Add Employee
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                <PersonOutlineIcon sx={{ mr: 1 }} /> General Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField 
                    fullWidth 
                    label="First Name" 
                    placeholder="Enter your first name" 
                    InputProps={{ startAdornment: <PersonOutlineIcon sx={{ mr: 1 }} /> }} 
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField 
                    fullWidth 
                    label="Last Name" 
                    placeholder="Also your last name" 
                    InputProps={{ startAdornment: <PersonOutlineIcon sx={{ mr: 1 }} /> }} 
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Birthday"
                    placeholder="mm/dd/yyyy"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    InputProps={{ startAdornment: <CalendarTodayIcon sx={{ mr: 1 }} /> }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    label="Gender"
                    defaultValue=""
                    InputProps={{ startAdornment: <PersonOutlineIcon sx={{ mr: 1 }} /> }}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField 
                    fullWidth 
                    label="Email" 
                    placeholder="name@company.com" 
                    InputProps={{ startAdornment: <EmailOutlinedIcon sx={{ mr: 1 }} /> }} 
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField 
                    fullWidth 
                    label="Phone" 
                    placeholder="+12-345 678 910" 
                    InputProps={{ startAdornment: <PhoneOutlinedIcon sx={{ mr: 1 }} /> }} 
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                    <HomeOutlinedIcon sx={{ mr: 1 }} /> Address
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    fullWidth 
                    label="Address" 
                    placeholder="Enter your home address" 
                    InputProps={{ startAdornment: <HomeOutlinedIcon sx={{ mr: 1 }} /> }} 
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField 
                    fullWidth 
                    label="City" 
                    placeholder="City" 
                    InputProps={{ startAdornment: <LocationCityOutlinedIcon sx={{ mr: 1 }} /> }} 
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField 
                    fullWidth 
                    label="State" 
                    placeholder="State" 
                    InputProps={{ startAdornment: <MapOutlinedIcon sx={{ mr: 1 }} /> }} 
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField 
                    fullWidth 
                    label="ZIP" 
                    placeholder="ZIP" 
                    InputProps={{ startAdornment: <PinDropOutlinedIcon sx={{ mr: 1 }} /> }} 
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>
                    Save All
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Avatar
                  src="https://via.placeholder.com/250"
                  alt="Profile Picture"
                  sx={{ width: 250, height: 250, margin: "auto" }}
                />
                <Typography variant="h6" gutterBottom>
                  Profile picture
                </Typography>
                <CameraAltOutlinedIcon sx={{ fontSize: 40, mt: 2 }} />
              </Box>
              <Box textAlign="center" sx={{ mt: 4 }}>
                <Typography variant="body2" gutterBottom>
                  Select profile photo
                </Typography>
                <Button variant="outlined" component="label">
                  Choose Image
                  <input type="file" hidden />
                </Button>
              </Box>
            </Grid>
          </Grid>
        </ProfileContainer>
      </MainContent>
    </AppContainer>
  );
};

export default ProfilePage;
