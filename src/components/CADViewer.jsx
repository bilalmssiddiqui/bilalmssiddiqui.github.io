import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function Model({ path }) {
  try {
    const { scene } = useGLTF(path);
    return <primitive object={scene} dispose={null} />;
  } catch (error) {
    console.warn("Model failed to load:", error);
    return (
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="gray" />
      </mesh>
    );
  }
}

export default function CADViewer({ modelPath }) {
  if (!modelPath) {
    return (
      <div className="bg-gray-900 text-gray-400 text-center py-20 rounded-xl border border-gray-700">
        No 3D model available.
      </div>
    );
  }

  return (
    <div className="w-full h-96 bg-gray-900 rounded-xl overflow-hidden shadow-lg">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Suspense
          fallback={
            <mesh>
              <boxGeometry />
              <meshStandardMaterial color="gray" />
            </mesh>
          }
        >
          <Model path={modelPath} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enableZoom enablePan />
      </Canvas>
    </div>
  );
}
