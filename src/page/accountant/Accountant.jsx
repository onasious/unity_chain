import React from 'react';
import { Grid, Card, CardContent, Typography, Button, CssBaseline, Box, AppBar, Toolbar,useTheme} from '@mui/material';
import { BarChart,LineChart,Bar, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer,Legend } from 'recharts';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';



// Sample data for the charts
const data = [
  { name: '7-13 Aug', uv: 4000 },
  { name: 'This Week', uv: 3000 },
  { name: '21-27 Aug', uv: 2000 },
  { name: '28 Aug-3 Sept', uv: 2780 },
  { name: 'Not Due', uv: 1890 },
  { name: "Category A", value: 100 },
  { name: "Category B", value: 200 },
];

const AccountantPage = () => {
  const theme = useTheme();
  return (
    <>
      <CssBaseline />
      <Box sx={{ width: '100%', height: '100vh', padding: 0, overflow: 'auto' }}>
        {/* Mini Header */}
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 24px' }}>
            <Typography variant="h5" sx={{ flexGrow: 1 }}>
              Accounting Dashboard
            </Typography>
            <Button variant="contained" color="primary">Some Action</Button>
          </Toolbar>
        </AppBar>

        <Grid container spacing={3} sx={{ marginTop: '20px', padding: '0 24px' }}>
          {/* Bank Card */}
          <Grid item xs={12} md={6}>
            <Card >
              
              <CardContent>
                <Grid container justifyContent="space-between">
                  <Typography   color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
              fontWeight={"bold"}
              >
              <AccountBalanceOutlinedIcon
              sx={{ fontSize: "28px", marginRight: '15px',  color: theme.palette.secondary.main }}
            />Bank</Typography>
                  <Button variant="contained" color="primary">Reconcile Items</Button>
                </Grid>
                <Typography color="textSecondary">Synchronize now</Typography>
                <Typography color="textSecondary">Next sync: 11/18/2022 15:52:28</Typography>
                <Typography variant="h6" mt={2}>$105,510.87</Typography>
                <Typography color="textSecondary">$3,562.89</Typography>
                <ResponsiveContainer width="100%" height={100}>
                  <LineChart data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Cash Card */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Grid container justifyContent="space-between">
                  <Typography   color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
              fontWeight={"bold"}
              >
              <LocalAtmOutlinedIcon
              sx={{ fontSize: "28px", marginRight: '15px',  color: theme.palette.secondary.main }}
              />Cash</Typography>
                  <Button variant="contained" color="primary">New Transaction</Button>
                </Grid>
                <Typography variant="h6" mt={2}>$2,024.16</Typography>
                <Typography color="textSecondary">$1,044.65</Typography>
                <ResponsiveContainer width="100%" height={100}>
                  <LineChart data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Customer Invoices Card */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Grid container justifyContent="space-between">
                  <Typography   color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
              fontWeight={"bold"}>
                <ReceiptOutlinedIcon
              sx={{ fontSize: "28px", marginRight: '15px',  color: theme.palette.secondary.main }}
              />Customer Invoices</Typography>
                  <Button variant="contained" color="primary">New Transaction</Button>
                </Grid>
                <Typography color="textSecondary">11 Invoices to Validate</Typography>
                <Typography color="textSecondary">48 Unpaid Invoices</Typography>
                <Typography color="textSecondary">42 Late Invoices</Typography>
                <Typography variant="h6" mt={2}>$4,440.94</Typography>
                <Typography color="textSecondary">$144,253.70</Typography>
                <Typography color="textSecondary">$41,303.33</Typography>
                <ResponsiveContainer width="100%" height={100}>
                <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Vendor Bills Card */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Grid container justifyContent="space-between">
                  <Typography   color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
              fontWeight={"bold"}>
                <AddBusinessOutlinedIcon
              sx={{ fontSize: "28px", marginRight: '15px',  color: theme.palette.secondary.main }}
              />Vendor Bills</Typography>
                  <Button variant="contained" color="primary">Upload</Button>
                </Grid>
                <Typography color="textSecondary">3 Bills to Validate</Typography>
                <Typography color="textSecondary">5 Bills to Pay</Typography>
                <Typography color="textSecondary">23 Late Bills</Typography>
                <Typography variant="h6" mt={2}>$13,230.01</Typography>
                <Typography color="textSecondary">$4,156.60</Typography>
                <Typography color="textSecondary">$41,303.33</Typography>
                <ResponsiveContainer width="100%" height={100}>
                <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AccountantPage;
