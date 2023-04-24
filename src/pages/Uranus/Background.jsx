import React, {Suspense, useRef, useState} from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useProgress, Html } from "@react-three/drei"
import AnimatedStars from '../../AnimatedStars.jsx'
import UranusSingle from './Uranus.jsx'




const UranusBackground = () => {

 
  return (
      <Canvas >
  
          <color attach='background' args={['black']}/>
          <ambientLight intensity={0.5} />
          <AnimatedStars />
          <OrbitControls passive={true}/>
          <UranusSingle />
      </Canvas>

  
  )
}

export default UranusBackground
