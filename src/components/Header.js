import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from './../assets/images/logo.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './../assets/css/Header.css'
import './../assets/css/Common.css'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Event', path: '/event' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Mud Therapy', path: '/mudtherapy' },
  { label: 'Videos', path: '/videos' }
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutAnchorEl, setAboutAnchorEl] = useState(null);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleAboutMenuOpen = (event) => {
    setAboutAnchorEl(event.currentTarget);
  };

  const handleAboutMenuClose = () => {
    setAboutAnchorEl(null);
  };

  const handleServicesMenuOpen = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesMenuClose = () => {
    setServicesAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: '#d2691e' }}>
        Utkal Jagruti Seva Sangh
      </Typography>
      <Divider />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={handleAboutMenuOpen}>
          <ListItemText primary="About " /><KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </ListItem>
        {aboutAnchorEl && (
          <Box sx={{ pl: 2 }}>
            <ListItem button component={Link} to="/about">
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button component={Link} to="/history">
              <ListItemText primary="History" />
            </ListItem>
            <ListItem button component={Link} to="/objectives">
              <ListItemText primary="Objectives" />
            </ListItem>
            <ListItem button component={Link} to="/leadership">
              <ListItemText primary="Leadership" />
            </ListItem>
            <ListItem button component={Link} to="/health">
              <ListItemText primary="Health" />
            </ListItem>
            <ListItem button component={Link} to="/education">
              <ListItemText primary="Education" />
            </ListItem>
          </Box>
        )}
        <ListItem button onClick={handleServicesMenuOpen}>
          <ListItemText primary="Services " /><KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </ListItem>
        {servicesAnchorEl && (
          <Box sx={{ pl: 2 }}>
            <ListItem button component={Link} to="/education">
              <ListItemText primary="Education" />
            </ListItem>
            <ListItem button component={Link} to="/cancerseva">
              <ListItemText primary="Cancer Seva" />
            </ListItem>
            <ListItem button component={Link} to="/blooddonation">
              <ListItemText primary="Blood Donation" />
            </ListItem>
            <ListItem button component={Link} to="/gramviakash">
              <ListItemText primary="Gram Vikash" />
            </ListItem>
          </Box>
        )}
        <ListItem button component={Link} to="/event">
          <ListItemText primary="Event" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
      <Divider />
      {/* <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1 }}>
        <IconButton href="https://facebook.com" target="_blank" aria-label="Facebook" color="inherit">
          <FacebookIcon sx={{ color: '#d2691e' }} />
        </IconButton>
        <IconButton href="https://youtube.com" target="_blank" aria-label="YouTube" color="inherit">
          <YouTubeIcon sx={{ color: '#d2691e' }} />
        </IconButton>
      </Box> */}
      <Box sx={{ mt: 2 }}>
        <Button component={Link} to="/donate" variant="contained" sx={{ backgroundColor: '#d2691e', borderRadius: '20px' }}>
          Donate
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box className="header-root">
      <AppBar position="static" className="header-appbar">
        <Toolbar className="header-toolbar max-width">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box className="header-logo-container" sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img src={logo} alt="Logo" className="header-logo" />

            {/* Wrap both titles in a vertical container */}
            <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 2 }}>
              <Typography variant="h1" component="div" className="header-title">
                Utkal Jagruti Seva Sangh
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                className="header-subtitle"
                sx={{ fontSize: '1.5rem' }}
              >
                ଉତ୍କଳ ଜାଗୃତୀ ସେବା ସଙ୍ଘ
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
            <Button component={Link} to="/" className="header-button">
              Home
            </Button>
            <Button
              className="header-button"
              aria-controls="about-menu"
              aria-haspopup="true"
              onClick={handleAboutMenuOpen}
            >
              About <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            </Button>
            <Menu
              id="about-menu"
              anchorEl={aboutAnchorEl}
              open={Boolean(aboutAnchorEl)}
              onClose={handleAboutMenuClose}
              MenuListProps={{
                'aria-labelledby': 'about-button',
              }}
            >
              <MenuItem component={Link} to="/about" onClick={handleAboutMenuClose}>
                About Us
              </MenuItem>
              <MenuItem component={Link} to="/aboutodisha" onClick={handleAboutMenuClose}>
                About Odisha
              </MenuItem>
              <MenuItem component={Link} to="/otherorganizations" onClick={handleAboutMenuClose}>
                Other Organizations
              </MenuItem>
            </Menu>
            <Button
              className="header-button"
              aria-controls="services-menu"
              aria-haspopup="true"
              onClick={handleServicesMenuOpen}
            >
              Services <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            </Button>
            <Menu
              id="services-menu"
              anchorEl={servicesAnchorEl}
              open={Boolean(servicesAnchorEl)}
              onClose={handleServicesMenuClose}
              MenuListProps={{
                'aria-labelledby': 'services-button',
              }}
            >
              <MenuItem component={Link} to="/education" onClick={handleServicesMenuClose}>
                Education
              </MenuItem>
              <MenuItem component={Link} to="/cancerseva" onClick={handleServicesMenuClose}>
                Cancer Seva
              </MenuItem>
              <MenuItem component={Link} to="/blooddonation" onClick={handleServicesMenuClose}>
                Blood Donation
              </MenuItem>
              <MenuItem component={Link} to="/gramviakash" onClick={handleServicesMenuClose}>
                Gram Vikash
              </MenuItem>
            </Menu>
            <Button component={Link} to="/event" className="header-button">
              Event
            </Button>
            <Button component={Link} to="/contact" className="header-button">
              Contact Us
            </Button>
            {/* <Button component={Link} to="/videos" className="header-button">
              Videos
            </Button> */}
            {/* <IconButton href="https://facebook.com" target="_blank" aria-label="Facebook" className="header-button">
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://youtube.com" target="_blank" aria-label="YouTube" className="header-button">
              <YouTubeIcon />
            </IconButton> */}
            <Button component={Link} to="/donate" variant="contained" className="header-donate-button">
              Donate
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Header;
