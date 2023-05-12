import * as React from 'react'
import {BrowserRouter, Routes, Route, HashRouter, Navigate} from "react-router-dom"
// Components
import Layout from './Layout'
import NavBar from "./components/NavBar"
// Pages
import Home from "./pages/Home"
import NoPage from "./pages/NoPage"
import Apps from './pages/Apps'
import Team from './pages/Team'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import Roadmap from './pages/Roadmap'
// Apps
import AppRemovePhotoBackground from './pages/apps/AppRemovePhotoBackground'
import AppRemovePhotoObject from './pages/apps/AppRemovePhotoObject'
import AppParaphrase from './pages/apps/AppParaphrase'
import AppPhotoColorization from './pages/apps/AppPhotoColorization'
import AppPhotoLowLightEnhance from './pages/apps/AppPhotoLowLightEnhance'


// Configuration
const navbarPages = [
  // {name: "Home", url: "/"},
  {name: "Apps", url: "/apps"},
  {name: "Pricing", url: "/pricing"},
  {name: "Roadmap", url: "/roadmap"},
  {name: "Blog", url: "/blog"},
  {name: "Team", url: "/team"},
]


const apps = [
  {
    name: "Photo Background Changer",
    description: "Use AI to change or remove background of photo in seconds.",
    route: "remove-photo-background",
    element: <AppRemovePhotoBackground/>,
  },
  {
    name: "Text Paraphraser",
    description: "This AI can rewrite your text with minimal similarity.",
    route: "paraphrase",
    element: <AppParaphrase/>,
  },
  {
    name: "Remove Object From Photo",
    description: "Thanks to our AI, you just need to draw the part of image that you want to remove.",
    route: "remove-photo-object",
    element: <AppRemovePhotoObject/>,
  },
  {
    name: "Colorize Gray Photo",
    description: "Colorize old or grayscale photo in seconds.",
    route: "photo-colorization",
    element: <AppPhotoColorization/>,
  },
  {
    name: "Enhance Low Light Image",
    description: "Your photo is too dark or needs enhancement? This AI is for you.",
    route: "photo-low-light-enhance",
    element: <AppPhotoLowLightEnhance/>,
  },
]

const team = [
  {
    name: "Arya Adyatma",
    nim: "Founder",
    position: "https://linkedin.com/in/arya-adyatma-aryadytm"
  },
]

// Routes
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout navbarPages={navbarPages} />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="apps" element={<Apps apps={apps} />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="blog" element={<Blog />} />
          <Route path="team" element={<Team team={team} />} />
          <Route path="roadmap" element={<Roadmap />} />
          <Route path="app">
            <Route index element={<NoPage />} />
            <Route path="*" element={<NoPage />} />
            {
              apps.map((application) => {
                return <Route path={application.route} element={application.element} />
              })
            }
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App