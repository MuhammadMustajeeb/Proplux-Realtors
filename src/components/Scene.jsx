import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stars } from '@react-three/drei';

function HouseModel() {
  const gltf = useGLTF('/house/scene.gltf');
  return <primitive object={gltf.scene} scale={0.1} position={[0, 1, 0]} />;
}

const Scene = () => (
  <Canvas camera={{ position: [0, 1, 5], fov: 50 }} className="w-full h-full">
    <ambientLight intensity={0.6} />
    <directionalLight position={[3, 2, 5]} intensity={1.2} />
    <Stars radius={100} depth={50} count={4000} factor={4} saturation={0} fade />
    <HouseModel />
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
  </Canvas>
);
export default Scene;