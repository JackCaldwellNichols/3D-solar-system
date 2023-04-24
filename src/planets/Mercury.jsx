import React, {useRef, useMemo} from 'react'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei'



const Mercury = () => {


  const memoMercury = useMemo(() => {
    return useGLTF('./Mercury/Mercury.gltf')
})

    const mercury = useRef();
    useFrame(({clock}) => {
        mercury.current.position.x = Math.sin(clock.getElapsedTime() * 0.16) * 12
        mercury.current.position.z = Math.cos(clock.getElapsedTime() * 0.16) * 12
        mercury.current.rotation.y += 0.00001
});




  return (
  
        <mesh ref={mercury}  
              visible>
                <primitive object={memoMercury.scene} position={[2, 0, 0]} scale={0.0003}/>
            </mesh>    

  )
}

export default Mercury