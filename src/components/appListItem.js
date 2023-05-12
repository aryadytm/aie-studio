import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Grid} from '@mui/material';
import {Button, CardActionArea, CardActions} from '@mui/material';
import {Link} from '@mui/material';


export default function AppListItem({ name, description, route, status, element }) {
  
  const loadingButton = (
    <Button variant="outlined">Loading...</Button>
  )
  
  const onlineButton = (
    <Button href={"/app/" + route} variant="contained">Go To App</Button>
  )
  
  const offlineButton = (
    <Button variant="outlined" color="error">Offline</Button>
  )

  return (
    <Grid item key={name} xs={12} sm={6} md={4}>
      <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <CardMedia
          component="img"
          image={process.env.PUBLIC_URL + "images/apps/" + route + ".webp"}
          alt={name}
        />
        <CardContent sx={{flexGrow: 1}}>
          <Typography gutterBottom variant="h6" component="h2">
            {name}
          </Typography>
          <Typography variant="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          { status === "online" ? onlineButton : status === "loading" ? loadingButton : offlineButton }
        </CardActions>
      </Card>
    </Grid>
  )
}