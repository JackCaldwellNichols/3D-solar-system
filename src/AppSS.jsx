import { OrbitControls, Html, useProgress } from "@react-three/drei"
import MainContainer from "./MainContainer.jsx"
import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect } from "react"
import { useState } from "react"
import Loading from "./components/Loading.jsx"
import Topbar from "./components/Topbar.jsx"
import Menu from "./components/Menu.jsx"



function AppSS() {

  const [menuOpen, setMenuOpen] = useState(false)

    

  return (
    <Suspense fallback={<Loading />}>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Canvas camera={{fov: 75, near: 0.1, far: 1000, position: [0, 30, 30 ]}}>

        <OrbitControls passive={true}/>
        <MainContainer />
       
      </Canvas>
      </Suspense>
 )
}

export default AppSS