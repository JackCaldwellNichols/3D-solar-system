import React, {useState} from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import AnimatedStars from '../../AnimatedStars.jsx'
import Topbar from '../../components/Topbar.jsx'
import Menu from '../../components/Menu.jsx'
import SaturnSingle from './SaturnSingle.jsx';



const BackgroundSaturn = () => {
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
            <SaturnSingle />
        </Canvas>
        </>

  )
}

export default BackgroundSaturn
