import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions, Container} from '@mui/material';


export default function Pricing() {
  return (
    <Container sx={{height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 8, pb: 4}}>
      <Card sx={{maxWidth: 345}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={process.env.PUBLIC_URL + "/images/pricing.png"}
            alt="coming soon"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pricing Model
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <ol>
              <li>When using our app, you need to top up "Credits" first, which is our virtual currency that only used in AIE Studio</li>
              <li>You top up the credits from various payment gateways such as Bank Transfer, Virtual Account, GO-PAY, OVO, QRIS or other ewallet providers</li>
              <li>You can start using our AI services by <b>Pay Per Usage basis</b></li>
              <li>For example, in the Background Remover app, every usage decreases your credit Rp500.</li>
            </ol> 
            <b>NOTE: </b>For now, the payment system is not implemented yet. Users can use our AI services for free.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}