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
import PhotoBGRemoverApp from './pages/apps/PhotoBGRemoverApp'


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
  // App 1: Photo Background Removal
  {
    name: "Photo Background Removal",
    description: "Use AI to remove background of photo in seconds.",
    route: "photo-background-removal",
    image: "images/apps/photo-background-removal.jpg",
    element: (() => {
      const data = {
        iframeUrlMain: "https://",
        iframeUrlBackup: "https://",
      }
      return <PhotoBGRemoverApp data={data} />
    })(),
    isOnline: true,
  },
  
  // App 2: Video Background Removal
  {
    name: "Video Background Removal",
    description: "Need to change virtual background? Or just need to remove the background? This AI app will help.",
    route: "video-background-removal",
    image: "images/apps/video-background-removal.jpg",
    element: (() => {
      const data = {
        iframeUrlMain: "https://",
        iframeUrlBackup: "https://",
      }
      return <></>
    })(),
    isOnline: false,
  },
  
  // App 3: Realistic Text To Speech
  {
    name: "Realistic Text-to-Speech",
    description: "This app use AI to generate realistic human-like voices. Just from a text!",
    route: "realistic-text-to-speech",
    image: "images/apps/realistic-text-to-speech.jpg",
    element: (() => {
      const data = {
        iframeUrlMain: "https://",
        iframeUrlBackup: "https://",
      }
      return <></>
    })(),
    isOnline: false,
  },
  
  // More apps
  {
    name: "Our Next AI App",
    description: "We continuously build AI apps to meet what the world needs. Stay tuned for our next apps!",
    route: "next-app",
    image: "images/apps/next-app.jpg",
    element: (() => {
      const data = {
        iframeUrlMain: "https://",
        iframeUrlBackup: "https://",
      }
      return <></>
    })(),
    isOnline: false,
  },
]

// const team = [
//   {
//     name: "Arya Adyatma",
//     nim: "2501985836",
//     position: "Chief Technology Officer"
//   },
//   {
//     name: "Kenneth Edbert Wijaya Chi",
//     nim: "2501970374",
//     position: "(Position)"
//   },
//   {
//     name: "Muhammad Rafly Basrie",
//     nim: "2502004872",
//     position: "(Position)"
//   },
//   {
//     name: "Nikodemus Aurelius Aristo",
//     nim: "2501987381",
//     position: "(Position)"
//   },
//   {
//     name: "Reno Reynaldo",
//     nim: "2501961975",
//     position: "(Position)"
//   },
// ]


const team = [
  {
    name: "Entrepreneurship Ideation - Kelompok 2 - LA80",
    nim: "We are a group of students from BINUS University majoring in Business Information Technology and Accounting Technology.",
    position: ""
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