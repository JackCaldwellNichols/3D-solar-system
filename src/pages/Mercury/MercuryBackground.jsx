import React, { useState} from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useProgress, Html } from "@react-three/drei"
import AnimatedStars from '../../AnimatedStars.jsx'
import MercurySingle from './MercurySingle.jsx';
import Topbar from '../../components/Topbar.jsx'
import Menu from '../../components/Menu.jsx'



const MercuryBackground = () => {
  const [menuOpen, setMenuOpen] = useState(false)
 
  return (
    <>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Canvas >
  
          <color attach='background' args={['black']}/>
          <ambientLight intensity={3} />
          <AnimatedStars />
          <OrbitControls passive={true}/>
          <MercurySingle />
      </Canvas>
      </>
  
  )
}

export default MercuryBackground
