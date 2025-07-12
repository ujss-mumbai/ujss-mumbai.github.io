import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: '#d2691e', color: '#fff', p: 4, mt: 5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', maxWidth: 1200, mx: 'auto' }}>
        <Box sx={{ flex: '1 1 200px', m: 1 }}>
          <Typography variant="h6" gutterBottom>
            🔗 Quick <Box component="span" sx={{ borderBottom: '2px solid #fff' }}>Links</Box>
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
            <li><MuiLink component={Link} to="/about" underline="none" sx={{ color: '#fff' }}>About Us</MuiLink></li>
            <li><MuiLink component={Link} to="/education" underline="none" sx={{ color: '#fff' }}>Education</MuiLink></li>
            <li><MuiLink component={Link} to="/cancerseva" underline="none" sx={{ color: '#fff' }}>Cancer Seva</MuiLink></li>
            <li><MuiLink component={Link} to="/blooddonation" underline="none" sx={{ color: '#fff' }}>Blood Donation</MuiLink></li>
            <li><MuiLink component={Link} to="/gramviakash" underline="none" sx={{ color: '#fff' }}>Gram Vikash</MuiLink></li>
          </Box>
        </Box>
        <Box sx={{ flex: '1 1 200px', m: 1 }}>
          <Typography variant="h6" gutterBottom>
            🔗 Other <Box component="span" sx={{ borderBottom: '2px solid #fff' }}>Links</Box>
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
            <li><MuiLink component={Link} to="/event" underline="none" sx={{ color: '#fff' }}>Sewa Work</MuiLink></li>
            <li><MuiLink component={Link} to="/donate" underline="none" sx={{ color: '#fff' }}>Donate</MuiLink></li>
            <li><MuiLink component={Link} to="/privacy-policy" underline="none" sx={{ color: '#fff' }}>Privacy Policy</MuiLink></li>
            <li><MuiLink component={Link} to="/terms-of-use" underline="none" sx={{ color: '#fff' }}>Terms of Use</MuiLink></li>
            <li><MuiLink component={Link} to="/contact" underline="none" sx={{ color: '#fff' }}>Contact Us</MuiLink></li>
          </Box>
        </Box>
        <Box sx={{ flex: '1 1 200px', m: 1 }}>
          <Typography variant="h6" gutterBottom>
            🔗 Contact <Box component="span" sx={{ borderBottom: '2px solid #fff' }}>Details</Box>
          </Typography>
          <Typography component="address" sx={{ fontStyle: 'normal' }}>
            <strong>Utkal Jagruti Seva Sangh</strong><br />
            #306, Kaveri Complex, Jagannath mandir road, Opp. Holiday Inn Hotel, Sakinaka Mumbai- 400072<br />
            <span>✉️ <MuiLink href="mailto:kalingashram.1999@gmail.com" sx={{ color: '#fff' }}>ujss.mumbai@gmail.com</MuiLink></span><br />
          </Typography>
        {/* </Box>
        <Box sx={{ flex: '1 1 200px', m: 1 }}>
          <Typography variant="h6" gutterBottom>
            📰 News <Box component="span" sx={{ borderBottom: '2px solid #fff' }}>Letter</Box>
          </Typography>
          <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', mb: 2 }}>
            <TextField
              type="email"
              placeholder="E-Mail Id"
              variant="outlined"
              size="small"
              sx={{ bgcolor: '#fff', borderRadius: 1, mr: 1, flexGrow: 1 }}
            />
            <Button variant="contained" sx={{ bgcolor: '#fff', color: '#d2691e' }}>
              Subscribe
            </Button>
          </Box> */}
          {/* <Typography variant="h6" gutterBottom>
            Get In Touch
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton href="https://facebook.com" target="_blank" aria-label="Facebook" sx={{ color: '#fff' }}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://youtube.com" target="_blank" aria-label="YouTube" sx={{ color: '#fff' }}>
              <YouTubeIcon />
            </IconButton>
          </Box> */}
        </Box>
      </Box>
      <Box sx={{ textAlign: 'center', mt: 4, borderTop: '1px solid #fff', pt: 1, fontWeight: 'bold' }}>
        Regd. No-MUM No 7240-91 Of 2007-2008 Under Societies Registration Act XXI of 1860 <br></br>
        Utkal Jagruti Seva Sangh
      </Box>
    </Box>
  );
}

export default Footer;
