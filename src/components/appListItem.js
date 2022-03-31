import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import {Button, CardActionArea, CardActions} from '@mui/material';
import { Link } from '@mui/material';


export default function AppListItem({ appItem }) {
  /**
   * icon (string, available from svg icon list)
   * name (string)
   * description (string)
   * route (string)
   * image (string)
   */
  const { name, description, route, image } = appItem

  return (
    <Grid item key={name} xs={12} sm={6} md={4}>
      <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <CardMedia
          component="img"
          image={image}
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
          <Button href={"/app/" + route} size="small" variant="contained">GO TO APP</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}