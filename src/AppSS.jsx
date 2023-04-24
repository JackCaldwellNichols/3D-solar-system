import { OrbitControls, Html, useProgress } from "@react-three/drei"
import MainContainer from "./MainContainer.jsx"
import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect } from "react"
import * as THREE from 'three'
import Loading from "./components/Loading.jsx"



function AppSS() {



    

  return (
    <Suspense fallback={<Loading />}>
    <Canvas camera={{fov: 75, near: 0.1, far: 1000, position: [0, 30, 30 ]}}>

        <OrbitControls passive={true}/>
        <MainContainer />
       
      </Canvas>
      </Suspense>
 )
}

export default AppSS