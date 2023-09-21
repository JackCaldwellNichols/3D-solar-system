import AppSS from "./AppSS.jsx"
import './styles/app.scss'
import { useState, lazy, Suspense } from "react"
import Topbar from "./components/Topbar.jsx"
import Menu from "./components/Menu.jsx"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Background from "./pages/Earth/Background.jsx"
import BackgroundSaturn from "./pages/Saturn/BackgroundSaturn.jsx"
import Enter from "./pages/Enter.jsx"
import Loading from './components/Loading'
import BackgroundMars from "./pages/Mars/BackgroundMars.jsx"
import JupiterBackground from "./pages/Jupiter/JupiterBackground.jsx"
import MercuryBackground from "./pages/Mercury/MercuryBackground.jsx"
import NeptuneBackground from "./pages/Neptune/Background.jsx"
import VenusBackground from "./pages/Venus/Background.jsx"
import UranusBackground from "./pages/Uranus/Background.jsx"





function App() {



  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">

      <BrowserRouter>
      
     
      <Routes>
      <Route path="/" element={<Enter />} />

       <Route path="/home" element={ <AppSS />} />
        <Route path="/planet/Earth"  element={<Background />}/>
        <Route path="/planet/Saturn"  element={<BackgroundSaturn />}/>
        <Route path="/planet/Mars"  element={<BackgroundMars />}/>
        <Route path="/planet/Jupiter"  element={<JupiterBackground />}/>
        <Route path="/planet/Mercury"  element={<MercuryBackground   />}/>
        <Route path="/planet/Neptune"  element={<NeptuneBackground   />}/>
        <Route path="/planet/Venus"  element={<VenusBackground   />}/>
        <Route path="/planet/Uranus"  element={<UranusBackground   />}/>

      <Route path="/loading"  element={<Loading />}/> 
      </Routes>

     
  </BrowserRouter>
    
    </div>
 )
}

export default App
