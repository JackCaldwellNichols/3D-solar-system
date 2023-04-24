import React, {Suspense, useRef} from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useHelper } from "@react-three/drei"
import AnimatedStars from '../../AnimatedStars.jsx'
import { useParams } from 'react-router-dom';
import SaturnSingle from './SaturnSingle.jsx';
import Loading from '../../components/Loading.jsx';


const BackgroundSaturn = () => {

  return (
        <Canvas>
            <color attach='background' args={['black']}/>
            <ambientLight intensity={1} />
            <AnimatedStars />
            <OrbitControls passive={true}/>
            <SaturnSingle />
        </Canvas>


  )
}

export default BackgroundSaturn
