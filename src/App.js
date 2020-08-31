import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { Canvas, useFrame } from 'react-three-fiber'

import Cubes from "./components/Cubes";
import Lights from "./components/Lights";
import Environment from "./components/Environment";

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [2.5, 1.5, 1.5] : [3, 3, 3]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function App() {
  return (
    <div className="App">
      <Canvas>
        <Cubes />
        <Lights />
        <Environment />
      </Canvas>
    </div>

  );
}

export default App;
