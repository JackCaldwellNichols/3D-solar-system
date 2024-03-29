import React, {useState} from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'
import Mars2 from './Mars2'
import AnimatedStars from '../../AnimatedStars.jsx'
import Topbar from '../../components/Topbar.jsx'
import Menu from '../../components/Menu.jsx'


const BackgroundMars = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Canvas>
        <color attach='background' args={['black']}/>
        <AnimatedStars />
        <OrbitControls passive={true}/>
         <ambientLight intensity={1} />
        <Mars2 />
    </Canvas>
    </>
  )
}

export default BackgroundMars