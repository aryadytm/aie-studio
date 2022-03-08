import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions, Container} from '@mui/material';


export default function Pricing() {
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
              Coming Soon!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This page will display prices for app usage.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}