import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AppListItem from '../components/appListItem';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Apps(props) {
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
              Some of these apps are powered by AI so it looks intelligent!
            </Typography>
          </Container>
        </Box>
        <Container sx={{py: 8}} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {props.apps.map((application) => (
              <AppListItem name={application.name} description={application.description} route={application.route}></AppListItem>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}