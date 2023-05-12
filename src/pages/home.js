import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AppListItem from '../components/AppListItem';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export default function Home() {

  return (
    <>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 12,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              AI for Everyone
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              We build <b style={{color: "#0480fc"}}>high tech apps</b> that use AI (artificial intelligence). Check our apps!
            </Typography>
            
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              sx={{pb: 8}}
            >
              <Button sx={{mt: 4}} href="apps" variant="contained">START USING AIE STUDIO</Button>
              {/* <Button variant="outlined">Secondary action</Button> */}
            </Stack>
            
            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
              <iframe width="600" height="360" src="https://www.youtube.com/embed/v2ihFYgqaIk?autoplay=0&mute=0" />
            </Box>
            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
              <iframe width="600" height="300" src="https://www.youtube.com/embed/v2ihFYgqaIk?autoplay=0&mute=0" />
            </Box>
            
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              sx={{mt:8}} 
              gutterBottom
            >
              Mobile Friendly!
            </Typography>
            
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Use our AI based apps in any device anywhere!
            </Typography>
            
            <Stack sx={{mt: 4, pb: 8}}>
              <img src={process.env.PUBLIC_URL + "/images/mockup.jpg"} alt="AIE Studio Apps" />
            </Stack>
            
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              sx={{mt:4}} 
              gutterBottom
            >
              The Most Advanced AI Problem Solver!
            </Typography>
            
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              From <b>colorize grayscale photo</b> to <b>paraphrase a text</b>, we continuously
              integrate our AI to solve the world's demanding problems. Start using AIE Studio now!
            </Typography>
            
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              sx={{pb: 8}}
            >
              <Button sx={{mt: 4}} href="apps" variant="contained">START USING OUR AI APPS</Button>
              {/* <Button variant="outlined">Secondary action</Button> */}
            </Stack>
            
          </Container>
        </Box>
      </main>
    </>
  )
}