import * as React from 'react'
import {BrowserRouter, Routes, Route, HashRouter} from "react-router-dom"

// Misc
import Layout from "./layout"
// Pages
import Home from "./pages/home"
import NoPage from "./pages/noPage"
import Apps from './pages/apps'
import Contact from './pages/contact'
// Apps
import ImageBGTool from './apps/imagebgtool'


const apps = [
  {
    name: "Image Background Removal",
    description: "Uses AI to remove background of image.",
    route: "image-background-removal",
    background: "",
    icon: "",
    element: <ImageBGTool/>
  },
  
]

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="apps" element={<Apps apps={apps}/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="app">
            <Route index element={<NoPage />} />
            <Route path="*" element={<NoPage />} />
            {
              apps.map((application) => {
                return <Route path={application.route} element={application.element} />
              })
            }
            {/* <Route path="image-background-removal" element={<ImageBGTool />} /> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App