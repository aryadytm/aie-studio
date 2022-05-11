import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AppItem from '../components/AppListItem';
import axios from 'axios';


export default function Apps({ apps }) {
  /**
   * apps
   * .name: str
   * .description: str
   * .route: str (equivalent to deta app name)
   * .element: Component
   * .status: str (online, offline, loading), added after copy
   */
  
  let appsCopy = apps.map(val => ({...val, status: "loading"}))
  let [appsData, setAppsData] = React.useState(appsCopy)
  
  const getDetaAppStatus = (appName, detaApps) => {
    try {
      const detaApp = detaApps.find(dApp => dApp.name === appName)
      return detaApp.is_active ? "online" : "offline"
    }
    catch (err) {
      console.log(err.message)
      return "offline"
    }
  }
  
  React.useEffect(() => {
    // Change the app status according to status from deta server.
    // The apps must match appRoutes.
    
    axios.get(`https://dsa1jvcch.deta.dev/get_services/FxfK3lktAAFxfK3lktAmyatpS17iju9H0tAmyqfzNJ`)
      
      .then(res => {
        // Process the returned data, update app statuses.
        const detaApps = res.data
        setAppsData(oldVal =>
          apps.map(val => ({...val, status: getDetaAppStatus(val.route, detaApps)}))
        )
      })
      
      .catch(err => {
        // Set all apps status to offline.
        setAppsData(oldVal =>
          apps.map(val => ({...val, status: "offline"}))
        )
      })
    
  }, [])
  
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
              Here are our <b style={{color: "#0480fc"}}>AI powered apps</b>. Use them to help you create better content in less time.
            </Typography>
          </Container>
        </Box>
        <Container sx={{py: 8}} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            
            {appsData.map((application) => (
              <AppItem
                name={application.name}
                description={application.description}
                route={application.route}
                status={application.status}
                element={application.element}
              />
            ))}
            
          </Grid>
        </Container>
      </main>
    </>
  );
}