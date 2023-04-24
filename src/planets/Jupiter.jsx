import React, {useMemo, useRef} from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


const Jupiter = () => {

    const memoJup = useMemo(() => {
        return useGLTF('./Jupiter/Jupiter.gltf')
    })
    
        const jupiter = useRef();
        useFrame(({clock}) => {
            jupiter.current.position.x = Math.sin(clock.getElapsedTime() * 0.01) * 85
            jupiter.current.position.z = Math.cos(clock.getElapsedTime() * 0.01) * 85
            jupiter.current.rotation.y += 0.00001
    });
  return (
    <mesh   ref={jupiter} position={[5 ,1, 0]}  
            visible>
      <primitive object={memoJup.scene} position={[2, 0, 0]} scale={0.0043}/>
    </mesh>   
  )
}

export default Jupiter