import React, { useRef, useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFrame, extend } from "@react-three/fiber";
import { useGLTF, Html } from "@react-three/drei";
import {data} from '../../data.js'
import '../../styles/fader.scss'



const SaturnSingle = () => {
const location = useLocation()
const path = location.pathname.split('/')[2]
const [planetInfo, setPlanetInfo] = useState([])

const memoSaturn = useMemo(() => {
    return useGLTF('/Saturn/Saturn.gltf')
})

const planet = useRef();
useFrame(() => {
    planet.current.rotation.y += 0.00002
});


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
        <primitive object={memoSaturn.scene} position={[1.3, -0.2, 0]} scale={0.003}/>
    </mesh>
    </>
  
      
  )
}

export default SaturnSingle