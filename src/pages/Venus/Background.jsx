import React from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useProgress, Html } from "@react-three/drei"
import AnimatedStars from '../../AnimatedStars.jsx'
import VenusSingle from './VenusSingle.jsx';



const VenusBackground = () => {

 
  return (
      <Canvas >
  
          <color attach='background' args={['black']}/>
          <ambientLight intensity={0.5} />
          <AnimatedStars />
          <OrbitControls passive={true}/>
          <VenusSingle />
      </Canvas>

  
  )
}

export default VenusBackground
