import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions, Container} from '@mui/material';


export default function NoPage() {
  return (
    <Container sx={{height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Card sx={{maxWidth: 345}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={process.env.PUBLIC_URL + "/images/404.png"}
            alt="404 page not found"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Page Not Found
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sorry, we couldn't find the page you're looking for.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button href="/" size="small" color="primary">
            Return
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}