import React, { useState } from 'react';
import { Container, Typography, Box, Grid, TextField, FormControlLabel, Button, Divider, Card, CardContent, Switch, IconButton, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { getAuth, reauthenticateWithCredential, EmailAuthProvider, updatePassword } from 'firebase/auth';

const SettingsPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogout = () => {
    navigate('/');
  };

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChangePassword = async () => {
    setLoading(true);
    setError('');
    setSuccessMessage('');

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      setLoading(false);
      return;
    }

    const auth = getAuth();
    const user = auth.currentUser;
    const credential = EmailAuthProvider.credential(user.email, currentPassword);

    try {
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
      setSuccessMessage("Password updated successfully.");
    } catch (error) {
      setError("Error updating password: " + error.message);
    }

    setLoading(false);
  };

  const theme = useTheme();
  return (
    <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'background.default', color: 'text.primary' }}>
      <Container maxWidth="md">
        <Card sx={{ minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h3" gutterBottom align="center" sx={{ mt: 6 , fontWeight: 'bold',color: '#E0A75E'}}>
              Settings
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                <PersonOutlineIcon sx={{ mr: 1 , color:theme.palette.secondary.main}} /> Account
              </Typography>
              <Divider />
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email" variant="outlined" />
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                <SecurityOutlinedIcon sx={{ mr: 1, color:theme.palette.secondary.main }} /> Security
              </Typography>
              <Divider />
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Current Password"
                    type={showPassword ? 'text' : 'password'}
                    variant="outlined"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <IconButton onClick={handleToggleShowPassword} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="New Password"
                    type={showPassword ? 'text' : 'password'}
                    variant="outlined"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <IconButton onClick={handleToggleShowPassword} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Confirm New Password"
                    type={showPassword ? 'text' : 'password'}
                    variant="outlined"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <IconButton onClick={handleToggleShowPassword} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Switch color="primary" checked={showPassword} onChange={handleToggleShowPassword} />}
                    label="Show Password"
                  />
                </Grid>
              </Grid>
            </Box>
          </CardContent>
          <Box sx={{ textAlign: 'center', p: 2 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ mr: 2 }}
              onClick={handleChangePassword}
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </Button>
            <Button variant="contained" color="error" onClick={handleLogout}>
              Log Out
            </Button>
            {error && (
              <Typography variant="body1" color="error" align="center" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
            {successMessage && (
              <Typography variant="body1" color="success" align="center" sx={{ mt: 2 }}>
                {successMessage}
              </Typography>
            )}
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default SettingsPage;
