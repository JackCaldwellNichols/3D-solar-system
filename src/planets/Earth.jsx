import React, {useRef, useMemo} from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'



const Earth = () => {
    const earthPositionRef = useRef(new THREE.Vector3(8, 0, 0))
    const memoEarth = useMemo(() => {
        return useGLTF('/Earth/Earth.gltf')
    })

    const planet = useRef();
    useFrame(({clock}) => {
        planet.current.position.x = Math.sin(clock.getElapsedTime() * 0.102) * 22
        planet.current.position.z = Math.cos(clock.getElapsedTime() * 0.102) * 22
      // const angle = clock.getElapsedTime() * 0.3
        //const distance = 8
        //const x = Math.sin(angle) * distance
        //const z = Math.cos(angle) * distance
        //planet.current.position.set(x, 0, z)
        planet.current.rotation.y += 0.004
        //earthPositionRef.current = planet.current.position
});








  return (
    <mesh ref={planet} visible receiveShadow>
        <primitive object={memoEarth.scene} position={[2, 0, 0.5]} scale={0.0009}/>
    </mesh>
  )
}

export default Earth