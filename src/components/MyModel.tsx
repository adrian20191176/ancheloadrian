import { useGLTF } from "@react-three/drei";

export default function MyModel() {
    const { scene } = useGLTF("/models/adrian.glb");

    return <primitive object={scene} scale={1.5} />;
}