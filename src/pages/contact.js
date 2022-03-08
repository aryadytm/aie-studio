import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Button, CardActionArea, CardActions} from '@mui/material';

import {Link} from 'react-router-dom';


export default function Contact() {

  return (
    <Container sx={{height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Typography>
        Contact Page is Coming Soon!
      </Typography>
    </Container>
  );
}