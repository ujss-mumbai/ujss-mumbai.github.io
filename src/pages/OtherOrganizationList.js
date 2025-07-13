import React, { useState, useMemo } from 'react';
import {
  TextField,
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
} from '@mui/material';
import organizationData from '../data/organizationData';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


const OtherOrganizationList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sort the data alphabetically by name only once.
  const sortedOrganizations = useMemo(() => {
    return [...organizationData].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }, []);

  // Filter the sorted data based on the search term.
  const filteredData = sortedOrganizations.filter(
    (org) => {
      const lowerSearchTerm = searchTerm.toLowerCase();
      
      const matchesName = org.name.toLowerCase().includes(lowerSearchTerm);
      const matchesAddress = org.address && org.address.toLowerCase().includes(lowerSearchTerm);

      // Check contacts for a match in name or phone number
      const matchesContacts = org.contacts.some(contact => {
        const contactName = contact.name ? contact.name.toLowerCase().includes(lowerSearchTerm) : false;
        const contactPhone = contact.phone ? contact.phone.toLowerCase().includes(lowerSearchTerm) : false;
        return contactName || contactPhone;
      });

      return matchesName || matchesAddress || matchesContacts;
    }
  );

  return (
    <>
    <div className='container page-container'>
      <div className="">
        <h2 className='page-title'>List of Odia Organizations in Mumbai</h2>
      <TextField
        label="Search organizations"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginBottom: '24px' }}
      />

      <Grid container spacing={3}>
        {filteredData.map((org) => {
          // Find the index of the current organization in the original sorted list for consistent numbering.
          const originalIndex = sortedOrganizations.findIndex(item => item.name === org.name);

          return (
            <Grid size={{ xs: 12, sm: 2, md: 4 }}>
            {/* <Grid item xs={12} sm={6} md={4} key={org.name} className="org-item">  */}
              <Card elevation={3}>
                <CardContent className='org-item-card'>
                  {/* Display the numbering based on the original sorted index + 1 */}
                  <Typography variant="h6" gutterBottom>
                    {originalIndex + 1}. {org.name}
                  </Typography>
                  
                  {/* Address Field with Classes */}
                  {org.address && (
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      <strong className="org-label">Address:</strong> 
                      <span className="org-value">{org.address}</span>
                    </Typography>
                  )}
                  
                  {/* Contacts Field with Classes */}
                  {org.contacts && org.contacts.map((contact, idx) => (
                    <Typography
                      key={idx}
                      variant="body2"
                      color="text.secondary"
                    >
                      <strong className="org-label">Contact:</strong> 
                      <span className="org-value">
                        {contact.name || 'N/A'} {contact.phone && `- ${contact.phone}`}
                      </span>
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      </div>
    </div>
    </>
  );
};

export default OtherOrganizationList;