import React, {useRef, useMemo} from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';





const Saturn = () => {
    const saturnRef = useRef();
    useFrame(({clock}) => {
        saturnRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.0075) * 100
        saturnRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.0075) * 100
        saturnRef.current.rotation.y += 0.00005
});




const memoSaturn = useMemo(() => {
  return useGLTF('/Saturn/Saturn.gltf')
})



  return (
   

    <mesh ref={saturnRef}>
        <primitive object={memoSaturn.scene} position={[0, 0, 1]} scale={0.004}/>
    </mesh>
       
      
  )
}

export default Saturn