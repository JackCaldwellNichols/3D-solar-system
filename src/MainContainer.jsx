import React, {useRef} from 'react'
import { OrbitControls, useHelper } from '@react-three/drei'
import AnimatedStars from './AnimatedStars'
import Sun from './planets/Sun'
import * as THREE from 'three'


const MainContainer = () => {

const directionalLightRef = useRef()
const directionalLightRef2 = useRef()
useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink')
useHelper(directionalLightRef2, THREE.DirectionalLightHelper, 1, 'hotpink')

  return (
    <>
        <color attach='background' args={['black']}/>
        <AnimatedStars />
        <OrbitControls />
        { /* <directionalLight ref={directionalLightRef} position={[0, 0, 10]} intensity={0.7} />
        <directionalLight ref={directionalLightRef2} position={[0, 0, -10]} intensity={0.7}/> */ }
        <Sun />
        
    </>

  )
}

export default MainContainer