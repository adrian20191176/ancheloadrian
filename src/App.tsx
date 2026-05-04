import './App.css'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MyModel from './components/MyModel';

function App() {
  return (
    <main style={{ minHeight: "100vh", background: "#0f0f12", color: "white" }}>
      <section style={{ height: "100vh" }}>
        <Canvas camera={{ position: [0, 1, 4], fov: 45 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[2, 2, 2]} intensity={2} />

          <MyModel />

          <OrbitControls />
        </Canvas>
      </section>
    </main>
  )
}

export default App
