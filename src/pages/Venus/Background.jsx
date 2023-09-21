import React, {useState} from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useProgress, Html } from "@react-three/drei"
import AnimatedStars from '../../AnimatedStars.jsx'
import VenusSingle from './VenusSingle.jsx';
import Menu from '../../components/Menu.jsx'
import Topbar from '../../components/Topbar.jsx'


const VenusBackground = () => {
  const [menuOpen, setMenuOpen] = useState(false)
 
  return (
    <>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Canvas >
          <color attach='background' args={['black']}/>
          <ambientLight intensity={0.5} />
          <AnimatedStars />
          <OrbitControls passive={true}/>
          <VenusSingle />
      </Canvas>
      </>
  
  )
}

export default VenusBackground
