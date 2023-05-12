import React, {useEffect} from "react"
import IframeResizer from "iframe-resizer-react"
import axios from "axios"

import {Skeleton, Box, Container, Typography, Button} from "@mui/material"
import Offline from "../../components/Offline"


export default function AppRemovePhotoObject() {
  return <IframeResizer
    log
    inPageLinks
    src="https://aryadytm-remove-photo-object.hf.space/?__theme=light#lighttheme"
    heightCalculationMethod="lowestElement"
    scrolling="no"
    style={{width: '1px', minWidth: '100%', minHeight: '100vh', flexGrow: 1, overflow: "hidden"}}
  />
}