import React, {Suspense, useRef, useState} from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useProgress, Html } from "@react-three/drei"
import AnimatedStars from '../../AnimatedStars.jsx'
import Sphere from './EarthSingle.jsx';
import Loading from '../../components/Loading.jsx';
import EarthSingular from './EarthSingle.jsx';



const Background = () => {

 
  return (
      <Canvas >
  
          <color attach='background' args={['black']}/>
          <ambientLight intensity={3} />
          <AnimatedStars />
          <OrbitControls passive={true}/>
          <EarthSingular />
      </Canvas>

  
  )
}

export default Background
