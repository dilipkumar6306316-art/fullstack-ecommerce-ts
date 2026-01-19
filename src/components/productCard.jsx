import { useGLTF } from "@react-three/drei";

function ShoeModel() {
  const { scene } = useGLTF("/models/shoe.glb");

  return (
    <primitive
      object={scene}
      scale={12}
      rotation={[-1, 0, 0]}
      position={[-2.5, 0, 0]}
    />
  );
}
export default ShoeModel;