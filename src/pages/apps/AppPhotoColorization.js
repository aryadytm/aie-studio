import React, {useEffect} from "react"
import IframeResizer from "iframe-resizer-react"
import axios from "axios"

import {Skeleton, Box, Container, Typography, Button} from "@mui/material"
import Offline from "../../components/Offline"


export default function AppPhotoColorization() {
  const appRoute = window.location.pathname.split("/")[2] // Equivalent to deta app name

  // Display Loading content
  const [content, setContent] = React.useState(
    <Container sx={{height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Box sx={{width: 720}}>
        <Typography variant="h1"> <Skeleton /> </Typography>
        <br/>
        <Typography variant="p"> <Skeleton /> </Typography>
        <Typography variant="p"> <Skeleton /> </Typography>
        <Typography variant="p"> <Skeleton /> </Typography>
        <br/>
        <Typography variant="p"> <Skeleton /> </Typography>
        <Typography variant="p"> <Skeleton /> </Typography>
        <Typography variant="p"> <Skeleton /> </Typography>
        <br/>
      </Box>
    </Container>

  )

  useEffect(() => {
    axios.get(`https://dsa1jvcch.deta.dev/get_service/FxfK3lktAAFxfK3lktAmyatpS17iju9H0tAmyqfzNJ/${appRoute}`)
      .then(res => {
        // Change to iframe
        setContent(
          <IframeResizer
            log
            inPageLinks
            src="https://aryadytm-photo-colorization.hf.space/?__theme=light#lighttheme"
            heightCalculationMethod="lowestElement"
            scrolling="no"
            style={{width: '1px', minWidth: '100%', minHeight: '100vh', flexGrow: 1, overflow: "hidden"}}
          />
        )
      })
      .catch(err => {
        // Display offline
        setContent(<Offline />)
      })

  }, [])

  return content
}