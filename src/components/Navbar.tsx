import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { text: 'HOME', path: '/' },
    { text: 'ABOUT ME', path: '/about' },
    { text: 'RESUME', path: '/resume' },
    { text: 'PROJECTS', path: '/projects' },
    { text: 'CONTACT', path: '/contact' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar 
      position="fixed" 
      sx={{
        background: 'transparent',
        boxShadow: 'none',
        pt: 2,
        px: { xs: 2, md: 4 }
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography 
          component={Link} 
          to="/"
          variant="h6" 
          sx={{ 
            textDecoration: 'none',
            color: '#2d2d2d',
            fontWeight: 700,
            fontSize: '1.5rem'
          }}
        >
          Shubham Soni
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          {menuItems.map((item) => (
            <Button
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                mx: 1,
                color: isActive(item.path) ? '#2d2d2d' : '#666',
                fontWeight: isActive(item.path) ? 700 : 400,
                '&:hover': { color: '#2d2d2d' }
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          sx={{ 
            display: { xs: 'block', md: 'none' },
            color: '#2d2d2d'
          }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            width: 240,
            backgroundColor: '#f8f8f8'
          }
        }}
      >
        <List sx={{ pt: 8 }}>
          {menuItems.map((item) => (
            <ListItem 
              key={item.text}
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                color: isActive(item.path) ? '#2d2d2d' : '#666',
                fontWeight: isActive(item.path) ? 700 : 400,
                '&:hover': { color: '#2d2d2d' }
              }}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
