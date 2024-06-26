// InventoryPage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  AppBar,
  Toolbar,
  TextField,
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { Menu, MoreVert, Visibility, Edit, Delete } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
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
  const [inventory, setInventory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [formData, setFormData] = useState({
    item: '',
    code: '',
    units: '',
    quantity: '',
    sellingPrice: '',
    purchasePrice: '',
  });
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [currentEditItem, setCurrentEditItem] = useState(null);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await axios.get('http://localhost:5001/inventory');
      setInventory(response.data);
    } catch (error) {
      console.error('Error fetching inventory', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/inventory', formData);
      setInventory([...inventory, response.data]);
      setFormData({
        item: '',
        code: '',
        units: '',
        quantity: '',
        sellingPrice: '',
        purchasePrice: '',
      });
    } catch (error) {
      console.error('Error adding inventory item', error);
    }
  };

  const handleEditClick = (item) => {
    setCurrentEditItem(item);
    setFormData(item);
    setEditDialogOpen(true);
  };

  const handleEditSubmit = async () => {
    try {
      const response = await axios.put(`http://localhost:5001/inventory/${currentEditItem.id}`, formData);
      setInventory(inventory.map((item) => (item.id === currentEditItem.id ? response.data : item)));
      setEditDialogOpen(false);
      setFormData({
        item: '',
        code: '',
        units: '',
        quantity: '',
        sellingPrice: '',
        purchasePrice: '',
      });
    } catch (error) {
      console.error('Error updating inventory item', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/inventory/${id}`);
      setInventory(inventory.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting inventory item', error);
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = useTheme();

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = inventory.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarStyled
        position="fixed"
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
          marginLeft: open ? `${drawerWidth}px` : 0,
        }}
      ></AppBarStyled>
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
        sx={{
          marginLeft: open ? 0 : `-${drawerWidth}px`,
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          ...(open && {
            marginLeft: 0,
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
          }),
        }}
      >
        <Typography variant="h5" noWrap sx={{ flexGrow: 1, color: theme.palette.info.light, fontWeight: 'bold' }}>
          INVENTORY PAGE
        </Typography>
        <Typography>WELCOME TO THE INVENTORY PAGE</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: theme.palette.secondary.main, fontWeight: 'bold', fontSize: 20 }}>#</TableCell>
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
              {currentItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell style={{ color: theme.palette.secondary.main, fontWeight: 'bold', fontSize: 20 }}>{item.id}</TableCell>
                  <TableCell>{item.item}</TableCell>
                  <TableCell>{item.code}</TableCell>
                  <TableCell>{item.units}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.sellingPrice ? `$${item.sellingPrice.toFixed(2)}` : 'N/A'}</TableCell>
                  <TableCell>{item.purchasePrice ? `$${item.purchasePrice.toFixed(2)}` : 'N/A'}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" sx={{ margin: 0.5 }} startIcon={<Visibility />}>
                      History
                    </Button>
                    <Button variant="contained" color="success" sx={{ margin: 0.5 }} startIcon={<Edit />} onClick={() => handleEditClick(item)}>
                      Edit
                    </Button>
                    <Button variant="contained" color="error" sx={{ margin: 0.5 }} startIcon={<Delete />} onClick={() => handleDelete(item.id)}>
                      Delete
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
          <Button
            variant="outlined"
            sx={{ backgroundColor: '#1976d2', color: '#fff' }}
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </Button>
          <Button variant="contained" color="primary" sx={{ margin: '0 8px' }}>
            Page {currentPage}
          </Button>
          <Button
            variant="outlined"
            sx={{ backgroundColor: '#1976d2', color: '#fff' }}
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastItem >= inventory.length}
          >
            Next
          </Button>
        </Pagination>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Item"
            name="item"
            value={formData.item}
            onChange={handleChange}
            required
            inputProps={{ style: { color: '#000' } }}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Code"
            name="code"
            value={formData.code}
            onChange={handleChange}
            required
            inputProps={{ style: { color: '#000' } }}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Units"
            name="units"
            value={formData.units}
            onChange={handleChange}
            required
            inputProps={{ style: { color: '#000' } }}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            inputProps={{ style: { color: '#000' } }}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Selling Price"
            name="sellingPrice"
            value={formData.sellingPrice}
            onChange={handleChange}
            required
            inputProps={{ style: { color: '#000' } }}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Purchase Price"
            name="purchasePrice"
            value={formData.purchasePrice}
            onChange={handleChange}
            required
            inputProps={{ style: { color: '#000' } }}
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" color="primary">
            Add Inventory Item
          </Button>
        </form>

        {/* Edit Dialog */}
        <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
          <DialogTitle>Edit Inventory Item</DialogTitle>
          <DialogContent>
            <DialogContentText>Edit the details of the inventory item.</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Item"
              name="item"
              value={formData.item}
              onChange={handleChange}
              fullWidth
              required
              inputProps={{ style: { color: '#000' } }}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="dense"
              label="Code"
              name="code"
              value={formData.code}
              onChange={handleChange}
              fullWidth
              required
              inputProps={{ style: { color: '#000' } }}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="dense"
              label="Units"
              name="units"
              value={formData.units}
              onChange={handleChange}
              fullWidth
              required
              inputProps={{ style: { color: '#000' } }}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="dense"
              label="Quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              fullWidth
              required
              inputProps={{ style: { color: '#000' } }}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="dense"
              label="Selling Price"
              name="sellingPrice"
              value={formData.sellingPrice}
              onChange={handleChange}
              fullWidth
              required
              inputProps={{ style: { color: '#000' } }}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="dense"
              label="Purchase Price"
              name="purchasePrice"
              value={formData.purchasePrice}
              onChange={handleChange}
              fullWidth
              required
              inputProps={{ style: { color: '#000' } }}
              sx={{ mb: 2 }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEditDialogOpen(false)} color="primary">
              Cancel
            </Button>
            <Button onClick={handleEditSubmit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Main>
    </Box>
  );
};

export default InventoryPage;
