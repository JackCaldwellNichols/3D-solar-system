import React, {useRef} from 'react'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'
import Earth from './Earth';
import Mars from './Mars';
import Saturn from './Saturn';
import Mercury from './Mercury';
import Jupiter from './Jupiter';
import Neptune from './Neptune';
import Venus from './Venus';
import Uranus from './Uranus';



const Sun = () => {
    const sunRef = useRef();
    
const [sunTexture] = useTexture(['/assets/sun.jpg'])



  return (
    <group>
        <mesh ref={sunRef} position={[0, 1, 0]} >
            <sphereGeometry args={[6, 32, 32]} />
            <meshPhongMaterial map={sunTexture} emissiveIntensity={0.6}/>   
            <ambientLight intensity={1} />     
            <pointLight castShadow intensity={1} />
           
        </mesh>
        <Mercury />
        <Venus />
        <Earth />
        <Mars />
        <Jupiter />
        <Saturn />
        <Uranus />
        <Neptune />


    </group>
  )
}

export default Sun