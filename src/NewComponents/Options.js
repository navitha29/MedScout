import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const OptionButton = styled(Button)(({ theme, bgcolor }) => ({
  backgroundColor: bgcolor,
  color: 'black',
  '&:hover': {
    backgroundColor: theme.palette.grey[300],
  },
  boxShadow: theme.shadows[3],
  margin: theme.spacing(1),
  width: '100%',
  height: '60px',
  display: 'block',
  fontSize: '16px'
}));

const Options = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, padding: '20px', textAlign: 'center' }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={2}>
          <OptionButton
            bgcolor="#c8e6c9"
            onClick={() => navigate('/list')}
          >
            Create List
          </OptionButton>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <OptionButton
            bgcolor="#c8e6c9"
            onClick={() => navigate('/view-pharmacy-replies')}
          >
            View Pharmacy Replies
          </OptionButton>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <OptionButton
            bgcolor="#c8e6c9"
            onClick={() => navigate('/post')}
          >
            Post
          </OptionButton>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <OptionButton
            bgcolor="#c8e6c9"
            onClick={() => navigate('/diagnosis')}
          >
            Search Symptoms
          </OptionButton>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <OptionButton
            bgcolor="#c8e6c9"
            onClick={() => navigate('/contact-list')}
          >
            Contact List
          </OptionButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Options;
