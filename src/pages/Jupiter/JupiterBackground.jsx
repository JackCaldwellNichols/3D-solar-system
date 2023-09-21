import React, {useState} from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useHelper } from "@react-three/drei"
import AnimatedStars from '../../AnimatedStars.jsx'
import Topbar from '../../components/Topbar.jsx'
import Menu from '../../components/Menu.jsx'
import JupiterSingle from './JupiterSingle.jsx';



const JupiterBackground = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Canvas>
            <color attach='background' args={['black']}/>
            <ambientLight intensity={1} />
            <AnimatedStars />
            <OrbitControls passive={true}/>
            <JupiterSingle />
        </Canvas>
        </>

  )
}

export default JupiterBackground
