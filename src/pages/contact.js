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
      <Card sx={{maxWidth: 345}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://media.istockphoto.com/vectors/blurred-large-panoramic-summer-background-multicolored-gradient-vector-id1308575675?k=20&m=1308575675&s=612x612&w=0&h=BRUnyR9dR36QZut6WNP9L5o32wc-GR1YTbD0J2Ffj-U="
            alt="coming soon"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Business Information Technology
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Kelompok Entrepreneurship
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}