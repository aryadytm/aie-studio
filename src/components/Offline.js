import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions, Container} from '@mui/material';


export default function Offline() {
  return (
    <Container sx={{height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Card sx={{maxWidth: 345}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={process.env.PUBLIC_URL + "/images/offline.jpg"}
            alt="App is offline"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Offline
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This app is currently offline. Please try again later.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button href="/apps" size="small" color="primary">
            Return
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}