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


export default function AppListItem(props) {
  /**
   * props.icon (string, available from svg icon list)
   * props.name (string)
   * props.description (string)
   * props.route (string)
   */

  return (
    <Grid item key={props.name} xs={12} sm={6} md={4}>
      <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <CardMedia
          component="img"
          image="https://media.istockphoto.com/vectors/blurred-large-panoramic-summer-background-multicolored-gradient-vector-id1308575675?k=20&m=1308575675&s=612x612&w=0&h=BRUnyR9dR36QZut6WNP9L5o32wc-GR1YTbD0J2Ffj-U="
          alt="app"
        />
        <CardContent sx={{flexGrow: 1}}>
          <Typography gutterBottom variant="h6" component="h2">
            {props.name}
          </Typography>
          <Typography variant="p">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button href={"app/" + props.route} size="small" variant="contained">GO TO APP</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}