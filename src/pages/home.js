import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AppListItem from '../components/appListItem';
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
              Entrepreneur Apps
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Dedicated for Entrepreneurship group. We build high-tech apps that uses AI (artificial intelligence).
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button sx={{mt: 4}} href="apps" variant="contained">START USING OUR APPS</Button>
              {/* <Button variant="outlined">Secondary action</Button> */}
            </Stack>
          </Container>
        </Box>
      </main>
    </>
  )
}