import React, {useRef, useMemo} from 'react'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei'



const Mars = () => {


  const memoMars = useMemo(() => {
    return useGLTF('./Mars/Mars.gltf')
})

    const mars = useRef();
    useFrame(({clock}) => {
        mars.current.position.x = Math.sin(clock.getElapsedTime() * 0.05) * 30
        mars.current.position.z = Math.cos(clock.getElapsedTime() * 0.05) * 30
        mars.current.rotation.y += 0.00001
});




  return (
  
        <mesh ref={mars} position={[20,1, 0]}  
              visible>
                <primitive object={memoMars.scene} position={[2, 0, 0]} scale={0.0007}/>
            </mesh>    

  )
}

export default Mars