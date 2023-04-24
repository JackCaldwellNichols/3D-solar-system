import React, {Suspense, useRef, useState} from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useProgress, Html } from "@react-three/drei"
import AnimatedStars from '../../AnimatedStars.jsx'
import MercurySingle from './MercurySingle.jsx';



const MercuryBackground = () => {

 
  return (
      <Canvas >
  
          <color attach='background' args={['black']}/>
          <ambientLight intensity={3} />
          <AnimatedStars />
          <OrbitControls passive={true}/>
          <MercurySingle />
      </Canvas>

  
  )
}

export default MercuryBackground
