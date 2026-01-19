
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ShoeModel from "./productCard";







export default function Product3DPreview() {
  return (
    <div
      style={{
        width: "250px",
        height: "200px",
        borderRadius: "12px",
        overflow: "hidden",
        background: "white",
      }}
    ><Canvas camera={{ position: [2,2,2], fov: 45 }}>
  <ambientLight intensity={1.2} />
  <directionalLight position={[5, 5, 5]} intensity={10} />

  {/* 🔥 BOX ki jagah SHOE */}
  <ShoeModel />

{/* </Canvas> */}


        {/* Optional rotate */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}