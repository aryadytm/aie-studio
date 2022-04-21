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


export default function AppListItem({appItem}) {
  /**
   * icon (string, available from svg icon list)
   * name (string)
   * description (string)
   * route (string)
   * image (string)
   */
  const {name, description, route, image, isOnline} = appItem

  const onlineButton = (
    <Button href={"/app/" + route} variant="contained">GO TO APP</Button>
  )

  const offlineButton = (
    <Button variant="outlined">Coming Soon!</Button>
  )
  
  const offlineButton_ = (
    <Button variant="outlined" color="error">Offline</Button>
  )

  return (
    <Grid item key={name} xs={12} sm={6} md={4}>
      <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <CardMedia
          component="img"
          image={process.env.PUBLIC_URL + image}
          alt="app"
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
          { isOnline ? onlineButton : offlineButton }
        </CardActions>
      </Card>
    </Grid>
  )
}