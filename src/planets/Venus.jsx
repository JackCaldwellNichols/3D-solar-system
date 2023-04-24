import React, {useRef, useMemo} from 'react'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei'



const Venus = () => {


  const memoVenus = useMemo(() => {
    return useGLTF('./Venus/Venus.gltf')
})

    const venus = useRef();
    useFrame(({clock}) => {
        venus.current.position.x = Math.sin(clock.getElapsedTime() * 0.100) * 15
        venus.current.position.z = Math.cos(clock.getElapsedTime() * 0.100) * 15
        venus.current.rotation.y += 0.00001
});


  return (
        <mesh ref={venus}  
              visible>
                <primitive object={memoVenus.scene} position={[2, 0, 0]} scale={0.00087}/>
            </mesh>    

  )
}

export default Venus