import React from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'
import Mars2 from './Mars2'
import AnimatedStars from '../../AnimatedStars.jsx'

const BackgroundMars = () => {
  return (
    <Canvas>
        <color attach='background' args={['black']}/>
        <AnimatedStars />
        <OrbitControls passive={true}/>
         <ambientLight intensity={1} />
        <Mars2 />
    </Canvas>
  )
}

export default BackgroundMars