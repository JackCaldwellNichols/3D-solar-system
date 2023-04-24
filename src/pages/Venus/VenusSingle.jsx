import React, {useMemo, useRef, useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import { useGLTF, Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import {data} from '../../data.js'
import '../../styles/fader.scss'

const VenusSingle = () => {

const location = useLocation()
const path = location.pathname.split('/')[2]


const venusMemo = useMemo(() => {
    return useGLTF('/Venus/Venus.gltf')
})

const planet = useRef();
useFrame(() => {
    planet.current.rotation.y += 0.0004
    2
});

const [planetInfo, setPlanetInfo] = useState([])

useEffect(() => {
    data.map((d) => {
      if(d.name===path){
        setPlanetInfo(d)
      }
    })
}, [])

  return (
    <>
    <Html>
    <div className="fader">
        <div className="faderContainer">
            <h1 className="title">{planetInfo.name}</h1>
            <p className="overview">{planetInfo.overview}</p>
            <ul>
            <li>Moons: {planetInfo.moons}</li>
            <li>Year Length: {planetInfo.year}</li>
            <li>Distance from the Sun:  {planetInfo.distance}</li>
        </ul>
        </div>
    </div>
    </Html>
    <mesh ref={planet}>
        <primitive object={venusMemo.scene} position={[1.3, 0, 1]} scale={0.003}/>
    </mesh>
    </>
  )
}

export default VenusSingle