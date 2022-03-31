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
  },
  
  // App 2: Video Background Removal
  
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
    name: "",
    nim: "We are a group of students from BINUS University majoring in Business Information Technology.",
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