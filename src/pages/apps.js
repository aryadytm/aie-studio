import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AppItem from '../components/AppListItem';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Apps({ apps }) {
  /**
   * props:
   * - apps
   *  .name
   *  .description
   *  .icon
   *  .background
   *  .route
   */
  
  return (
    <>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 0,
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
              Apps
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Here are our AI powered apps. Use them to help you create better content.
            </Typography>
          </Container>
        </Box>
        <Container sx={{py: 8}} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {apps.map((application) => (
              <AppItem appItem={application}></AppItem>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}