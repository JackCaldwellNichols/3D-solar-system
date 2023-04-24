import React, {useRef} from 'react'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';





const Moon = () => {
    const moon = useRef();
    useFrame(({clock}) => {
        moon.current.position.x = Math.sin(clock.getElapsedTime() * 0.2) * 20
        moon.current.position.z = Math.cos(clock.getElapsedTime() * 0.2) * 20
        moon.current.rotation.y += 0.00005
});



const [moonTexture] = useTexture(['/assets/moon.jpg'])

const handleClick = () => {

}


  return (
  
        <mesh ref={moon} onClick={handleClick} position={[5,1, 0]}>
            <sphereGeometry args={[0.2, 32, 32]} />
            <meshPhongMaterial map ={moonTexture} />        
        </mesh>
      
  )
}

export default Moon