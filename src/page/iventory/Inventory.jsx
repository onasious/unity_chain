// @ts-ignore
import React, { useState } from 'react';
import { 
  Box, 
  CssBaseline, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableRow, 
  Paper, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  AppBar, 
  Toolbar ,
  useTheme
} from '@mui/material';
import { 
  Menu, 
  MoreVert, 
  Visibility, 
  CheckCircle, 
  Cancel 
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  // @ts-ignore
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBarStyled = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
// @ts-ignore
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const TableContainer = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(4),
  width: '100%',
  overflowX: 'auto',
}));

const Pagination = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: theme.spacing(2),
}));

const InventoryPage = () => {
  const [open, setOpen] = useState(false);
  const inventory = [
    { id: 1 , item: 'Lenovo 3rd Generation', code: 'P125389', units: 'Inches', quantity: 2, sellingPrice: 253, purchasePrice: 248 },
    { id: 2, item: 'Nike Jordan', code: 'P125390', units: 'Pieces', quantity: 4, sellingPrice: 360, purchasePrice: 350 },
    { id: 3, item: 'Apple Series 5 Watch', code: 'P125391', units: 'Inches', quantity: 7, sellingPrice: 724, purchasePrice: 700 },
    { id: 4, item: 'Amazon Echo Dot', code: 'P125392', units: 'Box', quantity: 3, sellingPrice: 210, purchasePrice: 200 },
    { id: 5, item: 'Lobar Handy', code: 'P125393', units: 'Kilograms', quantity: 1, sellingPrice: 155, purchasePrice: 150 },
    { id: 6, item: 'Woodcraft Sandal', code: 'P125394', units: 'Inches', quantity: 2, sellingPrice: 253, purchasePrice: 248 },
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // @ts-ignore
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarStyled position="fixed" 
// @ts-ignore
      open={open} sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        
      </AppBarStyled>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Toolbar />
        
      </Drawer>
      <Main 
// @ts-ignore
      open={open}>
        <Typography variant="h5" noWrap sx={{ flexGrow: 1, color: theme.palette.info.light,fontWeight: 'bold' }}>
            INVENTORY PAGE
          </Typography>
          <Typography>
          WELCOME TO THE INVENTORY PAGE
          </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ color:theme.palette.secondary.main , fontWeight: 'bold',fontSize:20 }}>#</TableCell>
                <TableCell>Item</TableCell>
                <TableCell>Code</TableCell>
                <TableCell>Units</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Selling Price</TableCell>
                <TableCell>Purchase Price</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {inventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell style={{ color:theme.palette.secondary.main , fontWeight: 'bold',fontSize:20 }}>{item.id}</TableCell>
                  <TableCell>{item.item}</TableCell>
                  <TableCell>{item.code}</TableCell>
                  <TableCell>{item.units}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{`$${item.sellingPrice.toFixed(2)}`}</TableCell>
                  <TableCell>{`$${item.purchasePrice.toFixed(2)}`}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ margin: 0.5 }}
                      startIcon={<Visibility />}
                    >
                      History
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ margin: 0.5 }}
                      startIcon={<CheckCircle />}
                    >
                      Stock in
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ margin: 0.5 }}
                      startIcon={<Cancel />}
                    >
                      Stock out
                    </Button>
                    <IconButton sx={{ margin: 0.5 }}>
                      <MoreVert />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination>
          <Button variant="outlined" sx={{ backgroundColor: '#1976d2', color: '#fff' }}>Prev</Button>
          <Button variant="contained" color="primary" sx={{ margin: '0 8px' }}>Page</Button>
          <Button variant="outlined" sx={{ backgroundColor: '#1976d2', color: '#fff' }}>Next</Button>
        </Pagination>
      </Main>
    </Box>
  );
};

export default InventoryPage;
